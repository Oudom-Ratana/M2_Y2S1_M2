"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface InterceptedModalProps {
  children: React.ReactNode;
}

export default function InterceptedModal({ children }: InterceptedModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const isClosingRef = useRef(false);

  const handleClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setOpen(false);
    // Soft navigation back to previous route
    router.back();
  }, [router]);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          handleClose();
        }
      }}
    >
      <DialogContent
        className="sm:max-w-2xl w-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xl overflow-hidden focus:outline-none"
        showCloseButton={true}
        onClose={handleClose}
      >
        <DialogTitle className="sr-only">Product Details</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}
