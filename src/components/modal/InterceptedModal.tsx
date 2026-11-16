"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface InterceptedModalProps {
  children: React.ReactNode;
}

export default function InterceptedModal({ children }: InterceptedModalProps) {
  const router = useRouter();
  
  const handleClose = () => {router.back()}
  return (
    <Dialog
    open={true}
    >
      <DialogContent
        className="sm:max-w-2xl w-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xl overflow-hidden focus:outline-none"
        onClose={handleClose}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
