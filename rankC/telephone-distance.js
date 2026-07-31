// 黒電話のダイヤル総移動距離を計算するプログラム
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
  // 電話番号を1文字ずつ取得
  const phoneNumber = lines[0].split('');

  // 各数字の移動距離
  const dialDistance = {
    0: 12,
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
    6: 8,
    7: 9,
    8: 10,
    9: 11,
  };

  let totalDistance = 0;

  // 総移動距離を計算
  for (const digit of phoneNumber) {
    if (digit === '-') {
      continue;
    }

    // 往復分を加算
    totalDistance += dialDistance[digit] * 2;
  }

  console.log(totalDistance);
});

/*
改善ポイント

Before
-------
totalDistance += dialDistance[digit] + dialDistance[digit];

After
------
totalDistance += dialDistance[digit] * 2;

理由
-----
・同じ値を2回足すより「2倍」と書いた方が意図が伝わりやすい
・コードが少し短くなる
*/
