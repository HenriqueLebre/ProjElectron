const { app, BrowserWindow } = require('electron');


let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 500,
        height: 400,
        resizable: false

    });

    mainWindow.loadURL(`File://${__dirname}/index.html`)
});
