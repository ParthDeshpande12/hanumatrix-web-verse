
import { useEffect, useRef, useState } from 'react';
import { Brain, Cpu, Zap, Shield, Globe, ArrowDown } from 'lucide-react';

const Story = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const storySteps = [
    {
      icon: Brain,
      title: "The Vision",
      content: "In 2020, a team of visionaries recognized that artificial intelligence wasn't just the future—it was the present waiting to be unlocked. They saw businesses struggling with outdated processes, drowning in data, and missing opportunities that AI could illuminate."
    },
    {
      icon: Cpu,
      title: "The Foundation",
      content: "Building upon cutting-edge neural networks and quantum computing principles, Hanumatrix was born. Our founders combined decades of experience in machine learning, data science, and enterprise solutions to create something revolutionary."
    },
    {
      icon: Zap,
      title: "The Breakthrough",
      content: "The first major milestone came when our AI successfully automated a Fortune 500 company's entire customer service pipeline, reducing response times by 95% while increasing customer satisfaction to unprecedented levels."
    },
    {
      icon: Shield,
      title: "The Trust",
      content: "Security and reliability became our cornerstone. With bank-level encryption and 99.9% uptime, enterprises worldwide began trusting Hanumatrix with their most critical operations and sensitive data."
    },
    {
      icon: Globe,
      title: "The Future",
      content: "Today, Hanumatrix powers AI solutions across 50+ countries, processing millions of decisions per second. But this is just the beginning. We're building the neural foundation for humanity's next evolutionary leap."
    }
  ];

  return (
    <section id="story" className="relative min-h-[200vh] bg-black overflow-hidden">
      <div ref={containerRef} className="relative">
        {/* Background Parallax Elements */}
        <div 
          className="fixed inset-0 opacity-10"
          style={{ transform: `translateY(${scrollY * 100}px)` }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-400/15 rounded-full blur-2xl"></div>
        </div>

        {/* Floating Particles */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${scrollY * (50 + i * 10)}px)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-24">
          {/* Header */}
          <div className="text-center mb-20 sticky top-20 z-10">
            <h2 className="text-5xl md:text-7xl font-space font-bold mb-6">
              <span className="text-white">Our</span>
              <span className="text-orange-500 ml-4">Story</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The journey from vision to revolution
            </p>
            <ArrowDown className="w-6 h-6 text-orange-500 mx-auto mt-8 animate-bounce" />
          </div>

          {/* Story Steps */}
          <div className="space-y-40">
            {storySteps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  transform: `translateY(${(1 - scrollY) * (index * 20)}px)`,
                  opacity: Math.max(0.3, 1 - Math.abs(scrollY - (index + 1) * 0.15))
                }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-2xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-8 ${index % 2 === 0 ? '' : 'ml-auto'}`}>
                      <step.icon className="w-10 h-10 text-black" />
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl md:text-4xl font-space font-bold text-white mb-6">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {step.content}
                    </p>

                    {/* Connecting Line */}
                    {index < storySteps.length - 1 && (
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-px h-40 bg-gradient-to-b from-orange-500 to-transparent mt-20`} />
                    )}
                  </div>
                </div>

                {/* Background Accent */}
                <div 
                  className={`absolute inset-0 ${index % 2 === 0 ? '-left-20' : '-right-20'} w-1 bg-gradient-to-b from-transparent via-orange-500/30 to-transparent`}
                  style={{ height: '120%' }}
                />
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div 
            className="text-center mt-40 space-y-8"
            style={{
              transform: `translateY(${(1 - scrollY) * 50}px)`,
              opacity: Math.max(0, scrollY - 0.7) * 3
            }}
          >
            <h3 className="text-4xl font-space font-bold text-white">
              Ready to write the next chapter?
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of businesses already transforming their future with Hanumatrix AI solutions.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>

        {/* Neural Network Background */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-orange-500">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-orange-500" opacity="0.3" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-orange-500" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Story;
