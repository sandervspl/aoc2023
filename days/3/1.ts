/**
 * https://adventofcode.com/2023/day/3
 */
import 'services/array';
import 'services/math';
import 'services/input-file';

const data = inputFile(3).split('\n');
// const data = `467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..`.split('\n');

let solution = 0;

function isSymbol(char: string) {
  return !['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(char);
}

for (let i = 0; i < data.length; i++) {
  const line = data[i];
  if (!line) continue;

  let num = '';
  let counts = false;
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (!char) continue;

    if (char.match(/[0-9]/g)) {
      num += char;

      // look left
      if (line[j - 1] && isSymbol(line[j - 1]!)) {
        counts = true;
      }

      // look right
      if (line[j + 1] && isSymbol(line[j + 1]!)) {
        counts = true;
      }

      // look up
      if (data[i - 1]?.[j] && isSymbol(data[i - 1]![j]!)) {
        counts = true;
      }

      // look down
      if (data[i + 1]?.[j] && isSymbol(data[i + 1]![j]!)) {
        counts = true;
      }

      // look top left
      if (data[i - 1]?.[j - 1] && isSymbol(data[i - 1]![j - 1]!)) {
        counts = true;
      }

      // look top right
      if (data[i - 1]?.[j + 1] && isSymbol(data[i - 1]![j + 1]!)) {
        counts = true;
      }

      // look bottom left
      if (data[i + 1]?.[j - 1] && isSymbol(data[i + 1]![j - 1]!)) {
        counts = true;
      }

      // look bottom right
      if (data[i + 1]?.[j + 1] && isSymbol(data[i + 1]![j + 1]!)) {
        counts = true;
      }

      // Edge case: number at the end of a line
      if (counts && j === line.length - 1) {
        solution += Number(num || 0);
      }
    } else {
      if (counts) {
        solution += Number(num || 0);
      }

      num = '';
      counts = false;
    }
  }
}

console.log(`Answer:\n`, solution);
