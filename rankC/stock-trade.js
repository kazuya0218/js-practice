// 株の売買で利益を計算するプログラム
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  // N...日数 K_1...購入条件 K_2...売却条件
  const [N, K_1, K_2] = lines[0].split(' ').map(Number);

  // 各日の株価
  const stockPrice = lines.slice(1).map(Number);

  // 利益
  let profit = 0;

  // 保有株数
  let stock = 0;

  for (let i = 0; i < stockPrice.length; i++) {
    // 最終日は購入せず、持っている株をすべて売却
    if (N === i + 1) {
      profit += stock * stockPrice[i];
      stock = 0;

      // 株価がK_2以上なら、持っている株をすべて売却
    } else if (stock > 0 && K_2 <= stockPrice[i]) {
      profit += stock * stockPrice[i];
      stock = 0;

      // 株価がK_1以下なら1株購入
    } else if (K_1 >= stockPrice[i]) {
      stock++;
      profit -= stockPrice[i];
    }
  }

  console.log(profit);
});
