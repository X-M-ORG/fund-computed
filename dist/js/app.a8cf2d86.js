(function(e){function t(t){for(var r,o,l=t[0],s=t[1],c=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3768:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("panel-funds",{attrs:{sync:e.realTime,funds:e.funds,buys:e.buys}}),n("panel-buys",{attrs:{sync:e.realTime,funds:e.funds,buys:e.buys}})],1)},i=[],o=(n("c975"),n("13d5"),n("b0c0"),n("a9e3"),n("d3b7"),n("96cf"),n("1da1")),l=n("bc3a"),s=n.n(l),c=s.a.create({withCredentials:!0,timeout:1e4});c.interceptors.response.use((function(e){return e.data.data}),(function(e){return Promise.reject(e)}));var u=c,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"fx-row fx-c-center"},[n("div",{staticClass:"fx-1"},[n("span",[e._v("基金列表 ")]),n("span",{staticStyle:{"font-size":"50%"}},[n("span",[e._v("今日收益：")]),n("span",{style:{color:e.config[e.todayIncome>0?"add":"loss"]}},[e._v(e._s(e.todayIncome))])])]),n("el-button",{attrs:{type:"success",icon:"el-icon-plus",circle:""},on:{click:function(t){return e.doEdit()}}})],1),n("el-card",{staticStyle:{width:"100%"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[n("el-table-column",{attrs:{prop:"code",label:"基金代码",width:"100"}}),n("el-table-column",{attrs:{prop:"name",label:"基金名称",width:"230"}}),n("el-table-column",{attrs:{label:"实时基金",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.nowDate))]),n("span",{staticStyle:{color:"blueviolet"}},[e._v("（"+e._s(t.row.nowUnit)+"）")])]}}])}),n("el-table-column",{attrs:{label:"涨幅估算/今日收益",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{style:{color:e.config[t.row.fluctuate>0?"add":"loss"]}},[e._v(e._s(t.row.fluctuate)+"% / ")]),n("span",{style:{color:e.config[t.row.buys.count.todayIncome>0?"add":"loss"]}},[e._v(e._s(t.row.buys.count.todayIncome))])]}}])}),n("el-table-column",{attrs:{label:"购买总额/持仓价值/总收益",align:"left",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.buys.count.price)+" / ")]),n("span",{style:{color:e.config[t.row.buys.count.nowPrice>t.row.buys.count.price?"add":"loss"]}},[e._v(e._s(t.row.buys.count.nowPrice)+" / ")]),n("span",{style:{color:e.config[t.row.buys.count.nowIncome>0?"add":"loss"]}},[e._v(e._s(t.row.buys.count.nowIncome))])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",size:"mini"},on:{click:function(n){return e.doEdit(t.row.config)}}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(n){return e.deleteItem(t.row.config)}}})]}}])})],1)],1),n("el-dialog",{attrs:{title:"基金设置",visible:e.editVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,width:"60%"},on:{"update:visible":function(t){e.editVisible=t}}},[n("el-form",{ref:"edit",attrs:{model:e.editForm,rules:e.editRules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"代码",prop:"code"}},[n("el-input",{model:{value:e.editForm.code,callback:function(t){e.$set(e.editForm,"code",t)},expression:"editForm.code"}})],1),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),n("el-form-item",{attrs:{label:"管理费率",prop:"rate.management1"}},[n("el-input",{model:{value:e.editForm.rate.management1,callback:function(t){e.$set(e.editForm.rate,"management1",t)},expression:"editForm.rate.management1"}},[n("template",{slot:"append"},[e._v("%")])],2)],1),n("el-form-item",{attrs:{label:"托管费率",prop:"rate.management2"}},[n("el-input",{model:{value:e.editForm.rate.management2,callback:function(t){e.$set(e.editForm.rate,"management2",t)},expression:"editForm.rate.management2"}},[n("template",{slot:"append"},[e._v("%")])],2)],1),n("el-form-item",{attrs:{label:"赎回费率",prop:"rate.sell"}},[e._l(e.editForm.rate.sell,(function(t,r){return n("div",{key:"sell"+r,staticClass:"fx-row fx-c-center"},[n("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini"},model:{value:t.begin,callback:function(n){e.$set(t,"begin",n)},expression:"sell.begin"}},[n("template",{slot:"append"},[e._v("天")])],2),n("div",{staticStyle:{margin:"0 10px"}},[e._v("-")]),n("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini"},model:{value:t.end,callback:function(n){e.$set(t,"end",n)},expression:"sell.end"}},[n("template",{slot:"append"},[e._v("天")])],2),n("el-input",{staticStyle:{width:"200px",margin:"0 20px"},attrs:{size:"mini"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"sell.value"}},[n("template",{slot:"prepend"},[e._v("税率")]),n("template",{slot:"append"},[e._v("%")])],2),n("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-minus",circle:""},on:{click:function(){return e.editForm.rate.sell.splice(r,1)}}})],1)})),n("div",[n("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-plus",circle:""},on:{click:function(){return e.editForm.rate.sell.push({begin:0,end:0,value:0})}}})],1)],2)],1),n("template",{slot:"footer"},[n("el-button",{on:{click:e.closeEdit}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("确 定")])],1)],2)],1)},m=[],p=(n("4de4"),n("4160"),n("d81d"),n("b680"),n("159b"),n("5530")),f=n("0644"),b=n.n(f),y={add:"red",loss:"green"},v={code:"",name:"",rate:{sell:[{begin:0,end:6,value:1.5},{begin:7,end:29,value:.75},{begin:30,end:364,value:.5},{begin:365,end:729,value:.25},{begin:730,end:99999,value:0}],management1:1.5,management2:.25}},g={props:{sync:{type:Object,default:function(){return{}}},funds:{type:Array,default:function(){return[]}},buys:{type:Array,default:function(){return[]}}},data:function(){return{config:y,editVisible:!1,editForm:b()(v),editRules:{code:[{required:!0,message:"请输入基金代码",trigger:"blur"},{min:6,max:6,message:"基金代码必须是6位",trigger:"blur"}],"rate.management1":[{required:!0,message:"请输入管理费率",trigger:"blur"}],"rate.management2":[{required:!0,message:"请输入托管费率",trigger:"blur"}],"rate.sell":[{required:!0,validator:function(e,t,n){return n(t.length?void 0:new Error("请设置赎回费率!"))}}]}}},computed:{list:function(){var e=this;return this.funds.map((function(t){return e.sync[t.code]})).filter(Boolean).map((function(t){var n=Object(p["a"])({},t),r=e.buys.filter((function(e){return e.code===t.code})),a=r.reduce((function(e,t){return e.part+=t.part,e.price+=t.price,e}),{part:0,price:0});return a.todayIncome=+(a.part*(n.nowUnit-n.baseUnit)).toFixed(2),a.nowPrice=+(a.part*n.nowUnit).toFixed(2),a.nowIncome=+(a.nowPrice-a.price).toFixed(2),n.buys={order:r,count:a},n}))},todayIncome:function(){return+this.list.reduce((function(e,t){return e+=t.buys.count.todayIncome,e}),0).toFixed(2)}},methods:{doEdit:function(e){e&&this.$set(this,"editForm",b()(e)),this.editVisible=!0},closeEdit:function(){this.editVisible=!1,this.$set(this,"editForm",b()(v)),this.$refs.edit.resetFields()},submitForm:function(){var e=this;this.$refs.edit.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=32;break}return r=b()(e.editForm),r.rate.management1=Number(r.rate.management1),r.rate.management2=Number(r.rate.management2),r.rate.sell.forEach((function(e){e.begin=Number(e.begin),e.end=Number(e.end),e.value=Number(e.value)})),t.prev=5,t.next=8,e.$jsonp("http://fundgz.1234567.com.cn/js/".concat(r.code,".js"),{callbackName:"jsonpgz",myCustomUrlParam:Math.random()});case 8:if(a=t.sent,!a){t.next=13;break}r.name=a.name,t.next=14;break;case 13:throw{};case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t["catch"](5),e.$message.error("未查询到该基金，请确认后重新提交"),t.abrupt("return");case 20:return t.prev=20,t.next=23,u.post("/fund/edit",{data:r});case 23:e.$message.success("操作成功，即将刷新页面"),setTimeout((function(){window.location.reload()}),1e3),t.next=30;break;case 27:t.prev=27,t.t1=t["catch"](20),e.$message.error(t.t1);case 30:t.next=33;break;case 32:return t.abrupt("return",!1);case 33:case"end":return t.stop()}}),t,null,[[5,16],[20,27]])})));return function(e){return t.apply(this,arguments)}}())},deleteItem:function(e){var t=this;this.$confirm("确认删除该项?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.post("/fund/delete",{data:{code:e.code}});case 3:t.$message.success("操作成功，即将刷新页面"),setTimeout((function(){window.location.reload()}),1e3),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),t.$message.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).catch((function(){}))}}},h=g,w=n("2877"),x=Object(w["a"])(h,d,m,!1,null,null,null),_=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"fx-row fx-c-center",staticStyle:{"margin-top":"50px"}},[n("div",{staticClass:"fx-1"},[e._v("订单列表")]),n("el-button",{attrs:{type:"success",icon:"el-icon-plus",circle:""},on:{click:function(t){return e.doEdit()}}})],1),n("el-card",{staticStyle:{width:"100%"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[n("el-table-column",{attrs:{prop:"fund.code",label:"基金代码",width:"100"}}),n("el-table-column",{attrs:{prop:"fund.name",label:"基金名称",width:"230"}}),n("el-table-column",{attrs:{prop:"buy.price",label:"订单金额",width:"80"}}),n("el-table-column",{attrs:{prop:"hasDay",label:"持有天数",align:"center",width:"80"}}),n("el-table-column",{attrs:{label:"确认日期/单价/份数",align:"left",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.buy.date)+" / ")]),n("span",[e._v(e._s(t.row.buy.unit)+" / ")]),n("span",[e._v(e._s(t.row.buy.part))])]}}])}),n("el-table-column",{attrs:{label:"当前价值/赎回所得/收益比",align:"left",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{style:{color:e.config[t.row.nowPrice>t.row.buy.price?"add":"loss"]}},[e._v(e._s(t.row.nowPrice)+" / ")]),n("span",{style:{color:e.config[t.row.sellPrice>t.row.buy.price?"add":"loss"]}},[e._v(e._s(t.row.sellPrice)+" / ")]),n("span",{style:{color:e.config[t.row.fluctuate>0?"add":"loss"]}},[e._v(e._s(t.row.fluctuate)+"%")])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",size:"mini"},on:{click:function(n){return e.doEdit(t.$index)}}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(n){return e.deleteItem(t.$index)}}})]}}])})],1)],1),n("el-dialog",{attrs:{title:"订单设置",visible:e.editVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[n("el-form",{ref:"edit",attrs:{model:e.editForm,rules:e.editRules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"基金",prop:"code"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:""},model:{value:e.editForm.code,callback:function(t){e.$set(e.editForm,"code",t)},expression:"editForm.code"}},e._l(e.sync,(function(e,t){return n("el-option",{key:"fund"+t,attrs:{label:e.name,value:e.code}})})),1)],1),n("el-form-item",{attrs:{label:"确认日期",prop:"date"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.editForm.date,callback:function(t){e.$set(e.editForm,"date",t)},expression:"editForm.date"}})],1),n("el-form-item",{attrs:{label:"确认单价"}},[n("el-input",{model:{value:e.editForm.unit,callback:function(t){e.$set(e.editForm,"unit",t)},expression:"editForm.unit"}})],1),n("el-form-item",{attrs:{label:"确认份额"}},[n("el-input",{model:{value:e.editForm.part,callback:function(t){e.$set(e.editForm,"part",t)},expression:"editForm.part"}})],1),n("el-form-item",{attrs:{label:"订单金额"}},[n("el-input",{model:{value:e.editForm.price,callback:function(t){e.$set(e.editForm,"price",t)},expression:"editForm.price"}})],1)],1),n("template",{slot:"footer"},[n("el-button",{on:{click:e.closeEdit}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("确 定")])],1)],2)],1)},F=[],$=(n("7db0"),864e5),j={code:"",date:"",unit:0,part:0,price:0},S={props:{sync:{type:Object,default:function(){return{}}},funds:{type:Array,default:function(){return[]}},buys:{type:Array,default:function(){return[]}}},data:function(){return{config:y,editVisible:!1,editIndex:-1,editForm:b()(j),editRules:{code:[{required:!0,message:"请选择基金",trigger:"blur"}],date:[{required:!0,message:"请选择日期",trigger:"blur"}]}}},computed:{list:function(){var e=this;return this.buys.map((function(t){var n=e.sync[t.code];if(n){var r={fund:n,buy:t};r.nowPrice=Number((t.part*n.nowUnit).toFixed(2));var a=new Date("".concat(t.date," 00:00")).getTime(),i=new Date(n.nowDate).getTime();r.hasDay=Math.ceil((i-a)/$);var o=n.config.rate,l=o.sell,s=o.management1,c=o.management2,u=l.find((function(e){return r.hasDay>=e.begin&&r.hasDay<=e.end})),d=u.value,m=(Number(d)+(Number(s)+Number(c))/365*r.hasDay)/100;return r.sellPrice=(r.nowPrice*(1-m)).toFixed(2),r.fluctuate=t.price?((r.sellPrice-t.price)/t.price*100).toFixed(2):"0.00",r}return null})).filter(Boolean)}},methods:{doEdit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;this.list[e]&&(this.editIndex=e,this.$set(this,"editForm",b()(this.list[e].buy))),this.editVisible=!0},closeEdit:function(){this.editVisible=!1,this.editIndex=-1,this.$set(this,"editForm",b()(j)),this.$refs.edit.resetFields()},submitForm:function(){var e=this;this.$refs.edit.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=17;break}return r=b()(e.editForm),r.unit=Number(r.unit),r.part=Number(r.part),r.price=Number(r.price),t.prev=5,t.next=8,u.post("/buys/edit",{data:{edit:r,index:e.editIndex}});case 8:e.$message.success("操作成功，即将刷新页面"),setTimeout((function(){window.location.reload()}),1e3),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](5),e.$message.error(t.t0);case 15:t.next=18;break;case 17:return t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}())},deleteItem:function(e){var t=this;this.$confirm("确认删除该项?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.post("/buys/delete",{data:{index:e}});case 3:t.$message.success("操作成功，即将刷新页面"),setTimeout((function(){window.location.reload()}),1e3),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),t.$message.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).catch((function(){}))}}},O=S,P=Object(w["a"])(O,k,F,!1,null,null,null),z=P.exports,I={components:{panelFunds:_,panelBuys:z},data:function(){return{funds:[],buys:[],realTime:{},timer:0}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=e,t.next=4,u.get("/data",{params:{type:"funds"}});case 4:return t.t2=t.sent,t.t0.$set.call(t.t0,t.t1,"funds",t.t2),t.t3=e,t.t4=e,t.next=10,u.get("/data",{params:{type:"buys"}});case 10:t.t5=t.sent,t.t3.$set.call(t.t3,t.t4,"buys",t.t5),e.syncFluctuate(),e.timer=setInterval((function(){e.syncFluctuate()}),2e3);case 14:case"end":return t.stop()}}),t)})))()},methods:{syncFluctuate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=!1,t.next=3,e.funds.reduce((function(t,r){var a=e.realTime[r.code];return a&&a.nowDate.indexOf("15:00")>-1?t:(n=!0,t.then((function(){return e.$jsonp("http://fundgz.1234567.com.cn/js/".concat(r.code,".js"),{callbackName:"jsonpgz",myCustomUrlParam:Math.random()})})).then((function(t){e.realTime[t.fundcode]&&new Date(t.gztime)<=new Date(e.realTime[t.fundcode].nowDate)||e.$set(e.realTime,t.fundcode,{config:r,code:t.fundcode,name:t.name,baseDate:t.jzrq,baseUnit:t.dwjz,nowUnit:t.gsz,nowDate:t.gztime,fluctuate:Number(t.gszzl)})})).catch((function(e){console.log(e)})))}),Promise.resolve());case 3:n||(clearInterval(e.timer),e.timer=0);case 4:case"end":return t.stop()}}),t)})))()}}},T=I,R=(n("7faf"),Object(w["a"])(T,a,i,!1,null,null,null)),D=R.exports,E=(n("f5df1"),n("3768"),n("5c96")),N=n.n(E),V=(n("0fae"),n("dc02"));r["default"].use(N.a),r["default"].use(V["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(D)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";n("b8ff")},b8ff:function(e,t,n){}});
//# sourceMappingURL=app.a8cf2d86.js.map