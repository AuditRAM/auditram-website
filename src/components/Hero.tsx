import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-foreground">Accelerate Your</span> <span className="bg-gradient-primary bg-clip-text text-transparent">Control Testing</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Built AI-Native from day one, AuditRAM transforms control testing through intelligent agents that think, learn, and execute like your best auditors—but at enterprise scale. What once took hours now happens in minutes, with built-in audit intelligence delivering results you can trust. Seamlessly integrate with your existing audit management system or deploy as a standalone platform designed for the AI-first future of compliance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = '/book-demo'}
              >
                Book a Demo
              </Button>
              <Button 
                variant="outline-hero" 
                size="lg"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfjATnWS3GSkapGvCpEEYxoqzgIc1BENXNNoGY8j3DrHZBwmg/viewform?usp=dialog', '_blank')}
              >
                Join the Beta Waitlist
              </Button>
            </div>
            {/* 
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">7 days free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Enterprise ready</span>
              </div>
            </div>
            */}
          </div>
          
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/ai-automation-hero.jpg" 
                alt="AuditRAM AI-Powered Control Testing Automation Platform"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
