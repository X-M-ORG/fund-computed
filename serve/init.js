const fs = require('fs')
const utils = require('./utils')

try {
  fs.readFileSync(utils.config.fundsPath)
} catch (e) {
  utils.saveFile(utils.config.fundsPath, 'module.exports=[]')
}
try {
  fs.readFileSync(utils.config.buysPath)
} catch (e) {
  utils.saveFile(utils.config.buysPath, 'module.exports=[]')
}
