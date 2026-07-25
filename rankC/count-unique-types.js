// 配列内に存在する種類の数を数えるプログラム
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
  // 要素数を取得(今回は未使用)
  const itemCount = Number(lines[0]);

  // 種類を判定する配列を取得
  const items = lines[1].split(" ");

  // 重複しない種類を保存
  const uniqueItems = [];

  // まだ登録されていない種類だけ追加
  for (const item of items) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }

  // 種類数を出力
  console.log(uniqueItems.length);
});

/*
改善ポイント（Setを利用）

Before
-------
const uniqueItems = [];

for (const item of items) {
  if (!uniqueItems.includes(item)) {
    uniqueItems.push(item);
  }
}

console.log(uniqueItems.length);


After
------
const uniqueItems = new Set(items);

console.log(uniqueItems.size);


理由
-----
・Setは重複を自動的に削除して保存できる
・includesで毎回検索する必要がない
・「種類数を数える」という目的に合ったデータ構造を使える
*/
