export function validatePesel(pesel: string): boolean {
  if (!/^\d{11}$/.test(pesel)) return false;

  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const digits = pesel.split("").map(Number);
  const controlSum =
    digits
      .slice(0, 10)
      .reduce((sum, digit, i) => sum + digit * weights[i], 0) % 10;
  const controlDigit = (10 - controlSum) % 10;

  return controlDigit === digits[10];
}
