///エレベーターが何階分動いたか合計を出力するプログラム
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
  const num = lines[0];
  const stratum = lines.slice(1).map(Number);
  let sum = 0;
  let boot = false;
  for (let i = 0; i < stratum.length; i++) {
    if (!boot) {
      sum += stratum[i] - 1;
      boot = true;
    } else if (stratum[i - 1] < stratum[i]) {
      sum += stratum[i] - stratum[i - 1];
    } else {
      sum += stratum[i - 1] - stratum[i];
    }
  }
  console.log(sum);
});

//こっちのほうがよい
// let sum = stratum[0] - 1;
// for (let i = 1; i < stratum.length; i++) {
//     sum += Math.abs(stratum[i] - stratum[i - 1]);
// }
// console.log(sum);
