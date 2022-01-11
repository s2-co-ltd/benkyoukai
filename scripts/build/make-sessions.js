const fs = require("fs");

module.exports = {
  makeSessions: function makeSessions() {
    let sessions = [];
    const sessionDates = fs.readdirSync("./sessions").sort();

    for (let i = 0; i < sessionDates.length; i++) {
      const date = sessionDates[i];
      const path = `./sessions/${date}/index.md`;
      const data = fs.readFileSync(path).toString();
      const parts = data
        .split("#")
        .map((a) => a.trim())
        .filter((a) => a !== "");

      const number = parts[0];
      const title = parts[1];

      sessions.push({
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
