import React, { useEffect, useRef } from "react";
import Modal from "../UI/Modal";
import { closeSignUp } from "../../state/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import ActionButton from "../UI/ActionButton";

import FormElement from "../UI/FormElement";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { FormValues } from "../../types/form";
import { useTrapFocus } from "../../hooks/useTrapFocus";
import useClickOutside from "../../hooks/useClickOutside";
import { cn } from "../../utils/utils";
import SocialAuthButtons from "./OAuthButtons";
import PasswordField from "../UI/PasswordField";
import { X } from "lucide-react";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const signUpcontainerRef = useRef<HTMLDivElement>(null);
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

  useClickOutside(signUpcontainerRef, handlCloseSingUpPopupClick);

  return (
    <Modal
      ref={dialogRef}
      onCancel={handlCloseSingUpPopupClick}
      titleId="Signup"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full max-w-96 lg:max-w-lg focus:outline-none  backdrop-blur-lg"
    >
      <div
        ref={signUpcontainerRef}
        className={cn(
          "bg-[rgba(102,138,255,0.05)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(30,33,40,0.8)]",
          "relative overflow-hidden p-10 font-roboto text-white"
        )}
      >
        <header className="mb-3">
          <h1
            id="Signup"
            className="title font-space text-2xl mb-2 lg:text-4xl"
          >
            Sign up now
          </h1>
          <p className="capitalize font-roboto text-xs text-neutral-200 w-[80%]  lg:text-sm">
            Sign in or create an account to track cryptos
          </p>
          <button
            className={cn(
              "absolute top-7 right-7 cursor-pointer text-2xl text-white",
              " transition-all duration-300 ease-in-out",
              "hover:text-accent hover:scale-120"
            )}
            aria-label="Close Sign up dialog"
            onClick={handlCloseSingUpPopupClick}
          >
            <X aria-hidden="true" className="text-white" />
          </button>
        </header>
        <form
          method="dialog"
          className="flex flex-col gap-1 z-10"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <FormElement
            register={register}
            id={"username"}
            label={"Email/Username"}
            type="text"
            placeholder="Enter your email or username"
            rules={{
              required: "Email or username is required",
            }}
            error={errors.username}
          />

          <PasswordField
            register={register}
            id={"password"}
            label={"Password"}
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
          <footer className="relative flex flex-col gap-5 mt-5 z-10">
            <ActionButton type="submit">
              <span className="py-0.5">Create account</span>
            </ActionButton>
            <SocialAuthButtons />
          </footer>
        </form>
      </div>
    </Modal>
  );
}

export default SignUp;
