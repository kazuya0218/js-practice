// パーフェクトシャッフルをN回行い、最終的なカードの並びを出力するプログラム
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
  // M: カード枚数, N: シャッフル回数
  const [cardCount, shuffleCount] = lines[0].split(' ').map(Number);

  // カードを1～Mで初期化
  let cards = [];
  for (let i = 1; i <= cardCount; i++) {
    cards.push(i);
  }

  const half = cardCount / 2;

  // パーフェクトシャッフルをN回繰り返す
  for (let i = 0; i < shuffleCount; i++) {
    const shuffled = [];

    const firstHalf = cards.slice(0, half);
    const secondHalf = cards.slice(half);

    // 後半・前半の順に1枚ずつ交互に重ねる
    for (let j = 0; j < half; j++) {
      shuffled.push(secondHalf[j]);
      shuffled.push(firstHalf[j]);
    }

    // 次回のシャッフル対象を更新
    cards = shuffled;
  }

  console.log(cards.join(' '));
});

/*
💡改善ポイント

Before
-------
let cards = [];
for (let i = 1; i <= cardCount; i++) {
  cards.push(i);
}

After
------
const cards = Array.from({ length: cardCount }, (_, i) => i + 1);

理由
-----
・1～Mの配列を1行で作成できる
・JavaScriptらしい書き方
・競プロではfor文の方が分かりやすいので、今のままでも十分OK
*/
