import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Download, Database, Code, BarChart, Table, Phone, Search, LayoutDashboard, Sigma, Cloud, Sun, Moon, Briefcase, Award, GraduationCap, Lightbulb, User, FolderDot, GitPullRequestDraft, MessageSquare, Brain, Eye
} from 'lucide-react';

// Main App Component
const App = () => {
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Apply theme classes to body
  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
    // Set font family for the entire body
    body.style.fontFamily = "'Inter', sans-serif";
  }, [theme]);

  // Define colors based on theme
  const bgColor = theme === 'dark' ? 'bg-gradient-to-br from-slate-950 via-gray-900 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800/70' : 'bg-white/80';
  const accentColor = theme === 'dark' ? 'text-sky-400' : 'text-blue-600';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  // Project data
  const projects = [
    {
      id: 1,
      name: 'Call Center Performance Dashboard',
      tools: 'Power BI, SQL',
      description: 'Developed a comprehensive dashboard to monitor key call center metrics including Service Level Agreement (SLA), call volumes, and agent KPIs. Implemented SQL queries for data extraction and transformation, and utilized Power BI for interactive visualizations, providing actionable insights into routing logic and operational efficiency.',
      metrics: 'SLA, Call Volumes, Agent KPIs, Routing Logic',
      downloadLink: '#', // Placeholder link
      image: 'https://placehold.co/600x400/000000/FFFFFF?text=Dashboard+Mockup+1',
    },
    {
      id: 2,
      name: 'Gold & Silver Price Trend Analysis (10 years)',
      tools: 'Python, Pandas, Matplotlib',
      description: 'Conducted an in-depth analysis of gold and silver price trends over a decade using Python. Leveraged Pandas for data manipulation and Matplotlib for visualizing historical price movements, identifying key patterns and potential future trends. This project showcases data cleaning, analysis, and visualization skills.',
      metrics: 'Historical Price Trends, Volatility, Correlation',
      downloadLink: '#', // Placeholder link
      image: 'https://placehold.co/600x400/000000/FFFFFF?text=Analysis+Chart+Mockup+2',
    },
    {
      id: 3,
      name: 'Stock Market Price Prediction (Nifty 50, Bank Nifty, Sensex)',
      tools: 'Linear Regression, ARIMA, LSTM (future enhancement plan)',
      description: 'Explored various machine learning models for predicting stock market prices (Nifty 50, Bank Nifty, Sensex). Implemented Linear Regression and ARIMA models, with plans for future enhancement using LSTM networks. This project demonstrates foundational knowledge in predictive modeling and time series analysis.',
      metrics: 'Prediction Accuracy, Model Performance',
      downloadLink: '#', // Placeholder link
      image: 'https://placehold.co/600x400/000000/FFFFFF?text=Prediction+Model+Mockup+3',
    },
    {
      id: 4,
      name: 'COVID-19 Analysis using SQL',
      tools: 'SQL, Power BI',
      description: 'Performed a detailed analysis of COVID-19 data using SQL for data extraction and aggregation. Created insightful visualizations in Power BI to present key trends, case distributions, and mortality rates, showcasing proficiency in database querying and data storytelling.',
      metrics: 'Case Trends, Mortality Rates, Regional Impact',
      downloadLink: '#', // Placeholder link
      image: 'https://placehold.co/600x400/000000/FFFFFF?text=COVID-19+Visuals+Mockup+4',
    },
  ];

  // Categorized Skills Data
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: Code,
      skills: [
        'Python (Pandas, NumPy)',
        'SQL (PostgreSQL, MySQL, MS SQL Server)',
        'R (ggplot2, dplyr) - Basic',
      ]
    },
    {
      name: 'Data Visualization',
      icon: BarChart,
      skills: [
        'Power BI',
        'Basic Tableau',
        'Matplotlib, Seaborn (Python)',
        'ggplot2 (R)',
      ]
    },
    {
      name: 'Databases & Tools',
      icon: Database,
      skills: [
        'SQL',
        'Microsoft Excel',
        'CUIC',
        'Regex',
        'REST API Concepts',
        'Jupyter Notebooks',
      ]
    },
    {
      name: 'Statistical Analysis',
      icon: Sigma,
      skills: [
        'Statistics (General)',
        'Hypothesis Testing',
        'Regression Analysis',
        'A/B Testing',
        'Time Series Analysis',
      ]
    },
    {
      name: 'Machine Learning Basics',
      icon: Brain,
      skills: [
        'Linear Regression',
        'ARIMA',
        'LSTM (Conceptual)',
        'Clustering',
        'Classification',
        'Regression Models',
      ]
    },
    {
      name: 'Soft Skills',
      icon: MessageSquare,
      skills: [
        'Problem Solving',
        'Communication',
        'Critical Thinking',
        'Attention to Detail',
      ]
    },
  ];

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500`}>
      {/* Font loading for Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-3 rounded-full shadow-lg z-50 transition-all duration-300
          ${theme === 'dark' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-blue-200 text-blue-800 hover:bg-blue-300'}`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Header/Navigation */}
      <header className={`py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center sticky top-0 z-40 ${cardBg} bg-opacity-90 backdrop-blur-md border-b ${borderColor} shadow-lg`}>
        {/* Added Name as a simple logo */}
        <div className="text-2xl font-bold">
          <span className={accentColor}>Jyothirmai N</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-medium">
          <a href="#about" className={`hover:${accentColor} transition-colors duration-300`}>About Me</a>
          <a href="#skills" className={`hover:${accentColor} transition-colors duration-300`}>Skills</a>
          <a href="#projects" className={`hover:${accentColor} transition-colors duration-300`}>Projects</a>
          <a href="#certifications" className={`hover:${accentColor} transition-colors duration-300`}>Certifications</a>
          <a href="#resume" className={`hover:${accentColor} transition-colors duration-300`}>Resume</a>
          <a href="#contact" className={`hover:${accentColor} transition-colors duration-300`}>Contact</a>
        </nav>
      </header>

      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-12 space-y-24">

        {/* Hero Section / About Me Intro */}
        <section id="hero" className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-100px)] py-16">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 leading-tight">
              Hello, I'm <span className={`${accentColor} drop-shadow-lg`}>Jyothirmai N</span>
            </h1>
            {/* Consolidated tagline with leading-relaxed for better line spacing */}
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              A passionate Data Analyst, I leverage 5+ years of robust IT experience from my background as a <span className="font-semibold">Cisco Voice Engineer & System Administrator</span> to transform complex data into actionable insights.
            </p>
            <a href="#projects" className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300
              ${theme === 'dark' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
              transform hover:scale-105`}>
              Explore My Work <FolderDot className="ml-2" size={20} />
            </a>
          </div>
        </section>

        {/* About Me Section - Now focused on narrative */}
        <section id="about" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl font-bold text-center mb-12 ${textColor}`}>About Me</h2>
          <div className={`max-w-4xl mx-auto p-8 rounded-3xl shadow-xl ${cardBg} border ${borderColor}`}>
            <p className="text-lg leading-relaxed mb-6">
              With over 5 years of experience at TCS as a Cisco Voice Engineer and System Administrator, I've honed my problem-solving, analytical, and technical skills in complex IT environments. My passion for data-driven insights has led me to pivot my career towards Data Analytics and Data Science.
            </p>
            <p className="text-lg leading-relaxed">
              I am actively building a strong foundation in data analysis methodologies, statistical concepts, and machine learning techniques, eager to apply my diverse background to extract meaningful insights and drive strategic decisions.
            </p>
          </div>
        </section>

        {/* New Skills & Expertise Section */}
        <section id="skills" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl font-bold text-center mb-12 ${textColor}`}>Skills & Expertise</h2>
          <div className={`max-w-6xl mx-auto p-8 rounded-3xl shadow-xl ${cardBg} border ${borderColor}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className={`p-6 rounded-lg ${cardBg} border ${borderColor} shadow-md transition-transform duration-300 ${hoverBg}`}>
                  <h4 className={`text-xl font-semibold mb-3 flex items-center ${accentColor}`}>
                    {category.icon && React.createElement(category.icon, { size: 20, className: 'mr-2' })}
                    {category.name}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-base opacity-90">
                    {category.skills.map((skill, sIndex) => (
                      <li key={sIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section - Now a separate section */}
        <section id="certifications" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl font-bold text-center mb-12 ${accentColor}`}>Certifications</h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-3xl shadow-xl ${cardBg} border ${borderColor}`}>
            <div className={`flex flex-col items-center text-center p-6 rounded-lg ${hoverBg} transition-transform duration-300 hover:scale-105`}>
              <img src="https://placehold.co/100x100/A78BFA/FFFFFF?text=Google" alt="Google Data Analytics Logo" className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-semibold mb-2">Google Data Analytics</h3>
              <p className="text-sm opacity-80">Comprehensive training in data analysis tools and techniques.</p>
            </div>
            <div className={`flex flex-col items-center text-center p-6 rounded-lg ${hoverBg} transition-transform duration-300 hover:scale-105`}>
              <img src="https://placehold.co/100x100/6366F1/FFFFFF?text=Microsoft" alt="Microsoft PL-300 Logo" className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-semibold mb-2">Microsoft PL-300 (Power BI)</h3>
              <p className="text-sm opacity-80">Certified in designing and building scalable data models with Power BI.</p>
            </div>
            <div className={`flex flex-col items-center text-center p-6 rounded-lg ${hoverBg} transition-transform duration-300 hover:scale-105`}>
              <img src="https://placehold.co/100x100/F97316/FFFFFF?text=SEBI" alt="SEBI Logo" className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-semibold mb-2">SEBI Investor Certification</h3>
              <p className="text-sm opacity-80">Understanding of financial markets and investor protection.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl font-bold text-center mb-12 ${accentColor}`}>My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map(project => (
              <div key={project.id} className={`rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${cardBg} border ${borderColor}`}>
                <img src={project.image} alt={project.name} className="w-full h-60 object-cover object-center border-b border-gray-700" />
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                  <p className="text-base mb-4 opacity-80">{project.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold flex items-center mb-2"><Code className={`mr-2 ${accentColor}`} size={18} />Tools: <span className="ml-2 font-normal">{project.tools}</span></p>
                    <p className="font-semibold flex items-center"><BarChart className={`mr-2 ${accentColor}`} size={18} />Key Metrics: <span className="ml-2 font-normal">{project.metrics}</span></p>
                  </div>
                  <a
                    href={project.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-full text-base font-semibold transition-all duration-300
                      ${theme === 'dark' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
                      transform hover:scale-105`}
                  >
                    Download/View <Download className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume Download Section */}
        <section id="resume" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl font-bold text-center mb-8 ${accentColor}`}>Download My Resume</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-center">
            Access my detailed professional experience, skills, and achievements.
          </p>
          <div className="flex justify-center">
            <a
              href="https://example.com/your-resume.pdf" // Placeholder link
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-10 py-5 rounded-full text-xl font-semibold shadow-xl transition-all duration-300
                ${theme === 'dark' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
                transform hover:scale-105`}
            >
              Download Resume <Download className="ml-3" size={24} />
            </a>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl font-bold text-center mb-12 ${accentColor}`}>Contact Me</h2>
          <div className={`max-w-3xl mx-auto p-8 rounded-3xl shadow-xl ${cardBg} border ${borderColor}`}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-3 rounded-lg border ${borderColor} focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 text-gray-100 focus:ring-sky-500' : 'bg-white text-gray-800 focus:ring-blue-500'}`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-3 rounded-lg border ${borderColor} focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 text-gray-100 focus:ring-sky-500' : 'bg-white text-gray-800 focus:ring-blue-500'}`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full p-3 rounded-lg border ${borderColor} focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 text-gray-100 focus:ring-sky-500' : 'bg-white text-gray-800 focus:ring-blue-500'}`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300
                  ${theme === 'dark' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
                  transform hover:scale-105`}
              >
                Send Message
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-xl font-semibold mb-4">Connect with me:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/jyothirmai-n" // Placeholder link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full shadow-lg transition-all duration-300 ${cardBg} ${hoverBg} border ${borderColor} transform hover:scale-110`}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={30} className={accentColor} />
                </a>
                <a
                  href="https://github.com/your-github-profile" // Placeholder link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full shadow-lg transition-all duration-300 ${cardBg} ${hoverBg} border ${borderColor} transform hover:scale-110`}
                  aria-label="GitHub profile"
                >
                  <Github size={30} className={accentColor} />
                </a>
                <a
                  href="mailto:your.email@example.com" // Placeholder link
                  className={`p-4 rounded-full shadow-lg transition-all duration-300 ${cardBg} ${hoverBg} border ${borderColor} transform hover:scale-110`}
                  aria-label="Email me"
                >
                  <Mail size={30} className={accentColor} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm opacity-70 ${cardBg} border-t ${borderColor}`}>
        <p>&copy; {new Date().getFullYear()} Jyothirmai N. All rights reserved.</p>
        <p>Designed and Developed with <span className="text-red-500">&hearts;</span></p>
      </footer>

      {/* Tailwind CSS Script - Must be at the end of the body or in the head */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default App;
