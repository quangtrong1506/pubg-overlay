import log from 'electron-log'

log.transports.console.level = 'debug'
log.transports.file.level = 'debug'

export { log }
