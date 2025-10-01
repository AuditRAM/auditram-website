import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface WaitlistDialogProps {
  trigger: React.ReactNode;
}

const WaitlistDialog = ({ trigger }: WaitlistDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[660px] max-h-[980px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-foreground">Join the Beta Waitlist</DialogTitle>
        </DialogHeader>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfjATnWS3GSkapGvCpEEYxoqzgIc1BENXNNoGY8j3DrHZBwmg/viewform?embedded=true" 
          width="640" 
          height="1036" 
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

export default WaitlistDialog;
