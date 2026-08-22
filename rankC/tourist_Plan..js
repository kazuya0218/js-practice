// C108: 【50万人記念問題】観光の計画
// 指定された順番で観光名所を訪れたときの合計時間を求める

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
  const spotCount = Number(lines[0]);

  // 各観光名所の滞在時間
  const stayTimes = lines.slice(1, spotCount + 1).map(Number);

  // 観光名所間の移動時間
  const travelTimes = lines
    .slice(spotCount + 1, spotCount * 2 + 1)
    .map((line) => line.split(' ').map(Number));

  // 訪れる観光名所の数
  const visitCount = Number(lines[spotCount * 2 + 1]);

  // 訪れる観光名所の順番
  const visitSpots = lines.slice(spotCount * 2 + 2).map(Number);

  let totalTime = 0;

  for (let i = 0; i < visitCount; i++) {
    const currentSpot = visitSpots[i];

    // 現在の観光名所での滞在時間
    totalTime += stayTimes[currentSpot - 1];

    // 次の観光名所への移動時間
    if (i < visitCount - 1) {
      const nextSpot = visitSpots[i + 1];

      totalTime += travelTimes[currentSpot - 1][nextSpot - 1];
    }
  }

  console.log(totalTime);
});

/*
改善ポイント

元のコード
----------
const end = Number(lines[spots * 2 + travelCount + 1]);

for (...) {
    move += times[go - 1];
    move += travelTimes[go - 1][next - 1];
}

console.log(move + times[end - 1]);


改善後
-------
for (let i = 0; i < visitCount; i++) {
    const currentSpot = visitSpots[i];

    totalTime += stayTimes[currentSpot - 1];

    if (i < visitCount - 1) {
        const nextSpot = visitSpots[i + 1];

        totalTime += travelTimes[currentSpot - 1][nextSpot - 1];
    }
}


理由
-----
元のコードでは、

・ループ内で滞在時間＋移動時間
・ループ終了後に最後の滞在時間

と分けて処理していた。

改善後は、

「訪れた観光名所では必ず滞在時間を加算する」
「最後ではない場合だけ次の場所への移動時間を加算する」

というルールにすると、1つのループで処理できる。


④ 配列のインデックス

観光名所の番号は1から始まるが、
JavaScriptの配列は0から始まる。

そのため、

stayTimes[currentSpot - 1]

travelTimes[currentSpot - 1][nextSpot - 1]

としている。


⑤ 今回の処理の考え方

例えば、

visitSpots = [1, 2, 3, 1]

なら、

1 → 2 → 3 → 1

の順番で観光する。

それぞれ、

① 1で滞在
② 1 → 2へ移動
③ 2で滞在
④ 2 → 3へ移動
⑤ 3で滞在
⑥ 3 → 1へ移動
⑦ 1で滞在

という順番で時間を足している。

最後の観光名所では移動する必要がないので、

if (i < visitCount - 1)

で移動時間だけ除外している。
*/
