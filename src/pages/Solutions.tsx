import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, DollarSign, Shield, TrendingUp, Award } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background/80 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Solutions for Every Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're an internal team managing risk or an audit firm serving clients, our platform transforms how you approach control testing.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Audit & GRC Teams Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              For Internal Audit & GRC Teams: Higher Assurance, Lower Costs
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your organization relies on your GRC program to manage risk effectively. But manual testing creates a constant drag on your resources and provides limited assurance. Our platform is a capacity multiplier for your team, allowing you to achieve more with less.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Dramatically Reduce Compliance Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automate thousands of hours of manual work to reduce your reliance on expensive internal and external resources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Flexible Automation to Enhance Your GRC Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose the deployment model that fits your needs. Use our platform as a dedicated, standalone tool to automate the critical task of control testing. Or, integrate it as a powerful bolt-on to your existing GRC system, adding advanced testing capabilities to the workflows your team already knows. This flexibility ensures you get targeted automation without a disruptive overhaul of your current processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Empower Your Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Free your highly skilled team from the toil of repetitive manual analysis. Our platform is built on a human-in-the-loop philosophy, handling high-volume tasks while elevating your experts to focus on strategic risk analysis, managing complex exceptions, and advising the business—the high-value work they were hired to do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit & Advisory Firms Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              For Audit & Advisory Firms: Transform Your Audit Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The audit industry is facing a severe talent shortage and intense fee pressure. Leading firms are turning to technology to build more efficient, profitable, and scalable practices. Our platform gives your firm a decisive competitive advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Boost Engagement Profitability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Automate the most labor-intensive parts of any audit—control testing. Free up your staff's time, allowing them to be more productive and cover more engagements without burning out.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Standardize Your Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Deploy a consistent, repeatable, and automated testing approach across your entire client portfolio. Ensure high-quality results every time, regardless of which team member is on the engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Enhance Audit Quality and Credibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Move beyond generic sampling. Our AI recommends the most critical test and sample attributes, ensuring your control testing is targeted, defensible, and focused on high-risk areas. This allows you to deliver more meaningful and robust audit findings, strengthening client confidence in your work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Deliver Higher-Value Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Shift your team's focus from manual testing to high-margin advisory services. Use the insights from our intelligent, risk-based approach to provide clients with a deeper analysis of their control environment, helping them proactively manage the risks that matter most.
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

export default Solutions;