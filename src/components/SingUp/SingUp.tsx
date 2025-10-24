import React, { useEffect, useRef } from "react";
import Modal from "../UI/Modal";
import { closeSignUp } from "../../state/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import ActionButton from "../UI/ActionButton";
import { IoClose } from "react-icons/io5";
import FormElement from "../UI/FormElement";
import { createFocusTrap } from "focus-trap";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { FormValues } from "../../types/form";
import type FocusTrap from "focus-trap-react";

function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trapRef = useRef<FocusTrap | null>(null);
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.ui.isSignUpModalOpen);

  const handlCloseSingUpPopupClick = () => {
    dispatch(closeSignUp());
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    console.log(errors);

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
      if (!dialogEl.open) {
        trapRef.current.activate();
        dialogEl.showModal();
      }
    } else {
      if (dialogEl.open) {
        trapRef.current.deactivate();
        dialogEl.close();
      }
    }
  }, [isOpen]);

  return (
    <Modal
      ref={dialogRef}
      onCancel={handlCloseSingUpPopupClick}
      titleId="Signup"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full max-w-96 px-4 lg:max-w-lg focus:outline-none"
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
        <form
          method="dialog"
          className="mb-4 flex flex-col gap-1"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <FormElement
            register={register}
            id={"email"}
            label={"Email/Username"}
            type="email"
            placeholder="Enter your email or username"
            rules={{
              required: "Email or username is required",
            }}
            error={errors.email}
          />

          <FormElement
            register={register}
            id={"password"}
            label={"Password"}
            type="password"
            placeholder="Enter your password"
            error={errors.password}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            }}
          />
          <footer className="flex flex-col gap-3">
            <ActionButton type="submit">Sign Up</ActionButton>
            <ActionButton variant="secondary">Log In</ActionButton>
          </footer>
        </form>
      </div>
    </Modal>
  );
}

export default SingUp;
