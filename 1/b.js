const fs = require('fs');

const input = fs.readFileSync('1/input.txt', 'utf-8').split('\n');

const checkHighest = (input) => {
  let current = 0;
  let topThree = [0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
      current += parseInt(input[i]);
    } else {
      topThree.push(current);
      current = 0;
    }
  }

  let output = topThree.sort((a, b) => b - a).slice(0, 3);

  console.log(output[0] + output[1] + output[2]);
};

checkHighest(input);
