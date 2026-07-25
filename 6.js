//入退時間をN日間記録して合計時間を表示するプログラム
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
  let startMinute = 0;
  let endMinute = 0;
  for (let i = 1; N >= i; i++) {
    const [start, end] = lines[i].split(' ');
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    startMinute += sh * 60 + sm;
    endMinute += eh * 60 + em;
  }
  const diff = endMinute - startMinute;
  const hour = Math.floor(diff / 60);
  const minute = diff % 60;

  console.log(hour, minute);
});
//もう少しきれいに書くなら
// const N = Number(lines[0]);
// let diff = 0;
// for (let i = 1; i <= N; i++) {
//     const [start, end] = lines[i].split(" ");
//     const [sh, sm] = start.split(":").map(Number);
//     const [eh, em] = end.split(":").map(Number);
//     diff += (eh * 60 + em) - (sh * 60 + sm);
// }
// const hour = Math.floor(diff / 60);
// const minute = diff % 60;
// console.log(hour, minute);
