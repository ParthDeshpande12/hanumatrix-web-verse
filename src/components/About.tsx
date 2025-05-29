
import { Target, Users, Award, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: Award, value: '99.9%', label: 'Uptime' },
    { icon: Rocket, value: '500ms', label: 'Response Time' },
    { icon: Target, value: '150+', label: 'Countries' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/10 via-transparent to-cyber-cyan/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
                About Hanumatrix
              </span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              We are pioneers in the AI revolution, dedicated to creating intelligent solutions 
              that transform how businesses operate in the digital age. Our cutting-edge technology 
              combines advanced machine learning, quantum computing, and intuitive design to deliver 
              unprecedented value.
            </p>
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Founded by visionaries from leading tech companies, Hanumatrix represents the 
              convergence of human creativity and artificial intelligence. We believe in building 
              technology that amplifies human potential rather than replacing it.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-cyan rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-foreground/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-space font-bold text-white mb-6">Our Mission</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "To democratize artificial intelligence and make advanced technology accessible 
                to businesses of all sizes, empowering them to achieve extraordinary results 
                in an increasingly digital world."
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full"></div>
                  <span className="text-foreground/70">Innovation-driven development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                  <span className="text-foreground/70">Customer-centric solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                  <span className="text-foreground/70">Ethical AI practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
