const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji"); // 別の人が作っていたmoduleはNPMでインストールしたら、自分のプロジェクトで使えます。
const Kuroshiro = require("kuroshiro"); // 別の人が作っていたmoduleはNPMでインストールしたら、自分のプロジェクトで使えます。

async function kanjiToKatakana(source) {
  return new Promise((resolve) => {
    const kuroshiro = new Kuroshiro();

    kuroshiro
      .init(new KuromojiAnalyzer())
      .then(function () {
        return kuroshiro.convert(source, { to: "katakana" });
      })
      .then(function (result) {
        resolve(result);
      });
  });
}

async function convertKanji(names) {
  for (let i = 0; i < names.length; i++) {
    n = names[i];
    n.converted = await kanjiToKatakana(n.original);
  }
  return names;
}

module.exports = convertKanji;
