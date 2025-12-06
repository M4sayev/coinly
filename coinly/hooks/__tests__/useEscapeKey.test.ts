import { fireEvent, renderHook } from "@testing-library/react";
import { useEscapeKey } from "../useEscapeKey";
import type { Mock } from "vitest";
import type { Procedure } from "@vitest/spy";

describe("useEscapeKey", () => {
  let callback: Mock<Procedure>;
  beforeEach(() => {
    callback = vi.fn();
  });
  const renderUseEscapeKey = () => {
    renderHook(() => useEscapeKey(callback));
  };
  it("Calls the callback on Escape key pressed", () => {
    renderUseEscapeKey();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(callback).toBeCalledTimes(1);
  });

  it("Doesn't call the callback on the any other key except Escape", () => {
    renderUseEscapeKey();
    fireEvent.keyDown(document, { key: "Space" });
    fireEvent.keyDown(document, { key: "W" });
    fireEvent.keyDown(document, { key: "M" });
    expect(callback).toBeCalledTimes(0);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
