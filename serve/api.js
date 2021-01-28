const utils = require('./utils')

module.exports = function(app) {
  app.get('/data', (req, res) => {
    res.status(200).json({
      code: 200,
      msg: '操作成功',
      data: req.query.type === 'funds' ? require('./data/funds') : require('./data/buys')
    })
  })

  app.post('/fund/edit', (req, res) => {
    const data = require('./data/funds')
    const edit = req.body.data
    const index = data.findIndex((i) => i.code === edit.code)
    index > -1 ? data.splice(index, 1, edit) : data.push(edit)

    utils.saveFile(utils.config.fundsPath, `module.exports=${JSON.stringify(data)}`)

    res.status(200).json({
      code: 200,
      msg: '操作成功',
      data: null
    })
  })

  app.post('/fund/delete', (req, res) => {
    const data = require('./data/funds')
    const index = data.findIndex((i) => i.code === req.body.data.code)
    index > -1 && data.splice(index, 1)

    utils.saveFile(utils.config.fundsPath, `module.exports=${JSON.stringify(data)}`)

    res.status(200).json({
      code: 200,
      msg: '操作成功',
      data: null
    })
  })

  app.post('/buys/edit', (req, res) => {
    const data = require('./data/buys')
    const { index = -1, edit } = req.body.data
    index > -1 ? data.splice(index, 1, edit) : data.unshift(edit)

    utils.saveFile(utils.config.buysPath, `module.exports=${JSON.stringify(data)}`)

    res.status(200).json({
      code: 200,
      msg: '操作成功',
      data: null
    })
  })

  app.post('/buys/delete', (req, res) => {
    const data = require('./data/buys')
    const { index = -1 } = req.body.data
    data[index] && data.splice(index, 1)

    utils.saveFile(utils.config.buysPath, `module.exports=${JSON.stringify(data)}`)

    res.status(200).json({
      code: 200,
      msg: '操作成功',
      data: null
    })
  })

  app.get('*', (req, res) => {
    res.send('404')
  })
}
