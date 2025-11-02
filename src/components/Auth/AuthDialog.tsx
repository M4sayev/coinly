import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Modal from "../UI/Modal";
import { closeSignUp } from "../../state/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { useTrapFocus } from "../../hooks/useTrapFocus";
import useClickOutside from "../../hooks/useClickOutside";
import SignUp from "./SingUp/SignUp";
import Login from "./Login/Login";

function AuthDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const signUpcontainerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<string | "auto">("auto");
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.ui.isSignUpModalOpen);

  const handlCloseSingUpPopupClick = () => {
    dispatch(closeSignUp());
  };

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    if (isOpen) {
      if (!dialogEl.open) {
        dialogEl.showModal();
      }
    } else {
      if (dialogEl.open) {
        dialogEl.close();
      }
    }
  }, [isOpen]);

  useTrapFocus(dialogRef, isOpen);

  // useClickOutside(signUpcontainerRef, handlCloseSingUpPopupClick);

  return (
    <Modal
      ref={dialogRef}
      onCancel={handlCloseSingUpPopupClick}
      titleId="Signup"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-2xl w-full max-w-96 lg:max-w-lg focus:outline-none  backdrop-blur-lg"
    >
      <div className="w-[202%] flex overflow-hidden gap-3 items-center">
        <div className="flex-1">
          <SignUp
            ref={signUpcontainerRef}
            onClose={handlCloseSingUpPopupClick}
          />
        </div>
        <div className="flex-1">
          <Login onClose={handlCloseSingUpPopupClick} />
        </div>
      </div>
    </Modal>
  );
}

export default AuthDialog;
