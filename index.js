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
const fs                                                                                       = require('fs')
const menu                                                                                     = new Menu()
const getJSON                                                                                  = require('get-json')
const RPC                                                                                      = require("discord-rich-presence")("799757326738259968")
const webhook                                                                                  = require("webhook-discord")
const Hook                                                                                     = new webhook.Webhook("https://discord.com/api/webhooks/800401515675385917/T9FxEbmpmgXWsN0oHBaOxBXsMonsGV7Qf0QMKcBHtwvwNvrd6X7IuthsI04RjT87uEfG")

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
    // VARIABLE FOR WINDOW
    const win = new BrowserWindow({
      width: 1500,
      height: 1060,
      titleBarStyle: 'hiddenInset',
      webPreferences: {
        nodeIntegration: true
      }
  })

            win.loadFile('./menu.html'); 
    }


