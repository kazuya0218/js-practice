// スコアの高い順に1224方式で順位を出力するプログラム
process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  // 人数を取得(今回は未使用)
  const participantCount = Number(lines[0]);

  // 各参加者のスコアを取得
  const scores = lines.slice(1).map(Number);

  // スコアを降順に並び替え
  const sortedScores = [...scores].sort((a, b) => b - a);

  // 元の順番で1224方式の順位を出力
  for (const score of scores) {
    console.log(sortedScores.indexOf(score) + 1);
  }
});

/*
改善ポイント①（Mapを利用）

Before
-------
for (const score of scores) {
  console.log(sortedScores.indexOf(score) + 1);
}

After
------
const uniqueScores = [...new Set(scores)].sort((a, b) => b - a);

const rankMap = new Map();

for (let i = 0; i < uniqueScores.length; i++) {
  rankMap.set(uniqueScores[i], i + 1);
}

for (const score of scores) {
  console.log(rankMap.get(score));
}

理由
-----
・indexOf()は毎回先頭から検索するため効率が悪い
・Mapを使うと順位をすぐ取得できる
・データ数が増えても高速に処理できる


改善ポイント②（1223方式）

const sortedScores = [...scores].sort((a, b) => b - a);

const rankMap = new Map();
let currentRank = 1;

for (const score of sortedScores) {
  if (!rankMap.has(score)) {
    rankMap.set(score, currentRank);
    currentRank++;
  }
}

for (const score of scores) {
  console.log(rankMap.get(score));
}

理由
-----
・1223方式の順位付けへ変更できる
・順位付けの違いを学習できる
*/
