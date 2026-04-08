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
      <div
        className={`md:hidden overflow-hidden transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="bg-white border-b border-gray-100 shadow-sm">
          {/* User Profile Row */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-2">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-700">
              RK
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Rahul Khan</p>
              <p className="text-xs text-gray-500">rahul@example.com</p>
            </div>
          </div>

          <div className="h-px bg-gray-100 mx-4 my-2" />

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-0.5 px-3 pb-2">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}
                      >
                        {link.icon}
                      </span>
                      {link.name}
                      {link.badge && (
                        <span className="text-[10px] font-semibold bg-red-100 text-red-600 rounded-full px-1.5 py-0.5">
                          {link.badge}
                        </span>
                      )}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke={isActive ? '#15803d' : '#d1d5db'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={`transition-transform duration-200 ${isActive ? 'translate-x-0.5' : ''}`}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="h-px bg-gray-100 mx-4 mb-3" />

          {/* Mobile Buttons */}
          <div className="flex gap-2 px-4 pb-4">
            <button className="flex-1 py-2.5 rounded-xl bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition-colors">
              Sign In
            </button>
            <button className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
