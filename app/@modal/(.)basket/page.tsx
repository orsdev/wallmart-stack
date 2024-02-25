"use client";

import { CheckoutPreview } from "@/app/basket/_components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function BasketInterceptor() {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent className="h-4/5 w-full overflow-scroll max-w-3xl">
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>Contents of your basket</DialogDescription>
        </DialogHeader>
        <CheckoutPreview />
      </DialogContent>
    </Dialog>
  );
}
