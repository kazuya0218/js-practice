//"<"なら10"/"なら1を足していくプログラム
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
  const code = lines[0];
  let sum = 0;
  for (const num of code) {
    if (num === '<') {
      sum += 10;
    } else if (num === '/') {
      sum += 1;
    }
  }
  console.log(sum);
});
//オブジェクトなら
// const point = {
//     "<": 10,
//     "/": 1
// };
// let sum = 0;
// for (const ch of code) {
//     sum += point[ch] || 0;
// }

//swicthなら
// for (const ch of code) {
//     switch (ch) {
//         case "<":
//             sum += 10;
//             break;
//         case "/":
//             sum += 1;
//             break;
//     }
// }
