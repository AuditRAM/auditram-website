import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Automate Your Control Testing?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            See how our AI-powered platform can transform your compliance process.
          </p>
          
          <div className="flex justify-center pt-8">
            <Button 
              variant="outline-hero" 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.location.href = '/book-demo'}
            >
              Book Your Personalized Demo
            </Button>
          </div>
          {/* 
          <div className="pt-8 text-sm opacity-75">
            <p>✓ 7 days free trial  ✓ Enterprise support available</p>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
