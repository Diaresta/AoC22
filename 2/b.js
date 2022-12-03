const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const rpsCheck = (input) => {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === 'A') {
      if (input[i][2] === 'X') {
        total += 3;
      } else if (input[i][2] === 'Y') {
        total += 4;
      } else if (input[i][2] === 'Z') {
        total += 8;
      }
    } else if (input[i][0] === 'B') {
      if (input[i][2] === 'X') {
        total += 1;
      } else if (input[i][2] === 'Y') {
        total += 5;
      } else if (input[i][2] === 'Z') {
        total += 9;
      }
    } else if (input[i][0] === 'C') {
      if (input[i][2] === 'X') {
        total += 2;
      } else if (input[i][2] === 'Y') {
        total += 6;
      } else if (input[i][2] === 'Z') {
        total += 7;
      }
    }
  }
  console.log(total);
};

rpsCheck(input);
