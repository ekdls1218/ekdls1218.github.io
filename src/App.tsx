import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Github,
  ExternalLink,
  Mail,
  Pen,
  Calendar,
} 
from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'activities', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    { title: "포폴1", description: "포폴1 소개", tech: ["기술1", "기술2", "기술3", "기술4"], github: "#", live: "#" },
    { title: "포폴2", description: "포폴2 소개", tech: ["기술1", "기술2", "기술3", "기술4"], github: "#", live: "#" },
    { title: "포폴3", description: "포폴3 소개", tech: ["기술1", "기술2", "기술3", "기술4"], github: "#", live: "#" },
  ];

  const skillCards = [
    {
      title: "기술1",
      desc: "기술 설명"
    },
    {
      title: "기술2",
      desc: "기술 설명"
    },
    {
      title: "기술3",
      desc: "기술 설명"
    },
    {
      title: "기술4",
      desc: "기술 설명"
    },
  ];

  const activities = [
    {
      title: "활동 1",
      role: "참가자",
      org: "참여 기관",
      period: "기간",
      desc: "활동 설명",
      link: "#"
    },
    {
      title: "활동 2",
      role: "참가자",
      org: "참여 기관",
      period: "기간",
      desc: "활동 설명",
      link: "#"
    },
    {
      title: "활동 3",
      role: "참가자",
      org: "참여 기관",
      period: "기간",
      desc: "활동 설명",
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['home','about','skills','projects','activities','contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-purple-600 ${
                    activeSection === item ? 'text-purple-600' : 'text-gray-600'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* main */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">KIM DAIN</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">한줄 소개</p>
          <div className="flex justify-center space-x-4 mb-12">
            <button onClick={() => scrollToSection('projects')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              프로젝트 보기
            </button>
            <button onClick={() => scrollToSection('contact')}
              className="border border-gray-300 hover:border-purple-600 hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              연락하기
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">좀 더 자세한 자기소개</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Skills*/}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCards.map((card) => (
              <div key={card.title}
                   className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                  </div>

                  <div className="space-y-5">
                    {card.desc}
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}
                   className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech}
                            className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs border border-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github}
                       className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                      <Github className="w-4 h-4" /><span className="text-sm">Code</span>
                    </a>
                    <a href={project.live}
                       className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                      <ExternalLink className="w-4 h-4" /><span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Activities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act) => (
              <div key={`${act.title}-${act.period}`}
                   className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{act.title}</h3>
                      <div className="text-sm text-gray-500">{act.org} • {act.role}</div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 whitespace-nowrap">
                      <Calendar className="w-4 h-4 mr-1" />
                      {act.period}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5">{act.desc}</p>

                  <div className="flex gap-3">
                    {act.link && (
                      <a href={act.link}
                         className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" /> 자세히
                      </a>
                    )}
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <Mail className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">이메일 주소</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <Github className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">GitHub</h3>
              <p className="text-gray-600">깃허브 주소</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <Pen className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Notion</h3>
              <p className="text-gray-600">노션 주소</p>
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            이력서 다운로드
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
