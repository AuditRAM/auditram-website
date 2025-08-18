import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactDialogProps {
  trigger: React.ReactNode;
  title: string;
  isDemo?: boolean;
}

const ContactDialog = ({ trigger, title, isDemo = false }: ContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[660px] max-h-[980px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfTrI8njpz6vQc_pO4k_aSqVL-1FJ4_w79RCRIyA7pKzphaag/viewform?embedded=true" 
          width="640" 
          height="959" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
        >
          Loading…
        </iframe>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;