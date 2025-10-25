import type FocusTrap from "focus-trap-react";
import { useEffect, useRef } from "react";
import { createFocusTrap } from "focus-trap";

export const useTrapFocus = (
  dialogRef: React.RefObject<HTMLDialogElement | null>,
  isOpen: boolean
) => {
  const trapRef = useRef<FocusTrap | null>(null);

  useEffect(() => {
    const dialogEl = dialogRef.current;

    if (!dialogEl) return;

    if (!trapRef.current) {
      trapRef.current = createFocusTrap(dialogEl, {
        escapeDeactivates: true,
        clickOutsideDeactivates: true,
        fallbackFocus: dialogEl,
      });
    }

    if (isOpen) {
      trapRef.current.activate();
    } else {
      trapRef.current.deactivate();
    }
  }, [isOpen, dialogRef]);
};
