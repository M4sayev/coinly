interface HamburgerProps {
  onToggleMobileNav: () => void;
  isSidebarOpen: boolean;
}

function Hamburger({ onToggleMobileNav, isSidebarOpen }: HamburgerProps) {
  return (
    <button
      onClick={onToggleMobileNav}
      aria-haspopup="true"
      aria-controls="mobile-sidebar"
      aria-expanded={isSidebarOpen}
      aria-label="Open mobile sidebar navigation"
      className="pl-1 w-9 h-9 z-20 fixed top-2.5 right-5"
    >
      <svg stroke="#668aff" fill="none" viewBox="2 -5 115 105">
        <path
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="m 51 51 l -41 -41 a 1 1 0 0 0 0 10 h 60 "
          className={`[stroke-dasharray:64_100] [stroke-dashoffset:-74] transition-all duration-1000  ${
            isSidebarOpen ? "[stroke-dashoffset:10]" : ""
          }`}
        ></path>
        <path
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="m 10 90 l 80 -80 a 1 1 0 0 1 0 40 h -80 "
          className={`[stroke-dasharray:80_200] [stroke-dashoffset:-176] transition-all duration-1000  ${
            isSidebarOpen
              ? "[stroke-dashoffset:10] [stroke-dasharray:120_300]"
              : ""
          }`}
        ></path>
        <path
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="m 50 50 l 40 40 h -20 l -10 -10 h -50 "
          className={`[stroke-dasharray:40_200] [stroke-dashoffset:-100] transition-all duration-1000  ${
            isSidebarOpen
              ? "[stroke-dashoffset:10] [stroke-dasharray:66_300]"
              : ""
          }`}
        ></path>
      </svg>
    </button>
  );
}

export default Hamburger;
