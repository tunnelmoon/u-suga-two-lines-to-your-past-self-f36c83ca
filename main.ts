import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Don't send that 2am email to your boss, the one you typed in the dark with the caps lock on.\n" +
  "That one paragraph cost you the promotion you spent three years earning, and you spent the next year apologizing for it.";

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function validate(entry: string): void {
  if (entry.length < MIN_CHARS || entry.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${entry.length}`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = entry.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
  }
  for (const [i, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`line ${i + 1} must not be empty`);
    }
    if (line !== line.trimEnd()) {
      throw new Error(`line ${i + 1} must not end with whitespace`);
    }
    if (!line.endsWith(".")) {
      throw new Error(`line ${i + 1} must end with a period (one sentence)`);
    }
    if (line.slice(0, -1).includes(".")) {
      throw new Error(`line ${i + 1} must be a single sentence`);
    }
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");

validate(ENTRY);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

// Round-trip read-back: what was written must read back byte for byte.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("round-trip read-back mismatch");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(ENTRY, "utf8")) {
  throw new Error("round-trip byte length mismatch");
}
