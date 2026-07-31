// 過半数が合格するために必要な最小の加点を求めるプログラム
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
  // 受講者数と合格点
  const [studentCount, passingScore] = lines[0].split(' ').map(Number);

  // 各学生の点数
  const scores = lines[1].split(' ').map(Number);

  // 合格者数と、不合格者が合格に必要な点数
  let passCount = 0;
  const requiredPoints = [];

  for (const score of scores) {
    if (score >= passingScore) {
      passCount++;
    } else {
      requiredPoints.push(passingScore - score);
    }
  }

  // 必要な加点を小さい順に並べる
  requiredPoints.sort((a, b) => a - b);

  // 過半数に必要な人数
  const majority = Math.floor(studentCount / 2) + 1;

  // すでに過半数なら加点不要
  if (passCount >= majority) {
    console.log(0);
    return;
  }

  // 過半数にするために必要な最小の加点
  console.log(requiredPoints[majority - passCount - 1]);
});

/*
改善ポイント

Before
-------
below.sort((a, b) => a - b);

をループの中で毎回実行していた

After
------
for (...) {
    ...
}

requiredPoints.sort((a, b) => a - b);

理由
-----
・全ての値を追加してから1回だけソートすれば十分
・ループのたびにソートすると無駄な処理が増える
・データ数が増えるほど処理速度の差が大きくなる
*/
