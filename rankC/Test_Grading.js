// C056: テストの採点
// テストの点数から「欠席回数 × 5」を引き、
// 成績が0未満にならないようにして合格点以上の学生番号を出力する

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
  const [N, M] = lines[0].split(' ').map(Number);

  for (let i = 1; i <= N; i++) {
    const [score, absence] = lines[i].split(' ').map(Number);

    // 成績がマイナスにならないようにする
    const grade = Math.max(score - absence * 5, 0);

    // 合格点以上なら学籍番号を出力
    if (grade >= M) {
      console.log(i);
    }
  }
});

/*
改善ポイント

今回覚えたこと
----------------
Math.max() を使って、値が0未満にならないようにする。

const grade = Math.max(score - absence * 5, 0);


例
-----
score = 35
absence = 8

35 - 8 * 5
= -5

Math.max(-5, 0)
= 0


Math.max()
----------
複数の値の中から一番大きい値を返す。

Math.max(-5, 0)  → 0
Math.max(10, 0)  → 10
Math.max(35, 20) → 35


今回の考え方
-------------
1. 点数と欠席回数を取得
2. 「点数 - 欠席回数 × 5」を計算
3. Math.max() で最低0点にする
4. 合格点以上なら学籍番号を出力
*/
