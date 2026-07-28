// バスに乗車するたびに残高・ポイントを更新し、各乗車後の状態を出力するプログラム
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
  // Z: カード残高, K: バス乗車回数
  let [balance, rideCount] = lines[0].split(' ').map(Number);

  // 各乗車の運賃
  const fares = lines.slice(1, rideCount + 1).map(Number);

  // 保有ポイント
  let points = 0;

  // K回バスに乗車
  for (let i = 0; i < rideCount; i++) {
    // ポイントだけで支払える場合
    if (fares[i] <= points) {
      points -= fares[i];
      console.log(balance, points);
    }
    // 残高で支払える場合
    else if (fares[i] <= balance) {
      balance -= fares[i];
      points += fares[i] / 10;
      console.log(balance, points);

      // 残高が0になったら終了
      if (balance === 0) {
        return;
      }
    }
    // 残高不足で支払えない場合
    else {
      console.log(balance, points);
      return;
    }
  }
});

/*
改善ポイント

Before
-------
else if (fares[i] < balance) {
  ...
}
else if (balance === fares[i]) {
  ...
}

After
------
else if (fares[i] <= balance) {
  balance -= fares[i];
  points += fares[i] / 10;
  console.log(balance, points);

  if (balance === 0) {
    return;
  }
}

理由
-----
・「支払える」という条件を1つにまとめられる
・同じ処理を重複して書かなくて済む
・コードが短くなり、保守しやすい

※ 問題文に「ポイントは整数」と指定がある場合は
points += Math.floor(fares[i] / 10);
とするとより正確。
*/
