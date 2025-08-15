import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";

const Company = () => {
  return (
    <section id="company" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About AuditRAM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about our mission and how to get in touch with our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Us */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                AuditRAM is a leading provider of automated control testing solutions designed to streamline compliance processes for organizations of all sizes. Our cutting-edge technology transforms traditional manual testing approaches into intelligent, scalable automation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded by compliance and technology experts, we understand the challenges organizations face in meeting regulatory requirements while maintaining operational efficiency. Our platform supports multiple frameworks including SOX, COSO, ISO 27001, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a standalone solution or integration with existing audit management and GRC platforms, AuditRAM delivers the flexibility and reliability your organization requires.
              </p>
            </CardContent>
          </Card>
          
          {/* Contact Us */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Ready to transform your control testing process? Get in touch with our team to learn how AuditRAM can streamline your compliance workflows.
                </p>
                
                <div className="space-y-3">
                  <ContactDialog
                    trigger={
                      <Button variant="outline" className="w-full" size="lg">
                        Contact Us
                      </Button>
                    }
                    title="Contact AuditRAM"
                  />
                  
                  <ContactDialog
                    trigger={
                      <Button className="w-full" size="lg">
                        Schedule a Demo
                      </Button>
                    }
                    title="Schedule a Demo"
                    isDemo={true}
                  />
                </div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                Get a personalized demonstration of AuditRAM
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Company;