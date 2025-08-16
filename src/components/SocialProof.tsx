const SocialProof = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              SUPERCHARGE YOUR EXISTING GRC PLATFORM
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                GRC Logo 1
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                GRC Logo 2
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                GRC Logo 3
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              TRUSTED BY LEADING ORGANIZATIONS & AUDIT FIRMS
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                Client Logo 1
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                Client Logo 2
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                Audit Firm Logo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;