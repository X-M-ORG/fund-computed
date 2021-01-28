<template lang="pug">
  div
    h1.fx-row.fx-c-center(style="margin-top: 50px")
      div.fx-1 订单列表
      el-button(type="success" icon="el-icon-plus" circle @click="doEdit()")
    el-card(style="width: 100%")
      el-table(:data="list" style="width: 100%")
        el-table-column(prop="fund.code" label="基金代码" width="100")
        el-table-column(prop="fund.name" label="基金名称" width="230")
        el-table-column(prop="buy.date" label="确认日期" width="110")
        el-table-column(prop="buy.unit" label="确认单价" width="80")
        el-table-column(prop="buy.part" label="确认份数" width="80")
        el-table-column(prop="buy.price" label="订单金额" width="80")
        el-table-column( label="当前价值" align="center" width="80")
          template(slot-scope="scope")
            span(:style="{ color: scope.row.nowPrice > scope.row.buy.price ? 'red' : 'green' }") {{ scope.row.nowPrice }}
        el-table-column(prop="hasDay" label="持有天数" align="center" width="80")
        el-table-column( label="赎回所得" align="center" width="80")
          template(slot-scope="scope")
            span(:style="{ color: scope.row.sellPrice > scope.row.buy.price ? 'red' : 'green' }") {{ scope.row.sellPrice }}
        el-table-column( label="收益率" align="right" width="80")
          template(slot-scope="scope")
            span(:style="{ color: scope.row.fluctuate > 0 ? 'red' : 'green' }") {{ scope.row.fluctuate }}%
        el-table-column(label="操作" align="right")
          template(slot-scope="scope")
            el-button(type="primary" icon="el-icon-edit" circle size="mini" @click="doEdit(scope.$index)")
            el-button(type="danger" icon="el-icon-delete" circle size="mini" @click="deleteItem(scope.$index)")

    el-dialog(
      title="订单设置"
      :visible.sync="editVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      width="30%"
    )
      el-form(ref="edit" :model="editForm" :rules="editRules" label-width="80px")
        el-form-item(label="基金" prop="code")
          el-select(v-model="editForm.code" style="width:100%" filterable)
            el-option(v-for="(fund, k) in sync" :key="`fund${k}`" :label="fund.name" :value="fund.code")
        el-form-item(label="确认日期" prop="date")
          el-date-picker(type="date" v-model="editForm.date" style="width: 100%;" value-format="yyyy-MM-dd")
        el-form-item(label="确认单价")
          el-input(v-model="editForm.unit")
        el-form-item(label="确认份额")
          el-input(v-model="editForm.part")
        el-form-item(label="订单金额")
          el-input(v-model="editForm.price")

      template(slot="footer")
        el-button(@click="closeEdit") 取 消
        el-button(type="primary" @click="submitForm()") 确 定
</template>

<script>
import clone from 'lodash/cloneDeep'

import request from '@/utils/request'

const ONE_DAY = 24 * 60 * 60 * 1000
const BASE_FORM = {
  code: '',
  date: '',
  unit: 0,
  part: 0,
  price: 0
}

export default {
  props: {
    sync: {
      type: Object,
      default: () => ({})
    },

    buys: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      editVisible: false,
      editIndex: -1,
      editForm: clone(BASE_FORM),
      editRules: {
        code: [{ required: true, message: '请选择基金', trigger: 'blur' }],
        date: [{ required: true, message: '请选择日期', trigger: 'blur' }]
      }
    }
  },

  computed: {
    list() {
      return this.buys
        .map((buy) => {
          const fund = this.sync[buy.code]

          if (fund) {
            const res = { fund, buy }

            res.nowPrice = Number((buy.part * fund.nowUnit).toFixed(2))

            const buyDate = new Date(`${buy.date} 00:00`).getTime()
            const nowDate = new Date(fund.nowDate).getTime()
            res.hasDay = Math.ceil((nowDate - buyDate) / ONE_DAY)

            const { sell, management1, management2 } = fund.config.rate
            const { value } = sell.find((i) => res.hasDay >= i.begin && res.hasDay <= i.end)
            const rate = (Number(value) + ((Number(management1) + Number(management2)) / 365) * res.hasDay) / 100

            res.sellPrice = (res.nowPrice * (1 - rate)).toFixed(2)
            res.fluctuate = buy.price ? (((res.sellPrice - buy.price) / buy.price) * 100).toFixed(2) : '0.00'

            return res
          } else {
            return null
          }
        })
        .filter(Boolean)
    }
  },

  methods: {
    /**
     * 订单操作
     * doEdit 新增/编辑基金
     * closeEdit 关闭基金浮层
     * submitForm 提交修改
     * deleteItem 删除基金
     */
    doEdit(index = -1) {
      if (this.list[index]) {
        this.editIndex = index
        this.$set(this, 'editForm', clone(this.list[index].buy))
      }
      this.editVisible = true
    },
    closeEdit() {
      this.editVisible = false
      this.editIndex = -1
      this.$set(this, 'editForm', clone(BASE_FORM))
      this.$refs.edit.resetFields()
    },
    submitForm() {
      this.$refs.edit.validate(async (valid) => {
        if (valid) {
          const data = clone(this.editForm)

          data.unit = Number(data.unit)
          data.part = Number(data.part)
          data.price = Number(data.price)

          try {
            await request.post('/buys/edit', { data: { edit: data, index: this.editIndex } })
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
    deleteItem(index) {
      this.$confirm('确认删除该项?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          try {
            await request.post('/buys/delete', { data: { index } })
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
