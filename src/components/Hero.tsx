
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyber-purple/5 to-cyber-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-cyber-cyan" />
            <span className="text-sm text-foreground/80">Trusted by 10,000+ businesses worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyber-purple via-cyber-cyan to-neon-pink bg-clip-text text-transparent">
              Advanced AI
            </span>
            <br />
            <span className="text-white">
              Solutions for the
            </span>
            <br />
            <span className="text-glow text-cyber-cyan">
              Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with Hanumatrix's cutting-edge AI automation, 
            intelligent analytics, and next-generation digital solutions that scale with your ambitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyber-purple to-cyber-cyan hover:from-cyber-purple/80 hover:to-cyber-cyan/80 text-white border-0 glow-effect px-8 py-4 text-lg font-semibold group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-cyan mb-2">99.9%</div>
              <div className="text-foreground/60">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-purple mb-2">10M+</div>
              <div className="text-foreground/60">API Calls Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink mb-2">500ms</div>
              <div className="text-foreground/60">Average Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-cyan rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyber-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-neon-pink rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
