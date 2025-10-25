import React, { useEffect, useRef } from "react";
import Modal from "../UI/Modal";
import { closeSignUp } from "../../state/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import ActionButton from "../UI/ActionButton";
import { IoClose } from "react-icons/io5";
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
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full max-w-96 px-4 lg:max-w-lg focus:outline-none"
    >
      <div
        ref={signUpcontainerRef}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-black p-6 font-roboto text-white",
          "before:absolute before:bottom-0 before:right-0 before:h-27 before:w-25 before:rounded-ss-full before:bg-green-accent before:opacity-15",
          "after:absolute after:-left-3 after:-top-3 after:h-30 after:w-30 after:rounded-ee-full after:bg-accent after:opacity-20 "
        )}
      >
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
          <footer className="flex flex-col gap-3 mt-2 z-10">
            <ActionButton type="submit">Sign Up</ActionButton>
            <ActionButton variant="secondary">Log In</ActionButton>
          </footer>
        </form>
      </div>
    </Modal>
  );
}

export default SignUp;
