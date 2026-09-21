'use client';

import { useState } from 'react';
import { FiCopy, FiCheck, FiDownload } from 'react-icons/fi';

export default function CSVToJSON() {
  const [csv, setCSV] = useState('');
  const [json, setJSON] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [hasHeader, setHasHeader] = useState(true);

  const convertCSVToJSON = () => {
    setError('');
    try {
      const lines = csv.trim().split('\n');
      if (lines.length === 0) {
        setError('Please enter CSV data');
        return;
      }

      // Parse header
      const headers = lines[0].split(',').map(h => h.trim());
      const data = [];

      // Parse data rows
      const startIndex = hasHeader ? 1 : 0;
      for (let i = startIndex; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const obj = {};

        headers.forEach((header, idx) => {
          const key = hasHeader ? header : `column_${idx + 1}`;
          let value = values[idx] || '';

          // Try to parse as number
          if (!isNaN(value) && value !== '') {
            value = parseFloat(value);
          }
          // Try to parse as boolean
          else if (value.toLowerCase() === 'true') {
            value = true;
          } else if (value.toLowerCase() === 'false') {
            value = false;
          }
          // Handle empty as null
          else if (value === '') {
            value = null;
          }

          obj[key] = value;
        });

        data.push(obj);
      }

      const jsonOutput = JSON.stringify(data, null, 2);
      setJSON(jsonOutput);
    } catch (err) {
      setError(`Conversion error: ${err.message}`);
      setJSON('');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(json || csv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJSON = () => {
    const dataBlob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `data-${Date.now()}.json`;
    link.click();
  };

  const clearAll = () => {
    setCSV('');
    setJSON('');
    setError('');
  };

  const insertSample = () => {
    setCSV(`name,email,age,city
John Doe,john@example.com,28,New York
Jane Smith,jane@example.com,32,Los Angeles
Bob Johnson,bob@example.com,25,Chicago`);
    setJSON('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">CSV to JSON Converter</h1>
          <p className="text-xl text-slate-300">
            Convert CSV data to JSON format instantly
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
                <label className="text-sm font-semibold">CSV Data</label>
                <span className="text-xs text-slate-500">{csv.length} chars</span>
              </div>
              <textarea
                value={csv}
                onChange={(e) => setCSV(e.target.value)}
                placeholder="name,age,email
John,30,john@example.com
Jane,28,jane@example.com"
                rows="12"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary font-mono text-sm resize-none"
              />
            </div>

            {/* Output */}
            <div className="glass border border-slate-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold">JSON Output</label>
                <span className="text-xs text-slate-500">{json.length} chars</span>
              </div>
              <textarea
                value={json}
                readOnly
                placeholder="Converted JSON will appear here..."
                rows="12"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-green-400 placeholder-slate-500 focus:outline-none font-mono text-sm resize-none"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="glass border border-slate-700/50 rounded-2xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Header Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasHeader}
                  onChange={(e) => setHasHeader(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">First row contains column headers</span>
              </label>

              {/* Sample Button */}
              <button
                onClick={insertSample}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 rounded-lg transition text-sm"
              >
                Insert Sample
              </button>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-4 gap-2">
              <button
                onClick={convertCSVToJSON}
                disabled={!csv}
                className="btn-primary disabled:opacity-50 text-sm py-2"
              >
                Convert
              </button>
              <button
                onClick={copyToClipboard}
                disabled={!json && !csv}
                className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                {copied ? <FiCheck /> : <FiCopy />}
                <span className="text-sm">Copy</span>
              </button>
              <button
                onClick={downloadJSON}
                disabled={!json}
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

          {/* Error */}
          {error && (
            <div className="bg-red-900/20 border border-red-700/50 text-red-300 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          {/* Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">CSV Format:</h3>
              <p className="text-sm text-slate-300 mb-3">First row (if selected):</p>
              <code className="text-xs bg-slate-900 p-2 rounded block text-green-400">
                name,age,email
              </code>
              <p className="text-sm text-slate-300 mt-3 mb-3">Data rows:</p>
              <code className="text-xs bg-slate-900 p-2 rounded block text-green-400">
                John,30,john@example.com
              </code>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">JSON Output:</h3>
              <code className="text-xs bg-slate-900 p-2 rounded block text-green-400 overflow-x-auto">
{`[
  {
    "name": "John",
    "age": 30,
    "email": "john@example.com"
  }
]`}
              </code>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 glass border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Features:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-primary mb-2">✓ Auto Type Detection</p>
                <p className="text-sm text-slate-300">Numbers, booleans, and nulls automatically detected</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">✓ Header Support</p>
                <p className="text-sm text-slate-300">Toggle header row for column names</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">✓ Download JSON</p>
                <p className="text-sm text-slate-300">Save converted data as JSON file</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
