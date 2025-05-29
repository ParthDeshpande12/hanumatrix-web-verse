
import { useEffect, useRef, useState } from 'react';
import { Brain, Cpu, Zap, Shield, Globe, ArrowDown } from 'lucide-react';

const Story = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Dynamic GSAP import to handle dependency loading
    const loadGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Header animation
          gsap.fromTo(headerRef.current, 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                end: "bottom 20%",
              }
            }
          );

          // Story steps animations
          stepsRef.current.forEach((step, index) => {
            if (step) {
              gsap.fromTo(step,
                { 
                  opacity: 0, 
                  x: index % 2 === 0 ? -100 : 100,
                  scale: 0.8
                },
                {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                  }
                }
              );

              // Icon rotation animation
              const icon = step.querySelector('.story-icon');
              if (icon) {
                gsap.to(icon, {
                  rotation: 360,
                  duration: 2,
                  ease: "power2.inOut",
                  scrollTrigger: {
                    trigger: step,
                    start: "top 70%",
                    end: "bottom 30%",
                  }
                });
              }
            }
          });

          // Floating particles animation
          const particles = document.querySelectorAll('.floating-particle');
          particles.forEach((particle, index) => {
            gsap.to(particle, {
              y: -20,
              duration: 2 + index * 0.3,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true,
              delay: index * 0.2
            });
          });

        }, containerRef);

        return () => ctx.revert();
      } catch (error) {
        console.log('GSAP not loaded yet, using CSS animations fallback');
      }
    };

    loadGSAP();
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
    <section id="story" className="relative min-h-screen bg-black overflow-hidden" ref={containerRef}>
      {/* Spline 3D Background */}
      <div className="fixed inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-orange-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-24 relative z-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-space font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="text-orange-500 ml-4 drop-shadow-lg">Story</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The journey from vision to revolution
          </p>
          <ArrowDown className="w-6 h-6 text-orange-500 mx-auto mt-8 animate-bounce" />
        </div>

        {/* Story Steps */}
        <div className="space-y-32">
          {storySteps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-2xl ${index % 2 === 0 ? 'text-left' : 'text-right'} 
                bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm 
                border border-orange-500/20 rounded-2xl p-8 shadow-2xl
                hover:border-orange-500/40 transition-all duration-500`}>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 
                  bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-8 
                  shadow-lg shadow-orange-500/25 story-icon
                  ${index % 2 === 0 ? '' : 'ml-auto'}`}>
                  <step.icon className="w-10 h-10 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-3xl md:text-4xl font-space font-bold text-white mb-6 
                  bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.content}
                </p>

                {/* Connecting Line */}
                {index < storySteps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                    w-px h-32 bg-gradient-to-b from-orange-500 to-transparent mt-16" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="text-center mt-40 space-y-8">
          <h3 className="text-4xl font-space font-bold text-white">
            Ready to write the next chapter?
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of businesses already transforming their future with Hanumatrix AI solutions.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black 
              px-8 py-4 rounded-lg font-semibold text-lg 
              hover:from-orange-400 hover:to-orange-500 
              transition-all duration-300 shadow-lg hover:shadow-orange-500/25
              transform hover:scale-105">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Neural Network SVG Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-5">
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
    </section>
  );
};

export default Story;
