import OpenAI from "openai";
import Candidate from "../models/Candidate.js";

export const chatAgent = async (userMessage, candidateId, userId) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const isPlaceholderKey = !apiKey || apiKey.includes("your_") || apiKey.trim() === "";

    let contextData = "";
    let candidate = null;

    if (candidateId) {
        candidate = await Candidate.findOne({ _id: candidateId, ownerId: userId });
        if (!candidate) {
            return "Error: Candidate not found or you don't have permission to view them.";
        }
    }

    if (isPlaceholderKey) {
        if (candidate) {
            return `### Intelligence Briefing for ${candidate.structuredData?.name || "Candidate"}\n\n` +
                   `- **Integrity Score:** ${candidate.riskData?.confidenceScore || 0}/100 (${candidate.riskData?.level || "Low"} Risk)\n` +
                   `- **Experience:** ${candidate.structuredData?.total_experience_years || 0} years\n` +
                   `- **Skills:** ${(candidate.structuredData?.skills || []).join(", ")}\n` +
                   `- **GitHub:** ${candidate.structuredData?.github || "Not specified"}\n\n` +
                   `**Forensic Note:** ${candidate.fraudAnalysis?.reasoning || "Standard candidate profile validated."}`;
        }
        return "I am the HireGuard AI Talent Intelligence Assistant. You can configure your `OPENAI_API_KEY` in `backend/.env` to enable live LLM conversational queries across all candidate datasets.";
    }

    let systemPrompt = `You are the "HireGuard AI Talent Intelligence Assistant", an expert AI recruiter and forensic risk analyst.
Your job is to answer the recruiter's questions about candidates, classify skills/domains, explain risk scores, and suggest next actions.
Keep answers concise, professional, and data-driven. Use markdown formatting freely for readability.
If a user asks about "authenticity score" or similar, use the confidenceScore from the riskData. 100 - fraudProbability = Score.`;

    if (candidateId && candidate) {
        contextData = `
### Current Candidate Context ###
Name: ${candidate.structuredData?.name || 'Unknown'}
Skills: ${JSON.stringify(candidate.structuredData?.skills || [])}
Experience: ${candidate.structuredData?.total_experience_years || 0} years
Companies: ${JSON.stringify(candidate.structuredData?.companies || [])}
GitHub: ${candidate.structuredData?.github || 'None'}
Risk Level: ${candidate.riskData?.level || 'Unknown'}
Fraud Probability: ${candidate.riskData?.fraudProbability || 0}%
AI Confidence: ${candidate.riskData?.confidenceScore || 0}/100
Risk Reasoning: ${candidate.fraudAnalysis?.reasoning || 'N/A'}
Risk Factors: ${JSON.stringify(candidate.fraudAnalysis?.contributingFactors || [])}
`;
        systemPrompt += "\n\nYou are currently viewing a specific candidate's profile. Use the following context to answer the user's question:\n" + contextData;
    } else {
        const allCandidates = await Candidate.find({ ownerId: userId }).select('filename structuredData.name structuredData.skills structuredData.total_experience_years riskData.level riskData.confidenceScore');

        if (!allCandidates || allCandidates.length === 0) {
            return "You haven't uploaded any candidates yet. Please upload some resumes first.";
        }

        const summarizedCandidates = allCandidates.map(c => ({
            id: c._id,
            name: c.structuredData?.name || c.filename,
            skills: Array.isArray(c.structuredData?.skills) ? c.structuredData.skills.flat() : c.structuredData?.skills,
            experience: c.structuredData?.total_experience_years,
            riskLevel: c.riskData?.level,
            authenticityScore: c.riskData?.confidenceScore
        }));

        contextData = `
### Your Candidate Database ###
${JSON.stringify(summarizedCandidates, null, 2)}
`;
        systemPrompt += "\n\nYou are in 'Global Database Query' mode. Search through the candidates to answer the recruiter:\n" + contextData;
    }

    try {
        const openai = new OpenAI({
            apiKey: apiKey,
            baseURL: "https://openrouter.ai/api/v1",
        });

        const response = await openai.chat.completions.create({
            model: process.env.AI_MODEL || "google/gemma-2-9b-it:free",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage },
            ],
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Chat Agent Error:", error.message);
        return "I encountered an issue connecting to the AI provider. Please verify your `OPENAI_API_KEY` in `backend/.env`.";
    }
};
