const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji"); // 別の人が作っていたmoduleはNPMでインストールしたら、自分のプロジェクトで使えます。
const Kuroshiro = require("kuroshiro"); // 別の人が作っていたmoduleはNPMでインストールしたら、自分のプロジェクトで使えます。

let kuroshiro;

async function convertKanji(source) {
    if (!kuroshiro) {
        kuroshiro = new Kuroshiro();
        await kuroshiro.init(new KuromojiAnalyzer());
    }
    const result = kuroshiro.convert(source, { to: "katakana" });

    return result;
}

module.exports = convertKanji;