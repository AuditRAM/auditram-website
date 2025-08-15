import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactDialogProps {
  trigger: React.ReactNode;
  title: string;
}

const ContactDialog = ({ trigger, title }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">Company</Label>
            <Input id="company" placeholder="Enter your company name" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role" className="text-foreground">Role</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auditor">Auditor</SelectItem>
                <SelectItem value="compliance-officer">Compliance Officer</SelectItem>
                <SelectItem value="risk-manager">Risk Manager</SelectItem>
                <SelectItem value="it-manager">IT Manager</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your control testing needs..."
              className="min-h-[100px]"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;