<template lang="pug">
  div
    h1.fx-row.fx-c-center
      div.fx-1
        span 基金列表 
        span(style="font-size: 50%")
          span 今日收益：
          span(:style="{ color: config[todayIncome > 0 ? 'add' : 'loss'] }") {{ todayIncome }}
      el-button(type="success" icon="el-icon-plus" circle @click="doEdit()")
    el-card(style="width: 100%")
      el-table(:data="list" style="width: 100%")
        el-table-column(prop="code" label="基金代码" width="100")
        el-table-column(prop="name" label="基金名称" width="230")
        el-table-column(label="实时基金" width="230")
          template(slot-scope="scope")
            span {{ scope.row.nowDate }}
            span(style="color: blueviolet") （{{ scope.row.nowUnit }}）
        el-table-column(label="涨幅估算/今日收益" align="center" width="180")
          template(slot-scope="scope")
            span(:style="{ color: config[scope.row.fluctuate > 0 ? 'add' : 'loss'] }") {{ scope.row.fluctuate }}% / 
            span(:style="{ color: config[scope.row.buys.count.todayIncome > 0 ? 'add' : 'loss'] }") {{ scope.row.buys.count.todayIncome }}
        el-table-column(label="购买总额/持仓价值/总收益" align="left" width="200")
          template(slot-scope="scope")
            span {{ scope.row.buys.count.price }} / 
            span(:style="{ color: config[scope.row.buys.count.nowPrice > scope.row.buys.count.price ? 'add' : 'loss'] }") {{ scope.row.buys.count.nowPrice }} / 
            span(:style="{ color: config[scope.row.buys.count.nowIncome > 0 ? 'add' : 'loss'] }") {{ scope.row.buys.count.nowIncome }}
        el-table-column(label="操作" align="right")
          template(slot-scope="scope")
            el-button(type="primary" icon="el-icon-edit" circle size="mini" @click="doEdit(scope.row.config)")
            el-button(type="danger" icon="el-icon-delete" circle size="mini" @click="deleteItem(scope.row.config)")

    el-dialog(
      title="基金设置"
      :visible.sync="editVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      width="60%"
    )
      el-form(ref="edit" :model="editForm" :rules="editRules" label-width="80px")
        el-form-item(label="代码" prop="code")
          el-input(v-model="editForm.code")
        el-form-item(label="名称")
          el-input(v-model="editForm.name")
        el-form-item(label="管理费率" prop="rate.management1")
          el-input(v-model="editForm.rate.management1")
            template(slot="append") %
        el-form-item(label="托管费率" prop="rate.management2")
          el-input(v-model="editForm.rate.management2")
            template(slot="append") %
        el-form-item(label="赎回费率" prop="rate.sell")
          div.fx-row.fx-c-center(v-for="(sell, i) in editForm.rate.sell" :key="`sell${i}`")
            el-input(size="mini" style="width:150px" v-model="sell.begin")
              template(slot="append") 天
            div(style="margin: 0 10px") -
            el-input(size="mini" style="width:150px" v-model="sell.end")
              template(slot="append") 天
            el-input(size="mini" style="width:200px;margin:0 20px" v-model="sell.value")
              template(slot="prepend") 税率
              template(slot="append") %
            el-button(size="mini" type="danger" icon="el-icon-minus" circle @click="() => editForm.rate.sell.splice(i, 1)")
          div
            el-button(size="mini" type="success" icon="el-icon-plus" circle @click="() => editForm.rate.sell.push({ begin: 0, end: 0, value: 0 })")

      template(slot="footer")
        el-button(@click="closeEdit") 取 消
        el-button(type="primary" @click="submitForm()") 确 定
</template>

<script>
import clone from 'lodash/cloneDeep'

import request from '@/utils/request'
import config from '@/utils/env'

const BASE_FORM = {
  code: '',
  name: '',
  rate: {
    sell: [
      { begin: 0, end: 6, value: 1.5 },
      { begin: 7, end: 29, value: 0.75 },
      { begin: 30, end: 364, value: 0.5 },
      { begin: 365, end: 729, value: 0.25 },
      { begin: 730, end: 99999, value: 0 }
    ],
    management1: 1.5,
    management2: 0.25
  }
}

export default {
  props: {
    sync: {
      type: Object,
      default: () => ({})
    },

    funds: {
      type: Array,
      default: () => []
    },

    buys: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      config,

      editVisible: false,
      editForm: clone(BASE_FORM),
      editRules: {
        code: [
          { required: true, message: '请输入基金代码', trigger: 'blur' },
          { min: 6, max: 6, message: '基金代码必须是6位', trigger: 'blur' }
        ],
        'rate.management1': [{ required: true, message: '请输入管理费率', trigger: 'blur' }],
        'rate.management2': [{ required: true, message: '请输入托管费率', trigger: 'blur' }],
        'rate.sell': [{ required: true, validator: (r, v, cb) => cb(v.length ? undefined : new Error('请设置赎回费率!')) }]
      }
    }
  },

  computed: {
    list() {
      return this.funds
        .map((fund) => this.sync[fund.code])
        .filter(Boolean)
        .map((item) => {
          const res = { ...item }

          const order = this.buys.filter((i) => i.code === item.code)
          const count = order.reduce(
            (count, item) => {
              count.part += item.part
              count.price += item.price
              return count
            },
            { part: 0, price: 0 }
          )

          count.todayIncome = +(count.part * (res.nowUnit - res.baseUnit)).toFixed(2)
          count.nowPrice = +(count.part * res.nowUnit).toFixed(2)
          count.nowIncome = +(count.nowPrice - count.price).toFixed(2)

          res.buys = { order, count }

          return res
        })
    },

    todayIncome() {
      return +this.list
        .reduce((sum, i) => {
          sum += i.buys.count.todayIncome
          return sum
        }, 0)
        .toFixed(2)
    }
  },

  methods: {
    /**
     * 基金操作
     * doEdit 新增/编辑基金
     * closeEdit 关闭基金浮层
     * submitForm 提交修改
     * deleteItem 删除基金
     */
    doEdit(data) {
      data && this.$set(this, 'editForm', clone(data))
      this.editVisible = true
    },
    closeEdit() {
      this.editVisible = false
      this.$set(this, 'editForm', clone(BASE_FORM))
      this.$refs.edit.resetFields()
    },
    submitForm() {
      this.$refs.edit.validate(async (valid) => {
        if (valid) {
          const data = clone(this.editForm)
          data.rate.management1 = Number(data.rate.management1)
          data.rate.management2 = Number(data.rate.management2)
          data.rate.sell.forEach((i) => {
            i.begin = Number(i.begin)
            i.end = Number(i.end)
            i.value = Number(i.value)
          })

          try {
            const sync = await this.$jsonp(`http://fundgz.1234567.com.cn/js/${data.code}.js`, { callbackName: 'jsonpgz', myCustomUrlParam: Math.random() })
            if (sync) {
              data.name = sync.name
            } else {
              throw {}
            }
          } catch (e) {
            this.$message.error('未查询到该基金，请确认后重新提交')
            return
          }

          try {
            await request.post('/fund/edit', { data })
            this.$message.success('操作成功，即将刷新页面')
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          } catch (e) {
            this.$message.error(e)
          }
        } else {
          return false
        }
      })
    },
    deleteItem(item) {
      this.$confirm('确认删除该项?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          try {
            await request.post('/fund/delete', { data: { code: item.code } })
            this.$message.success('操作成功，即将刷新页面')
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          } catch (e) {
            this.$message.error(e)
          }
        })
        .catch(() => {})
    }
  }
}
</script>
