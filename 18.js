//数字が大きい順に順位を出力するプログラム
//1224方式で順位をつけている
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
  const count = lines.slice(1).map(Number);
  const sorted = [...count].sort((a, b) => b - a);
  //scoreにcountを入れる場合は[2,1,2,4] sortedの場合は[1,2,2,4]
  for (const score of count) {
    console.log(sorted.indexOf(score) + 1);
  }
});

//別のやり方
// const arr = [120, 100, 100, 90];
// const sorted = [...new Set(arr)].sort((a, b) => b - a);
// const rankMap = new Map();
// for (let i = 0; i < sorted.length; i++) {
//   rankMap.set(sorted[i], i + 1);
// }
// for (const score of arr) {
//   console.log(rankMap.get(score));
// }

//1223方式で順位をつけていく場合
// const arr = [100, 90, 90, 80];
// const sorted = [...arr].sort((a, b) => b - a);
// const rank = new Map();
// let currentRank = 1;
// for (const score of sorted) {
//     if (!rank.has(score)) {
//         rank.set(score, currentRank);
//         currentRank++;
//     }
// }
// for (const score of arr) {
//     console.log(rank.get(score));
// }
