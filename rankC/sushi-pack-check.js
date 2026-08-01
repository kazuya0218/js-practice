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
/*
改善ポイント

Before
-------
const sorted_line = line.sort((a,b) => a - b);
const sorted_beforeline = beforeline.sort((a,b) => a - b);

After
------
targetSushi.sort((a, b) => a - b);
inputSushi.sort((a, b) => a - b);

理由
-----
・sort()は元の配列を書き換えるメソッドなので、
  別変数に保存しなくてもよい
・処理の流れがシンプルになり読みやすい

注意点
-----
・join("")で文字列化して比較する方法は今回の条件なら問題なし
・ただし数字の並びを比較する場合はjoin(" ")の方が安全

例:
[1, 23].join("") → "123"
[12, 3].join("") → "123"

この2つはjoin("")だと同じになるため。
*/
