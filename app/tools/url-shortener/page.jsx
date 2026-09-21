'use client';

import { useState, useEffect } from 'react';
import { FiCopy, FiCheck, FiTrash2 } from 'react-icons/fi';

export default function URLShortener() {
  const [url, setUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [fullShortURL, setFullShortURL] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('urlShorterHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  // Generate hash-based short code
  const generateShortCode = (longUrl) => {
    let hash = 0;
    for (let i = 0; i < longUrl.length; i++) {
      const char = longUrl.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    // Convert to base36 and take first 6-8 chars
    const code = Math.abs(hash).toString(36).substring(0, 7);
    return code;
  };

  const validateURL = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const handleGenerateShort = () => {
    setError('');
    setCopied(false);

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!validateURL(url)) {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    const code = generateShortCode(url);
    setShortCode(code);
    const shortURL = `${window.location.origin}/go/${code}`;
    setFullShortURL(shortURL);

    // Save to history
    const newEntry = {
      id: Date.now(),
      original: url,
      shortCode: code,
      shortURL: shortURL,
      created: new Date().toLocaleString(),
      clicks: 0
    };

    const updatedHistory = [newEntry, ...history.slice(0, 49)]; // Keep last 50
    setHistory(updatedHistory);
    localStorage.setItem('urlShorterHistory', JSON.stringify(updatedHistory));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullShortURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const deleteFromHistory = (id) => {
    const updated = history.filter(item => item.id !== id);
    setHistory(updated);
    localStorage.setItem('urlShorterHistory', JSON.stringify(updated));
  };

  const clearHistory = () => {
    if (window.confirm('Are you sure? This cannot be undone.')) {
      setHistory([]);
      localStorage.removeItem('urlShorterHistory');
    }
  };

  const copyHistoryItem = (shortURL) => {
    navigator.clipboard.writeText(shortURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">URL Shortener</h1>
          <p className="text-xl text-slate-300">
            Create short, memorable URLs for sharing
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          {/* Generator */}
          <div className="glass border border-slate-700/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Generate Short URL</h2>

            <div className="space-y-4">
              {/* URL Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">Enter Long URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/very/long/url/path"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary"
                  onKeyPress={(e) => e.key === 'Enter' && handleGenerateShort()}
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateShort}
                className="w-full btn-primary py-3 font-bold"
              >
                Generate Short URL
              </button>

              {/* Error */}
              {error && (
                <div className="bg-red-900/20 border border-red-700/50 text-red-300 rounded-lg p-4">
                  {error}
                </div>
              )}

              {/* Result */}
              {fullShortURL && (
                <div className="space-y-4 pt-4 border-t border-slate-700/50">
                  <div className="bg-slate-900 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-2">Short Code (Copy this):</p>
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-secondary font-mono text-lg">{shortCode}</code>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(shortCode);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        className="p-2 hover:bg-slate-800 rounded transition flex-shrink-0"
                      >
                        {copied ? (
                          <FiCheck className="text-green-400" />
                        ) : (
                          <FiCopy className="text-slate-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Use with any short URL service (bit.ly, tinyurl.com, etc.)</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                    <p className="text-sm text-blue-300 font-semibold mb-2">How to use:</p>
                    <p className="text-sm text-blue-200">This tool generates unique short codes. To create actual redirects, use a URL shortening service:</p>
                    <ul className="text-xs text-blue-200 mt-2 space-y-1 ml-4 list-disc">
                      <li>bitly.com - Most popular</li>
                      <li>tinyurl.com - Simple & reliable</li>
                      <li>short.link - Fast & clean</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Original URL Length</p>
                      <p className="text-primary font-mono">{url.length} chars</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Short Code Length</p>
                      <p className="text-green-400 font-mono">{shortCode.length} chars</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* History */}
          <div className="glass border border-slate-700/50 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">History</h2>
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="text-red-400 hover:text-red-300 text-sm font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <p className="text-slate-400 text-center py-8">No URLs shortened yet. Create your first short URL above!</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {history.map(item => (
                  <div key={item.id} className="bg-slate-900 rounded-lg p-4 flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-400 truncate">Original: {item.original}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-primary font-mono text-sm">{item.shortCode}</code>
                        <span className="text-xs text-slate-500">{item.created}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => copyHistoryItem(item.shortURL)}
                        className="p-2 hover:bg-slate-800 rounded transition"
                        title="Copy"
                      >
                        <FiCopy className="text-slate-400" />
                      </button>
                      <button
                        onClick={() => deleteFromHistory(item.id)}
                        className="p-2 hover:bg-red-900/20 rounded transition"
                        title="Delete"
                      >
                        <FiTrash2 className="text-red-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">How It Works:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Enter a long URL</li>
                <li>✓ Generate unique short code</li>
                <li>✓ Copy and share</li>
                <li>✓ History saved locally</li>
                <li>✓ Works cross-browser</li>
              </ul>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Use Cases:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Social media sharing</li>
                <li>✓ Marketing campaigns</li>
                <li>✓ Email links</li>
                <li>✓ QR codes</li>
                <li>✓ Document sharing</li>
              </ul>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 bg-blue-900/20 border border-blue-700/50 text-blue-300 rounded-lg p-4 text-sm">
            <p className="font-semibold mb-1">Note:</p>
            <p>Short URLs are stored locally in your browser. They do not redirect to original URLs. For actual URL redirection service, you'll need a backend server.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
