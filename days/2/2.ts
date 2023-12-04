/**
 * https://adventofcode.com/2023/day/2#part2
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
let solution = 0;

for (let i = 0; i < data.length; i++) {
  const game = data[i]!;
  const str = game.replace(/Game \d+:/, '');
  const sections = str.split(';');

  const minGems = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (const section of sections) {
    const gems = section.split(',');

    const redIdx = gems.findIndex((gem) => gem.includes('red'));
    const greenIdx = gems.findIndex((gem) => gem.includes('green'));
    const blueIdx = gems.findIndex((gem) => gem.includes('blue'));
    const redGems = gems[redIdx]?.match(/\d+/) ?? [];
    const greenGems = gems[greenIdx]?.match(/\d+/) ?? [];
    const blueGems = gems[blueIdx]?.match(/\d+/) ?? [];

    minGems.red = Math.max(Number(redGems[0]) || 0, minGems.red);
    minGems.green = Math.max(Number(greenGems[0]) || 0, minGems.green);
    minGems.blue = Math.max(Number(blueGems[0]) || 0, minGems.blue);
  }

  solution += minGems.red * minGems.green * minGems.blue;
}

console.log(`Answer:\n`, solution);
