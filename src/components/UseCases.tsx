import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Layers } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Standalone Solution",
      description: "Deploy AuditRAM as your primary control testing platform with complete audit management capabilities.",
      features: [
        "Full audit lifecycle management",
        "Built-in reporting and dashboards", 
        "User management and permissions",
        "Document repository and workflows"
      ],
      cta: "Explore Standalone"
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "Integration Ready",
      description: "Seamlessly bolt-on to existing audit management or GRC tools to enhance your current infrastructure.",
      features: [
        "API-first architecture",
        "Pre-built connectors for major platforms",
        "Custom integration support",
        "Minimal deployment disruption"
      ],
      cta: "View Integrations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Flexible Deployment Options
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need a complete solution or want to enhance existing tools, 
            AuditRAM adapts to your organization's unique requirements.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent rounded-full">
                    {useCase.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  {useCase.title}
                </CardTitle>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {useCase.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button variant="outline-hero" className="w-full">
                    {useCase.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;