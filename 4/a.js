const fs = require('fs');

const input = fs.readFileSync('4/input.txt', 'utf-8');
const inputFix = input.split('\n').map((row) => row.split(','));

const cleanup = (input) => {
  let output = 0;

  for (let i = 0; i < input.length; i++) {
    let [firstStart, firstEnd] = input[i][0]
      .split('-')
      .map((num) => parseInt(num));
    let [secondStart, secondEnd] = input[i][1]
      .split('-')
      .map((num) => parseInt(num));

    if (firstStart <= secondEnd && secondStart <= firstEnd) {
      output++;
    }
  }
  console.log(output);
};

cleanup(inputFix);
