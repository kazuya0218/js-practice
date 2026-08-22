// C159: 当選通知
// 当選番号と投票番号を比較し、当選した投票IDを出力する

process.stdin.resume();
process.stdin.setEncoding('utf8');

const lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  const [winNum, nums] = lines[0].split(' ').map(Number);

  const winner = lines[1].split(' ').map(Number);
  const votes = lines[2].split(' ').map(Number);

  let result = false;

  for (let i = 0; i < nums; i++) {
    if (winner.includes(votes[i])) {
      console.log(i + 1);
      result = true;
    }
  }

  if (!result) {
    console.log(-1);
  }
});

/*
ポイント
・winner.includes(preNum[i]) で、
  投票番号が当選番号の中に存在するかを判定している。

・result を false から true に変更することで、
  1件でも当選したかを記録している。

・最後まで当選者がいなかった場合は -1 を出力する。
*/
