
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        '10,000 API calls/month',
        'Basic AI analytics',
        'Email support',
        'Standard security',
        '5 team members',
        'Basic integrations',
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      buttonClass: 'border-white/20 text-white hover:bg-white/10',
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '100,000 API calls/month',
        'Advanced AI analytics',
        'Priority support',
        'Enhanced security',
        '25 team members',
        'Advanced integrations',
        'Custom workflows',
        'Real-time monitoring',
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonClass: 'bg-gradient-to-r from-cyber-purple to-cyber-cyan text-white glow-effect',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited API calls',
        'Enterprise AI suite',
        'Dedicated support',
        'Advanced security & compliance',
        'Unlimited team members',
        'Custom integrations',
        'White-label solutions',
        'On-premise deployment',
        'SLA guarantees',
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'border-white/20 text-white hover:bg-white/10',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-white/5 border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyber-cyan border-glow scale-105' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyber-purple to-cyber-cyan text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-12">
                <h3 className="text-2xl font-space font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-foreground/60 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-foreground/60 ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-cyber-purple to-cyber-cyan rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${plan.buttonClass}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
