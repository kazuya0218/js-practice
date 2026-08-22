// 桜の開花宣言
// 5輪以上の花が初めて咲いた日を求め、
// AさんとBさんのどちらの予想が近いか判定する

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
  const [monthA, dayA] = lines[0].split(' ').map(Number);
  const [monthB, dayB] = lines[1].split(' ').map(Number);

  const dateA = new Date(2026, monthA - 1, dayA);
  const dateB = new Date(2026, monthB - 1, dayB);

  const N = Number(lines[2]);

  let flower = 0;

  for (let i = 3; i < N + 3; i++) {
    const [month, day, flowers] = lines[i].split(' ').map(Number);

    flower += flowers;

    // 初めて5輪以上になった日が開花日
    if (flower >= 5) {
      const floweringDate = new Date(2026, month - 1, day);

      const diffA = Math.abs((dateA - floweringDate) / (1000 * 60 * 60 * 24));

      const diffB = Math.abs((dateB - floweringDate) / (1000 * 60 * 60 * 24));

      console.log(month, day);

      if (diffA < diffB) {
        console.log('A');
      } else if (diffA > diffB) {
        console.log('B');
      } else {
        console.log('DRAW');
      }

      break;
    }
  }
});
