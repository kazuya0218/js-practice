// N種類のパーツの中で存在しない種類数を数えるプログラム
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
  // パーツの種類数を取得
  const partTypeCount = Number(lines[0]);

  // 持っているパーツ一覧を取得
  const ownedParts = lines.slice(1).map(Number);

  // 存在するパーツ種類を保存
  const existingParts = new Set();

  // N種類以内のパーツだけ登録
  for (const part of ownedParts) {
    if (part <= partTypeCount) {
      existingParts.add(part);
    }
  }

  // 全種類数 - 存在する種類数 = 不足している種類数
  console.log(partTypeCount - existingParts.size);
});

/*
改善ポイント（Setを利用）

Before
-------
let existingParts = [];

for (let i = 0; i < partTypeCount; i++) {
  if (!existingParts.includes(ownedParts[i]) && ownedParts[i] <= partTypeCount) {
    existingParts.push(ownedParts[i]);
  }
}

console.log(partTypeCount - existingParts.length);


After
------
const existingParts = new Set();

for (const part of ownedParts) {
  if (part <= partTypeCount) {
    existingParts.add(part);
  }
}

console.log(partTypeCount - existingParts.size);


理由
-----
・Setは重複を自動で排除できる
・includesで検索する処理が不要になる
・「種類を管理する」という目的に適している
*/
