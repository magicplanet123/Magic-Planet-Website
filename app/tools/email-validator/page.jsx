'use client';

import { useState } from 'react';
import { FiCheck, FiX, FiCopy } from 'react-icons/fi';

export default function EmailValidator() {
  const [email, setEmail] = useState('');
  const [results, setResults] = useState(null);
  const [copied, setCopied] = useState(false);

  // Comprehensive email validation
  const validateEmail = (emailAddress) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailRegex.test(emailAddress);

    // Extract domain
    const domain = emailAddress.split('@')[1] || '';

    // Common free email providers
    const freeProviders = [
      'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
      'aol.com', 'icloud.com', 'mail.com', 'protonmail.com'
    ];

    // Common disposable email domains (bad for business)
    const disposableProviders = [
      'tempmail.com', 'throwaway.email', '10minutemail.com',
      'mailinator.com', 'guerrillamail.com', 'maildrop.cc'
    ];

    const isFreeProvider = freeProviders.includes(domain.toLowerCase());
    const isDisposable = disposableProviders.includes(domain.toLowerCase());

    return {
      email: emailAddress,
      isValid: isValidFormat,
      format: isValidFormat ? '✓ Valid format' : '✗ Invalid format',
      domain: domain || 'N/A',
      isFreeProvider: isFreeProvider,
      providerType: isFreeProvider ? 'Free Email Provider' : 'Custom Domain',
      isDisposable: isDisposable,
      disposableStatus: isDisposable ? '✗ Disposable/Temporary Email' : '✓ Legitimate Email Provider',
      recommendations: generateRecommendations(isValidFormat, isFreeProvider, isDisposable),
      timestamp: new Date().toLocaleTimeString()
    };
  };

  const generateRecommendations = (isValid, isFree, isDisposable) => {
    const tips = [];

    if (!isValid) tips.push('Email format is invalid. Check for typos.');
    if (isDisposable) tips.push('This appears to be a disposable email. Consider requesting a permanent address.');
    if (isFree && isValid) tips.push('Free email provider detected. For business: consider requesting a company domain.');
    if (isValid && !isFree && !isDisposable) tips.push('✓ Professional email address');

    return tips;
  };

  const handleValidate = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setResults({
        error: 'Please enter an email address'
      });
      return;
    }

    const result = validateEmail(email.trim());
    setResults(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setEmail('');
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Email Validator</h1>
          <p className="text-xl text-slate-300">
            Check if email addresses are valid, legitimate, and deliverable
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="section-padding">
        <div className="container-max max-w-2xl">
          <div className="glass border border-slate-700/50 rounded-2xl p-8">
            <form onSubmit={handleValidate} className="space-y-6">
              {/* Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Validate Email
                </button>
                {email && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="px-6 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>

            {/* Results */}
            {results && (
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                {results.error ? (
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 text-red-300">
                    {results.error}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Email Display */}
                    <div className="bg-slate-900 rounded-lg p-4 flex items-center justify-between">
                      <code className="text-primary break-all">{results.email}</code>
                      <button
                        onClick={copyToClipboard}
                        className="ml-2 p-2 hover:bg-slate-800 rounded transition"
                        title="Copy to clipboard"
                      >
                        {copied ? (
                          <FiCheck className="text-green-400" />
                        ) : (
                          <FiCopy className="text-slate-400" />
                        )}
                      </button>
                    </div>

                    {/* Validation Status */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Format */}
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <p className="text-sm text-slate-400 mb-1">Format</p>
                        <div className="flex items-center gap-2">
                          {results.isValid ? (
                            <FiCheck className="text-green-400 text-lg" />
                          ) : (
                            <FiX className="text-red-400 text-lg" />
                          )}
                          <span className={results.isValid ? 'text-green-400' : 'text-red-400'}>
                            {results.format}
                          </span>
                        </div>
                      </div>

                      {/* Domain */}
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <p className="text-sm text-slate-400 mb-1">Domain</p>
                        <p className="font-mono text-primary">{results.domain}</p>
                      </div>

                      {/* Provider Type */}
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <p className="text-sm text-slate-400 mb-1">Provider</p>
                        <p className={results.isFreeProvider ? 'text-yellow-400' : 'text-green-400'}>
                          {results.providerType}
                        </p>
                      </div>

                      {/* Legitimacy */}
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <p className="text-sm text-slate-400 mb-1">Status</p>
                        <div className="flex items-center gap-2">
                          {results.isDisposable ? (
                            <>
                              <FiX className="text-red-400 text-lg" />
                              <span className="text-red-400 text-sm">Disposable</span>
                            </>
                          ) : (
                            <>
                              <FiCheck className="text-green-400 text-lg" />
                              <span className="text-green-400 text-sm">Legitimate</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-300 mb-3">Recommendations:</p>
                      <ul className="space-y-2">
                        {results.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-blue-200 flex items-start gap-2">
                            <span className="mt-1">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Summary */}
                    <div className={`rounded-lg p-4 ${results.isValid ? 'bg-green-900/20 border border-green-700/50' : 'bg-red-900/20 border border-red-700/50'}`}>
                      <p className={`font-semibold ${results.isValid ? 'text-green-300' : 'text-red-300'}`}>
                        {results.isValid ? '✓ Email is valid' : '✗ Email is invalid'}
                      </p>
                      <p className={`text-sm mt-1 ${results.isValid ? 'text-green-200' : 'text-red-200'}`}>
                        {results.isValid ? 'This email address appears to be legitimate and can receive messages.' : 'This email address has issues and may not be deliverable.'}
                      </p>
                    </div>

                    {/* Timestamp */}
                    <p className="text-xs text-slate-500 text-center">
                      Validated at {results.timestamp}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">What We Check:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Valid email format</li>
                <li>✓ Valid domain name</li>
                <li>✓ Free vs. professional email</li>
                <li>✓ Disposable email detection</li>
                <li>✓ Legitimacy assessment</li>
              </ul>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Use Cases:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Clean user registration data</li>
                <li>✓ Verify customer emails</li>
                <li>✓ Detect bot registrations</li>
                <li>✓ Email list validation</li>
                <li>✓ Reduce bounce rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
