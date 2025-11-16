import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { closeSignUp } from "../../../state/ui/uiSlice";

interface LinkProps {
  text: string;
  to: string;
}

function TermsAndPolicyLink({ text, to }: LinkProps) {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => dispatch(closeSignUp());
  return (
    <Link
      onClick={handleCloseModal}
      to={to}
      type="button"
      className="ml-1 text-[var(--color-accent)]"
      aria-label={`View our {text}`}
    >
      {text}
    </Link>
  );
}

export default TermsAndPolicyLink;
