
import { Suspense, useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const SplineHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Spline scene
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      // You can load a Spline scene here when you have one ready
      // app.load('https://prod.spline.design/your-scene-url/scene.splinecode');
    }

    // GSAP animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hero content animation
      tl.fromTo(heroContentRef.current?.children || [], 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out"
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current?.children || [],
        { 
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 1.5,
          ease: "power2.out"
        }
      );

      // Floating animation for buttons
      gsap.to(".floating-btn", {
        y: -5,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

    }, heroContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Spline 3D Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-10"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse-slow z-10"></div>

      {/* Hero Content */}
      <div ref={heroContentRef} className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-orange-500/20 
            rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-lg">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-300">Trusted by 10,000+ businesses worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 
              bg-clip-text text-transparent drop-shadow-lg">
              Advanced AI
            </span>
            <br />
            <span className="text-white">
              Solutions for the
            </span>
            <br />
            <span className="text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">
              Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with Hanumatrix's cutting-edge AI automation, 
            intelligent analytics, and next-generation digital solutions that scale with your ambitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="floating-btn bg-gradient-to-r from-orange-500 to-orange-600 
                hover:from-orange-400 hover:to-orange-500 text-black border-0 
                px-8 py-4 text-lg font-semibold group shadow-lg shadow-orange-500/25
                transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="floating-btn border-orange-500/30 text-white hover:bg-orange-500/10 
                px-8 py-4 text-lg backdrop-blur-sm group shadow-lg
                transform hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-gradient-to-b from-orange-500/10 to-transparent 
              rounded-lg border border-orange-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-orange-500/10 to-transparent 
              rounded-lg border border-orange-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">10M+</div>
              <div className="text-gray-400">API Calls Daily</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-orange-500/10 to-transparent 
              rounded-lg border border-orange-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">500ms</div>
              <div className="text-gray-400">Average Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-float z-30"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-float z-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-300 rounded-full animate-float z-30" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default SplineHero;
