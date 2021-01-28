# 基金收支记录工具

## 使用

- npm run i
- npm run serve

## 数据

暂时不打算把数据放在数据库里，所以就使用本地的数据，由 node 去更新本地的文件。

暂时两个数据，路径为：

- 基金信息：serve/data/funds.js
- 订单信息：serve/data/buys.js

> 在执行 npm run node 的时候，会判断是否有这两个文件，无则新建

## 更新记录

### v0.0.1

- 1. 可以记录基金，实时更新
- 2. 可以记录订单信息，实时计算赎回价格与真实收益