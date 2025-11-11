
import { GoogleGenAI } from "@google/genai";
// Fix: Corrected import path for FormData type.
import { FormData } from '../types.ts';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This check is for development; the environment is expected to have the API_KEY.
  console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateCoverLetter = async (formData: FormData): Promise<string> => {
  const { jobDescription, userName, contactInfo, companyName, resumeHighlights, tone } = formData;

  const prompt = `
    Generate a professional and personalized cover letter based on the following information.

    **Instructions:**
    1. The cover letter must be tailored specifically to the provided Job Description.
    2. The tone of the letter must be ${tone}.
    3. The letter should be structured with a clear introduction, body, and conclusion.
    4. Seamlessly integrate the key skills and experiences from the Résumé Highlights into the body of the letter, connecting them directly to the requirements in the Job Description.
    5. The letter should be addressed to the hiring manager at ${companyName}. If a name isn't available, use a generic but professional salutation (e.g., "Dear Hiring Manager,").
    6. Conclude with a strong call to action, expressing enthusiasm for the opportunity to discuss qualifications further.
    7. Ensure the final output is only the cover letter text, without any introductory phrases like "Here is the cover letter:" or any other surrounding text.

    **My Information:**
    - **My Name:** ${userName}
    - **My Contact Info:** ${contactInfo}

    **Target Company:**
    - **Company Name:** ${companyName}

    **Job Description:**
    ---
    ${jobDescription}
    ---

    **My Key Résumé Highlights/Experience:**
    ---
    ${resumeHighlights}
    ---

    Now, please generate the cover letter.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return "There was an error generating the cover letter. Please check your API key and try again.";
  }
};
