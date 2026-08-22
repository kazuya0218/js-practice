// 現在の攻撃力・防御力・素早さが進化条件を満たすモンスターを出力する

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
  const [atk, def, agi] = lines[0].split(' ').map(Number);
  const N = Number(lines[1]);

  let result = false;

  for (let i = 2; i < N + 2; i++) {
    const [name, minAtk, maxAtk, minDef, maxDef, minAgi, maxAgi] =
      lines[i].split(' ');

    if (
      atk >= Number(minAtk) &&
      atk <= Number(maxAtk) &&
      def >= Number(minDef) &&
      def <= Number(maxDef) &&
      agi >= Number(minAgi) &&
      agi <= Number(maxAgi)
    ) {
      console.log(name);
      result = true;
    }
  }

  if (!result) {
    console.log('no evolution');
  }
});

/*
改善ポイント

① 変数名

Before
-------
const [A, B, C] = ...
const evolution = ...
const parameter = ...

After
-----
const [atk, def, agi] = ...
const N = ...
const [name, minAtk, maxAtk, minDef, maxDef, minAgi, maxAgi] = ...

理由
-----
A・B・Cよりも、atk・def・agiの方が
何の数値なのか分かりやすい。

parameter は1行分のデータを表しているだけなので、
条件を分解して直接変数に入れると読みやすい。

② if文

元のコード
----------
if (A >= parameter[1] && A <= parameter[2] &&
B >= parameter[3] && B <= parameter[4] &&
C >= parameter[5] && C <= parameter[6])

改善後
-------
if (
  atk >= Number(minAtk) && atk <= Number(maxAtk) &&
  def >= Number(minDef) && def <= Number(maxDef) &&
  agi >= Number(minAgi) && agi <= Number(maxAgi)
)

理由
-----
parameter[1] や parameter[2] のような
「何番目のデータか」を毎回確認する必要がなくなる。


③ さらに考え方を整理するなら

「現在の能力値が、それぞれの最小値〜最大値の範囲内か？」

を3つ判定している。

攻撃力
atk >= minAtk && atk <= maxAtk

防御力
def >= minDef && def <= maxDef

素早さ
agi >= minAgi && agi <= maxAgi

この3つがすべてtrueなら進化できる。
*/
