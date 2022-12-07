const fs = require('fs');

const input = fs.readFileSync('6/input.txt', 'utf-8');

const packetMarker = (input) => {
  for (let i = 0; i < input.length; i++) {
    let letterGroup = input.slice(i - 14, i);

    const letterSet = new Set(letterGroup);

    if (letterSet.size === 14) {
      output = i;
      console.log(output);
      break;
    }
  }
};

packetMarker(input);
