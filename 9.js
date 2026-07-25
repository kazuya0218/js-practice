//重さ判定するプログラム
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
  const Q = Number(lines[0]);
  let left = 0;
  let right = 0;
  for (let i = 1; i <= Q; i++) {
    let [A, B, C] = lines[i].split(' ');
    const weight = Number(C);
    if (A === '1') {
      if (B === 'L') {
        left += weight;
      } else {
        right += weight;
      }
    } else if (A === '2') {
      if (B === 'L') {
        left -= weight;
      } else {
        right -= weight;
      }
    } else {
      if (B === 'L') {
        right += weight;
        left -= weight;
      } else {
        left += weight;
        right -= weight;
      }
    }

    if (left > right) {
      console.log('>');
    } else if (left < right) {
      console.log('<');
    } else {
      console.log('=');
    }
  }
});
