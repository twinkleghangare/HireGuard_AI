# 🛡️ HireGuard AI — Intelligent Recruitment & Candidate Verification

[![React](https://img.shields.io/badge/Frontend-React%2019-blue?style=flat-square\&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square\&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=flat-square\&logo=mongodb)](https://www.mongodb.com/)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI-orange?style=flat-square\&logo=openai)](https://openai.com/)

**HireGuard AI** is an AI-powered recruitment and candidate verification system that helps recruiters analyze resumes, verify candidate information, identify possible fraud, and conduct AI-based technical interviews.

The system uses multiple specialized AI agents to analyze different aspects of a candidate and combines their results to generate an overall **candidate integrity and risk assessment**.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/878ee9a9-8c16-4a2f-9fdc-1c6c780d451a" />

---

## 🚀 Features

### 🤖 Multi-Agent Verification

HireGuard AI uses different AI agents for different verification tasks:

* Resume Intelligence
* Employment Verification
* Technical Intelligence
* Risk Assessment

Each agent focuses on a specific part of the candidate verification process.

### 🎙️ AI-Based Technical Interview

The system can conduct AI-based technical interviews and generate questions according to the candidate's skills and responses.

### 📄 Resume Analysis

Recruiters can upload a PDF resume and the system extracts important information such as:

* Skills
* Education
* Work experience
* Projects
* Career timeline
* Technical claims

### 🛡️ Fraud & Risk Detection

The system analyzes the extracted information to identify:

* Inconsistent information
* Suspicious career timelines
* Possible skill mismatches
* Employment-related red flags
* Other potential verification risks

### 📊 Analytics Dashboard

The dashboard provides useful candidate insights such as:

* Integrity score
* Risk score
* Candidate performance
* Failure trends
* Verification results
* Interview performance

### ✨ Modern UI

The frontend is designed using **React, Tailwind CSS, and Framer Motion** with a responsive and modern interface.

---

## 🧠 How HireGuard AI Works

The basic workflow of the system is:

```text
Candidate Resume
       ↓
   Resume Parser
       ↓
Structured Candidate Data
       ↓
 ┌─────────────────────────┐
 │     AI Agent System     │
 ├─────────────────────────┤
 │ Resume Intelligence     │
 │ Employment Verification │
 │ Technical Intelligence  │
 │ Risk Assessment         │
 └─────────────────────────┘
       ↓
Agent Results
       ↓
Final Risk & Integrity Score
       ↓
Recruiter Dashboard
```

---

## 🏗️ Agentic Intelligence Architecture

The main component of HireGuard AI is the **Agent Orchestrator**.

It coordinates multiple specialized agents and combines their results.

| Agent                       | Main Responsibility                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| **Resume Intelligence**     | Extracts candidate information and performs initial resume analysis.                          |
| **Employment Verification** | Analyzes employment history and career progression.                                           |
| **Technical Intelligence**  | Evaluates technical skills and checks technical evidence such as GitHub activity.             |
| **Risk Assessment**         | Combines the results from different agents and generates the final risk/integrity assessment. |

---

## 🛠️ Technology Stack

### Frontend

* React 19
* Vite
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB
* Mongoose

### AI

* OpenAI API
* Agent-based AI architecture

### Other Technologies

* PDF parsing
* JWT authentication
* GitHub data analysis
* Resume processing
* Candidate analytics

---

## 📂 Project Structure

```text
HireGuard-AI/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard
│   │   │   ├── Analytics
│   │   │   ├── Interview
│   │   │   └── Settings
│   │   │
│   │   └── components/
│   │       └── Shared UI Components
│   │
│   └── ...
│
├── backend/
│   ├── agents/
│   │   └── AI Verification Agents
│   │
│   ├── orchestrator/
│   │   └── Agent Coordination Logic
│   │
│   ├── models/
│   │   └── MongoDB/Mongoose Models
│   │
│   ├── routes/
│   │   └── API Routes
│   │
│   └── ...
│
└── README.md
```

---

## ⚙️ Requirements

Before running the project, make sure you have:

* **Node.js v18 or above**
* **MongoDB Atlas or MongoDB Local**
* **OpenAI API Key**
* Git
* npm

---

## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HarisHamza2445/HireGuard-AI.git
cd HireGuard-AI
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add the required environment variables.

Then start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder with the required API configuration.

Then run:

```bash
npm run dev
```

The frontend will normally be available through the Vite development server.

---

## 🔐 Environment Variables

### Backend

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
```

### Frontend

Example:

```env
VITE_API_BASE_URL=http://localhost:5000
```

> Do not upload your `.env` files or API keys to GitHub.

---

## 🎯 Project Objective

The main objective of **HireGuard AI** is to reduce the manual effort involved in candidate screening and verification.

Instead of checking every candidate manually, recruiters can use the system to:

1. Upload a candidate's resume.
2. Extract important candidate information.
3. Run multiple verification agents.
4. Identify inconsistencies and possible risks.
5. Analyze technical skills.
6. Conduct an AI-based interview.
7. View the final candidate assessment through the dashboard.

---

## 🔮 Future Scope

Some planned improvements include:

* Candidate Trust Score
* Candidate ranking and percentile
* Genuine vs. suspicious candidate comparison
* Skill-gap analysis
* AI mock interview chatbot
* More advanced employment verification
* Improved fraud detection models
* Automated candidate recommendations

---

## 👥 Team

**HireGuard AI** was developed as a team project with the goal of applying **AI, Machine Learning, NLP, and full-stack development** to a real-world recruitment problem.

---

## 📜 License

This project is distributed under the **ISC License**.

See the `LICENSE` file for more information.

---

## ⭐ Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**Built with AI, Machine Learning, and Full-Stack Development by the HireGuard AI Team.**
