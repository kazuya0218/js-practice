//投票数が一番多い名前を出力するプログラム
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
  const N = Number(lines[0]);
  const names = lines.slice(1);
  const votes = new Map();
  for (let name of names) {
    //votes.has(name)・・・まずname("shimizu")はいますか？
    //votes.set(name,1){"shimizu" 投票数1}
    //votes.get(name)これは数値　もし"shimizu"が2回目ならget(name)で1を取っている
    if (votes.has(name)) {
      votes.set(name, votes.get(name) + 1);
    } else {
      votes.set(name, 1);
    }
  }
  let maxVote = 0;
  let winner = '';
  for (let [name, count] of votes) {
    if (count > maxVote) {
      maxVote = count;
      winner = name;
    }
  }
  console.log(winner);
});
