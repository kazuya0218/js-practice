//Leet変換プログラム
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
  const str = lines[0];
  let Leet = '';
  const map = {
    A: '4',
    E: '3',
    G: '6',
    I: '1',
    O: '0',
    S: '5',
    Z: '2',
  };
  for (const ch of str) {
    if (map[ch]) {
      Leet += map[ch];
    } else {
      Leet += ch;
    }
  }
  console.log(Leet);
});
//短く書くなら
//result += map[ch] || ch;
