type ColorToNumberType = { [k: string]: number };
type Color = keyof ColorToNumberType;

const ColorToNumber: ColorToNumberType = {
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

export function decodedValue(colors: Color[]): number {
  return ColorToNumber[colors[0]] * 10 + ColorToNumber[colors[1]];
}
