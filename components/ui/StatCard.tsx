'use client';

import { useEffect, useState } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  prefix?: string;
  suffix?: string;
  trend?: 'up' | 'down' | 'neutral';
  animated?: boolean;
}

export default function StatCard({ 
  title, 
  value, 
  prefix = '', 
  suffix = '', 
  trend = 'neutral',
  animated = true 
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!animated) {
      return;
    }

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericValue)) {
      return;
    }

    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(start.toFixed(value.includes('.') ? 2 : 0));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, animated]);

  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-gray-400',
  };

  const trendIcons = {
    up: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    down: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    neutral: null,
  };

  return (
    <div className="glass glass-hover rounded-xl p-6">
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <div className="flex items-baseline space-x-2">
        <span className="text-gray-500 text-lg">{prefix}</span>
        <span className="text-3xl font-bold text-white">{displayValue}</span>
        <span className="text-gray-500 text-lg">{suffix}</span>
        {trend !== 'neutral' && (
          <span className={`${trendColors[trend]} ml-2`}>
            {trendIcons[trend]}
          </span>
        )}
      </div>
    </div>
  );
}
