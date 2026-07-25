// 投票数を集計し、一番多く投票された名前を出力するプログラム
process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  // 投票人数を取得(今回は未使用)
  const voterCount = Number(lines[0]);

  // 投票された名前一覧を取得
  const names = lines.slice(1);

  // 名前ごとの投票数を管理
  const voteCounts = new Map();

  // 投票数を集計
  for (const name of names) {
    // すでに投票がある場合は+1、初めての場合は1票に設定
    if (voteCounts.has(name)) {
      voteCounts.set(name, voteCounts.get(name) + 1);
    } else {
      voteCounts.set(name, 1);
    }
  }

  // 最多投票数と名前を管理
  let highestVoteCount = 0;
  let winnerName = "";

  // 最も投票数が多い名前を探す
  for (const [name, voteCount] of voteCounts) {
    if (voteCount > highestVoteCount) {
      highestVoteCount = voteCount;
      winnerName = name;
    }
  }

  // 当選者を出力
  console.log(winnerName);
});

/*
改善ポイント

Before
-------
if (voteCounts.has(name)) {
  voteCounts.set(name, voteCounts.get(name) + 1);
} else {
  voteCounts.set(name, 1);
}


After
------
voteCounts.set(name, (voteCounts.get(name) || 0) + 1);


理由
-----
・if文を使わずに初期値設定と加算を1行で書ける
・Mapに存在しない場合はget()がundefinedになるため、0として扱える
・カウント処理でよく使われる書き方
*/
