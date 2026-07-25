//何時間活動したかを時差も含めて計算するプログラム

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
  let min = 0;
  let max = 0;
  const N = Number(lines[0]);
  for (let i = 1; i <= N; i++) {
    const [A, B, C] = lines[i].split(' ').map(Number);
    const value = A + B - C + 24;
    if (i === 1) {
      min = value;
      max = value;
    }
    if (max < value) {
      max = value;
    }
    if (min > value) {
      min = value;
    }
  }
  console.log(min);
  console.log(max);
});
