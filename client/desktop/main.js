const {app, BrowserWindow, Menu} = require('electron')
  const path = require('path')
  const url = require('url')  

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1024, height: 720, label: "Chess.com"})
  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: 'chess.com',
      protocol: 'https:',
      slashes: true
    }))
  }
  
  app.whenReady().then(createWindow)