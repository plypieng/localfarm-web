'use client';

import { useState } from 'react';

type CropRecommendation = {
  id: string;
  crop: string;
  confidence: number;
  reasoning: string;
  plantingWindow: string;
  potentialYield: string;
  icon: string;
};

export function AICropRecommendations() {
  const [selectedSeason, setSelectedSeason] = useState('summer');

  // Mock data for demonstration
  const recommendations: Record<string, CropRecommendation[]> = {
    spring: [
      {
        id: '1',
        crop: 'Early Rice (Koshihikari)',
        confidence: 92,
        reasoning: 'Optimal soil conditions and water availability. Historical success in your north field.',
        plantingWindow: 'Early April to Late May',
        potentialYield: '5.2 tons/hectare',
        icon: '🌾',
      },
      {
        id: '2',
        crop: 'Spinach',
        confidence: 88,
        reasoning: 'Cool weather predicted through May is perfect for spinach growth.',
        plantingWindow: 'March to April',
        potentialYield: '12-15 kg/sq meter',
        icon: '🥬',
      },
      {
        id: '3',
        crop: 'Spring Onions',
        confidence: 85,
        reasoning: 'Good companion to your planned rice cultivation, utilizes field edges efficiently.',
        plantingWindow: 'March to April',
        potentialYield: '2-3 kg/sq meter',
        icon: '🧅',
      },
    ],
    summer: [
      {
        id: '4',
        crop: 'Premium Rice (Koshihikari)',
        confidence: 95,
        reasoning: 'Optimal growing conditions in Niigata, with your field soil composition ideally suited.',
        plantingWindow: 'Late May to Early June',
        potentialYield: '5.8 tons/hectare',
        icon: '🌾',
      },
      {
        id: '5',
        crop: 'Tomatoes (Momotaro)',
        confidence: 87,
        reasoning: 'High market demand and ideal growing conditions in your south field.',
        plantingWindow: 'May to June',
        potentialYield: '7-9 kg/plant',
        icon: '🍅',
      },
      {
        id: '6',
        crop: 'Edamame',
        confidence: 91,
        reasoning: 'Excellent soil nitrogen levels in your east plot, predicted weather patterns optimal.',
        plantingWindow: 'June to July',
        potentialYield: '2.5-3 tons/hectare',
        icon: '🫛',
      },
    ],
    fall: [
      {
        id: '7',
        crop: 'Sweet Potatoes',
        confidence: 90,
        reasoning: 'Soil analysis shows ideal conditions after rice harvest, good rotation crop.',
        plantingWindow: 'Late July to August',
        potentialYield: '25-30 tons/hectare',
        icon: '🍠',
      },
      {
        id: '8',
        crop: 'Daikon Radish',
        confidence: 93,
        reasoning: 'Perfect for fall growing season in Niigata, high market value currently.',
        plantingWindow: 'August to September',
        potentialYield: '40-60 tons/hectare',
        icon: '🥕',
      },
      {
        id: '9',
        crop: 'Napa Cabbage',
        confidence: 88,
        reasoning: 'Predicted cooler fall temperatures ideal for cabbage development.',
        plantingWindow: 'August to September',
        potentialYield: '50-70 tons/hectare',
        icon: '🥬',
      },
    ],
    winter: [
      {
        id: '10',
        crop: 'Winter Greens (Komatsuna)',
        confidence: 86,
        reasoning: 'Cold-resistant varieties well-suited to Niigata winter in protected cultivation.',
        plantingWindow: 'October to November',
        potentialYield: '15-20 kg/sq meter',
        icon: '🥬',
      },
      {
        id: '11',
        crop: 'Greenhouse Strawberries',
        confidence: 84,
        reasoning: 'Premium prices during winter, your greenhouse setup is ideal.',
        plantingWindow: 'September to October (for winter production)',
        potentialYield: '1-1.5 kg/plant',
        icon: '🍓',
      },
      {
        id: '12',
        crop: 'Green Onions',
        confidence: 89,
        reasoning: 'Cold tolerant, continuous harvest possible throughout winter.',
        plantingWindow: 'September to October',
        potentialYield: '3-4 kg/sq meter',
        icon: '🧅',
      },
    ],
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSelectedSeason('spring')}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
            selectedSeason === 'spring'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Spring
        </button>
        <button
          onClick={() => setSelectedSeason('summer')}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
            selectedSeason === 'summer'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Summer
        </button>
        <button
          onClick={() => setSelectedSeason('fall')}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
            selectedSeason === 'fall'
              ? 'bg-orange-100 text-orange-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Fall
        </button>
        <button
          onClick={() => setSelectedSeason('winter')}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
            selectedSeason === 'winter'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Winter
        </button>
      </div>

      <div className="space-y-4">
        {recommendations[selectedSeason].map((rec) => (
          <div key={rec.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center bg-gray-50 p-3 border-b border-gray-200">
              <span className="text-2xl mr-2">{rec.icon}</span>
              <h3 className="font-medium flex-1">{rec.crop}</h3>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {rec.confidence}% match
              </div>
            </div>
            <div className="p-3 space-y-2">
              <p className="text-sm">{rec.reasoning}</p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                <div>
                  <span className="text-gray-500 block text-xs">Planting Window</span>
                  <span>{rec.plantingWindow}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">Potential Yield</span>
                  <span>{rec.potentialYield}</span>
                </div>
              </div>
              <div className="pt-2 flex justify-end">
                <button className="text-primary-600 text-sm hover:underline">
                  Add to planning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
