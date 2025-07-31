type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

const Years: Map<Planet, number> = new Map([
  ["mercury", 0.2408467],
  ["venus", 0.61519726],
  ["earth", 1],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132],
]);

const earthSeconds = 31557600;

export function age(planet: Planet, seconds: number): number {
  console.log(planet, Years.get(planet));

  const y = Years.get(planet);
  if (y === undefined) throw new Error("Unknown planet");
  const r = seconds / earthSeconds / y;
  return Math.round(r * 100) / 100;
}
