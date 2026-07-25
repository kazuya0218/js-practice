// 指定された文字パターンに従って、大文字・小文字を変換するプログラム
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
  // アルファベット(a～z)の大文字・小文字のパターンを取得
  const alphabetPattern = lines[0];

  // 変換する文字列を取得
  const originalText = lines[1];

  // 変換後の文字列を格納
  let convertedText = "";

  // 文字列を1文字ずつ変換
  for (const character of originalText) {
    // アルファベットの位置(0～25)を取得
    // "a"の文字コードを引くことでインデックス番号へ変換する
    const alphabetIndex =
      character.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);

    // パターンが大文字なら大文字、小文字なら小文字へ変換
    if (
      alphabetPattern[alphabetIndex] ===
      alphabetPattern[alphabetIndex].toUpperCase()
    ) {
      convertedText += character.toUpperCase();
    } else {
      convertedText += character.toLowerCase();
    }
  }

  // 変換後の文字列を出力
  console.log(convertedText);
});

/*
改善ポイント

Before
-------
if (
  alphabetPattern[alphabetIndex] ===
  alphabetPattern[alphabetIndex].toUpperCase()
) {
  convertedText += character.toUpperCase();
} else {
  convertedText += character.toLowerCase();
}

After
------
const shouldBeUppercase =
  alphabetPattern[alphabetIndex] ===
  alphabetPattern[alphabetIndex].toUpperCase();

convertedText += shouldBeUppercase
  ? character.toUpperCase()
  : character.toLowerCase();

理由
-----
・条件を変数名で表現できるため読みやすくなる
・三項演算子で変換処理を1か所にまとめられる
*/
