import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Zap, Shield, BarChart3, Plug, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Automated Testing",
      description: "Eliminate manual control testing with intelligent automation that scales with your compliance needs."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Multi-Framework Support",
      description: "Works with SOX, COSO, ISO 27001, and other regulatory frameworks out of the box."
    },
    {
      icon: <Plug className="h-8 w-8 text-primary" />,
      title: "Seamless Integration",
      description: "Deploy standalone or integrate with existing audit management and GRC platforms."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Real-time Analytics",
      description: "Get instant insights into control effectiveness and compliance status across your organization."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Configurable Controls",
      description: "Customize testing procedures and criteria to match your specific compliance requirements."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Continuous Monitoring",
      description: "24/7 automated monitoring ensures controls remain effective and compliant over time."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AuditRAM combines cutting-edge automation with deep compliance expertise 
            to transform how organizations approach control testing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth transform hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;