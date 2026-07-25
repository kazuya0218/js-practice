// 1か月間のライブ開催日を判定し、A・B・xを出力する
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
  // Aライブの開催日数を取得
  const concertACount = Number(lines[0]);

  // Aライブの開催日一覧を取得
  const concertADays = lines.slice(1, concertACount + 1).map(Number);

  // Bライブの開催日数を取得
  const concertBCount = Number(lines[concertACount + 1]);

  // Bライブの開催日一覧を取得
  const concertBDays = lines.slice(concertACount + 2).map(Number);

  // A・B両方開催される日は交互に表示するためのフラグ
  let isConcertATurn = true;

  // 1日〜31日まで順番に判定
  for (let day = 1; day <= 31; day++) {
    const hasConcertA = concertADays.includes(day);
    const hasConcertB = concertBDays.includes(day);

    // Aライブのみ開催
    if (hasConcertA && !hasConcertB) {
      console.log("A");
    }
    // Bライブのみ開催
    else if (!hasConcertA && hasConcertB) {
      console.log("B");
    }
    // どちらも開催しない
    else if (!hasConcertA && !hasConcertB) {
      console.log("x");
    }
    // 両方開催する場合は交互に出力
    else {
      console.log(isConcertATurn ? "A" : "B");

      // 次回はもう一方を出力する
      isConcertATurn = !isConcertATurn;
    }
  }
});

/*
改善ポイント

Before
-------
if (isConcertATurn) {
  console.log("A");
  isConcertATurn = false;
} else {
  console.log("B");
  isConcertATurn = true;
}

After
------
console.log(isConcertATurn ? "A" : "B");
isConcertATurn = !isConcertATurn;

理由
-----
・三項演算子を使うことでif...elseを1行で書ける
・!を使うことでtrueとfalseを簡潔に切り替えられる
*/
