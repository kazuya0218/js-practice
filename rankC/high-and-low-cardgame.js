// 親カードと相手カードを比較し、High または Low を判定するプログラム
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
  // O: 親カードの数字, K: 親カードのマーク
  const [parentNumber, parentSuit] = lines[0].split(" ").map(Number);

  // 対戦回数
  const battleCount = Number(lines[1]);

  // 各対戦結果を判定
  for (let i = 2; i < battleCount + 2; i++) {
    const [rivalNumber, rivalSuit] = lines[i].split(" ").map(Number);

    // 数字が大きい方が勝ち、同じ数字ならマークが小さい方が勝ち
    if (
      parentNumber > rivalNumber ||
      (parentNumber === rivalNumber && parentSuit < rivalSuit)
    ) {
      console.log("High");
    } else {
      console.log("Low");
    }
  }
});

/*
改善ポイント

Before
-------
if (parentNumber > rivalNumber) {
    console.log("High");
} else if (parentNumber === rivalNumber && parentSuit < rivalSuit) {
    console.log("High");
} else {
    console.log("Low");
}

After
------
if (
    parentNumber > rivalNumber ||
    (parentNumber === rivalNumber && parentSuit < rivalSuit)
) {
    console.log("High");
} else {
    console.log("Low");
}

理由
-----
・Highになる条件を1つにまとめられる
・条件が増えても管理しやすい
・分岐が減り、コードが読みやすくなる
*/