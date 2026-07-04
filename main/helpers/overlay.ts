import { BrowserWindow } from 'electron'
import path from 'path'
import { log } from './logger'

const isProd = process.env.NODE_ENV === 'production'

export const createOverlayWindow = async (): Promise<BrowserWindow> => {
  log.info('[Overlay] Creating overlay window...')
  const window = new BrowserWindow({
    width: 1000,
    height: 600,
    x: 200,
    y: 200,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: true,
    show: false,
    maximizable: true,
    minimizable: true,
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    title: 'Overlay Window'
  })
  if (isProd) {
    await window.loadURL('app://./overlay/')
  } else {
    const port = process.argv[2]
    await window.loadURL(`http://localhost:${port}/overlay`)
    window.webContents.openDevTools()
  }
  log.info(process.env.NODE_ENV)

  return window
}

const appShortcutHandler = (win: BrowserWindow) => {
  win.isVisible() ? win.hide() : win.show()
}

export { appShortcutHandler }
