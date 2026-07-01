import { app, globalShortcut } from 'electron'
import serve from 'electron-serve'
import path from 'path'
import { log } from './helpers/logger'
import {
  appShortcutHandler,
  createOverlayWindow,
  createTray,
  createWindow
} from './helpers'
import { setupAutoUpdater } from './helpers/auto-updater'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  if (!app.requestSingleInstanceLock()) app.quit()
  else
    app.on('second-instance', () => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.show()
        mainWindow.focus()
      }
    })
  await app.whenReady()

  const iconPath = app.isPackaged
    ? path.join(process.resourcesPath, 'icon.ico')
    : path.join(__dirname, '../resources/icon.ico')

  const mainWindow = createWindow('main', {
    icon: iconPath,
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.removeMenu()
  createTray(mainWindow)
  if (process.platform === 'win32') app.setAppUserModelId(app.name)
  if (isProd) {
    await mainWindow.loadURL('app://./')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/`)
    mainWindow.webContents.openDevTools()
  }

  const overlayWindow = await createOverlayWindow()
  overlayWindow.webContents.openDevTools()

  log.info('[Main] Main window loaded')

  globalShortcut.register('Alt+M', () => {
    appShortcutHandler(overlayWindow)
  })
  const handleClose = (event?: Electron.Event) => {
    event?.preventDefault()
    mainWindow.hide()
  }
  mainWindow.addListener('close', handleClose)
  setupAutoUpdater(mainWindow, () => {
    mainWindow.removeListener('close', handleClose)
  })
})()

app.on('window-all-closed', () => {
  app.quit()
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
