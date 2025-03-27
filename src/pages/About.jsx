import React from 'react';
import { 
  Heart, Target, Sparkles, BookOpen, Users, 
  Award, Star, Globe, ArrowRight, CheckCircle,
  GraduationCap, Code, Brain, MessageCircle
} from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empowerment",
      description: "Providing women with the tools, knowledge, and confidence to succeed in tech."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining high standards in education and support through industry-leading programs."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing new technologies and teaching methods to stay ahead of industry trends."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Growth",
      description: "Fostering continuous learning and personal development in every member."
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Students",
      description: "Will join our program"
    },
    {
      number: "90%",
      label: "Success Rate",
      description: "will graduate from us"
    },
    {
      number: "10+",
      label: "Partners",
      description: "Industry leading tech companies"
    },
    {
      number: "15+",
      label: "Courses",
      description: "Software Courses"
    }
  ];

  const teamMembers = [
    {
      name: "Serkalem Delelegn",
      role: "Founder",
      image: "./assets/img/serk.png",
      bio: "Serkalem Delegn is a Software Engineer with expertise in full-stack development. She is skilled in JavaScript, Node.js and React. Serkalem is passionate about creating user-friendly web applications and empowering women in tech through initiatives like Cassiopia Girls Tech",
      expertise: ["Software Engineer", "serkalem@cassiopeiatech.org "]
    },
    {
      name: "Nancy Tesfaye",
      role: "Founder",
      image: "./assets/img/nan.png",
      bio: "Nancy Tesfaye is a Software Engineer specializing in fullstack development. She is proficient in React, Node.js and CSS. She is committed to building impactful applications and supporting women in tech through Cassiopia Girls Tech.",
      expertise: [
        "Software Engineer",
        "nancy@cassiopeiatech.org"
      ]
    },
    {
      name: "Ezedin Kamil",
      role: "Co-Founder",
      image: "./assets/img/ezu.png",
      bio: "Ezedin Kamil is an Ethiopian innovator and entrepreneur. He specializes in hardware innovation, renewable energy and digital transformation developing cutting-edge solutions to drive technological progress. His work in electric mobility and smart technologies has earned him multiple awards and recognition.",
      expertise: ["CEO of Ibex Technologies, Hex Labs Technologies and Tina Mart" , "ezedin@cassiopeiatech.org"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[75vh] px-4 md:px-8 ">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 " 
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
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-4 h-full">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Transforming Tech Education for Women
              </h1>
              <p className="text-xl text-white max-w-2xl mb-8 drop-shadow-md">
              We're on a mission to create a more diverse and inclusive tech industry by empowering women 
                  through education, community, and opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Users className="w-5 h-5 text-brand-blue" />
                  <span className="font-medium text-white">Award-Winning Programs</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Globe className="w-5 h-5 text-brand-pink" />
                  <span className="font-medium text-white">Global Impact</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Heart className="w-5 h-5 text-brand-purple" />
                  <span className="font-medium text-white">Diverse Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl">
              <div className="bg-white p-8 rounded-xl h-full">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
                <p className="text-gray-600 mb-8">
                  Cassiopeia is dedicated to breaking down barriers and creating pathways for women to excel in technology. 
                  We believe in the power of education, mentorship, and community to transform lives and create a more 
                  diverse, inclusive tech industry.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Provide world-class tech education designed for women</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Build a supportive global community of women in tech</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Create opportunities for career advancement and leadership</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-purple to-brand-blue p-[2px] rounded-xl">
              <div className="bg-white p-8 rounded-xl h-full">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
                <p className="text-gray-600 mb-8">
                  We envision a future where women are equally represented and valued in technology, where diverse 
                  perspectives drive innovation, and where every woman has the opportunity to realize her full potential in tech.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Achieve gender parity in tech leadership positions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Foster innovation through diverse perspectives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Create a global network of empowered women in tech</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-brand-pink to-brand-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-8">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl mb-2">{achievement.label}</div>
                <div className="text-sm text-purple-200">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl">
                <div className="bg-white rounded-xl p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-brand-purple text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-center">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, i) => (
                      <span 
                        key={i}
                        className="bg-purple-50 text-brand-purple px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}