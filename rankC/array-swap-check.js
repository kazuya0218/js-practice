// 指定された回数だけ要素を入れ替え、昇順になっているか判定するプログラム
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
  // 配列の要素数
  const N = Number(lines[0]);

  // 数値の配列
  const nums = lines[1].split(' ').map(Number);

  // 入れ替え回数
  const swapCount = Number(lines[2]);

  // 要素を入れ替える
  for (let i = 3; i < swapCount + 3; i++) {
    const [a, b] = lines[i].split(' ').map(Number);

    // 入力は1始まりなので、配列の添字に合わせて-1する
    [nums[a - 1], nums[b - 1]] = [nums[b - 1], nums[a - 1]];
  }

  // 昇順に並べた配列を作成（元の配列は変更しない）
  const sorted = [...nums].sort((a, b) => a - b);

  // 昇順になっているか判定
  if (nums.join(' ') === sorted.join(' ')) {
    console.log('Yes');
  } else {
    console.log('No');
  }
});

/*
改善ポイント

Before
-------
if (...) {
    console.log("Yes");
} else {
    console.log("No");
}

After
------
console.log(
    nums.join(" ") === sorted.join(" ")
        ? "Yes"
        : "No"
);

理由
-----
・Yes/Noを出力するだけなら三項演算子で1行にまとめられる。
・ただし、今の書き方でも十分読みやすいので無理に変える必要はない。
*/
