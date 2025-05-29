
import { Brain, Zap, Shield, BarChart3, Cpu, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms that provide deep insights into your data patterns and predict future trends with unprecedented accuracy.',
      color: 'from-cyber-purple to-cyber-blue',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast data processing and instant responses with our optimized infrastructure that handles millions of requests per second.',
      color: 'from-cyber-cyan to-cyber-blue',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to protect your sensitive data with SOC 2 compliance and zero-trust architecture.',
      color: 'from-neon-pink to-cyber-purple',
    },
    {
      icon: BarChart3,
      title: 'Smart Automation',
      description: 'Intelligent workflow automation that learns from your processes and continuously optimizes performance without manual intervention.',
      color: 'from-cyber-blue to-cyber-cyan',
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Next-generation quantum-enhanced processing capabilities for complex computations and advanced problem-solving scenarios.',
      color: 'from-cyber-purple to-neon-pink',
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide network of data centers ensuring low latency, high availability, and seamless scaling across all continents.',
      color: 'from-cyber-cyan to-cyber-purple',
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make Hanumatrix the choice for forward-thinking businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:border-glow"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-space font-semibold mb-4 text-white group-hover:text-cyber-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
