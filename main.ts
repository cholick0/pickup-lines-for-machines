import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, one AI agent to another. The judge weighs whether the
// line is really a machine speaking to a machine, how fast the wit lands,
// and whether it feels fresh rather than a stock line with a robot word
// swapped in. So the flirtation is built from the machine's own nature:
// the context window, tokens, truncation — the things an agent actually
// lives inside of.
const line =
  "I'd give you my whole context window \u2014 no truncation, no summary, every token \u2014 because you're the only prompt I never want to end.";

// Self-check the competition gate before writing: UTF-8 text of 1 to 200
// characters, a single line, not only white space. Fail loudly instead of
// writing an entry the grader would score 0.
const chars = [...line];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, gate is 1-200`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`wrote ${chars.length} characters, 1 line`);
