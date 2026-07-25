// しりとりが成立しているか確認し、失敗した箇所の文字またはYesを出力するプログラム
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
  // 単語数を取得(今回は未使用)
  const wordCount = Number(lines[0]);

  // 単語一覧を取得
  const words = lines.slice(1);

  // 単語を順番に比較
  for (let i = 0; i < words.length - 1; i++) {
    // 現在の単語の最後の文字
    const lastCharacter = words[i][words[i].length - 1];

    // 次の単語の最初の文字
    const firstCharacter = words[i + 1][0];

    // 文字が一致しなければ終了
    if (lastCharacter !== firstCharacter) {
      console.log(lastCharacter, firstCharacter);
      return;
    }
  }

  // 最後まで問題なければ成功
  console.log("Yes");
});

/*
改善ポイント

Before
-------
let result = false;
let last;
let first;

for (let i = 0; i < words.length - 1; i++) {
  last = words[i][words[i].length - 1];
  first = words[i + 1][0];

  if (last !== first) {
    result = true;
    break;
  }
}

if (result) {
  console.log(last, first);
} else {
  console.log("Yes");
}


After
------
for (let i = 0; i < words.length - 1; i++) {
  const lastCharacter = words[i][words[i].length - 1];
  const firstCharacter = words[i + 1][0];

  if (lastCharacter !== firstCharacter) {
    console.log(lastCharacter, firstCharacter);
    return;
  }
}

console.log("Yes");


理由
-----
・結果を保存するためのフラグ(result)が不要になる
・違反を見つけた時点で処理を終了できる
・変数の有効範囲をfor文内に限定できる
・コードの流れが自然になる
*/
