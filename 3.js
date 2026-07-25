//種類の数を取得するプログラム
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
  const A = lines[1].split(' '); //[A,B,A,B,A]
  let kinds = [];
  for (let kind of A) {
    if (!kinds.includes(kind)) {
      kinds.push(kind);
    }
  }
  console.log(kinds.length);
});

//なれたらこっち
// const set = new Set(A);
// console.log(set.size);
