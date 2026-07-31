// カレーとライスを先着順で組み合わせ、完成したカレーライスを出力するプログラム
process.stdin.resume();
process.stdin.setEncoding('utf8');

const lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  // 生産順(C:カレー、R:ライス)
  const productionOrder = lines[1].split(' ');

  // 完成待ちのカレー・ライスを管理
  const waitingCurry = [];
  const waitingRice = [];

  // 完成したカレーライスを保存
  const result = [];

  // 生産順に処理
  for (let i = 0; i < productionOrder.length; i++) {
    const productNumber = i + 1;

    if (productionOrder[i] === 'C') {
      // ライスが待機していれば完成
      if (waitingRice.length > 0) {
        result.push([productNumber, waitingRice.shift()]);
      } else {
        // ライスがなければ待機
        waitingCurry.push(productNumber);
      }
    } else {
      // カレーが待機していれば完成
      if (waitingCurry.length > 0) {
        result.push([waitingCurry.shift(), productNumber]);
      } else {
        // カレーがなければ待機
        waitingRice.push(productNumber);
      }
    }
  }

  // 完成したカレーライス数
  console.log(result.length);

  // 組み合わせを出力
  for (const pair of result) {
    console.log(pair.join(' '));
  }
});

/*
改善ポイント

Before
-------
if (productionOrder[i] === "C" && waitingRice.length > 0) {
    ...
} else if (productionOrder[i] === "R" && waitingCurry.length > 0) {
    ...
} else if (productionOrder[i] === "C" && waitingRice.length === 0) {
    ...
} else {
    ...
}

After
------
if (productionOrder[i] === "C") {
    if (waitingRice.length > 0) {
        ...
    } else {
        ...
    }
} else {
    if (waitingCurry.length > 0) {
        ...
    } else {
        ...
    }
}

理由
-----
・「Cが来た場合」「Rが来た場合」を分けることで流れが理解しやすい
・同じ条件を何度も書かずに済む
・条件分岐が増えたときも修正しやすい
*/
