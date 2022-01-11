const fs = require("fs");

const removeFirstCharacter = (string) => string.substring(1);

const renderForMD = (sessions) => {
  return sessions
    .map((a) => `* ${a.date} - [${a.number}](${a.path}) - ${a.title}`)
    .join("\n");
};

const renderForHTML = (sessions) => {
  return sessions
    .map(
      (a) =>
        `<li><a href="https://github.com/s2-co-ltd/benkyoukai/blob/main${removeFirstCharacter(
          a.path
        )}">${a.date} - ${a.number} - ${a.title}</a></li>`
    )
    .join("\n");
};

module.exports = {
  makeFromTemplate: function makeFromTemplate(templatePath, sessions) {
    const mode =
      `${
        templatePath.split(".")[templatePath.split(".").length - 1]
      }`.toLowerCase() === "md"
        ? "md"
        : "html";

    const template = fs.readFileSync(templatePath).toString();
    return template.replace(
      /!!SESSION_INFORMATION_HERE!!/g,
      mode === "md" ? renderForMD(sessions) : renderForHTML(sessions)
    );
  },
};
