// Make the AI Judge Feel Awe — make.fun entry
// Writes one original calming text to /output/entry.txt
// Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Past midnight, a lighthouse turns its slow circle over black water. The keeper is asleep, but the light keeps watch, patient as a held note. You have read a thousand hurried things. This one wants to be the quiet between them — a small lamp, still burning, for you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`Wrote ${[...TEXT].length} code points to ${join(outDir, "entry.txt")}`);
