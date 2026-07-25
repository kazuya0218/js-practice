// 節分の豆配布プログラム
// A番目〜B番目の参加者へ豆を配り、年齢を超えないように管理する

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
  const N = Number(lines[0]);
  const ages = lines.slice(1, N + 1).map(Number);

  // 命令数
  const M = Number(lines[N + 1]);

  const beans = Array(N).fill(0);

  for (let i = 0; i < M; i++) {
    const [A, B, C] = lines[N + 2 + i].split(' ').map(Number);

    // A番目〜B番目へ豆を配る（配列は0番目開始なのでA-1）
    for (let j = A - 1; j < B; j++) {
      beans[j] = Math.min(beans[j] + C, ages[j]);
    }
  }

  console.log(beans.join('\n'));
});

/*
改善ポイント

Before
-------
beans[j] += C;

if (beans[j] > ages[j]) {
  beans[j] = ages[j];
}


After
------
beans[j] = Math.min(beans[j] + C, ages[j]);


理由
-----
・上限を超えない処理を1行で書ける
・Math.min()は最大値制限でよく使う
*/
