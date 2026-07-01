import { app, autoUpdater, dialog } from 'electron'
import { log } from './logger'

export function setupAutoUpdater(
  mainWindow: Electron.BrowserWindow,
  onUpdateReady: () => void
): void {
  if (!app.isPackaged) return

  const server = 'https://github.com'
  const url = `${server}/quangtrong1506/pubg-overlay/releases/download/v${app.getVersion()}`

  autoUpdater.setFeedURL({
    provider: 'github',
    owner: 'quangtrong1506',
    repo: 'pubg-overlay'
  })

  autoUpdater.on('error', error => {
    log.error('Auto updater error:', error)
  })

  autoUpdater.on('checking-for-update', () => {
    log.info('Checking for update...')
  })

  autoUpdater.on('update-available', info => {
    log.info('Update available:', info)
  })

  autoUpdater.on('update-not-available', info => {
    log.info('Update not available:', info)
  })

  autoUpdater.on('update-downloaded', info => {
    log.info('Update downloaded:', info)
    dialog
      .showMessageBox(mainWindow, {
        type: 'info',
        title: 'Cập nhật',
        message: 'Đã có phiên bản mới, khởi động lại để cập nhật?',
        buttons: ['Khởi động lại ngay', 'Sau']
      })
      .then(result => {
        if (result.response === 0) {
          autoUpdater.quitAndInstall()
        }
      })
  })

  setTimeout(() => {
    autoUpdater.checkForUpdates()
  }, 3000)
}
