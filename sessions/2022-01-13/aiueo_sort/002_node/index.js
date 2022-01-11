const aiueoOrder = require("./aiueo.js"); // 自分のmodule
const convertKanji = require("./convert-kanji.js"); // 自分のmodule
const fs = require("fs"); // nodeに含んでいるmodule

const Timer = require("readable-elapsed-timer");

async function main() {
  const timer = new Timer();
  let names = JSON.parse(fs.readFileSync("./names.json").toString());
  names = await convertKanji(names);
  names = aiueoOrder(names);
  console.log(names);
  console.log(timer.elapsed());
}

main();
