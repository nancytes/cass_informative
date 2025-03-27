import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Code, Terminal, Database, Cloud, Brain, Shield, 
  GraduationCap, Users, BookOpen, Star, Award, 
  Laptop, Clock, CheckCircle, ArrowRight, Globe 
} from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Programs() {
  const programs = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Master modern web development with JavaScript, React, Node.js, and more. Build real-world applications while learning industry best practices.",
      duration: "6 months",
      level: "Beginner to Advanced",
      highlights: [
        "Modern JavaScript & TypeScript",
        "React & Node.js Ecosystem",
        "Database Design & API Development",
        "DevOps & Deployment"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable insights. Learn Python, statistical analysis, machine learning, and data visualization techniques.",
      duration: "4 months",
      level: "Intermediate",
      highlights: [
        "Python for Data Science",
        "Statistical Analysis",
        "Machine Learning Basics",
        "Data Visualization"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Design and implement scalable cloud solutions. Master AWS, Azure, and GCP while learning modern cloud architecture patterns.",
      duration: "5 months",
      level: "Advanced",
      highlights: [
        "Multi-Cloud Strategies",
        "Serverless Architecture",
        "Container Orchestration",
        "Cloud Security"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Dive deep into artificial intelligence and machine learning. Build intelligent systems and understand advanced ML concepts.",
      duration: "6 months",
      level: "Advanced",
      highlights: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Neural Networks"
      ]
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "DevOps Engineering",
      description: "Master the tools and practices for modern software delivery. Learn CI/CD, infrastructure as code, and monitoring solutions.",
      duration: "4 months",
      level: "Intermediate",
      highlights: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Site Reliability"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect systems and networks from digital attacks. Learn offensive and defensive security techniques.",
      duration: "5 months",
      level: "Intermediate to Advanced",
      highlights: [
        "Network Security",
        "Ethical Hacking",
        "Security Auditing",
        "Incident Response"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full px-4 md:px-6 pt-5">
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0" 
    style={{
      backgroundImage: "url('/assets/img/women2.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Dark overlay for better text visibility */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-blue-900/90 opacity-40"></div>
  </div>

  {/* Content */}
  <div className="relative h-full w-full">
    <div className="px-4 h-full w-full">
      <div className="grid grid-cols-1 gap-12 items-center  h-full">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Transform Your Career with <br /> Our Programs
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            Industry-aligned curriculum designed to help you master the skills that matter most in  <br /> today's tech landscape.
            Learn from experts, build real projects, and join a community  <br /> of ambitious women in tech.
          </p>
          <div className="flex flex-wrap gap-4 ">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Star className="w-5 h-5 text-brand-pink" />
              <span className="font-medium">4.9/5 Student Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Users className="w-5 h-5 text-brand-blue" />
              <span className="font-medium">5000+ Graduates</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Globe className="w-5 h-5 text-brand-purple" />
              <span className="font-medium">Global Community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





      {/* Why Choose Us */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Why Choose Cassiopeia</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <div className="bg-gradient-to-br from-brand-pink to-brand-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert-Led Training</h3>
                <p className="text-gray-600">
                  Learn from industry veterans with years of experience at top tech companies.
                  Get personalized guidance and mentorship throughout your journey.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-purple to-brand-blue p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <div className="bg-gradient-to-br from-brand-purple to-brand-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hands-On Projects</h3>
                <p className="text-gray-600">
                  Build real-world projects that showcase your skills to potential employers.
                  Graduate with a portfolio that stands out.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-pink p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <div className="bg-gradient-to-br from-brand-blue to-brand-pink w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Supportive Community</h3>
                <p className="text-gray-600">
                  Join a network of ambitious women in tech. Share experiences, get support,
                  and build lasting professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-purple-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Programs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue p-6 text-white">
                  <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{program.level}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="space-y-3">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-brand-purple" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 w-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Learning Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-brand-pink to-brand-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Project-Based Learning</h3>
              <p className="text-gray-600">
                Learn by doing with hands-on projects that simulate real-world scenarios.
                Build a portfolio that demonstrates your expertise to potential employers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-brand-purple to-brand-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">1:1 Mentorship</h3>
              <p className="text-gray-600">
                Regular sessions with experienced mentors who guide your learning journey.
                Get personalized feedback and career guidance throughout the program.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-brand-blue to-brand-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Career Support</h3>
              <p className="text-gray-600">
                Comprehensive career services including resume reviews, interview prep,
                and direct connections to our network of hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of women who have transformed their careers through our programs.
            Take the first step towards your future in tech today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-brand-purple px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-semibold">
              Apply Now
            </button>
            <Link to="/Contact">
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
             Call
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}