// ユーザーIDを登録番号順に並び替えるプログラム
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
  // ユーザー数
  const N = Number(lines[0]);

  // ユーザーID一覧
  const names = lines.slice(1);

  const users = [];

  // IDと通し番号をセットで保存
  for (let i = 0; i < names.length; i++) {
    // ID末尾の数字を取得
    const num = Number(names[i].match(/[0-9]+$/)[0]);

    users.push({
      id: names[i],
      number: num,
    });
  }

  // 通し番号が小さい順に並び替え
  users.sort((a, b) => a.number - b.number);

  // IDのみ出力
  for (const user of users) {
    console.log(user.id);
  }
});

/*
改善ポイント

Before
-------
const num = names[i].match(/[0-9]+$/);

users.push({
    id: names[i],
    number: num
});

After
------
const num = Number(names[i].match(/[0-9]+$/)[0]);

users.push({
    id: names[i],
    number: num
});

理由
-----
・match()は配列で返ってくるため、そのままだと
  numberには ["813"] のような配列が入る

・[0]を付けることで配列の中の文字列だけを取得できる

例:
"kirishima813".match(/[0-9]+$/)

結果
["813"]

[0]を付ける

["813"][0]

結果
"813"

・さらにNumber()を使うことで文字列から数値に変換でき、
  sort()で正しく大小比較できる
*/
