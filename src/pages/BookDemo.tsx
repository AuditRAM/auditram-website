import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookDemo = () => {
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
              Book a personalized demonstration of AuditRAM and see how our AI-powered platform can transform your control testing process.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-background border border-border rounded-lg shadow-card overflow-hidden">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2mKruMC0l3Gs46XKeWNV4cy9X5ttR6hCd1YRMe24UHXeqA7beROgTjdNDYVorno_vDojVzSK-H?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="800" 
                frameBorder="0"
                title="Google Calendar Appointment Scheduling"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;
