import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact", href: "#contact" },
      { name: "Status", href: "#status" },
      { name: "Community", href: "#community" },
    ],
    legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "Cookies", href: "#cookies" },
      { name: "Security", href: "#security" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Mail, href: "#email", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">
                InterviewAI
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering careers with AI-driven interview preparation and CV optimization.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-background border border-border hover:border-accent/50 hover:bg-accent/10 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 InterviewAI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Built with ❤️ for career success
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;