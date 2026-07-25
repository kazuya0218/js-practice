赤字店舗数カウントプログラム;
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
  const [N, M] = lines[0].split(' ').map(Number);
  const [A, B, C] = lines[1].split(' ').map(Number);
  const R = lines.slice(2).map(Number);

  let count = 0;

  for (let r of R) {
    if (C * r - A - B * M < 0) {
      count++;
    }
  }
  //赤字店舗数
  console.log(count);
});
