<template lang="pug">
  #app
    panel-funds(:sync="realTime" :funds="funds" :buys="buys")
    panel-buys(:sync="realTime" :funds="funds" :buys="buys")
</template>

<script>
import request from '@/utils/request'

import panelFunds from './components/panel-funds'
import panelBuys from './components/panel-buys'

// const ONE_DAY = 24 * 60 * 60 * 1000

export default {
  components: {
    panelFunds,
    panelBuys
  },

  data() {
    return {
      /**
       * 我的数据
       * funds 我的基金
       * buys 我的购买记录
       * realTime 基金实时信息
       */
      funds: [],
      buys: [],
      realTime: {},
      timer: 0
    }
  },

  async mounted() {
    this.$set(this, 'funds', await request.get('/data', { params: { type: 'funds' } }))
    this.$set(this, 'buys', await request.get('/data', { params: { type: 'buys' } }))

    this.syncFluctuate()
    this.timer = setInterval(() => {
      this.syncFluctuate()
    }, 2000)
  },

  methods: {
    // 同步基金
    async syncFluctuate() {
      /**
       * 天天基金接口
       * dwjz: '3.8524', // 单位净值
       * fundcode: '161005', // 基金code
       * gsz: '3.8505', // 估算值
       * gszzl: '-0.05', // 估算涨幅率
       * gztime: '2021-01-27 15:00', // 估算截止时间
       * jzrq: '2021-01-26', // 开始净值
       * name: '富国天惠成长混合A/B(LOF)' //名称
       */
      let load = false
      await this.funds.reduce((next, fund) => {
        const sync = this.realTime[fund.code]

        if (sync && sync.nowDate.indexOf('15:00') > -1) {
          return next
        }

        load = true

        return next
          .then(() => this.$jsonp(`http://fundgz.1234567.com.cn/js/${fund.code}.js`, { callbackName: 'jsonpgz', myCustomUrlParam: Math.random() }))
          .then((data) => {
            if (this.realTime[data.fundcode] && new Date(data.gztime) <= new Date(this.realTime[data.fundcode].nowDate)) {
              return
            }

            this.$set(this.realTime, data.fundcode, {
              config: fund,
              code: data.fundcode, // 基金代码
              name: data.name, // 基金名称
              baseDate: data.jzrq, // 基金起始值日期
              baseUnit: data.dwjz, // 基金起始值
              nowUnit: data.gsz, // 基金当前估值
              nowDate: data.gztime, // 估值截止时间
              fluctuate: Number(data.gszzl) // 估算涨幅
            })
          })
          .catch((e) => {
            console.log(e)
          })
      }, Promise.resolve())

      if (!load) {
        clearInterval(this.timer)
        this.timer = 0
      }
    }
  }
}
</script>

<style lang="stylus">
#app {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
