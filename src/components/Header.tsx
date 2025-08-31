import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
            <img src="/Header logo.png" alt="AuditRAM Logo" className="w-8 h-8" />
              <div className="text-2xl font-bold text-primary">
                <a href="/" className="hover:text-primary transition-smooth">
                  AuditRAM
                </a>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/platform" className="text-foreground hover:text-primary transition-smooth">
                Platform
              </a>
              <a href="/solutions" className="text-foreground hover:text-primary transition-smooth">
                Solutions
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
            <Button 
              variant="default" 
              className="hidden sm:inline-flex"
              onClick={() => window.location.href = '/book-demo'}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
