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
                APBMT 2025 - Pediatric Infectious Diseases Conference
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
                Abstract submission deadline has been extended to <strong>July 10th, 2025</strong>. 
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
              FOR FREE PAPER AND POSTER PRESENTATIONS - PEDIATRIC INFECTIOUS DISEASES
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
                    <p className="font-semibold text-red-800">Word Limit</p>
                    <p className="text-red-700 font-medium">Not more than <strong>250 words</strong></p>
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
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Additional Requirements</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Free Paper Category
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium">Word Limit:</span>
                    <span className="font-bold text-blue-700">250 words</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium">Font:</span>
                    <span className="font-bold text-blue-700">ARIAL, Size 12</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium">Topic:</span>
                    <span className="font-bold text-blue-700">Pediatric Infectious Diseases</span>
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
                    <span className="text-sm font-medium">Word Limit:</span>
                    <span className="font-bold text-green-700">250 words</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm font-medium">Font:</span>
                    <span className="font-bold text-green-700">ARIAL, Size 12</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-red-700 space-y-2">
                <li>• <strong>Topic:</strong> Must be related to Pediatric Infectious Diseases</li>
                <li>• <strong>Font:</strong> ARIAL font, size 12 points only</li>
                <li>• <strong>Word Limit:</strong> Maximum 250 words (strictly enforced)</li>
              </ul>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• <strong>Presenter:</strong> Must be primary author or co-author</li>
                <li>• <strong>Poster Guidelines:</strong> Will be provided after acceptance</li>
                <li>• <strong>Submission:</strong> Online submission only</li>
              </ul>
            </div>
          </div>

          {/* Sample Abstract Reference */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Sample Abstract Format
            </h3>
            <p className="text-blue-700 mb-4">
              Download sample abstract format for Pediatric Infectious Diseases presentations:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Free Paper Format
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Poster Format
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Submit Your Abstract?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Please ensure your abstract is related to <strong>Pediatric Infectious Diseases</strong> and follows all formatting guidelines (ARIAL font, size 12, maximum 250 words).
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <p className="text-yellow-800 text-sm">
                <strong>Before proceeding:</strong> Confirm that you are the primary author or co-author of the work. 
                Make sure your abstract uses ARIAL font, size 12, and is within 250 words limit.
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
            © APBMT 2025 - Pediatric Infectious Diseases Conference | 
            For queries: <a href="mailto:abstracts@apbmt2025.org" className="text-blue-600 hover:underline">abstracts@apbmt2025.org</a>
          </p>
        </div>
      </div>
    </div>
  );
}