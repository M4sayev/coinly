import { renderHook, fireEvent } from "@testing-library/react";
import useClickOutside from "../useClickOutside";
import type { Mock } from "vitest";
import type { Procedure } from "@vitest/spy";

describe("useClickOutside", () => {
  let callback: Mock<Procedure>;
  let element: HTMLDivElement;
  let ref: {
    current: HTMLDivElement;
  };
  beforeEach(() => {
    callback = vi.fn();
    element = document.createElement("div");
    document.body.appendChild(element);
    ref = { current: element };
  });

  const renderUseClickOutside = (isIgnoringClick = false) => {
    renderHook(() => useClickOutside(ref, callback, isIgnoringClick));
  };

  it("calls callback on click outside", () => {
    renderUseClickOutside();
    fireEvent.mouseDown(document.body);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("skips callback on click inside", () => {
    renderUseClickOutside();
    fireEvent.mouseDown(element);
    expect(callback).toBeCalledTimes(0);
  });

  it("ignores the click on the isIgnoringClick flag true", () => {
    renderUseClickOutside(true);
    fireEvent.mouseDown(element);
    fireEvent.mouseDown(document.body);
    expect(callback).toBeCalledTimes(0);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
