import Header from "@/components/Header";
import Company from "@/components/Company";
import Footer from "@/components/Footer";

const CompanyPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Book Your Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contact Us
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-background border border-border rounded-lg shadow-card overflow-hidden">
              <iframe 
                src="<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfTrI8njpz6vQc_pO4k_aSqVL-1FJ4_w79RCRIyA7pKzphaag/viewform?embedded=true" width="640" height="959" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>" 
                style={{ border: 0 }} 
                width="100%" 
                height="800" 
                frameBorder="0"
                title="Contact Us"
              />
            </div>
          </div>
        </div>
      </main>
      <Header />
      <Company />
      <Footer />
    </div>
  );
};

export default CompanyPage;
