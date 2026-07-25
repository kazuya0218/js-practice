//ボール回しプログラム
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const numPeople = Number(lines[0]);
  const numBall = lines.slice(1, numPeople + 1).map(Number);
  const count = Number(lines[numPeople + 1]);
  for (let i = 0; i < count; i++) {
    const [from, to, x] = lines[numPeople + 2 + i].split(' ').map(Number);
    if (numBall[from - 1] < x) {
      numBall[to - 1] += numBall[from - 1];
      numBall[from - 1] = 0;
    } else {
      numBall[from - 1] -= x;
      numBall[to - 1] += x;
    }
  }
  for (const ball of numBall) {
    console.log(ball);
  }
});
