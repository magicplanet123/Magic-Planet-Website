'use client';

import { useState } from 'react';
import QRCode from 'qrcode.react';
import { FiDownload, FiCopy } from 'react-icons/fi';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrSize, setQrSize] = useState(256);
  const [copied, setCopied] = useState(false);
  const qrRef = React.useRef();

  const downloadQR = () => {
    const element = qrRef.current?.querySelector('canvas');
    if (element) {
      const url = element.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = `qrcode-${Date.now()}.png`;
      link.click();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">QR Code Generator</h1>
          <p className="text-xl text-slate-300">
            Create QR codes for URLs, text, contact info, and more
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="section-padding">
        <div className="container-max max-w-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="glass border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Generate QR Code</h2>

              <div className="space-y-6">
                {/* Text Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Content</label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter URL, text, or contact information..."
                    rows="6"
                    maxLength="2953"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary resize-none"
                  />
                  <p className="text-xs text-slate-500 mt-1">{text.length}/2953 characters</p>
                </div>

                {/* Size */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold">Size: {qrSize}px</label>
                  </div>
                  <input
                    type="range"
                    min="128"
                    max="512"
                    value={qrSize}
                    onChange={(e) => setQrSize(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-xs text-slate-500 mt-1">128px - 512px</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={copyToClipboard}
                    disabled={!text}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <FiCopy />
                    Copy Content
                  </button>
                  <button
                    onClick={downloadQR}
                    disabled={!text}
                    className="w-full bg-secondary hover:bg-secondary/80 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <FiDownload />
                    Download QR Code
                  </button>
                </div>
              </div>
            </div>

            {/* QR Code Display */}
            <div className="glass border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-96">
              {text ? (
                <div ref={qrRef} className="bg-white p-4 rounded-lg">
                  <QRCode
                    value={text}
                    size={qrSize}
                    level="H"
                    includeMargin={true}
                  />
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-4xl mb-4">📱</p>
                  <p className="text-slate-400">Enter content above to generate QR code</p>
                </div>
              )}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Use Cases:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Product packaging labels</li>
                <li>✓ Business cards</li>
                <li>✓ Event tickets</li>
                <li>✓ WiFi sharing</li>
                <li>✓ Payment links</li>
                <li>✓ Marketing campaigns</li>
              </ul>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Tips:</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Keep content under 2953 chars</li>
                <li>✓ Test code before printing</li>
                <li>✓ Use high contrast colors</li>
                <li>✓ Ensure 1cm+ size for scanning</li>
                <li>✓ Download as PNG for best quality</li>
              </ul>
            </div>
          </div>

          {/* Supported Formats */}
          <div className="mt-8 glass border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Supported Content Types:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-primary mb-2">URLs</p>
                <code className="text-slate-300 text-xs">https://example.com</code>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">WiFi</p>
                <code className="text-slate-300 text-xs">WIFI:T:WPA;S:SSID;P:PASS;;
</code>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Email</p>
                <code className="text-slate-300 text-xs">mailto:email@example.com</code>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Phone</p>
                <code className="text-slate-300 text-xs">tel:+1234567890</code>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">SMS</p>
                <code className="text-slate-300 text-xs">smsto:+1234567890</code>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Text</p>
                <code className="text-slate-300 text-xs">Any plain text</code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Use React reference syntax
import React from 'react';
