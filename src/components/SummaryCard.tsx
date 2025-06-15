import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  trend?: {
    value: number;
    isPositive: boolean;
  };
  loading?: boolean;
}

const colorConfig = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-600',
    text: 'text-blue-600',
    border: 'border-blue-200'
  },
  green: {
    bg: 'bg-emerald-50',
    icon: 'bg-emerald-600',
    text: 'text-emerald-600',
    border: 'border-emerald-200'
  },
  yellow: {
    bg: 'bg-yellow-50',
    icon: 'bg-yellow-600',
    text: 'text-yellow-600',
    border: 'border-yellow-200'
  },
  red: {
    bg: 'bg-red-50',
    icon: 'bg-red-600',
    text: 'text-red-600',
    border: 'border-red-200'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-600',
    text: 'text-purple-600',
    border: 'border-purple-200'
  }
};

const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  trend, 
  loading = false 
}) => {
  const colors = colorConfig[color];

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="w-20 h-8 bg-gray-200 rounded mb-2"></div>
        <div className="w-24 h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl border ${colors.border} p-6 hover:shadow-lg transition-shadow duration-200`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${trend.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
            <span className="font-medium">
              {trend.isPositive ? '+' : ''}{trend.value}%
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl font-bold text-gray-900">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </p>
        <p className="text-sm text-gray-600 font-medium">{title}</p>
      </div>
    </div>
  );
};

export default SummaryCard;