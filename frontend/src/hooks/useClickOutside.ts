import { useEffect, type SyntheticEvent } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement | null>,
  handleClose: () => void,
  isIgnoringClick = false
): void => {
  const handleClickOutside = (event: MouseEvent | SyntheticEvent): void => {
    if (ref && !ref.current?.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (!ref.current || isIgnoringClick) return;

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
};

export default useClickOutside;
