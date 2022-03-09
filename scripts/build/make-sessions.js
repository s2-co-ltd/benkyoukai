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

      const sT = new Date(date).getTime();
      const nT = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;
      if (sT < nT) {
        sessions.push({
          presenter,
          date,
          number,
          title,
          path,
        });
      }
    }
    return sessions;
  },
  makeSessionsAll: function makeSessionsAll() {
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
    for (let i = 0, j = 0; i < sessions.length; i++) {
      if (sessions[i]) {
        const sT = new Date(sessions[i].date).getTime();
        const nT = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;
        if (sT < nT) {
          readmeSessions.push(sessions[i]);
          j = j + 1;
        }
      }
      if (j >= 5) {
        break;
      }
    }
    return readmeSessions;
  },
};
