'use client';

import { useState, useEffect } from 'react';

type ForecastDay = {
  date: string;
  day: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
  icon: string;
  precipitation: number;
};

export function WeatherForecast() {
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from your backend API
    const fetchWeatherForecast = async () => {
      try {
        // Mock API call for demonstration
        // const response = await fetch('/api/weather');
        // const data = await response.json();
        
        // Mock data for demo
        setTimeout(() => {
          setForecast([
            {
              date: '2025-05-18',
              day: 'Today',
              temperature: { min: 18, max: 24 },
              condition: 'Partly Cloudy',
              icon: '⛅',
              precipitation: 10,
            },
            {
              date: '2025-05-19',
              day: 'Mon',
              temperature: { min: 17, max: 23 },
              condition: 'Sunny',
              icon: '☀️',
              precipitation: 0,
            },
            {
              date: '2025-05-20',
              day: 'Tue',
              temperature: { min: 16, max: 21 },
              condition: 'Rain',
              icon: '🌧️',
              precipitation: 60,
            },
            {
              date: '2025-05-21',
              day: 'Wed',
              temperature: { min: 15, max: 20 },
              condition: 'Heavy Rain',
              icon: '⛈️',
              precipitation: 80,
            },
            {
              date: '2025-05-22',
              day: 'Thu',
              temperature: { min: 17, max: 22 },
              condition: 'Cloudy',
              icon: '☁️',
              precipitation: 20,
            },
          ]);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Failed to fetch weather forecast', error);
        setLoading(false);
      }
    };

    fetchWeatherForecast();
  }, []);

  if (loading) {
    return (
      <div className="space-y-3 animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm text-gray-600 pb-2 border-b">
        <span>Niigata, Japan</span>
        <span>5-day forecast</span>
      </div>
      
      <div className="space-y-3">
        {forecast.map((day) => (
          <div key={day.date} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
            <div className="w-16 text-sm font-medium">{day.day}</div>
            <div className="text-2xl">{day.icon}</div>
            <div className="flex-1 ml-2">
              <div className="text-sm font-medium">{day.condition}</div>
              <div className="text-xs text-gray-500">
                {day.precipitation > 0 ? `${day.precipitation}% chance of rain` : 'No rain expected'}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium">{day.temperature.max}°</span>
              <span className="text-sm text-gray-500 ml-1">{day.temperature.min}°</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-2 text-center">
        <button className="text-primary-600 text-sm font-medium hover:underline">
          View detailed forecast
        </button>
      </div>
    </div>
  );
}
