// マンハッタン距離が指定距離以内の家の数を数えるプログラム
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
  // 家の数と、挨拶に行ける最大距離
  const [houseCount, maxDistance] = lines[0].split(' ').map(Number);

  // 自分の家の座標
  const home = lines[1].split(' ').map(Number);

  // 挨拶できる家の数
  let greetingCount = 0;

  // 各家との距離を計算
  for (let i = 2; i < houseCount + 2; i++) {
    const neighbor = lines[i].split(' ').map(Number);

    // マンハッタン距離
    const distance =
      Math.abs(home[0] - neighbor[0]) + Math.abs(home[1] - neighbor[1]);

    // 距離以内ならカウント
    if (distance <= maxDistance) {
      greetingCount++;
    }
  }

  console.log(greetingCount);
});

/*
改善ポイント

Before
-------
const greeting = [];

...

if (distance <= K) {
    greeting.push(distance);
}

console.log(greeting.length);

After
------
let greetingCount = 0;

...

if (distance <= maxDistance) {
    greetingCount++;
}

console.log(greetingCount);

理由
-----
・件数だけ必要なので配列を作る必要がない
・メモリを節約できる
・「数えるだけ」という目的が分かりやすい
*/
