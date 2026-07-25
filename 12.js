//"aiueo","AIUEO"が含まれてたら除いて出力するプログラム
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
  const nameGenerator = lines[0];
  let handleName = '';
  for (let name of nameGenerator) {
    if (!'aiueoAIUEO'.includes(name)) {
      handleName += name;
    }
  }
  console.log(handleName);
});

//別の書き方
// if (!"aiueo".includes(name.toLowerCase())) {
//     handleName.push(name);
// }
