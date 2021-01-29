const fs = require('fs')
const path = require('path')
const os = require('os')
const net = require('net')

const utils = {
  config: {
    fundsPath: path.resolve(__dirname, './data/funds.js'),
    buysPath: path.resolve(__dirname, './data/buys.js')
  },

  saveFile(path, str) {
    fs.writeFileSync(path, str, { encoding: 'utf8' }, () => {})
  },

  // 获取本地网络
  getNetwork() {
    const ipv4 = []

    for (const interfaces of Object.values(os.networkInterfaces())) {
      Array.from(interfaces).forEach((item) => {
        if (item && item.family && item.family.toLowerCase() === 'ipv4') {
          ipv4.push(item.cidr.split('/')[0].replace('127.0.0.1', 'localhost'))
        }
      })
    }

    return ipv4
  },

  // 运行服务器
  runServe(app, port) {
    const server = net.createServer().listen(port)

    server.on('listening', function() {
      server.close()
      app.listen(port, () => {
        const network = utils.getNetwork()
        console.log(
          `
    App running at:
    ${network.map((i) => '- Local: \x1b[36m' + `http://${i}:${port}` + ' \x1b[0m').join(`
    `)}
          `
        )
      })
    })

    server.on('error', function(err) {
      if (err.code == 'EADDRINUSE') {
        utils.runServe(app, port + 1)
      }
    })
  }
}

module.exports = utils
