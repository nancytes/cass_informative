import React from 'react';
import { Code, Terminal, Database, Cloud, Brain, Shield } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Master modern web development with JavaScript, React, Node.js, and more.",
      duration: "6 months",
      level: "Beginner to Advanced"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science & Analytics",
      description: "Learn to analyze data and build ML models using Python and popular frameworks.",
      duration: "4 months",
      level: "Intermediate"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Design and implement scalable solutions using AWS, Azure, and GCP.",
      duration: "5 months",
      level: "Advanced"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Deep dive into artificial intelligence and machine learning algorithms.",
      duration: "6 months",
      level: "Advanced"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "DevOps Engineering",
      description: "Master the tools and practices for modern software delivery.",
      duration: "4 months",
      level: "Intermediate"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Learn to protect systems and networks from digital attacks.",
      duration: "5 months",
      level: "Intermediate to Advanced"
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-blue-800  py-20 px-4 md:px-8 relative text-white">
      <div className="absolute inset-0 opacity-45" style={{
            backgroundImage: "url('/assets/img/women2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        <div className="max-w-7xl mx-auto px-4">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <br />
            <br />
            Transform Your Career with Our Programs
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Industry-aligned curriculum designed to help you master the skills that matter most in today's tech landscape.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="border border-purple-100 rounded-lg p-8 hover:shadow-lg transition duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-purple-600">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex flex-col space-y-2 text-sm text-gray-500">
                  <div>Duration: {program.duration}</div>
                  <div>Level: {program.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Learning Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Project-Based Learning</h3>
              <p className="text-gray-600">Build real-world projects that demonstrate your skills to potential employers.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">1:1 Mentorship</h3>
              <p className="text-gray-600">Regular sessions with experienced mentors who guide your learning journey.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Career Support</h3>
              <p className="text-gray-600">Resume reviews, interview prep, and job placement assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}