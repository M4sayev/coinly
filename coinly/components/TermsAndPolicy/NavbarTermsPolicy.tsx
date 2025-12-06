import { formatPage } from "../../utils/utils";
import DownloadButton from "../UI/Buttons/DownloadButton";
import Logo from "../UI/Logo/Logo";

interface NavbarTermsPolicyProps {
  page: string;
  filename: string;
}

function NavbarTermsPolicy({ page, filename }: NavbarTermsPolicyProps) {
  return (
    <header>
      <div className="absolute left-0 right-0 max-w-7xl mx-auto flex justify-between items-center px-6 py-6 font-roboto ">
        <div className="flex gap-4 items-center text-primary font-mono">
          <Logo
            linkTo={`/${page}`}
            ariaLabel={`Go to ${formatPage(page)} page`}
            className="w-9 h-9"
          />
          <span className="hidden md:block text-2xl capitalize ">
            {formatPage(page)}
          </span>
        </div>
        <DownloadButton
          filename={filename}
          variant="secondary"
          actionText="Download PDF"
        />
      </div>
    </header>
  );
}

export default NavbarTermsPolicy;
