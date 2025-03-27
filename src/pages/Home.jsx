import React from "react";
import {
  ArrowRight,
  Code,
  Users,
  BookOpen,
  Star,
  Award,
  Sparkles,
  GraduationCap,
  Globe,
  Heart,
  Target,
  CheckCircle,
  MessageCircle,
  Laptop,
  Brain,
  Shield,
  Clock,
} from "lucide-react";

export default function Home() {
 const successStories = [
    {
      name: "Ada Lovelace ",
      role: " (1815–1852) The First Computer Programmer",
      image:
        "../assets/img/ada.jpg",
      quote:
        "Known for her work on Charles Babbage’s Analytical Engine. She wrote the first algorithm and envisioned computers doing more than calculations laying the foundation for modern computing.",
      
    },
    {
      name: "Radia Perlman",
      role: "(born 1951)Mother of the Internet",
      image:
        "../assets/img/radia.png",
      quote:
        "Invented the Spanning Tree Protocol (STP) which made large scale networking possible. Her contributions shaped how the internet functions today. ",
    
    },
    {
      name: "Reshma Saujani",
      role: "(born 1975)Founder of Girls Who Code",
      image:
        "../assets/img/rashma.png",
      quote:
        "A nonprofit working to close the gender gap in tech. She has empowered millions of girls to learn coding and pursue careers in technology.",
     
    },
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Industry-Relevant Curriculum",
      description:
        "Our programs are designed in collaboration with tech industry leaders to ensure you learn the most in-demand skills.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Supportive Community",
      description:
        "Join a network of ambitious women who support and inspire each other throughout their tech journey.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Flexible Learning",
      description:
        "Learn at your own pace with our carefully crafted online curriculum and flexible scheduling options.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced professionals who have walked the path you're on.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Practical Projects",
      description:
        "Build real-world projects that demonstrate your skills and enhance your portfolio.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Career Support",
      description:
        "Receive ongoing career guidance, interview prep, and job placement assistance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-800">
          <div
            className="absolute inset-0 opacity-65"
            style={{
              backgroundImage: "url('/assets/img/women2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <br />

        <div className="relative max-w-7xl mx-auto px-4 h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-1 items-center">
            <div className="text-white">
              <h1 className="text-1xl md:text-5xl font-bold mb-6">
                Empowering Women
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Transform your future through accessible and impactful tech
                education designed for women, by women. Join a community of
                ambitious learners and industry leaders.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-brand-pink" />
                  <span>4.9/5 Student Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-brand-blue" />
                  <span>500+ Students</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-brand-purple" />
                  <span>Global Community</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-brand-purple px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center space-x-2">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300">
                  Join Community
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="./assets/img/cass3.png"
                alt="Women in Tech"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Why Choose Cassiopeia?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl"
              >
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="bg-gradient-to-br from-brand-pink to-brand-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2 text-brand-pink">
                500+
              </div>
              <div className="text-lg">Women Empower</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2 text-brand-purple">
                92%
              </div>
              <div className="text-lg">Career Advancement</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2 text-brand-blue">
                20+
              </div>
              <div className="text-lg">Industry Partners</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2 text-brand-pink">50+</div>
              <div className="text-lg">Courses </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Featured Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <Code className="w-12 h-12 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  Full-Stack Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Master modern web development with JavaScript, React, Node.js,
                  and more.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>6-month program</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Project-based learning</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Industry mentorship</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-brand-pink to-brand-purple text-white py-2 rounded-lg hover:opacity-90 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-purple to-brand-blue p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <Brain className="w-12 h-12 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  Data Science & AI
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn to analyze data and build ML models using Python and
                  popular frameworks.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>4-month program</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Hands-on projects</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Career coaching</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue text-white py-2 rounded-lg hover:opacity-90 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-pink p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <Shield className="w-12 h-12 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-600 mb-6">
                  Learn to protect systems and networks from digital attacks.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>5-month program</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Lab exercises</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Certification prep</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-brand-blue to-brand-pink text-white py-2 rounded-lg hover:opacity-90 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-purple-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {story.name}
                    </h3>
                    <p className="text-brand-purple text-sm">{story.role}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </div>
                <a
                  href={`https://${story.company}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:text-brand-pink transition-colors duration-200 flex items-center"
                >
                  
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of women who have transformed their careers through
            our programs. Take the first step towards your future in tech today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-brand-purple px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-semibold flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="tel:+251962042225">
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
              Call
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
