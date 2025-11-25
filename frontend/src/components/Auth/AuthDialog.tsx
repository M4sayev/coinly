import { useEffect, useRef, useState } from "react";
import Modal from "../UI/Modal";
import { closeSignUp } from "../../state/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useTrapFocus } from "../../hooks/useTrapFocus";
import useClickOutside from "../../hooks/useClickOutside";
import SignUp from "./SingUp/SignUp";
import Login from "./Login/Login";
import type { AuthView } from "../../types/auth";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import ResetPassword from "./ResetPassword/ResetPassword";

function AuthDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const refs = {
    login: useRef<HTMLDivElement>(null),
    signup: useRef<HTMLDivElement>(null),
    "reset-password": useRef<HTMLDivElement>(null),
  };

  const [authView, setAuthView] = useState<AuthView>("signup");
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.ui.isSignUpModalOpen);

  const handlCloseSingUpPopup = () => {
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

  useEscapeKey(() => handlCloseSingUpPopup());

  function translateModal() {
    if (authView === "reset-password") {
      return "-translate-x-2/3";
    }
    if (authView === "login") {
      return "-translate-x-1/3";
    }
    return "";
  }

  useClickOutside(refs[authView], handlCloseSingUpPopup);

  useTrapFocus(dialogRef, isOpen);

  return (
    <Modal
      ref={dialogRef}
      onCancel={handlCloseSingUpPopup}
      titleId={authView}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-2xl w-full max-w-96 lg:max-w-lg focus:outline-none overflow-hidden "
    >
      <div
        className={`w-[300%] flex items-center  transition-all duration-300 ${translateModal()}`}
      >
        <div
          inert={authView !== "signup"}
          className="flex-1"
          ref={refs["signup"]}
          aria-current={authView === "signup" ? "true" : undefined}
        >
          <SignUp onClose={handlCloseSingUpPopup} setAuthView={setAuthView} />
        </div>
        <div
          inert={authView !== "login"}
          className="flex-1"
          ref={refs["login"]}
          aria-current={authView === "login" ? "true" : undefined}
        >
          <Login onClose={handlCloseSingUpPopup} setAuthView={setAuthView} />
        </div>
        <div
          inert={authView !== "reset-password"}
          className="flex-1"
          ref={refs["reset-password"]}
          aria-current={authView === "reset-password" ? "true" : undefined}
        >
          <ResetPassword
            onClose={handlCloseSingUpPopup}
            setAuthView={setAuthView}
          />
        </div>
      </div>
    </Modal>
  );
}

export default AuthDialog;
