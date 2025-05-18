'use client';

import Link from 'next/link';

type Activity = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
  priority: 'high' | 'medium' | 'low';
};

export function UpcomingActivities() {
  // Mock data for demonstration
  const activities: Activity[] = [
    {
      id: '1',
      title: 'Rice Field Irrigation',
      date: 'Today',
      time: '2:00 PM',
      type: 'Watering',
      location: 'North Field',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Apply Organic Fertilizer',
      date: 'Tomorrow',
      time: '9:00 AM',
      type: 'Fertilizing',
      location: 'Vegetable Garden',
      priority: 'medium',
    },
    {
      id: '3',
      title: 'Harvest Early Vegetables',
      date: 'May 20',
      time: '7:00 AM',
      type: 'Harvesting',
      location: 'East Plot',
      priority: 'medium',
    },
    {
      id: '4',
      title: 'Equipment Maintenance',
      date: 'May 21',
      time: '3:30 PM',
      type: 'Maintenance',
      location: 'Workshop',
      priority: 'low',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'Watering':
        return '💧';
      case 'Fertilizing':
        return '🧪';
      case 'Harvesting':
        return '🌾';
      case 'Planting':
        return '🌱';
      case 'Maintenance':
        return '🔧';
      default:
        return '📋';
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
        >
          <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3">
            {getActivityIcon(activity.type)}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium">{activity.title}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                  activity.priority
                )}`}
              >
                {activity.priority}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {activity.date} at {activity.time}
            </p>
            <p className="text-xs text-gray-500 mt-1">{activity.location}</p>
          </div>
        </div>
      ))}
      
      <div className="pt-2">
        <Link href="/calendar" className="text-primary-600 text-sm font-medium hover:underline flex items-center justify-center">
          View full calendar
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
