const fs = require('fs')
const path = require('path')

module.exports = {
  config: {
    fundsPath: path.resolve(__dirname, './data/funds.js'),
    buysPath: path.resolve(__dirname, './data/buys.js')
  },

  saveFile(path, str) {
    fs.writeFileSync(path, str, { encoding: 'utf8' }, () => {})
  }
}
