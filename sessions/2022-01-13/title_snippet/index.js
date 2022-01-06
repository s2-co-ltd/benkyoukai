const axios = require("axios");

async function main() {
  const response = await axios.get(
    "https://raw.githubusercontent.com/" +
      "s2-co-ltd/benkyoukai/main/sessions/" +
      "2022-01-13/title_snippet/benkyoukai-info.json"
  );

  console.log(response);
}
