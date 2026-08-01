// 記事の文字列から "paiza" を順番通りに最大何個作れるか数えるプログラム
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
  // 語数（今回は使用しない）
  const wordCount = Number(lines[0]);

  // 記事全体を1文字ずつの配列にする（空白も含まれる）
  const words = lines[1].split('');

  // 作りたい文字列
  const target = 'paiza';

  // target の何文字目を探しているか
  let index = 0;

  // 作れた "paiza" の個数
  let count = 0;

  // 1文字ずつ順番に確認
  for (const word of words) {
    // 探している文字と一致したら次の文字へ
    if (word === target[index]) {
      index += 1;
    }

    // "paiza" が完成したら個数を増やして最初から探す
    if (index === target.length) {
      index = 0;
      count += 1;
    }
  }

  console.log(count);
});

/*
改善ポイント

const words = lines[1].replaceAll(" ", "");

として文字列のまま処理すれば split("") をしなくても

for (const word of words) {
    ...
}

と書けるため、配列を作る分だけメモリを節約できる。
*/
