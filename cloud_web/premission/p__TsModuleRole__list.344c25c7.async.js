(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{PrIZ:function(e,t,r){"use strict";var l=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("y8nQ");var o=l(r("Vl3Y"));r("+L6B");var a=l(r("2/Rp")),n=l(r("p0pE"));r("miYZ");var u=l(r("tsqr"));r("14J3");var d=l(r("BMrR")),s=l(r("2Taf")),i=l(r("vZ4D")),c=l(r("l4Ni")),f=l(r("rlhR")),p=l(r("ujKo")),m=l(r("2Q78")),v=l(r("MhPg")),g=l(r("q1tI")),y=r("Hg0r"),h=r("vZht"),_=r("zo/U"),w=l(r("bzcu")),S=l(r("SecA")),k=r("eyaq"),C=function(e){function t(){var e;return(0,s.default)(this,t),e=(0,c.default)(this,(0,p.default)(t).apply(this,arguments)),e.handleSearchValues=function(e){var t={};return t},e.getSelection=function(){var t={onChange:function(t,r){e.setState({selectrows:r})}};return t},e.renderoprset=function(t,r){return(0,_.renderOpr)((0,f.default)(e),r)},e.getColumns=function(){return[{title:"\u89d2\u8272\u6a21\u5757\u7f16\u7801",dataIndex:"module_role_id"},{title:"\u6a21\u5757\u7f16\u7801",dataIndex:"module_id"},{title:"\u89d2\u8272\u7f16\u7801",dataIndex:"role_code"},{title:"\u8c03\u7528\u53c2\u6570",dataIndex:"callargs"},{title:"\u6743\u9650\u8bbe\u7f6e",dataIndex:"oprset",render:e.renderoprset}]},e.getRows=function(){var t=e.props.mtsrole.data,r=e.props.mtsmodule.data;return g.default.createElement(d.default,null,e.getColInput("\u89d2\u8272\u7f16\u7801","role_code",g.default.createElement(w.default,{tsrole:t}),!1),e.getCol("\u89d2\u8272\u6a21\u5757\u7f16\u7801","module_role_id",!1),e.getColInput("\u6a21\u5757\u7f16\u7801","module_id",g.default.createElement(S.default,{tsmodule:r}),!1),e.getCol("\u8c03\u7528\u53c2\u6570","callargs",!0),e.getCol("\u6743\u9650\u8bbe\u7f6e","oprset",!0))},e.handleSearch=function(t){e.state.selectrows=[],t&&t.preventDefault();var r=e.props["form"];r.validateFieldsAndScroll(function(t,r){if((0,k.isEmpty)(r["role_code"]))u.default.error("\u8bf7\u5148\u9009\u62e9\u89d2\u8272\u7f16\u7801");else{var l=e.handleSearchValues(r);e.setState({pages:(0,n.default)({},e.state.pages,{page:1}),queryMap:(0,n.default)({},r,l)},function(){e.queryPageData()})}})},e.getChoosebtns=function(){return g.default.createElement(a.default,{type:"primary",style:{marginBottom:8},onClick:e.delSelectRows},"\u6279\u91cf\u5220\u9664")},e.delSelectRows=function(t){for(var r=e.state.selectrows,l=0;l<r.length;l++)e.handleDelete(r[l]["module_role_id"])},e}return(0,v.default)(t,e),(0,i.default)(t,[{key:"getRouteUrl",value:function(){return"/TsModuleRole"}},{key:"getObjectName",value:function(){return"TsModuleRole"}},{key:"getObjectDesc",value:function(){return"\u83dc\u5355"}},{key:"getRowkey",value:function(){return"module_role_id"}},{key:"componentDidMount",value:function(){var e=this;u.default.info("\u8bf7\u5148\u9009\u62e9\u60a8\u8981\u67e5\u770b\u7684\u89d2\u8272\u7f16\u7801",5);var r=this.props.dispatch;r({type:"mtsrole/queryAll"}),r({type:"mtsmodule/queryAll"}),r({type:"mtsopr/queryAll"}),this.setState({autoQuery:!1},function(){(0,m.default)((0,p.default)(t.prototype),"componentDidMount",e).call(e)})}},{key:"render",value:function(){return(0,m.default)((0,p.default)(t.prototype),"render",this).call(this)}}]),t}(h.CommonPage),R=(0,y.connect)(function(e){var t=e.moprs,r=e.mtsrole,l=e.mtsmodule,o=e.mtsopr;return{moprs:t,mtsrole:r,mtsmodule:l,mtsopr:o}})(o.default.create()(C));t.default=R}}]);