// キーワードを含むログだけを抽出して表示するプログラム
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
  // ログ数
  const logCount = Number(lines[0]);

  // 検索キーワード
  const keyword = lines[1];

  // 条件に一致したログを保存
  const result = [];

  // キーワードを含むログを抽出
  for (let i = 2; i < logCount + 2; i++) {
    const log = lines[i];

    if (log.includes(keyword)) {
      result.push(log);
    }
  }

  // 抽出結果を出力
  if (result.length === 0) {
    console.log("None");
  } else {
    console.log(result.join("\n"));
  }
});
