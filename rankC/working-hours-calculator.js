// N日間の入退時間を計算し、合計勤務時間を出力するプログラム
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
  // 記録する日数を取得
  const dayCount = Number(lines[0]);

  // 合計時間(分)を管理
  let totalMinutes = 0;

  // 各日の勤務時間を計算
  for (let i = 1; i <= dayCount; i++) {
    // 入室時間と退室時間を取得
    const [startTime, endTime] = lines[i].split(" ");

    // 入室時間を分に変換
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const startTotalMinutes = startHour * 60 + startMinute;

    // 退室時間を分に変換
    const [endHour, endMinute] = endTime.split(":").map(Number);
    const endTotalMinutes = endHour * 60 + endMinute;

    // その日の勤務時間を合計に加算
    totalMinutes += endTotalMinutes - startTotalMinutes;
  }

  // 分を時間と分へ変換
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  // 合計勤務時間を出力
  console.log(totalHours, remainingMinutes);
});

/*
改善ポイント

Before
-------
let startMinute = 0;
let endMinute = 0;

for (...) {
  startMinute += 入室時間;
  endMinute += 退室時間;
}

const diff = endMinute - startMinute;


After
------
let totalMinutes = 0;

for (...) {
  totalMinutes += (退室時間) - (入室時間);
}


理由
-----
・開始時間と終了時間を別々に管理する必要がなくなる
・各日の勤務時間をその場で計算できる
・変数の役割が明確になり読みやすい
*/
