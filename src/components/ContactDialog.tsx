import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

interface ContactDialogProps {
  trigger: React.ReactNode;
  title: string;
  isDemo?: boolean;
}

const ContactDialog = ({ trigger, title, isDemo = false }: ContactDialogProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/244105837.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/244105837.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[660px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <div 
          ref={formContainerRef}
          className="hs-form-frame min-h-[400px]" 
          data-region="na2" 
          data-form-id="36c508e4-c9d1-4962-bf29-09b04a6d0fc6" 
          data-portal-id="244105837"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;