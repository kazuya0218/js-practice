// 宿泊費と交通費
// インターンの間をホテルに泊まり続けるか、家に帰るかを比較して最小費用を求める

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
  const [A, B, C] = lines[0].split(' ').map(Number);

  // インターンの日程を [初日, 最終日] の配列として取得
  const intern = lines.slice(1).map((line) => line.split(' ').map(Number));

  // 最初のインターンへ行くための片道料金 + 最後に帰宅するための片道料金
  let totalCost = A * 2;

  // インターンとインターンの間の費用を計算
  for (let i = 0; i < C - 1; i++) {
    const stayDays = intern[i + 1][0] - intern[i][1];
    const stayCost = stayDays * B;

    // ホテル代と往復交通費の安い方を選ぶ
    totalCost += Math.min(stayCost, A * 2);
  }

  console.log(totalCost);
});

/*
改善ポイント

Before
-------
const intern = lines.slice(1).map(Number);


After
-----
const intern = lines.slice(1).map(line => line.split(' ').map(Number));


理由
-----
インターンの日程は1行に2つの数字が入っているため、
そのまま Number() には変換できない。

入力
-----
1 3
4 6
8 10


↓ split(" ")

["1", "3"]
["4", "6"]
["8", "10"]


↓ map(Number)

[1, 3]
[4, 6]
[8, 10]


最終的に
-----
intern[0] → [1, 3]
intern[1] → [4, 6]
intern[2] → [8, 10]


intern[i][0] → インターンの初日
intern[i][1] → インターンの最終日


ポイント
-----
1行に複数の値がある場合は、

lines.slice(1)
↓
各行を取り出す
↓
split(" ")
↓
空白で分割する
↓
map(Number)
↓
数字に変換する

という流れ。
*/
