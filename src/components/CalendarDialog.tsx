import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface CalendarDialogProps {
  trigger: React.ReactNode;
  title?: string;
}

const CalendarDialog = ({ trigger, title = "Schedule Your Demo" }: CalendarDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1ccMaTMYDrB0QxXld-Oh77Xpk1GFm53P3oPz-MNGrnMaEHnH2K-4BQBcTtzBK6ZYzkpH94Kuvr?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="100%" 
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarDialog;