const { app, BrowserWindow } = require( 'electron');
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    // win.loadURL('https://github.com')
    // win.loadURL('http://portal.leogreat.com:3000/')
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()

    // for macOs
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })