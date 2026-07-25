// 左右の重さを管理し、どちらが重いか判定するプログラム
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
  // 操作回数を取得
  const queryCount = Number(lines[0]);

  // 左右の重さを管理
  let leftWeight = 0;
  let rightWeight = 0;

  // 各操作を処理
  for (let i = 1; i <= queryCount; i++) {
    // A: 操作種類、B: 対象、C: 重さ
    const [operationType, side, value] = lines[i].split(" ");
    const weight = Number(value);

    // 重さを追加
    if (operationType === "1") {
      if (side === "L") {
        leftWeight += weight;
      } else {
        rightWeight += weight;
      }
    }
    // 重さを削除
    else if (operationType === "2") {
      if (side === "L") {
        leftWeight -= weight;
      } else {
        rightWeight -= weight;
      }
    }
    // 左右の重さを入れ替える
    else {
      if (side === "L") {
        rightWeight += weight;
        leftWeight -= weight;
      } else {
        leftWeight += weight;
        rightWeight -= weight;
      }
    }

    // 左右の重さを比較
    if (leftWeight > rightWeight) {
      console.log(">");
    } else if (leftWeight < rightWeight) {
      console.log("<");
    } else {
      console.log("=");
    }
  }
});

/*
改善ポイント

① 重さの変更処理をまとめる

Before
-------
if (operationType === "1") {
  if (side === "L") {
    leftWeight += weight;
  } else {
    rightWeight += weight;
  }
}


After
------
const change = operationType === "1" ? weight : -weight;

if (side === "L") {
  leftWeight += change;
} else {
  rightWeight += change;
}


理由
-----
・追加と削除で同じ処理を共通化できる
・if文の数を減らせる
・「増減する値」を変数化できる


② 比較処理を関数化

Before
-------
if (leftWeight > rightWeight) {
  console.log(">");
} else if (leftWeight < rightWeight) {
  console.log("<");
} else {
  console.log("=");
}


After
------
const result =
  leftWeight > rightWeight ? ">" :
  leftWeight < rightWeight ? "<" : "=";

console.log(result);


理由
-----
・比較結果を1つの値として扱える
・条件分岐を短くできる
*/
