'use client';
import React from 'react';
import { 
  AlertCircle, Clock, FileText, CheckCircle, ArrowRight, Users, 
  Calendar, Award, Download, ExternalLink, ArrowLeft, Shield,
  Eye, Upload, Palette, Image, Monitor, Type, Zap
} from 'lucide-react';

export default function AbstractGuidelines() {

  const handleProceedToSubmit = () => {
    window.location.href = '/delegate-login';
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </button>
            
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Abstract Submission Guidelines
              </h1>
              <p className="text-lg text-gray-600">
                NCPID 2025 - National Conference on Pediatric Infectious Diseases
              </p>
            </div>
            
            <div className="w-20"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Alert Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
            <div>
              <h3 className="font-semibold text-red-800">Important Notice</h3>
              <p className="text-red-700 text-sm">
                Abstract submission deadline has been extended to <strong>July 7th, 2025</strong>. 
                All guidelines below must be followed for successful submission.
              </p>
            </div>
          </div>
        </div>

        {/* Main Guidelines Panel */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">
              INSTRUCTIONS FOR ABSTRACT SUBMISSION
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-4 mb-8">
            <p className="text-red-800 font-semibold text-lg">
              FOR AWARD PAPER, FREE PAPER AND POSTER PRESENTATIONS - PEDIATRIC INFECTIOUS DISEASES
            </p>
            <p className="text-red-600 text-sm mt-1">
              This should be visible on the abstract submission page
            </p>
          </div>

          {/* Core Requirements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Left Column - Essential Requirements */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Essential Requirements</h3>
              
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Topic Requirement</p>
                    <p className="text-blue-700 text-sm">Paper should be related to <strong>Pediatric Infectious Diseases</strong></p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <FileText className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800">Presenter Requirement</p>
                    <p className="text-green-700 text-sm">Presenting person should be the <strong>primary author/co-author</strong></p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <Type className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Font Requirements</p>
                    <p className="text-purple-700 text-sm">Abstract should be printed using <strong>ARIAL font</strong> with <strong>font size 12</strong></p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-lg">
                  <Clock className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800">Word Limits</p>
                    <p className="text-red-700 text-sm">
                      <strong>Award Paper:</strong> Maximum 1000 words<br/>
                      <strong>Free Paper/Poster:</strong> Maximum 250 words
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Original Work Only</p>
                    <p className="text-purple-700 text-sm">Previously published/presented abstracts at National/International forums not permitted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Specifications */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Presentation Categories</h3>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-4 flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Award Paper Category
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-yellow-900">Word Limit:</span>
                    <span className="font-bold text-yellow-600">1000 words maximum</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-yellow-900">Submission:</span>
                    <span className="font-bold text-yellow-600">Full paper + Abstract</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-yellow-900">Format:</span>
                    <span className="font-bold text-yellow-600">Indian Pediatrics Original Article</span>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <span className="text-sm font-medium text-yellow-800">Awards:</span>
                    <span className="text-sm text-yellow-600 ml-2">Top 3 papers get oral presentation opportunity</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Free Paper Category
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-blue-800">Word Limit:</span>
                    <span className="font-bold text-blue-600">250 words</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-blue-800">Font:</span>
                    <span className="font-bold text-blue-600">ARIAL, Size 12</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-blue-800">Topic:</span>
                    <span className="font-bold text-blue-600">Pediatric Infectious Diseases</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                  <Image className="h-4 w-4 mr-2" />
                  Poster Presentation
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-green-800">Word Limit:</span>
                    <span className="font-bold text-green-600">250 words</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium text-green-800">Font:</span>
                    <span className="font-bold text-green-600">ARIAL, Size 12</span>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <span className="text-sm font-medium text-green-800">Note:</span>
                    <span className="text-sm text-green-700 ml-2">Further guidelines on preparing the poster will be intimated once the poster is accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Guidelines */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-yellow-800 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Key Guidelines Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium text-yellow-700 mb-3">Award Paper Category:</h4>
                <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                  <li>Related to Pediatric infectious diseases & maximum 1000 words</li>
                  <li>Presenting person should be primary author/co-author</li>
                  <li>Full paper and abstract should be submitted</li>
                  <li>Paper should be in Indian Pediatrics Original Article Format</li>
                  <li>Top 3 best papers get oral presentation opportunity</li>
                  <li>Papers not chosen may be considered for Free Paper/Poster</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium text-yellow-700 mb-3">Free Paper Presentation:</h4>
                <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                  <li>Paper should be related to Pediatric infectious diseases</li>
                  <li>Presenting person should be the primary author/co-author</li>
                  <li>ARIAL font, size 12, maximum 250 words</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium text-yellow-700 mb-3">Poster Presentation:</h4>
                <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                  <li>Presenting person should be the primary author/co-author</li>
                  <li>ARIAL font, size 12, maximum 250 words</li>
                  <li>Poster preparation guidelines will be provided after acceptance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Award Paper Specific Guidelines */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-orange-800 mb-6 flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Award Paper Category - Special Instructions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="h-4 w-4 text-orange-600 mr-2" />
                  <h4 className="font-medium text-orange-800">Submission Requirements</h4>
                </div>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• <strong>Word Limit:</strong> Maximum 1000 words</li>
                  <li>• <strong>Format:</strong> Indian Pediatrics Original Article Format</li>
                  <li>• <strong>Documents:</strong> Full paper + Abstract both required</li>
                  <li>• <strong>Topic:</strong> Pediatric Infectious Diseases</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Eye className="h-4 w-4 text-orange-600 mr-2" />
                  <h4 className="font-medium text-orange-800">Evaluation Process</h4>
                </div>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Initially judged for <strong>content and methodology</strong></li>
                  <li>• <strong>Top 3 best papers</strong> selected for oral presentation</li>
                  <li>• Award decision based on paper + presentation credits</li>
                  <li>• Non-selected papers considered for Free Paper/Poster</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-orange-100 border border-orange-300 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Important Note for Award Paper:</h4>
              <p className="text-sm text-orange-700">
                <strong>Paper not chosen for presentation will be automatically considered for Free Paper / Poster Presentation.</strong> 
                This ensures all quality submissions get an opportunity for presentation at the conference.
              </p>
            </div>
          </div>

          {/* Formatting Requirements */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-6 flex items-center">
              <Type className="h-5 w-5 mr-2" />
              Formatting Requirements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Type className="h-4 w-4 text-purple-600 mr-2" />
                  <h4 className="font-medium text-purple-800">Font Specifications</h4>
                </div>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Font Family: <strong>ARIAL only</strong></li>
                  <li>• Font Size: <strong>12 points</strong></li>
                  <li>• Ensure text readability</li>
                  <li>• Maintain consistency</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="h-4 w-4 text-purple-600 mr-2" />
                  <h4 className="font-medium text-purple-800">Word Count</h4>
                </div>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Maximum: <strong>250 words</strong></li>
                  <li>• Count includes all text</li>
                  <li>• Strictly enforced limit</li>
                  <li>• Check before submission</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Users className="h-4 w-4 text-purple-600 mr-2" />
                  <h4 className="font-medium text-purple-800">Author Requirements</h4>
                </div>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Primary author presents</li>
                  <li>• Co-author can present</li>
                  <li>• Clear author identification</li>
                  <li>• Contact details required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Review Process */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              Review Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-700">Scientific Committee will review all abstracts</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-700">Focus on Pediatric Infectious Diseases relevance</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-700">Acceptance will be communicated to presenter</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-700">Committee may change presentation type after review</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-700">Formatting compliance will be checked</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-700"><strong>Author/Co-author must be the presenter</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-red-100 border border-red-300 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-red-800 mb-4">⚠️ Critical Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Award Paper Category:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• <strong>Topic:</strong> Pediatric Infectious Diseases</li>
                  <li>• <strong>Word Limit:</strong> Maximum 1000 words</li>
                  <li>• <strong>Submission:</strong> Full paper + Abstract</li>
                  <li>• <strong>Format:</strong> Indian Pediatrics Original Article</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Free Paper Category:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• <strong>Topic:</strong> Pediatric Infectious Diseases</li>
                  <li>• <strong>Font:</strong> ARIAL font, size 12 points only</li>
                  <li>• <strong>Word Limit:</strong> Maximum 250 words</li>
                  <li>• <strong>Presenter:</strong> Primary author or co-author</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Poster Presentation:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• <strong>Font:</strong> ARIAL font, size 12 points</li>
                  <li>• <strong>Word Limit:</strong> Maximum 250 words</li>
                  <li>• <strong>Presenter:</strong> Primary author or co-author</li>
                  <li>• <strong>Guidelines:</strong> Provided after acceptance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sample Abstract Reference */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Sample Abstract & Paper Formats
            </h3>
            <p className="text-blue-700 mb-4">
              Download sample formats for Pediatric Infectious Diseases presentations:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Award Paper Format
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Free Paper Format
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Poster Format
              </button>
            </div>
            <p className="text-blue-600 text-sm mt-3">
              <strong>Award Paper Note:</strong> Use Indian Pediatrics Original Article Format for full paper submission
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Submit Your Abstract?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose from <strong>Award Paper Category</strong> (1000 words + full paper), <strong>Free Paper</strong> (250 words), or <strong>Poster Presentation</strong> (250 words). 
              All submissions must be related to <strong>Pediatric Infectious Diseases</strong>.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <p className="text-yellow-800 text-sm">
                <strong>Before proceeding:</strong> Confirm that you are the primary author or co-author of the work. 
                For Award Paper: prepare full paper in Indian Pediatrics format. For Free Paper/Poster: use ARIAL font, size 12, within 250 words.
              </p>
            </div>
            
            <button
              onClick={handleProceedToSubmit}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg shadow-md"
            >
              <Upload className="h-5 w-5 mr-2" />
              Click Here for Online Submission
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              You will be redirected to the delegate login page to authenticate your conference registration.
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-500">
          <p className="text-sm">
            <strong>Note:</strong> Guidelines are dynamic and may change from conference to conference
          </p>
          <p className="text-xs mt-2">
            © NCPID 2025 - National Conference on Pediatric Infectious Diseases | 
            For queries: <a href="mailto:iapidkc2022@gmail.com" className="text-blue-600 hover:underline">iapidkc2022@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}