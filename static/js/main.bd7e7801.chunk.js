(this["webpackJsonpreact-styling-exercise"]=this["webpackJsonpreact-styling-exercise"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a,r,c,l=n(1),s=n.n(l),i=n(12),o=n.n(i),u=(n(20),n(21),n(2)),j=n(3),d=n(5),b=n(4),h=n(6),p=n(7),O=n(0),x=p.a.div(a||(a=Object(h.a)(["\n  height: 4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  background-color: #5a5a5a;\n  color: white;\n  flex: 1;\n  font-size: 24px;\n  margin: 4px;\n  border-radius: 30px;\n"]))),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(x,{className:"number",onClick:function(){return e.props.onClick(e.props.value)},children:this.props.value})}}]),n}(l.Component),k=p.a.div(r||(r=Object(h.a)(["\n  height: 4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  background-color: #5a5a5a;\n  color: white;\n  flex: 1;\n\n  margin: 4px;\n  border-radius: 25px;\n"]))),f=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(k,{className:"number operator",onClick:function(){return e.props.onClick(e.props.value)},children:this.props.value})}}]),n}(l.Component),C=p.a.div(c||(c=Object(h.a)(["\n\n  height: 10em;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  flex-direction: column;\n  flex: 1;\n  font-size: 34px;\n  padding: 16px;\n  word-wrap: break-word;\n  word-break: break-all;\n  border:solid;\n  border-color: silver;\n"]))),m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsx)(C,{className:"screen",children:this.props.value})}}]),n}(l.Component),N=(n(27),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={first:null,operator:null,second:null},e.handleNumberClick=function(t){e.state.operator?e.setState({second:"".concat(e.state.second||"").concat(t)}):e.setState({first:"".concat(e.state.first||"").concat(t)})},e.handleOperatorClick=function(t){if("="===t){var n=parseInt(e.state.first),a=parseInt(e.state.second);"+"===e.state.operator?e.setState({operator:null,first:n+a,second:null}):"/"===e.state.operator?e.setState({operator:null,first:n/a,second:null}):"-"===e.state.operator?e.setState({operator:null,first:n-a,second:null}):"x"===e.state.operator&&e.setState({operator:null,first:n*a,second:null})}else"clear"===t?e.setState({first:0,second:null,operator:null}):e.setState({operator:t})},e.getScreenValue=function(){return e.state.second||e.state.first},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"calculators",children:[Object(O.jsx)(m,{value:this.getScreenValue()}),Object(O.jsx)("div",{className:"button",children:Object(O.jsx)("div",{className:"buttons",children:Object(O.jsxs)("div",{className:"numbers",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(v,{value:7,onClick:this.handleNumberClick}),Object(O.jsx)(v,{value:8,onClick:this.handleNumberClick}),Object(O.jsx)(v,{value:9,onClick:this.handleNumberClick}),Object(O.jsx)(f,{value:"/",onClick:this.handleOperatorClick})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(v,{value:4,onClick:this.handleNumberClick}),Object(O.jsx)(v,{value:5,onClick:this.handleNumberClick}),Object(O.jsx)(v,{value:6,onClick:this.handleNumberClick}),Object(O.jsx)(f,{value:"x",onClick:this.handleOperatorClick})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(v,{value:1,onClick:this.handleNumberClick}),Object(O.jsx)(v,{value:2,onClick:this.handleNumberClick}),Object(O.jsx)(v,{value:3,onClick:this.handleNumberClick}),Object(O.jsx)(f,{value:"+",onClick:this.handleOperatorClick})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(v,{value:0,onClick:this.handleNumberClick}),Object(O.jsx)(f,{value:".",onClick:this.handleOperatorClick}),Object(O.jsx)(f,{value:"=",onClick:this.handleOperatorClick}),Object(O.jsx)(f,{value:"-",onClick:this.handleOperatorClick})]}),Object(O.jsx)(f,{value:"clear",onClick:this.handleOperatorClick})]})})})]})}}]),n}(l.Component));var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{className:"wrap",children:Object(O.jsx)(N,{})})})};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.bd7e7801.chunk.js.map