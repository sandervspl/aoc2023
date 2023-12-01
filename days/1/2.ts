/**
 * https://adventofcode.com/2023/day/1#part2
 */
import "services/array";
import "services/math";
import "services/input-file";

const data = inputFile().split("\n");
// const data = `two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`.split("\n");

// prettier-ignore
const units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

let sum = 0;
for (const line of data) {
  const nums: number[] = [];

  let str = "";
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    str += char;

    const numInLine = str.match(/[0-9]/)?.map((val) => Number(val));
    if (numInLine) {
      nums.push(numInLine[0]!);
      str = "";
      continue;
    }

    for (let u = 0; u < units.length; u++) {
      const unit = units[u];
      if (str.includes(unit!)) {
        nums.push(u + 1);
        // Reset to the last char instead of empty for cases like "oneight" where "eight" would be skipped
        str = char!;
      }
    }
  }

  if (nums.length) {
    sum += Number(String(nums.first()) + String(nums.last()));
  }
}

console.log(`Answer:\n`, sum);
