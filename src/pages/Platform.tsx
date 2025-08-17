import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Camera, RefreshCw, Zap, Network, Building } from "lucide-react";

const Platform = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Platform Overview Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background/80 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              The Intelligent Engine for Augmented Control Testing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our platform is purpose-built to augment the execution of your internal controls, offering the flexibility to work as a powerful standalone solution or as an integrated layer in your existing GRC ecosystem. Our AI engine connects to your business applications to perform complex test procedures, freeing your experts to apply their critical judgment where it matters most. We deliver a complete, auditable trail of results, providing true work execution that intelligently pairs the power of AI with the irreplaceable expertise of your team.
            </p>
          </div>
        </div>
      </section>

      {/* AI Test Automation Engine Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              AI That Works Like Your Best Auditor
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI was designed by auditors, for auditors. It goes beyond simple API checks to replicate the complex, multi-step actions a human tester would perform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Simulates Human Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI agents can navigate evidence files, validate data, check configurations, and test procedural controls just like a person would. This ensures your tests reflect real-world scenarios and allows your team to focus on analyzing results and managing exceptions, not on repetitive tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Automated Audit Trail Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For every test step, the platform automatically generates timestamped screenshots, system logs, or data files. This creates a complete, immutable audit trail that provides clear, defensible results and satisfies even the most stringent auditors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Self-Healing Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When your application's UI changes, our AI intelligently adapts. It identifies the new location of buttons and fields, dramatically reducing the time you spend maintaining broken test scripts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Flexible Deployment and Seamless Connections
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our platform is designed to fit your unique environment. Deploy it as a powerful, standalone control testing engine, or integrate it as the execution layer for your existing GRC program. With a growing library of pre-built connectors, we enhance your current systems without disrupting your established workflows.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">GRC Platforms</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center items-center space-x-8 mb-6">
                  <div className="text-lg font-semibold text-foreground">AuditBoard</div>
                  <div className="text-lg font-semibold text-foreground">Workiva</div>
                </div>
                <p className="text-muted-foreground">
                  We are actively building pre-built connectors for leading GRC platforms. Soon, you'll be able to seamlessly sync your control library and push test results and documentation directly into your system of record, eliminating the manual process of updating your GRC platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;