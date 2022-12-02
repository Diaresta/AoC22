const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const checkHighest = (input) => {
  let current = 0;
  let highest = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
      if (current > highest) {
        highest = current;
      }
      current = 0;
    } else {
      current += parseInt(input[i]);
    }
  }

  console.log(highest);
};

checkHighest(input);
