// レシートごとのポイントを計算するプログラム
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
  // receiptCount ... レシートの枚数
  const receiptCount = Number(lines[0]);

  let totalPoint = 0;

  for (let i = 1; i <= receiptCount; i++) {
    // purchaseDate ... 購入日
    // purchaseAmount ... 購入金額
    const [purchaseDate, purchaseAmount] = lines[i].split(' ');

    let pointRate = 0.01;

    if (purchaseDate.includes('3')) {
      pointRate = 0.03;
    } else if (purchaseDate.includes('5')) {
      pointRate = 0.05;
    }

    totalPoint += Math.floor(Number(purchaseAmount) * pointRate);
  }

  console.log(totalPoint);
});
