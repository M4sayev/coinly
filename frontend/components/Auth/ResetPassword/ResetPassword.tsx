import { cn } from "../../../utils/utils";
import ActionButton from "../../UI/Buttons/ActionButton";
import FormElement from "../../UI/form/FormElement";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { FormValues } from "../../../types/form";

import type { AuthViewProps } from "../../../types/auth";
import AuthHeader from "../AuthHeader/AuthHeader";

function ResetPassword({ onClose, setAuthView }: AuthViewProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    console.log(errors);
  return (
    <section
      className={cn(
        "rounded-2xl bg-[var(--color-modal)] border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden font-roboto text-[var(--color-neutral-100)] p-10"
      )}
    >
      <AuthHeader
        authSlide="reset password"
        titleId="reset-password"
        onCloseDialog={onClose}
        promptText="Please provide the email address that you used when you signed up for
        your account"
        showArrow={false}
      />

      <form className="flex flex-col gap-2">
        <FormElement
          id="rp-email-field"
          register={register}
          placeholder="Enter you email"
          type="email"
          label="Email"
          error={errors["rp-email-field"]}
          rules={{
            required: "Email is required",
          }}
        />
        <p className="font-roboto text-xs text-[var(--color-green-accent)] lg:text-sm w-full mb-2">
          We will send you an email that will allow you to reset your password
        </p>
        <ActionButton onClick={handleSubmit(onSubmit, onError)}>
          Reset Password
        </ActionButton>
        <ActionButton variant="secondary" onClick={() => setAuthView("login")}>
          Back to Log In
        </ActionButton>
      </form>
    </section>
  );
}

export default ResetPassword;
