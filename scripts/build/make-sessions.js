const fs = require("fs");

module.exports = {
  makeSessions: function makeSessions() {
    let sessions = [];
    const sessionDates = fs
      .readdirSync("./sessions")
      .sort((a, b) => (new Date(a).getTime() > new Date(b).getTime() ? -1 : 1));

    for (let i = 0; i < sessionDates.length; i++) {
      const date = sessionDates[i];
      const path = `./sessions/${date}/index.md`;
      const data = fs.readFileSync(path).toString();
      const parts = data
        .split("\n")
        .map((a) => a.trim())
        .filter((a) => a !== "");

      const numberAndTitle = parts[0].split("-");

      const number = numberAndTitle.shift().substring(1).trim();

      const title = numberAndTitle.join("-").trim();

      const presenter = parts[1].split("： ")[1].trim();

      sessions.push({
        presenter,
        date,
        number,
        title,
        path,
      });
    }
    return sessions;
  },
  makeReadmeSessions: function makeReadmeSessions(sessions) {
    let readmeSessions = [];
    for (let i = 0; i < 5; i++) {
      if (sessions[i]) {
        readmeSessions.push(sessions[i]);
      }
    }
    return readmeSessions;
  },
};
