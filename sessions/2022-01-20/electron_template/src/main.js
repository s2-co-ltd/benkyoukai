const { app, BrowserWindow } = require("electron");
const path = require('path');


let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "renderer/index.html"))
});
