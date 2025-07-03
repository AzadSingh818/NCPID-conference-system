// src/components/ValidatedTextArea.jsx
'use client';

import React, { useState, useEffect } from 'react';
import WordCounter from './WordCounter';
import { validateWordCount } from '../lib/word-count-utils';

const ValidatedTextArea = ({
  value = '',
  onChange,
  presentationType = 'Poster', // Default to 'Poster'
  placeholder = 'Enter your abstract content here...',
  label = 'Abstract Content',
  required = true,
  className = '',
  rows = 8,
  disabled = false,
  showWordCount = true,
  onValidationChange = null
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  // 🚀 NEW: Get word limit based on presentation type
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

  const currentWordLimit = getWordLimit(presentationType);

  // Validate and notify parent component
  useEffect(() => {
    const validation = validateWordCount(value, presentationType);
    setHasContent(value.trim().length > 0);
    
    if (onValidationChange) {
      onValidationChange(validation);
    }
  }, [value, presentationType, onValidationChange]);

  const validation = validateWordCount(value, presentationType);
  
  // Get border color based on validation
  const getBorderClass = () => {
    if (!hasContent) return 'border-gray-300 focus:border-blue-500';
    if (validation.isValid) {
      if (validation.percentage <= 70) return 'border-green-400 focus:border-green-500';
      if (validation.percentage <= 90) return 'border-yellow-400 focus:border-yellow-500';
      return 'border-orange-400 focus:border-orange-500';
    }
    return 'border-red-400 focus:border-red-500';
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Label */}
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        {/* 🚀 UPDATED: Dynamic word limit based on presentation type */}
        <span className="text-gray-500 text-xs ml-2">
          (Maximum {currentWordLimit} words for {presentationType})
        </span>
      </label>

      {/* Abstract Structure Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
        <p className="font-medium text-blue-900 mb-1">Required Structure:</p>
        <p className="text-blue-800">
          <strong>Background:</strong> Research context and objectives • {' '}
          <strong>Methodology:</strong> Study design and methods • {' '}
          <strong>Results:</strong> Key findings and data • {' '}
          <strong>Conclusion:</strong> Clinical implications
        </p>
        {/* 🚀 UPDATED: Dynamic word limit reminder */}
        <p className="text-blue-700 text-xs mt-2 font-medium">
          📝 Word Limit: {currentWordLimit} words for {presentationType}
          {presentationType === 'Award Paper' && (
            <span className="ml-2 text-green-700 font-semibold">
              ✨ Extended limit for comprehensive research presentation
            </span>
          )}
        </p>
      </div>

      {/* Text Area */}
      <div className="relative">
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={`
            w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500/20
            disabled:bg-gray-50 disabled:text-gray-500
            resize-none
            ${getBorderClass()}
            ${isFocused ? 'shadow-lg' : 'shadow-sm'}
          `}
          style={{
            minHeight: `${rows * 1.5}rem`,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.6'
          }}
        />
        
        {/* Character feedback overlay */}
        {isFocused && hasContent && (
          <div className="absolute top-2 right-2 opacity-75">
            <div className={`
              text-xs px-2 py-1 rounded-full
              ${validation.isValid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
            `}>
              {validation.wordCount}w / {currentWordLimit}w
            </div>
          </div>
        )}
      </div>

      {/* Word Counter */}
      {showWordCount && (
        <WordCounter 
          text={value}
          presentationType={presentationType}
          showProgress={true}
          showMessage={true}
        />
      )}

      {/* 🚀 UPDATED: Validation Error Message with dynamic word limit */}
      {!validation.isValid && hasContent && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Word limit exceeded
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Your abstract is {Math.abs(validation.remaining)} words over the {validation.limit}-word limit for {presentationType}. 
                  Please reduce the content to meet submission requirements.
                </p>
                {/* 🚀 UPDATED: Type-specific helpful messages */}
                <p className="mt-1 text-xs">
                  {presentationType === 'Award Paper' ? (
                    <span>💡 Tip: Even with 1000 words, focus on the most impactful findings and clear methodology.</span>
                  ) : (
                    <span>💡 Tip: Focus on the most essential findings and conclusions to stay within the {currentWordLimit}-word limit.</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Helpful tips when near limit */}
      {validation.isValid && validation.percentage > 85 && hasContent && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Almost at limit:</strong> You have {validation.remaining} words remaining out of {currentWordLimit}. 
                Consider reviewing for conciseness while maintaining scientific accuracy.
              </p>
              {/* 🚀 UPDATED: Type-specific guidance */}
              <p className="text-xs text-yellow-600 mt-1">
                {presentationType === 'Award Paper' ? (
                  <span>💡 With 1000 words available, ensure each section (Background, Methods, Results, Conclusion) is well-balanced.</span>
                ) : (
                  <span>💡 Consider using shorter sentences and removing unnecessary adjectives or adverbs.</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🚀 UPDATED: Success message when word count is optimal */}
      {validation.isValid && validation.percentage >= 50 && validation.percentage <= 85 && hasContent && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-2">
              <p className="text-sm text-green-700">
                <strong>Good length:</strong> {validation.wordCount} words used ({validation.remaining} remaining).
                Your abstract is at an optimal length for comprehensive review.
                {presentationType === 'Award Paper' && (
                  <span className="block text-xs mt-1">
                    ✨ Award Paper: Excellent use of extended word limit for detailed research presentation.
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🚀 UPDATED: Guidance for very short abstracts */}
      {validation.isValid && validation.percentage < 50 && hasContent && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-2">
              <p className="text-sm text-blue-700">
                <strong>Consider expanding:</strong> You have {validation.remaining} more words available out of {currentWordLimit}. 
                {presentationType === 'Award Paper' ? (
                  <span>Consider adding more detail to your methodology, detailed results, statistical analysis, or clinical implications.</span>
                ) : (
                  <span>Consider adding more detail to your methodology, results, or clinical implications.</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🚀 NEW: Special guidance for Award Paper submissions */}
      {presentationType === 'Award Paper' && hasContent && validation.isValid && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-purple-800">Award Paper Submission</h4>
              <p className="text-sm text-purple-700 mt-1">
                With 1000 words available, ensure your abstract includes:
              </p>
              <ul className="text-xs text-purple-600 mt-2 space-y-1">
                <li>• <strong>Comprehensive background</strong> with literature context</li>
                <li>• <strong>Detailed methodology</strong> including statistical analysis</li>
                <li>• <strong>Complete results</strong> with key findings and data</li>
                <li>• <strong>Clinical significance</strong> and future implications</li>
              </ul>
              <p className="text-xs text-purple-600 mt-2">
                Current usage: {validation.wordCount}/1000 words ({validation.percentage.toFixed(1)}%)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValidatedTextArea;