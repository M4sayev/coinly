import { ClipLoader } from "react-spinners";

interface LoaderProps {
  isLoading: boolean;
}

function Loader({ isLoading }: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="text-[var(--color-accent-dblue)] font-mono grid place-items-center h-1/2"
    >
      <ClipLoader color="#1e3a8a" loading={isLoading} aria-hidden="true" />
    </div>
  );
}

export default Loader;
