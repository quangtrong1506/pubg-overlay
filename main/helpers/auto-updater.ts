import { dialog } from 'electron'
import { autoUpdater } from 'electron-updater'
import { log } from './logger'

autoUpdater.setFeedURL({
  provider: 'github',
  owner: 'quangtrong1506',
  repo: 'pubg-overlay',
  releaseType: 'release',
  publishAutoUpdate: true,
  private: false
})
// autoUpdater.logger = log;
function setupAutoUpdater(
  mainWindow: Electron.BrowserWindow,
  callbackDownload?: () => void
) {
  autoUpdater.autoDownload = true
  autoUpdater.autoInstallOnAppQuit = true
  autoUpdater.autoRunAppAfterInstall = true

  autoUpdater.on('checking-for-update', () => {
    // console.log('🧐 Đang kiểm tra cập nhật...');
  })

  autoUpdater.on('update-available', info => {
    log.info('🆕 Có bản cập nhật mới:', info.version)
    mainWindow.webContents.send('update-available', info.version)
  })

  autoUpdater.on('error', err => {
    log.error('❌ Lỗi cập nhật:', err)
  })

  autoUpdater.on('update-downloaded', info => {
    callbackDownload?.()
    log.info('✅ Đã tải xong cập nhật, sẽ cài đặt khi thoát...')
    dialog
      .showMessageBox(mainWindow, {
        type: 'info',
        title: 'Cập nhật',
        message: 'Đã có phiên bản mới, khởi động lại để cập nhật?'
      })
      .then(result => {
        if (result.response === 0) {
          autoUpdater.quitAndInstall()
        }
      })

    setTimeout(() => {
      autoUpdater.quitAndInstall()
    }, 1000)
  })
  autoUpdater.on('download-progress', progress => {
    mainWindow.webContents.send('download-progress', {
      percent: progress.percent,
      bytesPerSecond: progress.bytesPerSecond,
      total: progress.total,
      transferred: progress.transferred
    })
  })

  autoUpdater.checkForUpdates()
  setInterval(
    () => {
      autoUpdater.checkForUpdates()
    },
    15 * 60 * 1000
  )
}

export { setupAutoUpdater }
