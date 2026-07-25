// ボールの受け渡しをシミュレーションし、最終的な所持数を出力するプログラム
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
  // 人数を取得
  const peopleCount = Number(lines[0]);

  // 各人の初期ボール数を取得
  const ballCounts = lines.slice(1, peopleCount + 1).map(Number);

  // ボールを渡す回数を取得
  const operationCount = Number(lines[peopleCount + 1]);

  // ボールの受け渡しをシミュレーション
  for (let i = 0; i < operationCount; i++) {
    // from: 渡す人
    // to: 受け取る人
    // transferCount: 渡すボールの数
    const [from, to, transferCount] = lines[peopleCount + 2 + i]
      .split(" ")
      .map(Number);

    // 持っているボールが足りない場合は、持っている分だけ渡す
    if (ballCounts[from - 1] < transferCount) {
      ballCounts[to - 1] += ballCounts[from - 1];
      ballCounts[from - 1] = 0;
    }
    // ボールが十分ある場合は指定された数だけ渡す
    else {
      ballCounts[from - 1] -= transferCount;
      ballCounts[to - 1] += transferCount;
    }
  }

  // 最終的な各人のボール数を出力
  for (const ballCount of ballCounts) {
    console.log(ballCount);
  }
});

/*
改善ポイント

Before
-------
if (ballCounts[from - 1] < transferCount) {
  ballCounts[to - 1] += ballCounts[from - 1];
  ballCounts[from - 1] = 0;
} else {
  ballCounts[from - 1] -= transferCount;
  ballCounts[to - 1] += transferCount;
}

After
------
const actualTransferCount = Math.min(
  ballCounts[from - 1],
  transferCount
);

ballCounts[from - 1] -= actualTransferCount;
ballCounts[to - 1] += actualTransferCount;

理由
-----
・Math.min()を使うことで「実際に渡す数」を1回で求められる
・if文が不要になり、処理を共通化できる
・実務でもこのように共通処理へまとめる書き方がよく使われる
*/
