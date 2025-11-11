# ✨ AI Cover Letter Generator ✨

<div align="center">

**Instantly craft professional, personalized cover letters tailored to any job description using the power of Google's Gemini AI. Stand out, save time, and land your dream job.**

</div>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-purple.svg"/>
  <img alt="React" src="https://img.shields.io/badge/React-19-blue.svg?logo=react"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-blue.svg?logo=typescript"/>
  <img alt="Gemini" src="https://img.shields.io/badge/AI-Gemini-lightgrey.svg?logo=google"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Styling-TailwindCSS-cyan.svg?logo=tailwindcss"/>
</p>

<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-key-features">Features</a> •
  <a href="#-built-with">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

> **Note:** A live demo and visual showcase of the application are coming soon!

## 🤔 About The Project

The **AI Cover Letter Generator** is a modern web application designed to eliminate the friction in the job application process. It leverages Google's powerful Gemini model to analyze job descriptions and user-provided résumé details, generating a unique, compelling, and highly relevant cover letter in seconds.

Whether you're a new graduate, a seasoned professional, or changing careers, this tool provides the leverage you need to make a memorable first impression.

## ✨ Key Features

-   **🤖 AI-Powered Generation:** Utilizes Google Gemini for intelligent, context-aware content creation that is tailored to each specific job.
-   **📚 Scalable Template Gallery:** Browse a large, professionally curated library of templates for various roles and industries. The gallery is fully searchable and filterable, allowing you to find the perfect starting point in seconds.
-   **🎨 Customizable Tone:** Select from multiple tones (`Professional`, `Enthusiastic`, `Formal`, etc.) to perfectly match the company's culture and the role's requirements.
-   **📄 Job-Specific Tailoring:** Analyzes any job description to ensure your cover letter hits all the right keywords and requirements, helping you pass through Applicant Tracking Systems (ATS).
-   **✨ Modern & Immersive UI:** A beautiful, fully responsive interface with a calming cosmic theme provides a comfortable and intuitive user experience.
-   **📋 Instant Copy-to-Clipboard:** Grab your generated letter with a single click.
-   **🔒 Privacy First:** Your data is processed in real-time and is never stored on our servers.

## 🛠️ Built With

This project is built with a modern, scalable, and efficient technology stack:

-   **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that enhances developer experience and code quality.
-   **[Google Gemini API](https://ai.google.dev/):** The engine for all AI-powered text generation.
-   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.

## 📂 Project Structure

A brief overview of the key directories in this project:

-   `public/`: Contains static assets, including the `favicon.svg` and the scalable `templates/` icon library.
-   `services/`: Handles all external API communication, specifically the `geminiService.ts` which interfaces with the Gemini API.
-   `components/`: Contains all reusable React components like `Layout.tsx`, `Modal.tsx`, and the main `LetterForm.tsx`.
-   `utils/`: Includes utility files and data sources, such as the `SeoArticle.tsx` and the extensive `templates.ts` data file.
-   `types.ts`: Defines shared TypeScript types and interfaces used across the application for robust data modeling.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/) (v18 or later is recommended)
-   `npm`, `pnpm`, or `yarn` package manager

### Installation & Setup

1.  **Get a Gemini API Key**
    You can get one for free from **[Google AI Studio](https://aistudio.google.com/)**.

2.  **Clone the Repository**
    ```sh
    git clone https://github.com/hsinidev/ai-cover-letter-generator.git
    cd ai-cover-letter-generator
    ```

3.  **Install Dependencies**
    ```sh
    npm install
    ```

4.  **Set Up Environment Variables**
    Create a file named `.env` in the **root** of the project and add your Gemini API key:
    ```env
    # This key is loaded by the service and is required for the app to function.
    API_KEY=your_gemini_api_key_here
    ```

5.  **Run the Development Server**
    ```sh
    npm start
    ```
    The application will be available at `http://localhost:3000` (or the next available port).

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License.

## 📧 Contact

HSINI MOHAMED - [doodax.com](https://doodax.com) - hsini.web@gmail.com

Project Link: [https://github.com/hsinidev/ai-cover-letter-generator](https://github.com/hsinidev/ai-cover-letter-generator)