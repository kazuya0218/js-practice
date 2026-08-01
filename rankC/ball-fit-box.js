// ボールが入る箱の番号を出力するプログラム
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
  // 箱の数とボールの半径
  const [boxCount, radius] = lines[0].split(' ').map(Number);

  // ボールの直径
  const diameter = radius * 2;

  // 各箱を調べる
  for (let i = 1; i <= boxCount; i++) {
    // 箱の高さ・幅・奥行き
    const [height, width, depth] = lines[i].split(' ').map(Number);

    // 直径がすべての辺以下なら入る
    if (diameter <= height && diameter <= width && diameter <= depth) {
      console.log(i);
    }
  }
});
