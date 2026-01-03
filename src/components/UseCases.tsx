import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UseCases = () => {
  const navigate = useNavigate();

  const useCases = [
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "For Internal Audit & GRC Teams",
      description: "Free your team from repetitive work, reduce compliance costs, and provide a higher level of assurance to your board. Supercharge your existing GRC investment and transform your audit function into a strategic advisor.",
      cta: "Learn More for GRC Teams",
      link: "/solutions#grc-teams"
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "For Audit & Advisory Firms",
      description: "Combat the talent shortage and boost engagement profitability. Use our platform to standardize testing across your client portfolio and deliver higher-value, more efficient audits.",
      cta: "Learn More for Audit Firms",
      link: "/solutions#audit-firms"
    }
  ];

  const handleNavigate = (link: string) => {
    const [path, hash] = link.split('#');
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
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
                <div className="pt-4">
                  <Button 
                    variant="outline-hero" 
                    className="w-full"
                    onClick={() => handleNavigate(useCase.link)}
                  >
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