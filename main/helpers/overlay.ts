import { BrowserWindow } from 'electron'
import path from 'path'
import { log } from './logger'

const isProd = process.env.NODE_ENV !== 'development'

const getOverlayURL = async (): Promise<string> => {
  if (isProd) {
    return 'app://./overlay'
  }
  const port = process.argv[2]
  return `http://localhost:${port}/overlay`
}

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
    }
  })
  const url = await getOverlayURL()
  window.loadURL(url)

  return window
}

const appShortcutHandler = (win: BrowserWindow) => {
  win.isVisible() ? win.hide() : win.show()
}

export { appShortcutHandler }
