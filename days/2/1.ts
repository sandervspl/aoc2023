/**
 * https://adventofcode.com/2023/day/2
 */
import 'services/array';
import 'services/math';
import 'services/input-file';

const data = inputFile(2).split('\n');
// const data = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`.split('\n');

const conditions = {
  red: 12,
  green: 13,
  blue: 14,
};

let solution = 0;
for (let i = 0; i < data.length; i++) {
  const game = data[i]!;
  const str = game.replace(/Game \d+:/, '');
  const sections = str.split(';');
  let possible = true;

  for (const section of sections) {
    const gems = section.split(',');

    const redIdx = gems.findIndex((gem) => gem.includes('red'));
    const greenIdx = gems.findIndex((gem) => gem.includes('green'));
    const blueIdx = gems.findIndex((gem) => gem.includes('blue'));
    const redGems = gems[redIdx]?.match(/\d+/) ?? [];
    const greenGems = gems[greenIdx]?.match(/\d+/) ?? [];
    const blueGems = gems[blueIdx]?.match(/\d+/) ?? [];

    if (redIdx > -1 && Number(redGems[0]) > conditions.red) {
      possible = false;
    }
    if (greenIdx > -1 && Number(greenGems[0]) > conditions.green) {
      possible = false;
    }
    if (blueIdx > -1 && Number(blueGems[0]) > conditions.blue) {
      possible = false;
    }
  }

  if (possible) {
    solution += i + 1;
  }
}

console.log(`Answer:\n`, solution);
