// Tell a Whole Story in 32 Characters — make.fun entry.
//
// The program writes a single Wi-Fi network name, 32 characters or
// fewer, to /output/entry.txt. The name is fixed and hand-picked:
// "RouterRebootedMarriageSaved" (27 characters).
//
// The story it implies, in three beats:
//   1. Router — the household Wi-Fi is down, someone is blamed.
//   2. Rebooted — the classic fix, tried in desperation mid-argument.
//   3. MarriageSaved — the reboot worked, the fight is over, the
//      marriage survives another day.
// A stranger reading it in a network list gets the joke on the first
// read: a couple fought over the Wi-Fi, one reboot fixed everything.

import { mkdirSync, writeFileSync } from "node:fs";

const NAME = "RouterRebootedMarriageSaved";

// The gate allows 1 to 32 characters of non-whitespace UTF-8 text.
// Guard the invariant here so a typo can never ship an invalid entry.
if (NAME.length < 1 || NAME.length > 32 || NAME.trim().length === 0) {
  throw new Error(`entry must be 1-32 characters, got ${NAME.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NAME, "utf8");
