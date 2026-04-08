import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      to: '/',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: 'Books',
      to: '/books',

      icon: (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      name: 'Pages to Read',
      to: '/pages',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-700 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              Book <span className="text-amber-700">Vibe</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? 'text-green-700 after:absolute after:bottom-[-1px] after:left-3.5 after:right-3.5 after:h-0.5 after:bg-green-700 after:rounded-t'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
                {link.badge && (
                  <span className="text-[10px] font-semibold bg-red-100 text-red-600 rounded-full px-1.5 py-0.5">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button className="px-5 py-2 rounded-lg bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition-all hover:-translate-y-0.5 duration-200">
              Sign In
            </button>
            <button className="px-5 py-2 rounded-lg border border-gray-200 text-gray-800 text-sm font-medium hover:bg-gray-50 transition-all hover:-translate-y-0.5 duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-500 rounded transition-all duration-300 origin-center ${isMenuOpen ? 'translate-y-2 rotate-45 bg-green-700' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-500 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-500 rounded transition-all duration-300 origin-center ${isMenuOpen ? '-translate-y-2 -rotate-45 bg-green-700' : ''}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <h2 className="font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 text-xl cursor-pointer hover:text-gray-700 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* User Profile (keep your design) */}
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-700">
              MD
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">SOHAN</p>
              <p className="text-xs text-gray-500">islammdsohan603gmail.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 px-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-all duration-500
            ${
              isMenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }
            ${
              isActive
                ? 'bg-green-50 text-green-700'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`
                }
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-100">
                    {link.icon}
                  </span>
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="mt-auto px-4 pb-6 flex flex-col gap-3"
          >
            <button className="w-full py-2.5 rounded-xl bg-green-700 text-white cursor-pointer hover:bg-green-800 transition-all">
              Sign In
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-2.5 rounded-xl border cursor-pointer border-gray-200 text-gray-800 hover:bg-gray-100 transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
