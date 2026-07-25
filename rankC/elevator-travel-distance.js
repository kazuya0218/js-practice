// エレベーターが移動した総階数を計算するプログラム
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
  // 停車回数を取得(今回は未使用)
  const stopCount = Number(lines[0]);

  // 停車する階を取得
  const floorStops = lines.slice(1).map(Number);

  // 1階から最初の停車階まで移動した分を加算
  let totalDistance = floorStops[0] - 1;

  // 停車階同士の移動距離を加算
  for (let i = 1; i < floorStops.length; i++) {
    totalDistance += Math.abs(floorStops[i] - floorStops[i - 1]);
  }

  // 総移動階数を出力
  console.log(totalDistance);
});

/*
改善ポイント

Before
-------
let totalDistance = 0;
let isFirstMove = false;

for (let i = 0; i < floorStops.length; i++) {
  if (!isFirstMove) {
    totalDistance += floorStops[i] - 1;
    isFirstMove = true;
  } else if (floorStops[i - 1] < floorStops[i]) {
    totalDistance += floorStops[i] - floorStops[i - 1];
  } else {
    totalDistance += floorStops[i - 1] - floorStops[i];
  }
}

After
------
let totalDistance = floorStops[0] - 1;

for (let i = 1; i < floorStops.length; i++) {
  totalDistance += Math.abs(floorStops[i] - floorStops[i - 1]);
}

理由
-----
・最初の移動を先に計算することでフラグ(isFirstMove)が不要になる
・Math.abs()を使うことで上昇・下降を1つの式で表現できる
・コードが短くなり、意図も分かりやすくなる
*/
