// yとnの回答を確認し、復習が必要な問題数と番号を出力するプログラム
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
  // 問題数を取得
  const questionCount = Number(lines[0]);

  // 復習が必要な問題番号を保存
  const reviewQuestions = [];

  // 各問題の回答を確認
  for (let i = 1; i <= questionCount; i++) {
    const [firstAnswer, secondAnswer] = lines[i].split(" ");

    // 両方yではない場合は復習対象
    if (!(firstAnswer === "y" && secondAnswer === "y")) {
      reviewQuestions.push(i);
    }
  }

  // 復習対象の数を出力
  console.log(reviewQuestions.length);

  // 復習対象の番号を出力
  console.log(reviewQuestions.join("\n"));
});

/*
改善ポイント

Before
-------
let count = 0;
let answer = [];

for (let i = 1; i <= questionCount; i++) {
  const [firstAnswer, secondAnswer] = lines[i].split(" ");

  if (!(firstAnswer === "y" && secondAnswer === "y")) {
    answer.push(i);
    count++;
  }
}

console.log(count);
console.log(answer.join("\n"));


After
------
const reviewQuestions = [];

for (let i = 1; i <= questionCount; i++) {
  const [firstAnswer, secondAnswer] = lines[i].split(" ");

  if (!(firstAnswer === "y" && secondAnswer === "y")) {
    reviewQuestions.push(i);
  }
}

console.log(reviewQuestions.length);
console.log(reviewQuestions.join("\n"));


理由
-----
・countとanswerの2つを管理する必要がなくなる
・配列のlengthで要素数を取得できる
・データ管理を1つにまとめられる
*/
