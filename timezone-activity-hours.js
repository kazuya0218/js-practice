// 活動時間を時差を考慮して計算し、最小値と最大値を求める
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
  // データ数を取得
  const recordCount = Number(lines[0]);

  // 活動時間の最小値・最大値を管理
  let minimumHours = 0;
  let maximumHours = 0;

  for (let i = 1; i <= recordCount; i++) {
    // A: 開始時刻、B: 活動時間、C: 時差
    const [startTime, activityHours, timeDifference] = lines[i]
      .split(" ")
      .map(Number);

    // 時差を考慮した活動終了時刻(24時間表記に補正)
    const adjustedHours = startTime + activityHours - timeDifference + 24;

    // 1件目を最小値・最大値の初期値に設定
    if (i === 1) {
      minimumHours = adjustedHours;
      maximumHours = adjustedHours;
    }

    // 最大値を更新
    if (adjustedHours > maximumHours) {
      maximumHours = adjustedHours;
    }

    // 最小値を更新
    if (adjustedHours < minimumHours) {
      minimumHours = adjustedHours;
    }
  }

  // 最小値と最大値を出力
  console.log(minimumHours);
  console.log(maximumHours);
});

//改善ポイント
//+24だけだと、値が24を超える可能性がある問題なら下記のほうが正確
//const adjustedHours = (startTime + activityHours - timeDifference + 24) % 24;
