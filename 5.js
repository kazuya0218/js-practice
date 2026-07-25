//N種類のパーツの中でないものの数を出力するプログラム
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
  const X = lines.slice(1).map(Number); //[1,2,3,4,5]だったり[1,6,5,5,3]
  let arr = [];
  for (let i = 0; i < N; i++) {
    if (!arr.includes(X[i]) && X[i] <= N) {
      arr.push(X[i]);
    }
  }
  console.log(N - arr.length);
});

//setを使うなら
// const N = Number(lines[0]);
// const X = lines.slice(1).map(Number);

// const parts = new Set();

// for (let x of X) {
//     if (x <= N) {
//         parts.add(x);
//     }
// }

// console.log(N - parts.size);
