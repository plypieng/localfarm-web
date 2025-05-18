'use client';

import { useState } from 'react';

type SuggestedPrompt = {
  id: string;
  text: string;
  category: string;
};

export function ChatSidebar() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Mock data for demonstration
  const suggestedPrompts: SuggestedPrompt[] = [
    {
      id: '1',
      text: 'What crops are best suited for Niigata's climate this season?',
      category: 'planning',
    },
    {
      id: '2',
      text: 'Help me develop a 3-year crop rotation plan for my rice fields.',
      category: 'planning',
    },
    {
      id: '3',
      text: 'How can I optimize my irrigation system for water conservation?',
      category: 'resources',
    },
    {
      id: '4',
      text: 'Generate a profitability analysis for switching 2 hectares to organic production.',
      category: 'business',
    },
    {
      id: '5',
      text: 'What preventative measures should I take for rice blast disease this season?',
      category: 'problems',
    },
    {
      id: '6',
      text: 'Help me interpret my soil analysis report and recommend amendments.',
      category: 'analysis',
    },
    {
      id: '7',
      text: 'Create a fertilizer application schedule optimized for my crop plan.',
      category: 'planning',
    },
    {
      id: '8',
      text: 'What's the ROI on installing solar panels on my equipment shed?',
      category: 'business',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Suggestions' },
    { id: 'planning', label: 'Farm Planning' },
    { id: 'business', label: 'Business & Finance' },
    { id: 'problems', label: 'Problem Solving' },
    { id: 'resources', label: 'Resource Management' },
    { id: 'analysis', label: 'Data Analysis' },
  ];

  const filteredPrompts = activeCategory === 'all' 
    ? suggestedPrompts 
    : suggestedPrompts.filter(prompt => prompt.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Conversation History</h2>
        <div className="space-y-2">
          <div className="p-2 rounded-lg bg-primary-50 text-primary-700 text-sm border border-primary-100">
            <div className="font-medium">Current Conversation</div>
            <div className="text-xs text-gray-500 mt-1">Started May 18, 2025</div>
          </div>
          
          <div className="p-2 rounded-lg hover:bg-gray-50 text-sm border border-gray-100">
            <div className="font-medium">Crop Rotation Planning</div>
            <div className="text-xs text-gray-500 mt-1">May 15, 2025</div>
          </div>
          
          <div className="p-2 rounded-lg hover:bg-gray-50 text-sm border border-gray-100">
            <div className="font-medium">Water Management Strategy</div>
            <div className="text-xs text-gray-500 mt-1">May 10, 2025</div>
          </div>
          
          <div className="p-2 rounded-lg hover:bg-gray-50 text-sm border border-gray-100">
            <div className="font-medium">Market Analysis</div>
            <div className="text-xs text-gray-500 mt-1">May 5, 2025</div>
          </div>
        </div>
        
        <button className="w-full mt-3 text-sm text-primary-600 hover:underline">
          View All Conversations
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Suggested Prompts</h2>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-2 py-1 text-xs rounded-lg ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="space-y-2">
          {filteredPrompts.map((prompt) => (
            <div 
              key={prompt.id}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm cursor-pointer"
            >
              {prompt.text}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Assistant Capabilities</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Strategic crop planning and rotation optimization</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Detailed analysis of soil reports and recommendations</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Climate-adaptive farming strategies for Niigata</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Financial projections and business planning</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Resource optimization (water, labor, inputs)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Pest and disease management guidance</span>
          </li>
        </ul>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            This assistant is trained on agricultural data specific to Niigata Prefecture and is updated with information as of May 2025.
          </div>
        </div>
      </div>
    </div>
  );
}
