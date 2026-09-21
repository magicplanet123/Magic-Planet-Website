'use client';

import { useState } from 'react';
import { FiCopy, FiCheck, FiDownload } from 'react-icons/fi';

export default function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [indent, setIndent] = useState(2);

  const formatJSON = () => {
    setError('');
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setOutput(formatted);
    } catch (err) {
      setError(`Invalid JSON: ${err.message}`);
      setOutput('');
    }
  };

  const minifyJSON = () => {
    setError('');
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
    } catch (err) {
      setError(`Invalid JSON: ${err.message}`);
      setOutput('');
    }
  };

  const validateJSON = () => {
    setError('');
    try {
      JSON.parse(input);
      setError('✓ Valid JSON');
      setOutput('');
    } catch (err) {
      setError(`✗ Invalid JSON: ${err.message}`);
      setOutput('');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output || input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJSON = () => {
    const dataStr = output || input;
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `data-${Date.now()}.json`;
    link.click();
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const swapInputOutput = () => {
    setInput(output);
    setOutput('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">JSON Formatter</h1>
          <p className="text-xl text-slate-300">
            Format, validate, and minify JSON with ease
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Input */}
            <div className="glass border border-slate-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold">Input JSON</label>
                <span className="text-xs text-slate-500">{input.length} chars</span>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='{"name": "John", "age": 30}'
                rows="12"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary font-mono text-sm resize-none"
              />
            </div>

            {/* Output */}
            <div className="glass border border-slate-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold">Output JSON</label>
                <span className="text-xs text-slate-500">{output.length} chars</span>
              </div>
              <textarea
                value={output}
                readOnly
                placeholder="Formatted JSON will appear here..."
                rows="12"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-green-400 placeholder-slate-500 focus:outline-none font-mono text-sm resize-none"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="glass border border-slate-700/50 rounded-2xl p-6 mb-6">
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {/* Indent Size */}
              <div>
                <label className="text-sm font-semibold block mb-2">Indent Size</label>
                <select
                  value={indent}
                  onChange={(e) => setIndent(parseInt(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary"
                >
                  <option value="2">2 spaces</option>
                  <option value="4">4 spaces</option>
                  <option value="8">8 spaces</option>
                  <option value="1">Tabs</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex flex-col justify-end gap-2">
                <button
                  onClick={formatJSON}
                  disabled={!input}
                  className="btn-primary disabled:opacity-50 text-sm py-2"
                >
                  Format
                </button>
              </div>

              <div className="flex flex-col justify-end gap-2">
                <button
                  onClick={minifyJSON}
                  disabled={!input}
                  className="bg-secondary hover:bg-secondary/80 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition text-sm"
                >
                  Minify
                </button>
              </div>

              <div className="flex flex-col justify-end gap-2">
                <button
                  onClick={validateJSON}
                  disabled={!input}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition text-sm"
                >
                  Validate
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-4 gap-2">
              <button
                onClick={swapInputOutput}
                disabled={!output}
                className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition text-sm"
              >
                ⇄ Swap
              </button>
              <button
                onClick={copyToClipboard}
                disabled={!output && !input}
                className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                {copied ? <FiCheck /> : <FiCopy />}
                <span className="text-sm">Copy</span>
              </button>
              <button
                onClick={downloadJSON}
                disabled={!output && !input}
                className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                <FiDownload />
                <span className="text-sm">Download</span>
              </button>
              <button
                onClick={clearAll}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 rounded-lg transition text-sm"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Error/Status Message */}
          {error && (
            <div className={`rounded-lg p-4 mb-6 ${error.startsWith('✓') ? 'bg-green-900/20 border border-green-700/50 text-green-300' : 'bg-red-900/20 border border-red-700/50 text-red-300'}`}>
              {error}
            </div>
          )}

          {/* Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Use Cases:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ API response debugging</li>
                <li>✓ Config file formatting</li>
                <li>✓ Data minification</li>
                <li>✓ JSON validation</li>
                <li>✓ Syntax error detection</li>
              </ul>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Tips:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Paste raw JSON to format</li>
                <li>✓ Use minify for API calls</li>
                <li>✓ Validate before deployment</li>
                <li>✓ Download for file storage</li>
                <li>✓ Use swap to edit formatted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
