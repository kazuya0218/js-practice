//条件に従って小文字、大文字に変換し出力するプログラム
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
  const ABC = lines[0]; //[小文字、大文字のaからz]
  const str = lines[1]; //[kazuya]
  let result = '';
  for (const char of str) {
    //charの文字を小文字にして文字コードを取得している
    // "a"の文字コード(97)を引くことでABCのインデックス番号と紐づけれる
    const index = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    if (ABC[index] === ABC[index].toUpperCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  console.log(result);
});
