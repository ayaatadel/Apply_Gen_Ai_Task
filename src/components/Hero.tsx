import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Brain className="h-16 w-16 text-accent animate-float" />
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <Target className="h-12 w-12 text-primary-glow animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="absolute bottom-32 left-20 opacity-25">
        <Sparkles className="h-14 w-14 text-accent animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent/20 bg-accent/10 backdrop-blur-sm mb-8">
            <Sparkles className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent">
              AI-Powered Interview Success
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span  style={{ color:"white" }}>Master Your</span>
            <br />
            <span className="text-gradient">Interview Journey</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with our AI-powered platform. Build standout CVs, practice interviews with virtual coaches, and land your dream job.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-accent/30 text-accent hover:bg-accent/10">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Interviews Aced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;