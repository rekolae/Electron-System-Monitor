// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const path = require('path')

const createWindow = () => {

    // Default windows config
    let [x, y, enableDevTools] = [600, 400, false]

    // Change window config if in dev mode
    if (process.env.APP_ENV === "development") {
        [x, y, enableDevTools] = [1200, 800, true] 
    }

    // Create the browser window.
    const mainWindow = new BrowserWindow({
        // Don't show the window until it's ready, this prevents any white flickering
        show: false,
        width: x,
        height: y,
        webPreferences: {
            preload: path.join(__dirname, 'js/preload.js'),
            devTools: enableDevTools
        }
    })

    // and load the index.html of the app
    mainWindow.loadFile('index.html')

    // Display DevTools if in dev mode
    if (enableDevTools) {
        mainWindow.webContents.openDevTools()
    }

    // Display app when content is ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
}

// Hide menu bar on windows
const initMenu  = () => {
    Menu.setApplicationMenu(null)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
    initMenu()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

