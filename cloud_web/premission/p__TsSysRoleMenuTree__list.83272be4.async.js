(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{xVbF:function(e,t,n){"use strict";var r=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("y8nQ");var u=r(n("Vl3Y"));n("+L6B");var a=r(n("2/Rp")),l=r(n("p0pE"));n("14J3");var o=r(n("BMrR")),s=r(n("2Taf")),d=r(n("vZ4D")),i=r(n("l4Ni")),c=r(n("rlhR")),p=r(n("ujKo")),f=r(n("2Q78")),m=r(n("MhPg")),y=r(n("q1tI")),h=n("Hg0r"),v=n("vZht"),g=r(n("bzcu")),b=r(n("d/P1")),k=n("xhjy"),C=function(e){function t(){var e;return(0,s.default)(this,t),e=(0,i.default)(this,(0,p.default)(t).apply(this,arguments)),e.handleSearchValues=function(e){var t={};return t},e.rendermenutree=function(t,n){return(0,k.rendermenutree)((0,c.default)(e),n.menu)},e.getColumns=function(){return[{title:"\u83dc\u5355\u6811\u7f16\u7801",dataIndex:"tree_id"},{title:"\u7cfb\u7edf\u7f16\u7801",dataIndex:"subsys_id"},{title:"\u89d2\u8272\u7f16\u7801",dataIndex:"role_code"},{title:"\u83dc\u5355",dataIndex:"menu",width:800,render:e.rendermenutree}]},e.getRows=function(){var t=e.props.mtsrole.data,n=e.props.mtsSubsys.data;return y.default.createElement(o.default,null,e.getCol("\u83dc\u5355\u6811\u7f16\u7801","tree_id",!1),e.getColInput("\u7cfb\u7edf\u7f16\u7801","subsys_id",y.default.createElement(b.default,{tsSubsys:n}),!1),e.getColInput("\u89d2\u8272\u7f16\u7801","role_code",y.default.createElement(g.default,{tsrole:t}),!1),e.getCol("\u83dc\u5355","menu",!0))},e.handleMenuTree=function(t){console.log("\u751f\u6210\u83dc\u5355\u6811");var n=e.props.dispatch;n({type:"mtsmenutree/createtree"}),e.setState({moduleCode:e.props.location.query.moduleCode,queryparams:(0,l.default)({},e.props.location.query)}),e.queryPageData()},e.getbuttons=function(){var t=e.getMOprs();return y.default.createElement(a.default,{className:"createtreebtn",icon:"branches",style:{marginLeft:8,display:t.indexOf("CREATETREE")>=0?"inline":"none"},type:"primary",onClick:e.handleMenuTree},"\u751f\u6210\u83dc\u5355\u6811")},e}return(0,m.default)(t,e),(0,d.default)(t,[{key:"getRouteUrl",value:function(){return"/TsSysRoleMenuTree"}},{key:"getObjectName",value:function(){return"TsSysRoleMenuTree"}},{key:"getObjectDesc",value:function(){return"\u83dc\u5355"}},{key:"getRowkey",value:function(){return"tree_id"}},{key:"componentDidMount",value:function(){(0,f.default)((0,p.default)(t.prototype),"componentDidMount",this).call(this);var e=this.props.dispatch;e({type:"mtsrole/queryAll"}),e({type:"mtsSubsys/queryAll"})}},{key:"render",value:function(){return(0,f.default)((0,p.default)(t.prototype),"render",this).call(this)}}]),t}(v.CommonPage),M=(0,h.connect)(function(e){var t=e.moprs,n=e.mtsmenutree,r=e.mtsrole,u=e.mtsSubsys;return{moprs:t,mtsmenutree:n,mtsrole:r,mtsSubsys:u}})(u.default.create()(C));t.default=M}}]);