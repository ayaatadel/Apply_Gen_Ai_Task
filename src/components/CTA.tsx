import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary to-accent mb-8 animate-pulse-glow">
          <Sparkles className="h-8 w-8 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-gradient">Transform</span> Your Career?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of successful professionals who've already landed their dream jobs with our AI-powered platform.
        </p>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-muted-foreground">14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-muted-foreground">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-muted-foreground">Cancel anytime</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="hero" className="text-lg px-8 py-4">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-accent/30 text-accent hover:bg-accent/10">
            Schedule Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <p className="text-sm text-muted-foreground mt-6">
          Trusted by professionals at Fortune 500 companies
        </p>
      </div>
    </section>
  );
};

export default CTA;