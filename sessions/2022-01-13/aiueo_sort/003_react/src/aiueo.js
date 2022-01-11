const aiueoOrder = function aiueoOrder(arr) {
  return arr
    .map(function (itemData) {
      if (!itemData.converted) {
        itemData.converted = itemData.original;
      }
      let converted = itemData.converted;
      converted = converted.replace(/あ/g, "ア");
      converted = converted.replace(/い/g, "イ");
      converted = converted.replace(/う/g, "ウ");
      converted = converted.replace(/え/g, "エ");
      converted = converted.replace(/お/g, "オ");
      converted = converted.replace(/か/g, "カ");
      converted = converted.replace(/き/g, "キ");
      converted = converted.replace(/く/g, "ク");
      converted = converted.replace(/け/g, "ケ");
      converted = converted.replace(/こ/g, "コ");
      converted = converted.replace(/さ/g, "サ");
      converted = converted.replace(/し/g, "シ");
      converted = converted.replace(/す/g, "ス");
      converted = converted.replace(/せ/g, "セ");
      converted = converted.replace(/そ/g, "ソ");
      converted = converted.replace(/た/g, "タ");
      converted = converted.replace(/ち/g, "チ");
      converted = converted.replace(/つ/g, "ツ");
      converted = converted.replace(/て/g, "テ");
      converted = converted.replace(/と/g, "ト");
      converted = converted.replace(/な/g, "ナ");
      converted = converted.replace(/に/g, "ニ");
      converted = converted.replace(/ぬ/g, "ヌ");
      converted = converted.replace(/ね/g, "ネ");
      converted = converted.replace(/の/g, "ノ");
      converted = converted.replace(/は/g, "ハ");
      converted = converted.replace(/ひ/g, "ヒ");
      converted = converted.replace(/ふ/g, "フ");
      converted = converted.replace(/へ/g, "ヘ");
      converted = converted.replace(/ほ/g, "ホ");
      converted = converted.replace(/ま/g, "マ");
      converted = converted.replace(/み/g, "ミ");
      converted = converted.replace(/む/g, "ム");
      converted = converted.replace(/め/g, "メ");
      converted = converted.replace(/も/g, "モ");
      converted = converted.replace(/や/g, "ヤ");
      converted = converted.replace(/ゆ/g, "ユ");
      converted = converted.replace(/よ/g, "ヨ");
      converted = converted.replace(/ら/g, "ラ");
      converted = converted.replace(/り/g, "リ");
      converted = converted.replace(/る/g, "ル");
      converted = converted.replace(/れ/g, "レ");
      converted = converted.replace(/ろ/g, "ロ");
      converted = converted.replace(/わ/g, "ワ");
      converted = converted.replace(/を/g, "ヲ");
      converted = converted.replace(/ん/g, "ン");
      converted = converted.replace(/が/g, "ガ");
      converted = converted.replace(/ぎ/g, "ギ");
      converted = converted.replace(/ぐ/g, "グ");
      converted = converted.replace(/げ/g, "ゲ");
      converted = converted.replace(/ご/g, "ゴ");
      converted = converted.replace(/ざ/g, "ザ");
      converted = converted.replace(/じ/g, "ジ");
      converted = converted.replace(/ず/g, "ズ");
      converted = converted.replace(/ぜ/g, "ゼ");
      converted = converted.replace(/ぞ/g, "ゾ");
      converted = converted.replace(/だ/g, "ダ");
      converted = converted.replace(/ぢ/g, "ヂ");
      converted = converted.replace(/づ/g, "ヅ");
      converted = converted.replace(/で/g, "デ");
      converted = converted.replace(/ど/g, "ド");
      converted = converted.replace(/ば/g, "バ");
      converted = converted.replace(/び/g, "ビ");
      converted = converted.replace(/ぶ/g, "ブ");
      converted = converted.replace(/べ/g, "ベ");
      converted = converted.replace(/ぼ/g, "ボ");
      converted = converted.replace(/ぱ/g, "パ");
      converted = converted.replace(/ぴ/g, "ピ");
      converted = converted.replace(/ぷ/g, "プ");
      converted = converted.replace(/ぺ/g, "ペ");
      converted = converted.replace(/ぽ/g, "ポ");
      converted = converted.replace(/ゃ/g, "ャ");
      converted = converted.replace(/ゅ/g, "ュ");
      converted = converted.replace(/ょ/g, "ョ");
      converted = converted.replace(/っ/g, "ッ");
      converted = converted.replace(/ぁ/g, "ァ");
      converted = converted.replace(/ぃ/g, "ィ");
      converted = converted.replace(/ぅ/g, "ゥ");
      converted = converted.replace(/ぇ/g, "ェ");
      converted = converted.replace(/ぉ/g, "ォ");
      return {
        original: itemData.original,
        converted: converted,
      };
    })
    .sort(function (a, b) {
      return a.converted.localeCompare(b.converted, "ja");
    });
};

export default aiueoOrder;
