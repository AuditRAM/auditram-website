const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">AuditRAM</div>
            <p className="text-background/80 mb-4 max-w-md">
              Automating control testing for regulatory frameworks and compliance. 
              Trust AuditRAM to streamline your audit processes.
            </p>
            <div className="text-sm text-background/60">
              © 2024 AuditRAM. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/80">
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Support</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;