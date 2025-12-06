import React, { forwardRef, type Ref } from "react";

interface ModalProps extends React.PropsWithChildren {
  onCancel: () => void;
  titleId: string;
  className?: string;
}

function Modal(
  { children, onCancel, titleId, className }: ModalProps,
  ref: Ref<HTMLDialogElement>
) {
  return (
    <dialog
      ref={ref}
      onCancel={onCancel}
      aria-labelledby={titleId}
      className={className}
      data-testid="modal"
    >
      {children}
    </dialog>
  );
}

export default forwardRef(Modal);
