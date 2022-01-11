const axios = require("axios");

async function main() {
  const response = await axios.get(
    "https://raw.githubusercontent.com/" +
      "s2-co-ltd/benkyoukai/main/sessions/" +
      "2022-01-13/title_snippet/benkyoukai-info.json"
  );

  const { date, topic, presenter } = response.data;

  console.log("今日の勉強会");
  console.log("テーム： " + topic);
  console.log("日付： " + date);
  console.log("講演者： " + presenter);
}

main();
