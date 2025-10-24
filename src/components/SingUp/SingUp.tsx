import React, { useEffect, useRef } from "react";
import Modal from "../UI/Modal";
import { closeSignUp } from "../../state/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import ActionButton from "../UI/ActionButton";
import { IoClose } from "react-icons/io5";
import FormElement from "../UI/FormElement";

function SingUp() {
  const dialogRef = useRef<HTMLDialogElement>(null);
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

  return (
    <Modal
      ref={dialogRef}
      onCancel={handlCloseSingUpPopupClick}
      titleId="Signup"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full max-w-96 px-4 lg:max-w-lg"
    >
      <div className="bg-black text-white rounded-2xl p-6 font-roboto ">
        <header className="text-center mb-2">
          <h1
            id="Signup"
            className="title font-space text-2xl mb-4 lg:text-4xl lg:mb-6"
          >
            Sign up now
          </h1>
          <p className="capitalize font-roboto text-xs text-neutral-200 w-[80%] m-auto lg:text-sm">
            Sign in or create an account to track cryptos
          </p>
          <button
            className="absolute top-4 right-7 cursor-pointer text-2xl text-white hover:text-accent transition-colors duration-300 ease-in-out"
            aria-label="Close Sign up dialog"
            onClick={handlCloseSingUpPopupClick}
          >
            <IoClose aria-hidden="true" />
          </button>
        </header>
        <form method="dialog" className="mb-4 flex flex-col gap-1">
          <FormElement
            id={"gewgegefwedw"}
            label={"Email/Username"}
            type="email"
            placeholder="Enter your email or username"
          />
          <FormElement
            id={"password"}
            label={"Password"}
            type="password"
            placeholder="Enter your password"
          />
        </form>
        <footer className="flex flex-col gap-3">
          <ActionButton onClick={() => {}}>Sign Up</ActionButton>
          <ActionButton variant="secondary" onClick={() => {}}>
            Log In
          </ActionButton>
        </footer>
      </div>
    </Modal>
  );
}

export default SingUp;
