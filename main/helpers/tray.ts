import { app, BrowserWindow, Menu, nativeImage, shell, Tray } from 'electron'
import path from 'path'
import { log } from './logger'

const isProd = process.env.RELEASE_TYPE
let tray: Tray | null = null

/**
 * Tạo 1 đối tượng Tray (nếu tượng để hiện icon trong thanh taskbar)
 * và cập nhật lại text trong tray menu theo trạng thái của window
 * @param {BrowserWindow} mainWindow - Cửa sổ cha chính của ứng dụng
 */
export function createTray(mainWindow: BrowserWindow): void {
  log.info('Create Tray')

  try {
    if (tray) return

    const iconPath = app.isPackaged
      ? path.join(process.resourcesPath, 'icon.ico')
      : path.join(__dirname, '../resources/icon.ico')

    const trayIcon = nativeImage.createFromPath(iconPath)
    if (trayIcon.isEmpty()) {
      log.error('Tray icon is empty', iconPath)
      return
    }

    tray = new Tray(trayIcon)
    tray.setToolTip(app.name)

    tray.on('click', () => {
      mainWindow.show()
      mainWindow.maximize()
      mainWindow.focus()
    })

    updateTrayMenu(mainWindow) // ✅ init lần đầu
  } catch (error) {
    log.error('Failed to create tray:', error)
  }
}

/**
 * Cập nhật lại text trong tray menu theo trạng thái của window
 */
function updateTrayMenu(mainWindow: BrowserWindow): void {
  if (!tray) return

  const buttonDev: Electron.MenuItem[] | Electron.MenuItemConstructorOptions[] =
    isProd
      ? []
      : [
          { type: 'separator' },
          {
            label: 'Dev: Mở DevTools',
            click: () => mainWindow.webContents.openDevTools({ mode: 'detach' })
          }
        ]
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Mở',
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: 'Dev: Xem Log',
      click: () => {
        const logPath = log.transports.file.getFile().path
        shell.openPath(logPath)
      }
    },
    ...buttonDev,
    { type: 'separator' },
    {
      label: 'Thoát',
      click: () => {
        const windows: BrowserWindow[] = BrowserWindow.getAllWindows()
        windows.forEach(window => {
          window.removeAllListeners('close')
          window.close()
        })
        app.quit()
      }
    }
  ])

  tray.setContextMenu(contextMenu)
}
