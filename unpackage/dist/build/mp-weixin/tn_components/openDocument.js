(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tn_components/openDocument"],{"0c6c":function(n,t,e){"use strict";e.r(t);var c=e("441f"),u=e.n(c);for(var o in c)"default"!==o&&function(n){e.d(t,n,(function(){return c[n]}))}(o);t["default"]=u.a},"16b4":function(n,t,e){"use strict";var c=e("1add"),u=e.n(c);u.a},"1add":function(n,t,e){},"441f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{scrollTop:0}},watch:{},mounted:function(){},methods:{openDocument:function(){n.downloadFile({url:"https://cdn.zhoukaiwen.com/kevin.pdf",success:function(t){var e=t.tempFilePath;n.openDocument({filePath:e,success:function(n){console.log("打开文档成功")}})}})}}};t.default=e}).call(this,e("543d")["default"])},"904d":function(n,t,e){"use strict";(function(n){e("a999");c(e("66fd"));var t=c(e("ee13"));function c(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},e45d:function(n,t,e){"use strict";var c;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return c}));var u=function(){var n=this,t=n.$createElement;n._self._c},o=[]},ee13:function(n,t,e){"use strict";e.r(t);var c=e("e45d"),u=e("0c6c");for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("16b4");var a,f=e("f0c5"),r=Object(f["a"])(u["default"],c["b"],c["c"],!1,null,"0ff896c3",null,!1,c["a"],a);t["default"]=r.exports}},[["904d","common/runtime","common/vendor"]]]);