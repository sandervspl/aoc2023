/**
 * https://adventofcode.com/2023/day/4#part2
 */
import 'services/array';
import 'services/math';
import 'services/input-file';

const data = inputFile(4).split('\n');
// const data = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`.split('\n');

let solution = 0;

// id, amount
const copies: Map<number, number> = new Map(data.map((_, i) => [i, 1]));

for (let i = 0; i < data.length; i++) {
  console.log(`Card ${i + 1}...`);
  const card = data[i]!;

  for (let c = 0; c < copies.get(i)!; c++) {
    const winningNumbers = card.slice(7).split(' | ')[0]!.split(/ +/g).filter(Boolean).map(Number);
    const numbers = card.slice(7).split(' | ')[1]!.split(/ +/g).filter(Boolean).map(Number);

    const matches = numbers.filter((num) => winningNumbers.includes(num));

    for (let j = 0; j < matches.length; j++) {
      const id = i + j + 1;
      copies.set(id, copies.get(id)! + 1);
    }
  }
}

solution = Array.from(copies).reduce((acc, [, amt]) => (acc += amt), 0);

console.log(`Answer:\n`, solution);
