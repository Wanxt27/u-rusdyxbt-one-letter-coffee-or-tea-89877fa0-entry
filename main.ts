// One Letter: Coffee or Tea — entry program (program/v1, Node 22).
// Writes exactly one letter to /output/entry.txt: "A" for coffee.
// The gate requires UTF-8 text of exactly 1 character, not whitespace only,
// so the letter is asserted to be a single non-whitespace character before
// anything is written. The output directory itself is never removed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "A"; // A = coffee, B = tea

if (LETTER.length !== 1 || LETTER.trim() === "") {
  throw new Error("entry letter must be exactly one non-whitespace character");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
