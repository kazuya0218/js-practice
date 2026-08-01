// ストラックアウトで撃ち抜いたパネルの合計得点を計算するプログラム
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
  // パネルの縦・横のサイズ
  const [height, width] = lines[0].split(' ').map(Number);

  // パネルの状態（o: 撃ち抜かれた, x: 残っている）
  const symbols = lines.slice(1, height + 1).map((line) => line.split(''));

  // 各パネルの得点
  const scores = lines
    .slice(height + 1)
    .map((line) => line.split(' ').map(Number));

  let totalScore = 0;

  // 撃ち抜かれたパネルの得点を合計
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (symbols[i][j] === 'o') {
        totalScore += scores[i][j];
      }
    }
  }

  console.log(totalScore);
});
