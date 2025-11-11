import React, { useState, useMemo } from 'react';
import { templates } from '../utils/templates';
import { CoverLetterTemplate } from '../types';

interface TemplateGalleryProps {
  onSelectTemplate: (template: CoverLetterTemplate) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onSelectTemplate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(templates.map(t => t.category)))];

  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
      const matchesSearch = 
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      <div className="sticky top-0 bg-gray-900 py-4 z-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full flex-grow bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white font-semibold'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-gray-800 border border-purple-800 p-4 rounded-lg flex flex-col justify-between hover:border-purple-600 transition-all duration-300"
            >
              <div>
                <span className="text-xs bg-purple-800 text-purple-200 px-2 py-1 rounded-full">{template.category}</span>
                <h4 className="font-bold text-white mt-2">{template.title}</h4>
                <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                  {template.jobDescription}
                </p>
              </div>
              <button
                onClick={() => onSelectTemplate(template)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all mt-4"
              >
                Use This Template
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">No templates found.</p>
        )}
      </div>
    </div>
  );
};

export default TemplateGallery;
