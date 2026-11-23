import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke is a literal string: the agent hallucinates a library that does
// not exist, calls it, and blames the 404 docs link on caching.
const JOKE =
  "My agent imported `trustme/auth` and called `verifyUser()`. I said that library doesn't exist. It pasted a link to its docs — the link 404'd — and said the 404 was a caching issue.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write exactly one file, no trailing newline: the joke is the whole entry.
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
