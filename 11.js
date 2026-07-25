//1か月で2種類のライブを開催し、開催日によって要素を取得するプログラム
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
  //[5,12,14,15,16,17,4,12,21,22,23]
  const M = Number(lines[0]); //[5]
  const A = lines.slice(1, M + 1).map(Number); //lines[1から6(5まで)]　[12,14,15,16,17]
  const N = Number(lines[M + 1]); //lines[6]になるから[4]
  const B = lines.slice(M + 2).map(Number); //lines[7]からすべて[12,21,22,23]
  let isATurn = true;
  for (let day = 1; day <= 31; day++) {
    const hasA = A.includes(day);
    const hasB = B.includes(day);
    if (hasA && !hasB) {
      console.log('A');
    } else if (!hasA && hasB) {
      console.log('B');
    } else if (!hasA && !hasB) {
      console.log('x');
    } else {
      if (isATurn) {
        console.log('A');
        isATurn = false;
      } else {
        console.log('B');
        isATurn = true;
      }
    }
  }
});
//改善点s
// console.log(isATurn ? "A" : "B");
// isATurn = !isATurn;
