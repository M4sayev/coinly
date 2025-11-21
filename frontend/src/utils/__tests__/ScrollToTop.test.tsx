import { render } from "@testing-library/react";
import ScrollToTop from "../ScrollToTop";
import { MemoryRouter, Route, Routes } from "react-router-dom";

it("calls window.scrollTo on pathname change", () => {
  const scrollToMock = vi
    .spyOn(window, "scrollTo")
    .mockImplementation(() => {});

  render(
    <MemoryRouter initialEntries={["/home"]}>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </MemoryRouter>
  );

  render(
    <MemoryRouter initialEntries={["/about"]}>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </MemoryRouter>
  );

  expect(scrollToMock).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    behavior: "instant",
  });

  scrollToMock.mockRestore();
});
