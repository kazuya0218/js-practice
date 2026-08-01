// 文字を並べ替えて同じ文字列になるか判定するプログラム
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
  // 問題数
  const N = Number(lines[0]);

  // 各問題を判定
  for (let i = 1; i < N * 2; i += 2) {
    // S,Tを取得
    const [char1, char2] = lines.slice(i, i + 2);

    // 文字を並べ替える
    const sortedChar1 = char1.split('').sort().join('');
    const sortedChar2 = char2.split('').sort().join('');

    // 並べ替え後が一致するか確認
    if (sortedChar1 === sortedChar2) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
});
