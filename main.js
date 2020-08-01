const electron = require ('electron')

const { app, BrowserWindow } = require('electron')

function createWindow () {
    let win = new BrowserWindow({
        height: 700,
        width: 400,
        resizable: false,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
}

    

app.whenReady().then(createWindow)