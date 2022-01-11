const fs = require("fs");
const { makeFromTemplate } = require("./make-from-template");
const { makeSessions, makeReadmeSessions } = require("./make-sessions");

const build = async () => {
  console.log("Build started...");

  console.log("Building session data...");
  const sessions = makeSessions();
  const readmeSessions = makeReadmeSessions(sessions);
  console.log("Session data built.");

  console.log("Writing README.md");
  fs.writeFileSync(
    "./README.md",
    makeFromTemplate(
      "./scripts/build/templates/README.template.md",
      readmeSessions
    )
  );

  console.log("Writing index.html");
  fs.writeFileSync(
    "./index.html",
    makeFromTemplate(
      "./scripts/build/templates/index.template.html",
      readmeSessions
    )
  );

  console.log("Writing archive.md");
  fs.writeFileSync(
    "./archive.md",
    makeFromTemplate("./scripts/build/templates/archive.template.md", sessions)
  );

  console.log("All files written.");

  console.log("Build complete.");
};

build();
