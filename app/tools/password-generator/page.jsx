'use client';

import { useState } from 'react';
import { FiRefreshCw, FiCopy, FiCheck } from 'react-icons/fi';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let available = '';
    if (options.uppercase) available += uppercase;
    if (options.lowercase) available += lowercase;
    if (options.numbers) available += numbers;
    if (options.symbols) available += symbols;

    if (!available) {
      setOptions({ uppercase: true, lowercase: true, numbers: true, symbols: true });
      available = uppercase + lowercase + numbers + symbols;
    }

    let generated = '';
    for (let i = 0; i < length; i++) {
      generated += available.charAt(Math.floor(Math.random() * available.length));
    }

    setPassword(generated);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const calculateStrength = () => {
    if (!password) return { level: 0, label: 'None', color: 'text-slate-500' };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (password.length >= 16) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) strength++;

    if (strength <= 2) return { level: 1, label: 'Weak', color: 'text-red-400' };
    if (strength <= 4) return { level: 2, label: 'Fair', color: 'text-yellow-400' };
    if (strength <= 6) return { level: 3, label: 'Good', color: 'text-blue-400' };
    return { level: 4, label: 'Strong', color: 'text-green-400' };
  };

  const strength = calculateStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Password Generator</h1>
          <p className="text-xl text-slate-300">
            Generate secure, random passwords with custom options
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="section-padding">
        <div className="container-max max-w-2xl">
          <div className="glass border border-slate-700/50 rounded-2xl p-8">
            {/* Generated Password Display */}
            {password && (
              <div className="mb-8">
                <p className="text-sm text-slate-400 mb-2">Generated Password:</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 flex items-center justify-between mb-4">
                  <code className="text-primary font-mono text-lg break-all">{password}</code>
                  <button
                    onClick={copyToClipboard}
                    className="ml-2 p-2 hover:bg-slate-800 rounded transition flex-shrink-0"
                  >
                    {copied ? (
                      <FiCheck className="text-green-400" />
                    ) : (
                      <FiCopy className="text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Strength Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-400">Strength:</p>
                    <p className={`text-sm font-bold ${strength.color}`}>
                      {strength.label}
                    </p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        strength.level === 1 ? 'w-1/4 bg-red-500' :
                        strength.level === 2 ? 'w-2/4 bg-yellow-500' :
                        strength.level === 3 ? 'w-3/4 bg-blue-500' :
                        'w-full bg-green-500'
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Options */}
            <div className="space-y-6">
              {/* Length */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold">Password Length: {length}</label>
                </div>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-slate-500 mt-1">8 - 32 characters</p>
              </div>

              {/* Character Types */}
              <div>
                <p className="text-sm font-semibold mb-3">Include:</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.uppercase}
                      onChange={(e) => setOptions({ ...options, uppercase: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Uppercase (A-Z)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.lowercase}
                      onChange={(e) => setOptions({ ...options, lowercase: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Lowercase (a-z)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.numbers}
                      onChange={(e) => setOptions({ ...options, numbers: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Numbers (0-9)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.symbols}
                      onChange={(e) => setOptions({ ...options, symbols: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Symbols (!@#$%...)</span>
                  </label>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generatePassword}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <FiRefreshCw />
                Generate Password
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Security Tips:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Use 16+ characters</li>
                <li>✓ Mix uppercase & lowercase</li>
                <li>✓ Include numbers</li>
                <li>✓ Add special symbols</li>
                <li>✓ Avoid dictionary words</li>
              </ul>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Best Practices:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Use unique passwords per site</li>
                <li>✓ Store in password manager</li>
                <li>✓ Never reuse passwords</li>
                <li>✓ Change regularly (90 days)</li>
                <li>✓ Don't share passwords</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
