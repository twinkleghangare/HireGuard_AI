# 🛡️ HireGuard AI — Intelligent Recruitment & Candidate Verification

[![React](https://img.shields.io/badge/Frontend-React%2019-blue?style=flat-square\&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square\&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=flat-square\&logo=mongodb)](https://www.mongodb.com/)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI-orange?style=flat-square\&logo=openai)](https://openai.com/)

**HireGuard AI** is an AI-powered recruitment and candidate verification system developed to help recruiters analyze resumes, verify candidate information, detect possible fraud, and conduct AI-based technical interviews.

The system uses multiple specialized AI agents to analyze different aspects of a candidate and combines the results to generate a **candidate integrity and risk assessment**.

<img width="1920" height="1080" alt="HireGuard AI Dashboard" src="https://github.com/user-attachments/assets/878ee9a9-8c16-4a2f-9fdc-1c6c780d451a" />
https://www.image2url.com/r2/default/videos/1789186857723-bd3d0b2f-b9c6-4fd8-9c17-2c0f243bf834.mp4

---

## 🚀 Features

### 🤖 Multi-Agent Verification

HireGuard AI uses multiple specialized agents for candidate verification:

* **Resume Intelligence** — analyzes and extracts information from resumes.
* **Employment Verification** — analyzes employment history and career progression.
* **Technical Intelligence** — evaluates technical skills and supporting evidence.
* **Risk Assessment** — combines verification results to generate the final risk assessment.

### 🎙️ AI-Based Technical Interview

The system provides an AI-based technical interview experience where questions can be generated according to the candidate's skills and responses.

### 📄 Resume Analysis

Recruiters can upload a PDF resume and extract important candidate information such as:

* Skills
* Education
* Work experience
* Projects
* Career timeline
* Technical claims

### 🛡️ Fraud & Risk Detection

The system analyzes candidate information and identifies possible issues such as:

* Inconsistent information
* Suspicious career timelines
* Skill mismatches
* Employment-related red flags
* Other potential verification risks

### 📊 Candidate Analytics

The dashboard provides candidate-related insights including:

* Integrity score
* Risk score
* Verification results
* Candidate performance
* Interview performance
* Failure trends

### ✨ Modern User Interface

The frontend uses **React, Tailwind CSS, and Framer Motion** to provide a responsive and interactive user interface.

---

## 🧠 How HireGuard AI Works

The overall workflow of the system is:

```text
Candidate Resume
       ↓
   Resume Parser
       ↓
Structured Candidate Data
       ↓
    AI Agents
       ↓
 ┌─────────────────────────┐
 │ Resume Intelligence     │
 │ Employment Verification │
 │ Technical Intelligence  │
 │ Risk Assessment         │
 └─────────────────────────┘
       ↓
   Agent Results
       ↓
Risk & Integrity Assessment
       ↓
Recruiter Dashboard
```

---

## 🏗️ Agentic Intelligence Architecture

The core of HireGuard AI is the **Agent Orchestrator**.

The orchestrator manages the different AI agents and coordinates their outputs to generate a final candidate assessment.

| Agent                       | Responsibility                                                                      |
| --------------------------- | ----------------------------------------------------------------------------------- |
| **Resume Intelligence**     | Extracts candidate information and performs initial resume analysis.                |
| **Employment Verification** | Analyzes employment history and career progression.                                 |
| **Technical Intelligence**  | Evaluates technical skills and supporting technical evidence.                       |
| **Risk Assessment**         | Combines the agent results and generates the overall risk and integrity assessment. |

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

### AI & Data Processing

* OpenAI API
* Agent-based AI architecture
* Resume parsing
* PDF processing
* NLP-based analysis
* GitHub data analysis

### Authentication & Security

* JWT Authentication
* Secure password handling
* Protected API routes

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

Make sure the following are installed before running the project:

* **Node.js v18 or above**
* **npm**
* **Git**
* **MongoDB Atlas or MongoDB Local**
* **OpenAI API access**

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
npm run dev
```

Configure the required backend settings locally before starting the server.

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will start using the Vite development server.

> **Security:** Keep API keys, database credentials, authentication secrets, and other private configuration files local. Do not commit `.env` files to GitHub.

---

## 🎯 Project Objective

The main objective of **HireGuard AI** is to make the candidate screening and verification process faster and more efficient.

The system helps recruiters:

1. Upload candidate resumes.
2. Extract important candidate information.
3. Analyze candidate data using multiple AI agents.
4. Identify inconsistencies and possible risks.
5. Evaluate technical skills.
6. Conduct AI-based technical interviews.
7. View candidate results through a centralized dashboard.

---

## 💡 Why HireGuard AI?

Traditional recruitment processes can require recruiters to manually review large numbers of resumes and verify candidate information.

HireGuard AI provides an automated approach by combining:

* **AI-based resume analysis**
* **Multi-agent verification**
* **Technical skill analysis**
* **Fraud and risk detection**
* **AI-based interviews**
* **Candidate analytics**

This helps recruiters make more informed decisions during the initial screening process.

---

## 🔮 Future Scope

The project can be further improved with:

* Candidate Trust Score
* Candidate ranking and percentile
* Genuine vs. suspicious candidate comparison
* Skill-gap analysis
* AI mock interview chatbot
* Advanced employment verification
* Improved fraud detection models
* Automated candidate recommendations
* More detailed candidate reports

---

## 👥 Team

**HireGuard AI** was developed as a team project focused on solving a real-world recruitment problem using **Artificial Intelligence, Machine Learning, NLP, and Full-Stack Development**.

---

## 📜 License

This project is distributed under the **ISC License**.

See the `LICENSE` file for more information.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**Built with AI, Machine Learning, and Full-Stack Development by the HireGuard AI Team.**
