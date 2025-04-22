import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const activeClass = 'text-indigo-600';
  const inactiveClass = 'text-gray-600 hover:text-gray-900';

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={isActive('/') ? activeClass : inactiveClass}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={isActive('/about') ? activeClass : inactiveClass}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={isActive('/projects') ? activeClass : inactiveClass}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={isActive('/contact') ? activeClass : inactiveClass}
            >
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/1Mh63P-WejIw5pNFEz9uKNlG17ckJANzx/view?usp=drivesdk"
              download="krushna-nepate-resume.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <FileDown size={18} className="mr-2" />
              Download Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/1Mh63P-WejIw5pNFEz9uKNlG17ckJANzx/view?usp=drivesdk"
              download="krushna-nepate-resume.pdf"
              className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-700"
            >
              <div className="flex items-center">
                <FileDown size={18} className="mr-2" />
                Download Resume
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
