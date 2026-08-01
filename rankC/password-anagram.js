// 合言葉を並び替えて一致するか判定するプログラム
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
  // 合言葉
  const A = lines[0];

  // システムに入力する文字
  const S = lines[1];

  // 並び替え後の文字列を作成
  const sortedA = A.split('').sort().join('');
  const sortedS = S.split('').sort().join('');

  // 完全一致、または並び替えても一致しない場合
  if (S === A || sortedS !== sortedA) {
    console.log('NO');
  } else {
    console.log('YES');
  }
});
