// 2つのリースが回転によって同じ並びになるか判定するプログラム
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
  // リースの花の数
  const flowerCount = Number(lines[0]);

  // 1つ目・2つ目のリース
  const wreath1 = lines[1];
  const wreath2 = lines[2].split('');

  // 回転させながら一致するか確認
  for (let i = 0; i < flowerCount; i++) {
    if (wreath1 === wreath2.join('')) {
      console.log('Yes');
      return;
    }

    // 先頭の花を末尾へ移動（1回転）
    wreath2.push(wreath2.shift());
  }

  console.log('No');
});

/*
改善ポイント

Before
-------
if (wreath1 === wreath2.join("")) {
    ...
} else {
    wreath2.push(wreath2.shift());
}

After
------
if (wreath1 === wreath2.join("")) {
    console.log("Yes");
    return;
}

wreath2.push(wreath2.shift());

理由
-----
・ifで一致した場合だけ処理を終了すればよい
・elseが不要になり、ネストが浅くなって読みやすい
*/
