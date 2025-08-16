import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Puzzle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Intelligent Test Design",
      description: "Eliminate the guesswork and manual effort of creating test plans. Our AI analyzes your control statements and instantly generates clear, best-practice test procedures and recommends the precise attributes to examine."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Radical Efficiency",
      description: "Automate the entire test execution process. Our AI agents perform multi-step procedures just like a human would, but in a fraction of the time. Reclaim thousands of hours and slash your compliance costs."
    },
    {
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      title: "Seamless Integration",
      description: "Our adaptive architecture is built to enhance, not replace. Bolt on to your existing GRC / audit management platform, or use it as a powerful standalone tool. We fit into your ecosystem."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Stop Drowning in Manual Control Testing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your most skilled auditors and compliance professionals spend countless hours on the necessary, repetitive tasks of manually testing controls and filling out spreadsheets. This detailed work, while essential, is time-consuming and can divert your experts from high-value strategic analysis. Especially under the pressure of tight deadlines and heavy workloads, this manual process becomes prone to human error and can struggle to keep pace with the speed of your business, creating potential risks.
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