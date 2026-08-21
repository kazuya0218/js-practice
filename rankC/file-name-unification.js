// ファイル名の統一
// 連続しているハイフン（-）を1個にまとめる

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
  const S = lines[0];

  // 2個以上連続しているハイフンを1個に置き換える
  const result = S.replace(/-+/g, '-');

  console.log(result);
});

/*
改善ポイント

今回のポイント
----------------
replace() と正規表現を使って、
連続しているハイフンを1個にまとめる。


/-+/g の意味
----------------
-  → ハイフンそのもの
+  → 直前の文字が1個以上連続
g  → 文字列全体を検索


例
----------------
--PA-I---ZA

↓

-PA-I-ZA


ポイント
----------------
/-+/g で、

--      → -
---     → -
----    → -

のように、連続したハイフンをすべて1個に置き換える。
*/
