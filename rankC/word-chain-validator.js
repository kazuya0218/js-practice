// 各単語の末尾N文字と次の単語の先頭N文字を比較し、しりとりが成立するか判定するプログラム
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
  // 比較する文字数と単語数を取得(今回は単語数は未使用)
  const [compareLength, wordCount] = lines[0].split(" ").map(Number);

  // 単語一覧を取得
  const words = lines[1].split(" ");

  // 隣り合う単語同士を比較
  for (let i = 0; i < words.length - 1; i++) {
    // 現在の単語の末尾N文字
    const lastCharacters = words[i].slice(-compareLength);

    // 次の単語の先頭N文字
    const firstCharacters = words[i + 1].slice(0, compareLength);

    // 一致しなければ失敗
    if (lastCharacters !== firstCharacters) {
      console.log("NO");
      return;
    }
  }

  // すべて一致した場合
  console.log("YES");
});

/*
改善ポイント

Before
-------
let isInvalid = false;

for (let i = 0; i < words.length - 1; i++) {
  const lastCharacters = words[i].slice(-compareLength);
  const firstCharacters = words[i + 1].slice(0, compareLength);

  if (lastCharacters !== firstCharacters) {
    isInvalid = true;
    break;
  }
}

if (isInvalid) {
  console.log("NO");
} else {
  console.log("YES");
}

After
------
for (let i = 0; i < words.length - 1; i++) {
  const lastCharacters = words[i].slice(-compareLength);
  const firstCharacters = words[i + 1].slice(0, compareLength);

  if (lastCharacters !== firstCharacters) {
    console.log("NO");
    return;
  }
}

console.log("YES");

理由
-----
・判定用のフラグが不要になる
・条件を満たさない時点で処理を終了できる
・コードが短くなり、読みやすくなる
*/
