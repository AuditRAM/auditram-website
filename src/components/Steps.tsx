import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Cog, Shield } from "lucide-react";

const Steps = () => {
  const steps = [
    {
      icon: <Link className="h-8 w-8 text-primary" />,
      title: "Connect",
      description: "Securely connect to your GRC platform or login to our site."
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "Automate",
      description: "Our AI executes control tests on-demand and generates outputs as audit-ready evidence."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Assure",
      description: "Test results and evidence are automatically populated back into your GRC platform or can be downloaded as spreadsheet files from standalone platform."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get Audit-Ready in 3 Simple Steps
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth text-center">
              <CardHeader className="pb-4">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;