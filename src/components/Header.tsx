import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <a href="/" className="hover:opacity-80 transition-smooth">
                <img src="/headerlogo.jpg" alt="AuditRAM Logo" className="h-6 w-auto" />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-smooth outline-none">
                  Platform
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <a href="/platform#auto-test-engine" className="cursor-pointer">
                      Auto-Test Engine
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/platform#socrr" className="cursor-pointer">
                      SOCRR
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost"
              onClick={() => window.open('https://app.auditram.com/login', '_blank')}
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              onClick={() => window.location.href = '/book-demo'}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://app.auditram.com/login', '_blank')}
            >
              Sign In
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-4 py-4 space-y-3">
              <div className="text-xs text-muted-foreground mb-2">Navigate to:</div>
              
              {/* Platform with submenu */}
              <div className="border-b border-muted">
                <button 
                  className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                >
                  Platform
                  <ChevronDown className={`h-4 w-4 transition-transform ${isPlatformOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPlatformOpen && (
                  <div className="pl-4 pb-2 space-y-2">
                    <a 
                      href="/platform#auto-test-engine" 
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-smooth"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Auto-Test Engine
                    </a>
                    <a 
                      href="/platform#socrr" 
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-smooth"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      SOCRR
                    </a>
                  </div>
                )}
              </div>
              
              <a 
                href="/solutions" 
                className="block py-2 text-foreground hover:text-primary transition-smooth border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="/pricing" 
                className="block py-2 text-foreground hover:text-primary transition-smooth border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="/company" 
                className="block py-2 text-foreground hover:text-primary transition-smooth border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </a>
              <div className="pt-3">
                <Button 
                  className="w-full"
                  onClick={() => {
                    window.location.href = '/book-demo';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book a Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
