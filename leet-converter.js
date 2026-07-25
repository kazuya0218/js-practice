// 文字列をLeet(ネットミーム)表記に変換するプログラム
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
  // 変換する文字列を取得
  const originalText = lines[0];

  // Leet変換後の文字列を格納
  let convertedText = "";

  // Leet変換表
  const leetMap = {
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    O: "0",
    S: "5",
    Z: "2",
  };

  // 1文字ずつ取り出してLeet文字へ変換
  for (const character of originalText) {
    if (leetMap[character]) {
      convertedText += leetMap[character];
    } else {
      convertedText += character;
    }
  }

  // Leet変換後の文字列を出力
  console.log(convertedText);
});

/*
改善ポイント

Before
-------
if (leetMap[character]) {
  convertedText += leetMap[character];
} else {
  convertedText += character;
}

After
------
convertedText += leetMap[character] || character;

理由
-----
・条件分岐を1行で書ける
・対応する文字があれば変換し、なければ元の文字を追加できる
*/
