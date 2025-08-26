import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pay only for what you use. No hidden fees, no complex tiers.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Starting from
              </CardTitle>
              <div className="text-5xl font-bold text-primary mb-4">
                $49
              </div>
              <p className="text-muted-foreground">
                per automated control test execution
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">AI recommendations for sample attributes and test procedures</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Automated test execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Workplan generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">10 user accounts for standalone application</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Integration capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Enterprise support</span>
                </div>
              </div>
              
              <div className="pt-6">
                <Button className="w-full" size="lg">
                  Start Free Trial
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                7 days free trial • No setup fees
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
