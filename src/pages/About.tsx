import React from 'react';
import { Code, BookOpen, Brain } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C++", "C"]
    },
    {
      category: "Technologies",
      items: ["AI/ML", "Data Science", "Web Development"]
    },
    {
      category: "Platforms",
      items: ["LeetCode", "CodeChef"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Computer Engineering student with a passion for technology and problem-solving.
            Focused on exploring and implementing AI, ML, and Data Science solutions.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Code />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Competitive Programming</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Active participant on LeetCode and CodeChef, solving algorithmic challenges.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <BookOpen />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Education</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                3rd Year Computer Engineering at PCCoE, Pune.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Brain />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Interests</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Passionate about AI, ML, and Data Science projects.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}