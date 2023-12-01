import fs from "node:fs";
import path from "node:path";

const day = new Date().getDate();

(globalThis as any).inputFile = function inputFile(fileName = "input") {
  const file = path.resolve("days", day.toString(), fileName);
  const buffer = fs.readFileSync(file, "utf8");

  return buffer;
};
