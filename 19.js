//単語wordの最後のnum文字でしりとりし、成功するとYES失敗するとNOを返すプログラム
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
  const [num, word] = lines[0].split(' ').map(Number);
  const words = lines[1].split(' ');
  let result = false;
  for (let i = 0; i < words.length - 1; i++) {
    const last = words[i].slice(-num);
    const first = words[i + 1].slice(0, num);
    if (last !== first) {
      result = true;
      break;
    }
  }
  if (result) {
    console.log('NO');
  } else {
    console.log('YES');
  }
});
//こっちのがよい
// for (let i = 0; i < words.length - 1; i++) {
//     const last = words[i].slice(-num);
//     const first = words[i + 1].slice(0, num);

//     if (last !== first) {
//         console.log("NO");
//         return;
//     }
// }
// console.log("YES");
