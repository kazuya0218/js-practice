// 文字列内の記号ごとに点数を加算し、合計点を求めるプログラム
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
  // 判定する記号列を取得
  const symbolSequence = lines[0];

  // 合計点を管理
  let totalScore = 0;

  // 記号ごとに点数を加算
  for (const symbol of symbolSequence) {
    if (symbol === "<") {
      totalScore += 10;
    } else if (symbol === "/") {
      totalScore += 1;
    }
  }

  // 合計点を出力
  console.log(totalScore);
});

/*
改善ポイント①（オブジェクトを利用）

Before
-------
for (const symbol of symbolSequence) {
  if (symbol === "<") {
    totalScore += 10;
  } else if (symbol === "/") {
    totalScore += 1;
  }
}

After
------
const symbolPoints = {
  "<": 10,
  "/": 1,
};

for (const symbol of symbolSequence) {
  totalScore += symbolPoints[symbol] || 0;
}

理由
-----
・対応表をオブジェクトで管理できる
・記号が増えてもif文を書き足す必要がない
・保守しやすい


改善ポイント②（switch文を利用）

Before
-------
if (symbol === "<") {
  totalScore += 10;
} else if (symbol === "/") {
  totalScore += 1;
}

After
------
switch (symbol) {
  case "<":
    totalScore += 10;
    break;
  case "/":
    totalScore += 1;
    break;
}

理由
-----
・判定する記号が増えたときに見やすい
・複数条件を分岐するときによく使われる
*/
