//yかnで復習するか判断プログラム
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
  const N = lines[0];
  let count = 0;
  let answer = [];
  for (let i = 1; i <= N; i++) {
    const [A, B] = lines[i].split(' ');
    if (!(A === 'y' && B === 'y')) {
      answer.push(i);
      count++;
    }
  }
  console.log(count);
  console.log(answer.join('\n'));
});
