import { formatBigNumber } from "../utils";

it("test edge falsy values", () => {
  expect(formatBigNumber(NaN)).toBe("");
  expect(formatBigNumber(undefined)).toBe("");
  expect(formatBigNumber(null)).toBe("");
});

it("test edge cases", () => {
  expect(formatBigNumber(999)).toBe("999");
  expect(formatBigNumber(1e6)).toBe("1.0M");
  expect(formatBigNumber(1e12)).toBe("1.0T");

  expect(formatBigNumber(0)).toBe("0");
  expect(formatBigNumber(Number.MAX_SAFE_INTEGER)).toBe("9007.2T");
});
