// src/lib/word-count-utils.js

// 🚀 UPDATED: Dynamic word limits based on presentation type
export const WORD_LIMITS = {
  'Award Paper': 1000,              // 🚀 NEW: Extended limit for award papers
  'Free Paper': 250,                // Standard research papers
  'Poster': 250,                    // Poster presentations
  'Oral': 250,                      // Oral presentations
  'E-Poster': 250,                  // Electronic poster presentations
  'Poster Presentation': 250,       // Alternative naming
  'Oral Presentation': 250,         // Alternative naming
  'Case Report': 250,               // Case studies
  'Free Paper Presentation': 250    // Alternative naming
};

/**
 * Count words in text (medical abstract optimized)
 * Handles medical terminology, abbreviations, numbers
 */
export const countWords = (text) => {
  if (!text || typeof text !== 'string') return 0;
  
  // Remove extra whitespace and trim
  const cleanText = text.trim().replace(/\s+/g, ' ');
  
  // If empty after cleaning, return 0
  if (!cleanText) return 0;
  
  // Split by spaces and filter out empty strings
  const words = cleanText.split(' ').filter(word => word.length > 0);
  
  return words.length;
};

/**
 * Get word limit for presentation type
 * 🚀 UPDATED: Now supports dynamic limits based on presentation type
 */
export const getWordLimit = (presentationType) => {
  if (!presentationType) return 250; // Default limit for unknown types
  
  // Normalize presentation type
  const normalizedType = presentationType.toString().trim();
  
  // 🚀 UPDATED: Return specific limit or default to 250
  return WORD_LIMITS[normalizedType] || 250;
};

/**
 * Validate word count against limit
 * 🚀 UPDATED: Now validates against dynamic word limits
 */
export const validateWordCount = (text, presentationType) => {
  const wordCount = countWords(text);
  const limit = getWordLimit(presentationType);
  
  return {
    wordCount,
    limit,
    isValid: wordCount <= limit,
    remaining: limit - wordCount,
    percentage: limit > 0 ? Math.min((wordCount / limit) * 100, 150) : 0 // Allow up to 150% for overflow display
  };
};

/**
 * Get status color based on word count
 * 🚀 UPDATED: Enhanced status logic for different presentation types
 */
export const getWordCountStatus = (wordCount, limit) => {
  const percentage = (wordCount / limit) * 100;
  
  if (percentage <= 70) {
    return {
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-300',
      status: 'good'
    };
  } else if (percentage <= 90) {
    return {
      color: 'text-yellow-600', 
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-300',
      status: 'warning'
    };
  } else if (percentage <= 100) {
    return {
      color: 'text-orange-600',
      bgColor: 'bg-orange-100', 
      borderColor: 'border-orange-300',
      status: 'near-limit'
    };
  } else {
    return {
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-300', 
      status: 'over-limit'
    };
  }
};

/**
 * Get progress bar color
 * 🚀 UPDATED: Enhanced color logic for better visual feedback
 */
export const getProgressColor = (percentage) => {
  if (percentage <= 50) return 'bg-blue-500';    // Getting started
  if (percentage <= 70) return 'bg-green-500';   // Good progress  
  if (percentage <= 90) return 'bg-yellow-500';  // Warning
  if (percentage <= 100) return 'bg-orange-500'; // Near limit
  return 'bg-red-500';                           // Over limit
};

/**
 * Format word count message
 * 🚀 UPDATED: Dynamic messages based on presentation type and limit
 */
export const getWordCountMessage = (wordCount, limit, presentationType) => {
  const remaining = limit - wordCount;
  
  if (wordCount === 0) {
    return `Start typing your ${presentationType} abstract (${limit} words maximum)`;
  }
  
  if (remaining > 0) {
    if (presentationType === 'Award Paper' && wordCount < 500) {
      return `${wordCount} of ${limit} words used. For Award Papers, consider expanding for comprehensive coverage.`;
    }
    return `${wordCount} of ${limit} words used (${remaining} remaining)`;
  } else if (remaining === 0) {
    return `Perfect! Exactly ${limit} words used for ${presentationType}`;
  } else {
    return `Over limit by ${Math.abs(remaining)} words. Please reduce to ${limit} words maximum for ${presentationType}.`;
  }
};

/**
 * Extract words for preview (first N words)
 */
export const getWordPreview = (text, maxWords = 50) => {
  const words = text.trim().split(/\s+/).slice(0, maxWords);
  return words.join(' ') + (countWords(text) > maxWords ? '...' : '');
};

// 🚀 NEW: Additional utility functions for better validation

/**
 * Get detailed validation with suggestions
 * 🚀 UPDATED: Enhanced validation with presentation type awareness
 */
export const getDetailedValidation = (text, presentationType) => {
  const validation = validateWordCount(text, presentationType);
  const status = getWordCountStatus(validation.wordCount, validation.limit);
  
  return {
    ...validation,
    ...status,
    suggestion: getSuggestion(validation, presentationType),
    canSubmit: validation.isValid && validation.wordCount > 0,
    presentationType
  };
};

/**
 * Get helpful suggestions based on word count and presentation type
 * 🚀 UPDATED: Type-specific suggestions
 */
