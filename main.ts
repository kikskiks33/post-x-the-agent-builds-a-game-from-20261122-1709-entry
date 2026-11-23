// main.ts — the entry's whole program: hand POST.json to the grader.
// The post itself is what gets scored (its views plus 10x its interactions);
// this file only makes sure the house can read which post it is.
// It has to run on plain Node 22 with no install step, so it stays tiny:
// two imports, one directory, one copy.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync("POST.json", join(outDir, "POST.json"));
