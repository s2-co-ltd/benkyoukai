import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

let kuroshiro = null;

const initKuroshiro = async function () {
  let ks = new Kuroshiro();
  await ks.init(
    new KuromojiAnalyzer({
      dictPath: "./static/dict/",
    })
  );
  return ks;
};

async function kanjiToKatakana(source) {
  if (!kuroshiro) {
    kuroshiro = await initKuroshiro();
  }
  const result = await kuroshiro.convert(source, { to: "katakana" });
  return result;
}

async function convertKanji(names) {
  for (let i = 0; i < names.length; i++) {
    const n = names[i];
    n.converted = await kanjiToKatakana(n.original);
  }
  return names;
}

export default convertKanji;
