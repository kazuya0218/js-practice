// n日間の始値・終値・高値・安値を求めるプログラム
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
  // 日数を取得
  const N = Number(lines[0]);

  // 各日の株価データを2次元配列で取得
  const stockPrice = lines
    .slice(1, N + 1)
    .map((line) => line.split(' ').map(Number));

  // 始値(1日目)・終値(最終日)
  const result = [stockPrice[0][0], stockPrice[N - 1][1]];

  // 高値・安値を初日の値で初期化
  let maxNum = stockPrice[0][2];
  let minNum = stockPrice[0][3];

  // 全日程の高値・安値を更新
  for (let i = 1; i < N; i++) {
    if (maxNum < stockPrice[i][2]) {
      maxNum = stockPrice[i][2];
    }

    if (minNum > stockPrice[i][3]) {
      minNum = stockPrice[i][3];
    }
  }

  result.push(maxNum, minNum);

  console.log(result.join(' '));
});
