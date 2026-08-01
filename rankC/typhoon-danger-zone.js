// 台風の暴風域にいるか判定するプログラム
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
  // 台風の中心座標と内側・外側の半径
  const [xc, yc, innerRadius, outerRadius] = lines[0].split(' ').map(Number);

  // 人数
  const people = Number(lines[1]);

  for (let i = 2; i < people + 2; i++) {
    // 人の座標
    const [x, y] = lines[i].split(' ').map(Number);

    // 中心からの距離の二乗を計算
    const distanceSquared = (x - xc) ** 2 + (y - yc) ** 2;

    // 暴風域にいるか判定
    if (
      distanceSquared >= innerRadius ** 2 &&
      distanceSquared <= outerRadius ** 2
    ) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }
});
