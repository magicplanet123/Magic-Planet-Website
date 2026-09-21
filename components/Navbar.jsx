'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="container-max flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">🌟 Magic Planet</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-white transition duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/marketplace" className="btn-primary">
            Browse Tools
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 p-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-slate-400 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/marketplace"
            className="block btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Browse Tools
          </Link>
        </div>
      )}
    </nav>
  );
}
