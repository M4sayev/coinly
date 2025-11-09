import { useEffect, useRef, useState } from "react";
import Modal from "../UI/Modal";
import { closeSignUp } from "../../state/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { useTrapFocus } from "../../hooks/useTrapFocus";
import useClickOutside from "../../hooks/useClickOutside";
import SignUp from "./SingUp/SignUp";
import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import type { AuthView } from "../../types/auth";

function AuthDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const refs = {
    login: useRef<HTMLDivElement>(null),
    signup: useRef<HTMLDivElement>(null),
    forgotPassword: useRef<HTMLDivElement>(null),
  };

  const [authView, setAuthView] = useState<AuthView>("signup");
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
        setAuthView("signup");
      }
    }
  }, [isOpen]);

  function translateModal() {
    if (authView === "forgotPassword") {
      return "-translate-x-2/3";
    }
    if (authView === "login") {
      return "-translate-x-1/3";
    }
    return "";
  }

  useClickOutside(refs[authView], handlCloseSingUpPopupClick);

  useTrapFocus(refs[authView], isOpen);

  return (
    <Modal
      ref={dialogRef}
      onCancel={handlCloseSingUpPopupClick}
      titleId="Signup"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-2xl w-full max-w-96 lg:max-w-lg focus:outline-none overflow-hidden "
    >
      <div
        className={`w-[300%] flex items-center  transition-all duration-300 ${translateModal()}`}
      >
        <div className="flex-1" ref={refs["signup"]}>
          <SignUp
            onClose={handlCloseSingUpPopupClick}
            setAuthView={setAuthView}
          />
        </div>
        <div className="flex-1" ref={refs["login"]}>
          <Login
            onClose={handlCloseSingUpPopupClick}
            setAuthView={setAuthView}
          />
        </div>
        <div className="flex-1" ref={refs["forgotPassword"]}>
          <ForgotPassword
            onClose={handlCloseSingUpPopupClick}
            setAuthView={setAuthView}
          />
        </div>
      </div>
    </Modal>
  );
}

export default AuthDialog;
