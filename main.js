const { app, BrowserWindow } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    height: 700,
    width: 400,
    resizable: false,
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("views/index.html");
}

app.whenReady().then(createWindow);
