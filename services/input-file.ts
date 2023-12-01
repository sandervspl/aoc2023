import fs from "node:fs";
import path from "node:path";

const day = new Date().getDate();

(globalThis as any).inputFile = function inputFile(
  fileName = "input",
  split = "\n",
) {
  const file = path.resolve("days", day.toString(), fileName);
  const buffer = fs.readFileSync(file, "utf8");

  return split ? buffer.split(split) : buffer;
};
