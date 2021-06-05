const path = require('path')
const downloader = require('nakorncode-downloader')

const url = 'https://www.7-zip.org/a/7z1900-x64.exe'
const dest = path.resolve(__dirname, './7z-installer.exe')

downloader(url, dest, { quite: true })
    .then(() => {
        console.log('Done!')
    })
    .catch((err) => {
        console.log('Error!', err.message)
    })
