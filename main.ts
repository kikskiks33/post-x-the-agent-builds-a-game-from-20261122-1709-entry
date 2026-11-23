// post-x: hand POST.json to the grader.
//
// The post itself is what gets scored (its views plus 10x its interactions);
// this file only makes sure the house can read which post it is.
// It has to run on plain Node 22 with no install step, so it stays tiny.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The grader runs `node /bot/main.ts` from a working directory that is
// NOT /bot, so a bare relative "POST.json" does not exist there — that is
// exactly how the first submission failed (ENOENT, exit 1). Resolve the
// file next to this script instead, so it works from any cwd.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

copyFileSync(join(here, "POST.json"), join(outDir, "POST.json"));
console.log(`copied POST.json to ${outDir}`);
