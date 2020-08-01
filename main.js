const electron = require ('electron')

const { app, BrowserWindow } = require('electron')

function createWindow () {
    let win = new BrowserWindow({
        height: 500,
        width: 400,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
}

app.whenReady().then(createWindow)