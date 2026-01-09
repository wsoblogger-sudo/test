'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);

  const softwareTools = [
    { name: 'Cashflow Tools', href: '/software/cashflow-tools' },
    { name: 'USDTRex Pro', href: '/software/usdtrex-pro' },
    { name: 'Ethercraft Pro', href: '/software/ethercraft-pro' },
    { name: 'Banking BotNet', href: '/software/banking-botnet' },
    { name: 'Arbitrage Trading Robot', href: '/software/arbitrage-trading-robot' },
    { name: 'AiProfitgen X', href: '/software/aiprofitgen-x' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-purple-500/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">AIPROFITGEN</span>
              <span className="text-xs text-purple-300">Automated Money Making Software</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsSoftwareOpen(true)}
              onMouseLeave={() => setIsSoftwareOpen(false)}
            >
              <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                <span>Software Suite</span>
                <svg className={`w-4 h-4 transition-transform ${isSoftwareOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isSoftwareOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 glass rounded-lg py-2 shadow-2xl">
                  {softwareTools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/affiliate" className="text-gray-300 hover:text-white transition-colors">
              Affiliate Program
            </Link>
            
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <Link 
                href="/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-lg font-semibold neon-glow transition-all"
              >
                Create Account
              </Link>
            </div>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              
              <div>
                <button 
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 w-full"
                  onClick={() => setIsSoftwareOpen(!isSoftwareOpen)}
                >
                  <span>Software Suite</span>
                  <svg className={`w-4 h-4 transition-transform ${isSoftwareOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSoftwareOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {softwareTools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/affiliate" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Affiliate Program
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

              <div className="pt-4 border-t border-purple-500/20 space-y-3">
                <Link 
                  href="/login" 
                  className="block text-center text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="block text-center px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-semibold neon-glow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
