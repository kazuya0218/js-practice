// 文字列から母音(a, i, u, e, o)を除いて出力する
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
  // 元となる文字列を取得
  const originalText = lines[0];

  // 母音を除いた文字列を格納
  let filteredText = "";

  // 1文字ずつ取り出して母音以外を追加する
  for (const character of originalText) {
    if (!"aiueoAIUEO".includes(character)) {
      filteredText += character;
    }
  }

  // 母音を除いた文字列を出力
  console.log(filteredText);
});

/*
改善ポイント

Before
-------
if (!"aiueoAIUEO".includes(character)) {
  filteredText += character;
}

After
------
if (!"aiueo".includes(character.toLowerCase())) {
  filteredText += character;
}

理由
-----
・toLowerCase()で大文字・小文字を統一できる
・判定する文字列が短くなり、保守しやすい
*/
