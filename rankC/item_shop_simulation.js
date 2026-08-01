// RPGの道具屋での買い物をシミュレーションし、最終的な残金を求めるプログラム
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
  // 道具の種類数
  const toolCount = Number(lines[0]);

  // 各道具の値段
  const toolPrices = lines[1].split(' ').map(Number);

  // 所持金、注文回数
  let [money, orderCount] = lines[2].split(' ').map(Number);

  // 道具番号と値段をオブジェクトとして保持
  const tools = [];

  for (let i = 0; i < toolPrices.length; i++) {
    tools.push({
      id: i + 1,
      tool: toolPrices[i],
    });
  }

  // 注文を順番に処理
  for (let i = 3; i < orderCount + 3; i++) {
    const [orderId, quantity] = lines[i].split(' ').map(Number);

    // 購入金額
    const totalPrice = quantity * tools[orderId - 1].tool;

    // 所持金が足りる場合のみ購入
    if (money >= totalPrice) {
      money -= totalPrice;
    }
  }

  console.log(money);
});

/*
改善ポイント

Before
-------
if (money >= orders * obj[orderId - 1].tool) {
    money -= orders * obj[orderId - 1].tool;
}

After
------
const totalPrice = quantity * tools[orderId - 1].tool;

if (money >= totalPrice) {
    money -= totalPrice;
}

理由
-----
・同じ計算を2回書かなくて済む
・変数名を見るだけで「購入金額」だと分かる
・値段の計算方法が変わっても1か所直すだけで済む


さらに改善できる点
------------------
今回の問題では、道具番号(id)と配列の添字が対応しているため、
オブジェクトを作らず

toolPrices[orderId - 1]

だけで値段を取得できる。

今回はオブジェクトの練習として書くのは良いが、
実際の競技プログラミングでは配列だけの方がシンプルで高速。
*/
