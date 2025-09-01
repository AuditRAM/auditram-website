import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";

const Company = () => {
  return (
    <section id="company" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About AuditRAM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about our mission and how to get in touch with our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* About Us */}
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About Us
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">AuditRAM</strong> is a leading provider of automated control testing solutions designed to streamline compliance processes for organizations of all sizes. Our cutting-edge technology transforms traditional manual testing approaches into intelligent, scalable automation.
              </p>
              
              <p>
                Founded by compliance and technology experts, we understand the challenges organizations face in meeting regulatory requirements while maintaining operational efficiency. Our platform supports multiple frameworks including <span className="text-primary font-semibold">SOX, COSO, ISO 27001</span>, and more.
              </p>
              
              <p>
                Whether you need a standalone solution or integration with existing audit management and GRC platforms, AuditRAM delivers the flexibility and reliability your organization requires.
              </p>
            </div>
          </div>
          
          {/* Contact Us */}
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contact Us
              </h2>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-card space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Ready to transform your control testing process? Get in touch with our team to learn how AuditRAM can streamline your compliance workflows.
              </p>
              
              <div className="space-y-4">
                <ContactDialog
                  trigger={
                    <Button variant="outline" className="w-full" size="lg">
                      Contact Us
                    </Button>
                  }
                  title="Contact AuditRAM"
                />
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = '/book-demo'}
                >
                  Schedule a Demo
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground border-t border-muted pt-4">
                Get a personalized demonstration of AuditRAM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;