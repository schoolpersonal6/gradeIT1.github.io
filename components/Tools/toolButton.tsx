import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LinkButtonsProps {
  children: React.ReactNode;
  cont: React.ReactNode;
}

export default function ToolButton({ children, cont }: LinkButtonsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-rauno text-rauno border p-1 rounded-lg hover:opacity-70 transition ease-in-out">
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-darkpaco">{cont}</DialogContent>
    </Dialog>
  );
}
