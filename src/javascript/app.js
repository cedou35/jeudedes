function diceRoll(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(diceRoll(7));

function scoring() {
  const score = 0;
  const point = score + diceRoll;

  if (diceRoll > 1) {
    (point);
  }
  else (diceRoll === 1)
  {
    (score = 0);
  }
}

function hold() {
  const score = 0;
  const point = score + scoring;

}

console.log(hold);