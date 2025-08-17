import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary">
              AuditRAM
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/#features" className="text-foreground hover:text-primary transition-smooth">
                Product
              </a>
              <a href="/#use-cases" className="text-foreground hover:text-primary transition-smooth">
                Use Cases
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-smooth">
                Pricing
              </a>
              <a href="/company" className="text-foreground hover:text-primary transition-smooth">
                Company
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="default">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;