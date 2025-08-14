import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Compliance Process?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join organizations worldwide that trust AuditRAM to automate their control testing 
            and ensure continuous compliance with regulatory frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="outline-hero" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline-hero" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="pt-8 text-sm opacity-75">
            <p>✓ 30-day free trial  ✓ No credit card required  ✓ Enterprise support available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;