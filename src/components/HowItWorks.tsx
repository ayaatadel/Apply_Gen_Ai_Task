import { Upload, Brain, Target, Trophy } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Upload,
      title: "Upload Your CV",
      description: "Simply upload your existing CV or start from scratch with our intelligent builder.",
      features: ["Instant parsing", "Format detection", "Content analysis"]
    },
    {
      step: "02", 
      icon: Brain,
      title: "AI Analysis & Optimization",
      description: "Our AI analyzes your CV, identifies gaps, and suggests improvements for maximum impact.",
      features: ["Skills mapping", "ATS optimization", "Industry insights"]
    },
    {
      step: "03",
      icon: Target,
      title: "Practice & Prepare", 
      description: "Practice interviews with our AI coach and get personalized feedback to improve.",
      features: ["Mock interviews", "Real-time feedback", "Performance tracking"]
    },
    {
      step: "04",
      icon: Trophy,
      title: "Land Your Dream Job",
      description: "Apply with confidence using your optimized CV and interview skills.",
      features: ["Job matching", "Application tracking", "Success monitoring"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and transform your career prospects with our proven 4-step process
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-accent opacity-20">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {step.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-accent/20 backdrop-blur-sm">
                    <step.icon className="h-24 w-24 text-accent animate-pulse-glow" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent/30 animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "2s" }}></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-accent/50 animate-float" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;