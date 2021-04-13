/*
        ___  ___  _  ____  ____  _ __
       / _ \/ _ )| |/_/ / / / /_(_) /
      / , _/ _  |>  </ /_/ / __/ / / 
     /_/|_/____/_/|_|\____/\__/_/_/  
_________________________________________

     Developed by JuiciiOfficial

*/



// VARIABLES

const { app, BrowserWindow, TouchBar, shell, Menu, MenuItem, globalShortcut }                  = require('electron');
const { TouchBarLabel, TouchBarButton, TouchBarSpacer }                                        = TouchBar
const fs                                                                                       = require('fs')
const menu                                                                                     = new Menu()
const RPC                                                                                      = require("discord-rich-presence")("799757326738259968")


// APP FUNCTIONS
app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+Y', () => {
    shell.openExternal("https://web.roblox.com/search/users")
  })
}).then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
    RPC.updatePresence({
      instance: false
    })
  }
})

// MENU ITEMS and COMMANDS
menu.append(new MenuItem({
  label: 'RBXUtil',
    submenu: [
      {
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Cmd+H' : 'Ctrl+H',
        click: () => { shell.openExternal("https://github.com/RobloxUtil/robloxutil/issues") }
      },
    ]
}))

menu.append(new MenuItem({
  label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
}))

menu.append(new MenuItem({
  label: 'Misc',
    submenu: [
      {
        role: 'reload',
        accelerator: process.platform === 'darwin' ? 'Cmd+R' : 'Ctrl+R'
      }
    ]
}))

app.setAsDefaultProtocolClient('rbxutil');

// ADD THE MENU
//Menu.setApplicationMenu(menu)

// CREATE WINDOW FUNCTION
function createWindow () {

  // PROMPT FOR USERNAME
  RPC.updatePresence({
    instance: false
  })
    // VARIABLE FOR WINDOW
    const win = new BrowserWindow({
      width: 1500,
      height: 1060,
      titleBarStyle: 'hiddenInset',
      webPreferences: {
        nodeIntegration: true
      }
  })
  win.webContents.userAgent = "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.1805 Mobile Safari/537.36"
            win.loadFile('./menu.html');
    }

    function createWindow2 (name) {

      // PROMPT FOR USERNAME
      RPC.updatePresence({
        instance: false
      })
        // VARIABLE FOR WINDOW
        const win = new BrowserWindow({
          width: 1500,
          height: 1060,
          titleBarStyle: 'hiddenInset',
          webPreferences: {
            nodeIntegration: true
          }
      })
      win.webContents.userAgent = "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.1805 Mobile Safari/537.36"
      fs.writeFileSync(__dirname + '/json/result.json', `{ "input":"${name}" }`)
                win.loadFile('./user.html');
        }
    