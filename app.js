"use strict"
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function happy(number) {
  var m, digit;
  var cycle = [];

  while (number != 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += digit * digit;
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number == 1);
}

var cnt = 8;
var number = 1;
let res = []
while (cnt-- > 0) {
  while (!happy(number))
    number++;
  res.push(number)
  number++;
}


rl.question('How many first happy numbers need to print: ', (n) => {
  var cnt = n;
  var number = 1;
  let res = []
  while (cnt-- > 0) {
    while (!happy(number))
      number++;
    res.push(number)
    number++;
  }

  console.log(`Happy Numbers: ${res}.`)

  rl.close()
})
