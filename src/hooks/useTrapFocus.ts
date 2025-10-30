import type FocusTrap from "focus-trap-react";
import { useEffect, useRef } from "react";
import { createFocusTrap } from "focus-trap";

type RefType = HTMLDialogElement | HTMLDivElement | null;

export const useTrapFocus = (
  ref: React.RefObject<RefType>,
  isOpen: boolean
) => {
  const trapRef = useRef<FocusTrap | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (!trapRef.current) {
      trapRef.current = createFocusTrap(element, {
        escapeDeactivates: true,
        clickOutsideDeactivates: true,
        fallbackFocus: element,
      });
    }

    if (isOpen) {
      trapRef.current.activate();
    } else {
      trapRef.current.deactivate();
    }
  }, [isOpen, ref]);
};
