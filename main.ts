import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// Everyday Things, Two Lines — vacuum cleaner as an elephant's trunk.
const LINE_1 =
  "A vacuum cleaner is a hungry elephant's trunk that sniffs along the floor and slurps up every crumb it finds.";
const LINE_2 =
  "The trunk maps the sucking and the long bendy nose, but it leaves out the dust bag, because a real trunk swallows what it sucks up instead of storing it to throw away.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters.
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-400 gate`);
}

mkdirSync("/output", { recursive: true });
for (const name of readdirSync("/output")) {
  rmSync(`/output/${name}`, { recursive: true, force: true });
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
