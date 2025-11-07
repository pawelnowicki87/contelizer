const { validatePesel } = require("../utils/validatePesel");

describe("validatePesel()", () => {
  it("should return true for a valid PESEL", () => {
    expect(validatePesel("44051401359")).toBe(true);
  });

  it("should return false for PESEL that is too short", () => {
    expect(validatePesel("1234567890")).toBe(false);
  });

  it("should return false for PESEL that is too long", () => {
    expect(validatePesel("123456789012")).toBe(false);
  });

  it("should return false for PESEL containing letters", () => {
    expect(validatePesel("44A51401359")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(validatePesel("")).toBe(false);
  });

  it("should return false for non-numeric characters", () => {
    expect(validatePesel("44051401-359")).toBe(false);
  });

  it("should return true for another valid PESEL", () => {
    expect(validatePesel("02070803628")).toBe(true);
  });
});
