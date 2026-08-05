// 指定された寿司と投入される寿司を比較するプログラム
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
  // S: 寿司の種類数 K: パックに必要な寿司の個数
  const [S, K] = lines[0].split(' ').map(Number);

  // 指定された寿司の順番
  const targetSushi = lines.slice(1, K + 1).map(Number);

  // 投入される寿司
  const inputSushi = lines.slice(K + 1).map(Number);

  // 並び順を無視して比較するため昇順に並べる
  targetSushi.sort((a, b) => a - b);
  inputSushi.sort((a, b) => a - b);

  // 種類と個数が一致しているか確認
  if (targetSushi.join('') === inputSushi.join('')) {
    console.log('Yes');
  } else {
    console.log('No');
  }
});
