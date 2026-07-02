import { app, autoUpdater, dialog } from 'electron'
import { log } from './logger'

export function setupAutoUpdater(
  mainWindow: Electron.BrowserWindow,
  onUpdateReady: () => void
): void {
  if (!app.isPackaged) return

  autoUpdater.setFeedURL({
    url: 'https://github.com/quangtrong1506/pubg-overlay/releases/latest'
  })

  autoUpdater.on('error', error => {
    log.error('Auto updater error:', error)
  })

  autoUpdater.on('checking-for-update', () => {
    log.info('Checking for update...')
  })

  autoUpdater.on('update-available', () => {
    log.info('Update available')
  })

  autoUpdater.on('update-not-available', () => {
    log.info('Update not available')
  })

  autoUpdater.on('update-downloaded', () => {
    log.info('Update downloaded')
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
