(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0jlH":function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r("2Taf")),a=n(r("vZ4D")),i=n(r("l4Ni")),s=n(r("ujKo")),o=n(r("MhPg")),d=n(r("q1tI")),l=r("Hg0r"),c=r("ArA+"),f=r("s4NR"),p=n(r("bIAK")),h=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,i.default)(this,(0,s.default)(t).apply(this,arguments)),e.state={isReady:!1},e}return(0,o.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var e=this.props.dispatch;e&&e({type:"user/fetchCurrent"})}},{key:"render",value:function(){var e=this.state.isReady,t=this.props,r=t.children,n=t.loading,u=t.currentUser,a=u&&u.userId,i=(0,f.stringify)({redirect:window.location.href});return!a&&n||!e?d.default.createElement(p.default,null):a?r:d.default.createElement(c.Redirect,{to:"/user/login?".concat(i)})}}]),t}(d.default.Component),v=(0,l.connect)(function(e){var t=e.user,r=e.loading;return{currentUser:t.currentUser,loading:r.models.user}})(h);t.default=v},o2JA:function(e,t,r){"use strict"}}]);