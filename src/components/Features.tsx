import { 
  FileText, 
  MessageSquare, 
  Brain, 
  Video, 
  Linkedin,
  CheckCircle,
  TrendingUp,
  Users,
  Mic,
  BarChart3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "CV Building & Optimization",
      description: "Interactive CV builder with AI-powered suggestions for ATS optimization.",
      highlights: [
        "Smart keyword optimization",
        "ATS-friendly formatting",
        "Real-time improvements",
        "Industry-specific templates"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Interview Practice & Coaching",
      description: "Virtual AI coach with real-time feedback and sentiment analysis.",
      highlights: [
        "Voice recognition technology",
        "Behavioral question practice",
        "Confidence building exercises",
        "Personalized feedback"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "AI-Powered CV Analysis",
      description: "Advanced NLP analysis to match your skills with job requirements.",
      highlights: [
        "Skills gap identification",
        "Experience mapping",
        "Strength visualization",
        "Career path suggestions"
      ],
      gradient: "from-pink-500 to-red-600"
    },
    {
      icon: Video,
      title: "Real-Time Interview Simulation",
      description: "Practice with human-like AI interviewers in realistic scenarios.",
      highlights: [
        "Industry-specific scenarios",
        "Live feedback dashboard",
        "Performance analytics",
        "Stress simulation"
      ],
      gradient: "from-red-500 to-orange-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn AI Agent",
      description: "Automated job monitoring and intelligent matching system.",
      highlights: [
        "Smart job recommendations",
        "Profile optimization tips",
        "Application tracking",
        "Network analysis"
      ],
      gradient: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Powerful AI Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to excel in your job search, powered by cutting-edge artificial intelligence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card p-8 rounded-2xl border border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">300%</div>
            <div className="text-sm text-muted-foreground">Interview Success</div>
          </div>
          <div className="space-y-2">
            <Users className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="space-y-2">
            <Mic className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">1M+</div>
            <div className="text-sm text-muted-foreground">Practice Sessions</div>
          </div>
          <div className="space-y-2">
            <BarChart3 className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;