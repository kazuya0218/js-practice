//しりとり　最後と最初の文字が一緒で終わったら"Yes"違う場合その場所を出力するプログラム
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
  const N = Number(lines[0]);
  const words = lines.slice(1); //[apple,eagle,orange]
  let result = false;
  let last;
  let first;
  for (let i = 0; i < words.length - 1; i++) {
    last = words[i][words[i].length - 1]; //appleの最後の文字e
    first = words[i + 1][0]; //eagleの最初の文字e
    if (last !== first) {
      result = true;
      break;
    }
  }
  if (result) {
    console.log(last, first);
  } else {
    console.log('Yes');
  }
});
//簡潔に
// for (let i = 0; i < words.length - 1; i++) {
//     const last = words[i][words[i].length - 1];
//     const first = words[i + 1][0];
//     if (last !== first) {
//         console.log(last, first);
//         return;
//     }
// }
// console.log("Yes");
