/**
 * https://adventofcode.com/2023/day/1
 */
import 'services/array';
import 'services/math';
import 'services/input-file';

const data = inputFile(1).split('\n');
// const data = `1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet`.split("\n");

let sum = 0;
for (const line of data) {
  const nums = line.match(/[0-9]/g);

  if (!nums) {
    continue;
  }

  sum += Number(String(nums.first()) + String(nums.last()));
}

console.log(`Answer:\n`, sum);
