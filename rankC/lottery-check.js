// くじの当選番号を確認し、当選数を出力するプログラム
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
  // 当選番号を取得
  const winNumbers = lines[0].split(' ').map(Number);

  // くじの枚数
  const sheets = Number(lines[1]);

  // くじ1枚ごとに確認
  for (let i = 2; i < sheets + 2; i++) {
    // 自分のくじ番号を取得
    const lotteryNumbers = lines[i].split(' ').map(Number);

    // 当選数
    let hitCount = 0;

    // くじ番号を1つずつ確認
    for (const num of lotteryNumbers) {
      // 当選番号に含まれているか確認
      if (winNumbers.includes(num)) {
        hitCount++;
      }
    }

    console.log(hitCount);
  }
});
/*
改善ポイント

Before
-------
if (winNumbers.includes(num)) {
    hitCount++;
}


After
------
const winSet = new Set(winNumbers);

if (winSet.has(num)) {
    hitCount++;
}


理由
-----
・includes()は配列を先頭から順番に検索するため、データ量が多い場合は遅くなる
・Setのhas()は高速検索ができるため、大量データ向き
・今回の入力サイズではincludes()でも問題ないが、競プロではSetを使う場面も多い
*/
