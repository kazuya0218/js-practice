// 利益を計算し、赤字となる店舗数を数えるプログラム
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
  // 店舗数と営業日数を取得
  const [storeCount, operatingDays] = lines[0].split(" ").map(Number);

  // A: 固定費
  // B: 1日あたりの運営費
  // C: 1個あたりの利益
  const [fixedCost, dailyCost, profitPerItem] = lines[1]
    .split(" ")
    .map(Number);

  // 各店舗の販売個数を取得
  const salesCounts = lines.slice(2).map(Number);

  // 赤字店舗数を管理
  let unprofitableStoreCount = 0;

  // 各店舗の利益を計算
  for (const salesCount of salesCounts) {
    const profit =
      profitPerItem * salesCount -
      fixedCost -
      dailyCost * operatingDays;

    // 利益がマイナスなら赤字店舗としてカウント
    if (profit < 0) {
      unprofitableStoreCount++;
    }
  }

  // 赤字店舗数を出力
  console.log(unprofitableStoreCount);
});

/*
改善ポイント

Before
-------
if (profitPerItem * salesCount - fixedCost - dailyCost * operatingDays < 0) {
  unprofitableStoreCount++;
}

After
------
const profit =
  profitPerItem * salesCount -
  fixedCost -
  dailyCost * operatingDays;

if (profit < 0) {
  unprofitableStoreCount++;
}

理由
-----
・利益を変数に入れることで式の意味が分かりやすくなる
・同じ計算を別の処理でも再利用しやすい
・デバッグもしやすくなる
*/
