import { render, screen } from "@testing-library/react";
import SelectDropdown from "./SelectDropdown";
import { currencies } from "../../../constants/currencies";
import userEvent from "@testing-library/user-event";
import { mockAnimationsApi } from "jsdom-testing-mocks";

mockAnimationsApi();

describe("SelectDropdown", () => {
  it("opens the dropdown and selects the option", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SelectDropdown
        id="currency"
        options={currencies}
        onChange={onChange}
        value="BTC"
      />
    );

    await user.click(screen.getByRole("button"));

    await user.click(screen.getByText("EUR"));

    expect(onChange).toHaveBeenCalledWith("EUR");
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
