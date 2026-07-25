// 一番高い商品の価格が割引条件以上なら半額にして合計金額を計算
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
  // 商品数(今回は未使用)と割引条件となる金額を取得
  const [itemCount, discountThreshold] = lines[0].split(" ").map(Number);

  // 商品の価格一覧を配列で取得
  const prices = lines[1].split(" ").map(Number);

  // 一番高い商品と合計金額を管理
  let highestPrice = prices[0];
  let totalPrice = 0;

  // 合計金額を計算しながら最高額の商品を探す
  for (const price of prices) {
    totalPrice += price;

    if (price > highestPrice) {
      highestPrice = price;
    }
  }

  // 割引条件を満たす場合は最高額の商品を半額にする
  if (highestPrice >= discountThreshold) {
    const discountedPrice = highestPrice / 2;

    // 元の価格を引いて、半額後の価格を加える
    totalPrice = totalPrice - highestPrice + discountedPrice;
  }

  // 最終的な合計金額を出力
  console.log(totalPrice);
});
