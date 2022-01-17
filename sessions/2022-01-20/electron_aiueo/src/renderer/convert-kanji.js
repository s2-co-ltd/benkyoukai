const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji"); // 別の人が作っていたmoduleはNPMでインストールしたら、自分のプロジェクトで使えます。
const Kuroshiro = require("kuroshiro"); // 別の人が作っていたmoduleはNPMでインストールしたら、自分のプロジェクトで使えます。
const path = require("path");

let kuroshiro;

async function kanjiToKatakana(source) {
  if (!kuroshiro) {
    kuroshiro = new Kuroshiro();
    const dictPath = path.join(__dirname, "../dict");
    await kuroshiro.init(
      new KuromojiAnalyzer({
        dictPath,
      })
    );
  }
  const result = kuroshiro.convert(source, { to: "katakana" });

  return result;
}

async function convertKanji(names) {
  for (let i = 0; i < names.length; i++) {
    const n = names[i];
    n.converted = await kanjiToKatakana(n.original);
  }
  return names;
}

module.exports = convertKanji;
