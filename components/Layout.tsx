import React, { useState, ReactNode } from 'react';
import Modal from './Modal';
import { SeoArticle } from '../utils/SeoArticle';

interface LayoutProps {
  children: ReactNode;
}

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const modalLinks: { name: string; type: ModalType }[] = [
    { name: 'About', type: 'about' },
    { name: 'Guide', type: 'guide' },
    { name: 'Contact', type: 'contact' },
    { name: 'Privacy Policy', type: 'privacy' },
    { name: 'Terms of Service', type: 'terms' },
    { name: 'DMCA', type: 'dmca' },
  ];

  return (
    <div className="cosmic-background min-h-screen text-white flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col min-h-screen">
        <header className="w-full py-4">
          <nav className="flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              AI Cover Letter Generator
            </h1>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-end">
              {modalLinks.map((link) => (
                <li key={link.type}>
                  <button
                    onClick={() => openModal(link.type)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-grow flex items-center justify-center py-10">
          {children}
        </main>

        <footer className="w-full text-center py-6 mt-auto">
          <p className="text-gray-400 text-sm">
            Contact: <a href="mailto:hsini.web@gmail.com" className="hover:text-white">hsini.web@gmail.com</a> | <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">doodax.com</a>
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/hsinidev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 font-semibold hover:text-amber-200 transition-opacity"
            >
              Powered by HSINI MOHAMED
            </a>
          </p>
        </footer>
      </div>

      <Modal isOpen={activeModal === 'about'} onClose={closeModal} title="About This Tool">
        <div className="space-y-4 text-gray-300">
          <p>This AI Cover Letter Generator is a powerful tool designed to help job seekers create compelling, professional, and personalized cover letters in minutes.</p>
          <p>By leveraging the advanced capabilities of Google's Gemini AI, this application takes a detailed job description and your key skills to craft a letter that is not only well-written but also highly relevant to the position you're applying for. Our goal is to help you stand out from the competition and land your dream job.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'guide'} onClose={closeModal} title="The Ultimate Guide to AI-Powered Cover Letters">
        <SeoArticle />
      </Modal>

      <Modal isOpen={activeModal === 'contact'} onClose={closeModal} title="Contact Us">
        <div className="space-y-4 text-gray-300">
            <p>For inquiries, support, or feedback, please reach out to us via email.</p>
            <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:underline">hsini.web@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">doodax.com</a></p>
        </div>
      </Modal>
      
      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="space-y-4 text-gray-300">
          <p>We respect your privacy. The information you enter (job description, personal details) is used solely to generate your cover letter via the Gemini API. We do not store, save, or share any of your personal data. All processing is done in real-time and your information is discarded after the generation process is complete.</p>
        </div>
      </Modal>
      
      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
        <div className="space-y-4 text-gray-300">
          <p>By using this service, you agree to use it for its intended purpose of creating cover letters for job applications. You are responsible for the content you input and the final letter you use. The generated content should be reviewed and edited to ensure accuracy and authenticity. This service is provided as-is without any warranties.</p>
        </div>
      </Modal>
      
      <Modal isOpen={activeModal === 'dmca'} onClose={closeModal} title="DMCA Policy">
        <div className="space-y-4 text-gray-300">
          <p>This tool generates content based on user input. We do not host any user-generated content. If you believe any output infringes on your copyright, please understand that the content is generated dynamically and is not stored on our servers. Please contact us with any concerns at hsini.web@gmail.com.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;