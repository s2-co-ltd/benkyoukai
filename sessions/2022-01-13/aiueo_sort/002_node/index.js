const aiueoOrder = require("./aiueo.js"); // 自分のmodule
const convertKanji = require("./convert-kanji.js"); // 自分のmodule
const fs = require("fs"); // nodeに含んでいるmodule

async function main() {
    let names = JSON.parse(fs.readFileSync("./names.json").toString());

    for (let i = 0; i < names.length; i++) {
        const n = names[i];
        n.converted = await convertKanji(n.original);
    }

    names = aiueoOrder(names);
    console.log(names);
}

main();