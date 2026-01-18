import PasswordField from "../../UI/form/PasswordField";
import FormElement from "../../UI/form/FormElement";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import ActionButton from "../../UI/Buttons/ActionButton";
import TermsAndPolicy from "../../UI/form/TermsAndPolicy";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSingupType } from "@/types/form";
import { userSingupSchema } from "@/schemas/auth";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSingupType>({
    mode: "onBlur",
    resolver: zodResolver(userSingupSchema),
  });

  const onSubmit: SubmitHandler<UserSingupType> = (data) => console.log(data);
  const onError: SubmitErrorHandler<UserSingupType> = (errors) =>
    console.log(errors);

  return (
    <form
      method="dialog"
      className="flex flex-col gap-4 lg:gap-6 z-10"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormElement<UserSingupType>
        register={register}
        id="signup-email-field"
        label="Email"
        type="email"
        name="email"
        placeholder="yourname@example.com"
        error={errors["email"]}
      />

      <PasswordField<UserSingupType>
        register={register}
        id="signup-password-field"
        name="password"
        label="Password"
        placeholder="Enter your password"
        error={errors["password"]}
        showForgot={false}
      />
      <TermsAndPolicy<UserSingupType>
        register={register}
        id="agree-to-terms-field"
        name="terms"
        error={errors["terms"]}
      />
      <ActionButton type="submit">
        <span className="py-0.5">Create account</span>
      </ActionButton>
    </form>
  );
}

export default SignUpForm;
