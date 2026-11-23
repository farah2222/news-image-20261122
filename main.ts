// "The World in One Day" — news-image-20261122 entry.
// The image is the entry.png beside this file; the program copies it to the
// grader's output directory (or $MAKEFUN_OUTPUT_DIR when run locally).
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "entry.png");
if (!existsSync(source)) throw new Error(`entry image missing: ${source}`);
const dest = join(outputDir, "entry.png");
copyFileSync(source, dest);
if (statSync(dest).size !== statSync(source).size) {
  throw new Error(`entry image copy incomplete: ${dest}`);
}
