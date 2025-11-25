import type FocusTrap from "focus-trap-react";
import { useEffect, useRef } from "react";
import { createFocusTrap } from "focus-trap";

type RefType = HTMLDialogElement | HTMLDivElement | null;

export const useTrapFocus = (
  ref: React.RefObject<RefType>,
  active: boolean
) => {
  const trapRef = useRef<FocusTrap | null>(null);

  useEffect(() => {
    const element = ref?.current;

    if (!element) return;

    if (!trapRef.current) {
      trapRef.current = createFocusTrap(element, {
        escapeDeactivates: true,
        clickOutsideDeactivates: true,
        fallbackFocus: element,
      });
    } else {
      trapRef.current.updateContainerElements(element);
    }

    if (active) {
      trapRef.current.activate();
    } else {
      trapRef.current.deactivate();
    }
  }, [active, ref]);
};