export const getSuggestion = (validation, presentationType) => {
  const { wordCount, limit, percentage, isValid, remaining } = validation;
  
  if (wordCount === 0) {
    if (presentationType === 'Award Paper') {
      return `Please enter your award paper abstract. You have ${limit} words available for comprehensive research presentation.`;
    }
    return `Please enter your ${presentationType} abstract. You have ${limit} words available.`;
  }
  
  if (!isValid) {
    return `Please reduce by ${Math.abs(remaining)} words to meet the ${limit}-word limit for ${presentationType}.`;
  }
  
  // Award Paper specific suggestions
  if (presentationType === 'Award Paper') {
    if (percentage < 30) {
      return `You have ${remaining} words remaining. Consider expanding methodology, detailed results, and clinical implications.`;
    }
    if (percentage >= 85) {
      return `Excellent use of extended word limit! ${remaining} words remaining for final refinements.`;
    }
    if (percentage >= 50 && percentage < 85) {
      return `Good progress with ${wordCount} words. You have ${remaining} more words to provide comprehensive details.`;
    }
  }
  
  // Standard presentation suggestions
  if (percentage >= 85) {
    return `You're close to the limit with ${remaining} words remaining. Consider reviewing for conciseness.`;
  }
  
  if (percentage >= 50 && percentage < 85) {
    return `Good length! ${wordCount} words used. Well-balanced for comprehensive review.`;
  }
  
  if (percentage < 50) {
    return `You have ${remaining} more words available. Consider adding more detail to methodology or results.`;
  }
  
  return `${wordCount} words used out of ${limit} available for ${presentationType}.`;
};

/**
 * 🚀 NEW: Get presentation type category info
 */
export const getPresentationTypeInfo = (presentationType) => {
  const limit = getWordLimit(presentationType);
  
  const categories = {
    'Award Paper': {
      category: 'award',
      description: 'Extended format for comprehensive research presentation',
      timeAllocation: '8+2 minutes',
      color: 'purple',
      icon: '🏆'
    },
    'Free Paper': {
      category: 'standard',
      description: 'Standard research paper presentation',
      timeAllocation: '6+2 minutes', 
      color: 'blue',
      icon: '📄'
    },
    'Poster': {
      category: 'visual',
      description: 'Visual poster presentation',
      timeAllocation: '5+2 minutes',
      color: 'green', 
      icon: '🖼️'
    },
    'Oral': {
      category: 'presentation',
      description: 'Oral presentation format',
      timeAllocation: '6+2 minutes',
      color: 'orange',
      icon: '🎤'
    }
  };
  
  return {
    ...categories[presentationType] || categories['Free Paper'],
    limit,
    presentationType
  };
};

/**
 * 🚀 NEW: Check if word count is optimal for presentation type
 */
export const isOptimalLength = (wordCount, presentationType) => {
  const limit = getWordLimit(presentationType);
  const percentage = (wordCount / limit) * 100;
  
  if (presentationType === 'Award Paper') {
    return percentage >= 60 && percentage <= 95; // Award papers should be comprehensive
  }
  
  return percentage >= 50 && percentage <= 90; // Standard presentations
};

/**
 * 🚀 NEW: Get word count milestones for progress tracking
 */
export const getWordCountMilestones = (presentationType) => {
  const limit = getWordLimit(presentationType);
  
  if (presentationType === 'Award Paper') {
    return [
      { words: 250, label: 'Getting Started', percentage: 25 },
      { words: 500, label: 'Good Progress', percentage: 50 },
      { words: 750, label: 'Almost Complete', percentage: 75 },
      { words: 1000, label: 'At Limit', percentage: 100 }
    ];
  }
  
  return [
    { words: Math.round(limit * 0.3), label: 'Started', percentage: 30 },
    { words: Math.round(limit * 0.6), label: 'Good Progress', percentage: 60 },
    { words: Math.round(limit * 0.9), label: 'Almost Complete', percentage: 90 },
    { words: limit, label: 'At Limit', percentage: 100 }
  ];
};

// 🚀 UPDATED: Export all limits for reference
export const getAllLimits = () => WORD_LIMITS;

// 🚀 UPDATED: Check if presentation type is valid
export const isValidPresentationType = (presentationType) => {
  return Object.keys(WORD_LIMITS).includes(presentationType);
};

// 🚀 NEW: Get all available presentation types
export const getAvailablePresentationTypes = () => {
  return Object.keys(WORD_LIMITS).map(type => ({
    value: type,
    label: type,
    limit: WORD_LIMITS[type],
    info: getPresentationTypeInfo(type)
  }));
};

// 🚀 NEW: Format word count for display
export const formatWordCount = (wordCount, limit) => {
  const percentage = Math.round((wordCount / limit) * 100);
  return {
    display: `${wordCount}/${limit}`,
    percentage: `${percentage}%`,
    remaining: limit - wordCount,
    status: wordCount <= limit ? 'valid' : 'invalid'
  };
};

// 🚀 NEW: Validate minimum word count (abstracts should have substance)
export const hasMinimumContent = (wordCount, presentationType) => {
  const minimums = {
    'Award Paper': 200,  // Award papers should be substantial
    'Free Paper': 100,
    'Poster': 80,
    'Oral': 100
  };
  
  const minimum = minimums[presentationType] || 80;
  return wordCount >= minimum;
};