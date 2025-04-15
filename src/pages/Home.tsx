import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Krushna Nepate</span>
            <span className="block text-indigo-600">Computer Engineering Student</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            3rd year student at PCCoE, Pune. Passionate about AI, ML, and Data Science.
            I love discovering and working with new technologies.
          </p>
          <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact Me
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}