import React, { useState } from 'react';
import { generateCoverLetter } from '../services/geminiService';
import { FormData, Tone, CoverLetterTemplate } from '../types';
import TemplateGallery from './TemplateGallery';
import Modal from './Modal';

const LetterForm: React.FC = () => {
  const initialFormData: FormData = {
    jobDescription: '',
    userName: '',
    contactInfo: '',
    companyName: '',
    resumeHighlights: '',
    tone: 'Professional',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [generatedLetter, setGeneratedLetter] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value as Tone }));
  };
  
  const handleSelectTemplate = (template: CoverLetterTemplate) => {
    setFormData(prev => ({
      ...prev,
      jobDescription: template.jobDescription,
      companyName: template.companyName,
      resumeHighlights: template.resumeHighlights,
      tone: template.tone,
    }));
    setIsGalleryOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedLetter('');
    setError('');
    setIsCopied(false);

    try {
      const letter = await generateCoverLetter(formData);
      setGeneratedLetter(letter);
    } catch (err: any) {
      const errorMessage = err.message || "An unexpected error occurred. Please check your network connection and API key.";
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    if (generatedLetter) {
        navigator.clipboard.writeText(generatedLetter);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }
  };
  
  const formInputClass = "w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors";
  const formTextareaClass = `${formInputClass} resize-y`;


  return (
    <div className="w-full max-w-4xl bg-gray-900 bg-opacity-60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-purple-800">
      <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Create Your Cover Letter</h2>
          <p className="text-gray-400 mt-2">Fill in the details below or browse our templates to get started.</p>
      </div>

      <div className="text-center mb-6">
        <button
          type="button"
          onClick={() => setIsGalleryOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
        >
          Browse Templates
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={formInputClass}
          />
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            placeholder="Your Contact Info (Email/Phone)"
            required
            className={formInputClass}
          />
        </div>

        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className={formInputClass}
        />

        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeholder="Paste the Job Description here..."
          required
          className={formTextareaClass}
          rows={6}
        />
        <textarea
          name="resumeHighlights"
          value={formData.resumeHighlights}
          onChange={handleChange}
          placeholder="Your Key Résumé Highlights / Experience..."
          required
          className={formTextareaClass}
          rows={6}
        />
        
        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-300 mb-2">
            Select Tone
          </label>
          <select
            id="tone"
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className={formInputClass}
          >
            <option>Professional</option>
            <option>Enthusiastic</option>
            <option>Formal</option>
            <option>Confident</option>
            <option>Friendly</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {isLoading ? 'Generating...' : 'Generate Cover Letter'}
        </button>
      </form>
      
      <Modal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} title="Cover Letter Template Gallery" size="large">
        <TemplateGallery onSelectTemplate={handleSelectTemplate} />
      </Modal>

      {error && <div className="mt-6 p-4 bg-red-900 border border-red-700 text-red-200 rounded-lg">{error}</div>}

      {generatedLetter && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Your Generated Cover Letter</h2>
          <div className="relative bg-gray-800 p-6 rounded-lg border border-purple-700 whitespace-pre-wrap font-mono text-gray-300 text-sm">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-purple-700 hover:bg-purple-600 text-white text-xs font-bold py-1 px-2 rounded"
            >
              {isCopied ? 'Copied!' : 'Copy'}
            </button>
            {generatedLetter}
          </div>
        </div>
      )}
    </div>
  );
};

export default LetterForm;
