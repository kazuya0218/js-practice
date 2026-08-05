// 嫌いな数字を含まない病室番号を出力するプログラム
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
  // 嫌いな数字
  const dislikedNumber = lines[0];

  // 病室数（今回は使用しない）
  const roomCount = Number(lines[1]);

  // 病室番号一覧
  const rooms = lines.slice(2);

  // 出力した病室があるか判定
  let found = false;

  for (const room of rooms) {
    // 嫌いな数字を含まない病室だけ出力
    if (!room.includes(dislikedNumber)) {
      console.log(room);
      found = true;
    }
  }

  // すべての病室に嫌いな数字が含まれていた場合
  if (!found) {
    console.log('none');
  }
});
