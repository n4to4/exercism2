type ColorToNumberType = { [k: string]: number };
type Color = keyof ColorToNumberType;

const colorToNumber: ColorToNumberType = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

function unit(n: number): string {
  const log = Math.log10(n);
  if (log < 3) {
    return `${n} ohms`;
  }
  if (log < 6) {
    return `${n / 10 ** 3} kiloohms`;
  }
  if (log < 9) {
    return `${n / 10 ** 6} megaohms`;
  }
  if (log < 12) {
    return `${n / 10 ** 9} gigaohms`;
  }
  return "";
}

export function decodedResistorValue([c1, c2, c3, ...cs]: Color[]): string {
  const n = colorToNumber[c1] * 10 + colorToNumber[c2];
  const zeros = colorToNumber[c3];
  return unit(n * 10 ** zeros);
}
