/*

   ___       __   __         __  ____  _ __
  / _ \___  / /  / /__ __ __/ / / / /_(_) /
 / , _/ _ \/ _ \/ / _ \\ \ / /_/ / __/ / / 
/_/|_|\___/_.__/_/\___/_\_\\____/\__/_/_/  
_________________________________________

     Developed by JuiciiOfficial 

*/



// VARIABLES

const { app, BrowserWindow, TouchBar, shell, Menu, MenuItem, globalShortcut }                  = require('electron');
const { TouchBarLabel, TouchBarButton, TouchBarSpacer }                                        = TouchBar
const prompt                                                                                   = require('electron-prompt-redux');
const fs                                                                                       = require('fs')
const menu                                                                                     = new Menu()
const getUser                                                                                  = require("roblox-user-information")
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
  label: 'RobloxUtil',
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

// ADD THE MENU
Menu.setApplicationMenu(menu)

// CREATE WINDOW FUNCTION
function createWindow () {

  // PROMPT FOR USERNAME
  RPC.updatePresence({
    instance: false
  })
  prompt({
    title: 'Enter a Roblox Username',
    label: 'Username:',
    value: '',
    inputAttrs: {
        type: 'text'
    },
    type: 'input'
  })
  .then((r) => {
    // VARIABLE FOR WINDOW
    const win = new BrowserWindow({
      width: 1500,
      height: 1060,
      titleBarStyle: 'hiddenInset',
      webPreferences: {
        nodeIntegration: true
      }
  })
    
    // LOAD THE LOADING SCREEN
    win.loadFile('loading.html')

    // IF NO INPUT OR CANCEL, HIDE
    if(r === null) {
      win.hide()
    } else {

      // GET ROBLOX USER DATA FROM VARIABLE 'r'
      (async() => {
         await getUser(r).then(user => {
            // TOUCHBAR for MacOS
            const username = new TouchBarLabel({ label: 'Username: ' + r })
            const issue = new TouchBarButton({ label: 'Report an issue', backgroundColor: '#FF0000', click: () => { shell.openExternal(`mailto:robloxutil@gmail.com?subject=[ISSUE] Roblox User Grabber&body=%5BError%20Info%5D%0A%0ARoblox%20Username%3A%20${r}%0AError%20Type%3A%202%0ADevice%3A%20MacOS%0A%0A%5BUser%20Info%5D%0A%0A`)}})
            const touchBar = new TouchBar({ items: [ username, new TouchBarSpacer({ size: 'small' }), issue ] })

            //RPC
            RPC.updatePresence({
              state: 'Looking at a user',
              details: r,
              startTimestamp: Date.now(),
              largeImageKey: 'icon',
              smallImageKey: 'electron',
              instance: true,
            });

            // WRITE JSON FILES AND LOAD THE DONE SCREEN
            fs.writeFile('./result.json', `{ "input": "${r}" }`, (err) => { if (err) throw err })
            fs.writeFile('./user.json', JSON.stringify(user), (err) => { if (err) throw err; win.loadFile("done.html")})
            setTimeout(function(){ win.loadFile('index.html'); win.setTouchBar(touchBar) }, 6000);
        })
      })()  
    }
 })
 .catch(console.error);
}

