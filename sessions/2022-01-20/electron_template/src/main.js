const { app, BrowserWindow } = require("electron");
const path = require('path');

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    webPreferences: {
      /* 以下の2行のコメントを外すと、ウェブページのソース内で
       nodeの機能（nodeのコアモジュールなど）を使えるようになります。
       しかし、この方法は安全性が低く、レンダーウィンドウ内で一部の
       コードがどのように実行されるかが変更されますので、この機能を
       使用したい場合のみ、下記をコメントを外してください。 */
       
      // contextIsolation: false,
      // nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "renderer/index.html"))
});
