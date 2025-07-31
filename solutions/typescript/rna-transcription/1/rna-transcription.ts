type DNA = "A" | "C" | "G" | "T";
type RNA = "A" | "C" | "G" | "U";

export function toRna(dna: string): string {
  const dToR = (d: string): string => {
    console.log(`callee: ${d}`);
    switch (d) {
      case "A":
        return "U";
      case "C":
        return "G";
      case "G":
        return "C";
      case "T":
        return "A";
      default:
        throw new Error("Invalid input DNA.");
    }
  };

  let ret = "";
  for (let i = 0; i < dna.length; i++) {
    console.log(`caller: ${dna[i]}`);
    ret += dToR(dna[i]);
  }
  return ret;
}
