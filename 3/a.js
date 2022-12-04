const fs = require('fs');

const input = fs.readFileSync('3/input.txt', 'utf-8').split('\n');

const alpha = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const splitWord = (word, half) => {
  return [word.slice(0, half), word.slice(half, word.length - 1)];
};

const rucksackCheck = (input) => {
  let output = 0;
  let counter = 0;
  let sameLetter;
  let half;

  for (let i = 0; i < input.length; i++) {
    half = Math.floor(input[i].length / 2);

    for (let j = 0; j < Math.floor(input[i].length / 2); j++) {
      for (let k = 0; k < Math.floor(input[i].length / 2); k++) {
        if (
          splitWord(input[i], half)[0][j] === splitWord(input[i], half)[1][k]
        ) {
          sameLetter = splitWord(input[i], half)[0][j];

          if (counter === 0) {
            output += alpha[sameLetter];
          }

          counter++;
        }
      }
    }
    counter = 0;
  }
  console.log(output);
};

rucksackCheck(input);
