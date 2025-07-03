// src/components/WordCounter.jsx
'use client';

import React from 'react';
import { 
  validateWordCount, 
  getWordCountStatus, 
  getProgressColor, 
  getWordCountMessage 
} from '../lib/word-count-utils';
import { AlertCircle, CheckCircle, AlertTriangle, Award, FileText } from 'lucide-react';

const WordCounter = ({ 
  text = '', 
  presentationType = 'Poster', // Default to 'Poster'
  className = '',
  showProgress = true,
  showMessage = true 
}) => {
  const validation = validateWordCount(text, presentationType);
  const status = getWordCountStatus(validation.wordCount, validation.limit);
  const progressColor = getProgressColor(validation.percentage);
  const message = getWordCountMessage(validation.wordCount, validation.limit, presentationType);

  // 🚀 NEW: Get word limit for current presentation type
  const getWordLimit = (presentationType) => {
    switch (presentationType) {
      case 'Award Paper':
        return 1000;
      case 'Free Paper':
        return 250;
      case 'Poster':
        return 250;
      case 'Oral':
        return 250;
      default:
        return 250;
    }
  };

  const currentLimit = getWordLimit(presentationType);

  const getStatusIcon = () => {
    switch (status.status) {
      case 'good':
        return <CheckCircle className="h-4 w-4" />;
      case 'warning':
      case 'near-limit':
        return <AlertTriangle className="h-4 w-4" />;
      case 'over-limit':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  // 🚀 NEW: Get presentation type icon
  const getPresentationIcon = () => {
    switch (presentationType) {
      case 'Award Paper':
        return <Award className="h-4 w-4 text-purple-500" />;
      case 'Free Paper':
        return <FileText className="h-4 w-4 text-blue-500" />;
      case 'Poster':
        return <FileText className="h-4 w-4 text-green-500" />;
      case 'Oral':
        return <FileText className="h-4 w-4 text-orange-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  // 🚀 NEW: Enhanced styling for Award Paper (longer content)
  const getContainerStyling = () => {
    if (presentationType === 'Award Paper') {
      return 'border-purple-200 bg-purple-50';
    }
    return status.bgColor;
  };

  // 🚀 NEW: Calculate progress segments for better visualization
  const getProgressSegments = () => {
    if (currentLimit <= 250) {
      // For shorter limits, use simple progress bar
      return [
        { threshold: 70, color: 'bg-green-500', label: 'Good' },
        { threshold: 90, color: 'bg-yellow-500', label: 'Warning' },
        { threshold: 100, color: 'bg-orange-500', label: 'Near Limit' },
        { threshold: Infinity, color: 'bg-red-500', label: 'Over Limit' }
      ];
    } else {
      // For Award Paper (1000 words), use more granular segments
      return [
        { threshold: 50, color: 'bg-blue-500', label: 'Getting Started' },
        { threshold: 75, color: 'bg-green-500', label: 'Good Progress' },
        { threshold: 90, color: 'bg-yellow-500', label: 'Almost There' },
        { threshold: 100, color: 'bg-orange-500', label: 'At Limit' },
        { threshold: Infinity, color: 'bg-red-500', label: 'Over Limit' }
      ];
    }
  };

  const getCurrentProgressColor = () => {
    const segments = getProgressSegments();
    for (const segment of segments) {
      if (validation.percentage <= segment.threshold) {
        return segment.color;
      }
    }
    return 'bg-red-500';
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Enhanced Word Count Summary */}
      <div className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${getContainerStyling()}`}>
        <div className="flex items-center space-x-3">
          {getPresentationIcon()}
          <div>
            <div className="flex items-center space-x-2">
              <span className={status.color}>
                {getStatusIcon()}
              </span>
              <span className={`text-sm font-semibold ${status.color}`}>
                {validation.wordCount} / {currentLimit} words
              </span>
            </div>
            {/* 🚀 NEW: Show percentage and status */}
            <div className="text-xs text-gray-600 mt-1">
              {Math.round(validation.percentage)}% used
              {validation.remaining >= 0 ? (
                <span className="text-green-600 ml-2">
                  ({validation.remaining} words remaining)
                </span>
              ) : (
                <span className="text-red-600 ml-2">
                  ({Math.abs(validation.remaining)} words over limit)
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="text-right">
          {validation.remaining < 0 && (
            <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full font-medium">
              Over by {Math.abs(validation.remaining)}
            </span>
          )}
          {validation.remaining >= 0 && validation.percentage > 85 && (
            <span className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full font-medium">
              {validation.remaining} left
            </span>
          )}
          {validation.remaining >= 0 && validation.percentage <= 85 && validation.percentage >= 50 && (
            <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-medium">
              Good length
            </span>
          )}
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      {showProgress && (
        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ease-out ${getCurrentProgressColor()}`}
              style={{ width: `${Math.min(validation.percentage, 100)}%` }}
            />
            {/* 🚀 NEW: Overflow indicator for over-limit */}
            {validation.percentage > 100 && (
              <div 
                className="h-3 bg-red-600 opacity-75 absolute top-0"
                style={{ 
                  width: `${Math.min(validation.percentage - 100, 50)}%`,
                  left: '100%',
                  background: 'repeating-linear-gradient(45deg, #dc2626, #dc2626 4px, #ef4444 4px, #ef4444 8px)'
                }}
              />
            )}
          </div>
          
          {/* 🚀 NEW: Progress milestones for Award Paper */}
          {presentationType === 'Award Paper' && (
            <div className="flex justify-between text-xs text-gray-500">
              <span className={validation.wordCount >= 250 ? 'text-green-600 font-medium' : ''}>250w</span>
              <span className={validation.wordCount >= 500 ? 'text-green-600 font-medium' : ''}>500w</span>
              <span className={validation.wordCount >= 750 ? 'text-green-600 font-medium' : ''}>750w</span>
              <span className={validation.wordCount >= 1000 ? 'text-orange-600 font-medium' : ''}>1000w</span>
            </div>
          )}
        </div>
      )}

      {/* Enhanced Status Message */}
      {showMessage && (
        <div className={`text-sm p-2 rounded ${status.color}`}>
          {message}
          {/* 🚀 NEW: Type-specific additional guidance */}
          {presentationType === 'Award Paper' && validation.wordCount < 500 && (
            <div className="text-xs text-purple-600 mt-1">
              💡 Award Paper tip: With 1000 words available, consider expanding each section for comprehensive coverage.
            </div>
          )}
          {presentationType !== 'Award Paper' && validation.wordCount < 150 && validation.wordCount > 0 && (
            <div className="text-xs text-blue-600 mt-1">
              💡 Consider adding more detail to reach an optimal length for review.
            </div>
          )}
        </div>
      )}

      {/* Enhanced Presentation Type Info */}
      <div className="flex justify-between items-center p-2 bg-gray-50 rounded text-xs">
        <div className="flex items-center space-x-2">
          {getPresentationIcon()}
          <span className="font-medium">
            {presentationType}
            {presentationType === 'Award Paper' && (
              <span className="text-purple-600 ml-1">✨</span>
            )}
          </span>
        </div>
        <div className="text-gray-600">
          <span>Limit: {currentLimit} words</span>
          {presentationType === 'Award Paper' && (
            <span className="text-purple-600 ml-2 font-medium">
              (Extended)
            </span>
          )}
        </div>
      </div>

      {/* 🚀 NEW: Quick tips based on current status */}
      {validation.wordCount > 0 && (
        <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
          <strong>Quick tip:</strong> {' '}
          {validation.percentage < 30 && 'Your abstract could benefit from more detail in methodology and results.'}
          {validation.percentage >= 30 && validation.percentage < 70 && 'Good start! Consider expanding on key findings and clinical implications.'}
          {validation.percentage >= 70 && validation.percentage < 85 && 'Excellent length! Your abstract covers the topic comprehensively.'}
          {validation.percentage >= 85 && validation.percentage < 100 && 'Almost at the limit. Review for any unnecessary words while maintaining clarity.'}
          {validation.percentage >= 100 && 'Over the limit. Focus on the most essential information and remove redundant content.'}
        </div>
      )}
    </div>
  );
};

export default WordCounter;