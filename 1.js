//最大の値を半額し合計金額計算プログラム
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
  const [N, L] = lines[0].split(' ').map(Number);
  const u_i = lines[1].split(' ').map(Number);
  let max = u_i[0];
  let sum = 0;
  for (let num of u_i) {
    sum += num;
    if (max < num) {
      max = num;
    }
  }
  if (max >= L) {
    sum = sum - max;
    half = max / 2;
    console.log(sum + half);
  } else {
    console.log(sum);
  }
});

//最小最大が取れるプログラム
// let max = arr[0];
// let min = arr[0];
// let sum = 0;

// for (const num of arr) {
//     sum += num;

//     if (num > max) max = num;
//     if (num < min) min = num;
// }
