webpackJsonp([17],{361:function(n,t,e){n.exports={basic:e(829)}},480:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){var e={};for(var a in n)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}},481:function(n,t,e){"use strict";e(29),e(509)},482:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(e(510)),o=a(e(511));s.default.Item=o.default,t.default=s.default,n.exports=t.default},509:function(n,t){},510:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},p=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),r=a(e(0)),c=a(e(3)),u=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},l=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,r.default.Component),p(t,[{key:"render",value:function(){var n,t=this.props,e=t.direction,a=t.wrap,p=t.justify,l=t.align,i=t.alignContent,f=t.className,k=t.children,d=t.prefixCls,b=t.style,y=u(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),h=(0,c.default)(d,f,(n={},s(n,d+"-dir-row","row"===e),s(n,d+"-dir-row-reverse","row-reverse"===e),s(n,d+"-dir-column","column"===e),s(n,d+"-dir-column-reverse","column-reverse"===e),s(n,d+"-nowrap","nowrap"===a),s(n,d+"-wrap","wrap"===a),s(n,d+"-wrap-reverse","wrap-reverse"===a),s(n,d+"-justify-start","start"===p),s(n,d+"-justify-end","end"===p),s(n,d+"-justify-center","center"===p),s(n,d+"-justify-between","between"===p),s(n,d+"-justify-around","around"===p),s(n,d+"-align-start","start"===l),s(n,d+"-align-center","center"===l),s(n,d+"-align-end","end"===l),s(n,d+"-align-baseline","baseline"===l),s(n,d+"-align-stretch","stretch"===l),s(n,d+"-align-content-start","start"===i),s(n,d+"-align-content-end","end"===i),s(n,d+"-align-content-center","center"===i),s(n,d+"-align-content-between","between"===i),s(n,d+"-align-content-around","around"===i),s(n,d+"-align-content-stretch","stretch"===i),n));return r.default.createElement("div",o({className:h,style:b},y),k)}}]),t}();t.default=l,l.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=t.default},511:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},o=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),p=a(e(0)),r=a(e(3)),c=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},u=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,p.default.Component),o(t,[{key:"render",value:function(){var n=this.props,t=n.children,e=n.className,a=n.prefixCls,o=n.style,u=c(n,["children","className","prefixCls","style"]),l=(0,r.default)(a+"-item",e);return p.default.createElement("div",s({className:l,style:o},u),t)}}]),t}();t.default=u,u.defaultProps={prefixCls:"am-flexbox"},n.exports=t.default},521:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return Object.keys(n).reduce(function(t,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(t[e]=n[e]),t},{})},n.exports=t.default},648:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=a(e(0)),p=a(e(662)),r=a(e(3)),c=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},u=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n=this.props,t=n.className,e=n.style,a=c(n,["className","style"]),s=a.prefixCls,u=a.children,l=(0,r.default)(s+"-wrapper",t);"class"in a&&delete a.class;var i=o.default.createElement("label",{className:l,style:e},o.default.createElement(p.default,a),u);return this.props.wrapLabel?i:o.default.createElement(p.default,this.props)}}]),t}();t.default=u,u.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=t.default},662:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(676);e.d(t,"default",function(){return a.a})},676:function(n,t,e){"use strict";var a=e(2),s=e.n(a),o=e(34),p=e.n(o),r=e(480),c=e.n(r),u=e(5),l=e.n(u),i=e(8),f=e.n(i),k=e(6),d=e.n(k),b=e(7),y=e.n(b),h=e(0),g=e(1),v=e.n(g),m=e(677),O=e.n(m),j=e(3),w=e.n(j),x=function(n){function t(n){l()(this,t);var e=d()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));C.call(e);var a="checked"in n?n.checked:n.defaultChecked;return e.state={checked:a},e}return y()(t,n),f()(t,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return O.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var n,t=this.props,e=t.prefixCls,a=t.className,o=t.style,r=t.name,u=t.type,l=t.disabled,i=t.readOnly,f=t.tabIndex,k=t.onClick,d=t.onFocus,b=t.onBlur,y=c()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),g=Object.keys(y).reduce(function(n,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(n[t]=y[t]),n},{}),v=this.state.checked,m=w()(e,a,(n={},p()(n,e+"-checked",v),p()(n,e+"-disabled",l),n));return h.default.createElement("span",{className:m,style:o},h.default.createElement("input",s()({name:r,type:u,readOnly:i,disabled:l,tabIndex:f,className:e+"-input",checked:!!v,onClick:k,onFocus:d,onBlur:b,onChange:this.handleChange},g)),h.default.createElement("span",{className:e+"-inner"}))}}]),t}(h.default.Component);x.propTypes={prefixCls:v.a.string,className:v.a.string,style:v.a.object,name:v.a.string,type:v.a.string,defaultChecked:v.a.oneOfType([v.a.number,v.a.bool]),checked:v.a.oneOfType([v.a.number,v.a.bool]),disabled:v.a.bool,onFocus:v.a.func,onBlur:v.a.func,onChange:v.a.func,onClick:v.a.func,tabIndex:v.a.string,readOnly:v.a.bool},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var C=function(){var n=this;this.handleChange=function(t){var e=n.props;e.disabled||("checked"in e||n.setState({checked:t.target.checked}),e.onChange({target:s()({},e,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t.a=x},677:function(n,t,e){var a=e(678),s={shouldComponentUpdate:function(n,t){return function(n,t,e){return!a(n.props,t)||!a(n.state,e)}(this,n,t)}};n.exports=s},678:function(n,t,e){"use strict";var a=e(679);n.exports=function(n,t,e,s){var o=e?e.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=a(n),r=a(t),c=p.length;if(c!==r.length)return!1;s=s||null;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<c;l++){var i=p[l];if(!u(i))return!1;var f=n[i],k=t[i],d=e?e.call(s,f,k,i):void 0;if(!1===d||void 0===d&&f!==k)return!1}return!0}},679:function(n,t,e){function a(n,t){return n="number"==typeof n||l.test(n)?+n:-1,t=null==t?k:t,n>-1&&n%1==0&&n<t}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=k}function o(n){for(var t=function(n){if(null==n)return[];p(n)||(n=Object(n));var t=n.length;t=t&&s(t)&&(u(n)||c(n))&&t||0;var e=n.constructor,o=-1,r="function"==typeof e&&e.prototype===n,l=Array(t),f=t>0;for(;++o<t;)l[o]=o+"";for(var k in n)f&&a(k,t)||"constructor"==k&&(r||!i.call(n,k))||l.push(k);return l}(n),e=t.length,o=e&&n.length,r=!!o&&s(o)&&(u(n)||c(n)),l=-1,f=[];++l<e;){var k=t[l];(r&&a(k,o)||i.call(n,k))&&f.push(k)}return f}function p(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}var r=e(680),c=e(681),u=e(682),l=/^\d+$/,i=Object.prototype.hasOwnProperty,f=r(Object,"keys"),k=9007199254740991,d=function(n){return function(t){return null==t?void 0:t[n]}}("length"),b=f?function(n){var t=null==n?void 0:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&function(n){return null!=n&&s(d(n))}(n)?o(n):p(n)?f(n):[]}:o;n.exports=b},680:function(n,t){var e="[object Function]",a=/^\[object .+?Constructor\]$/,s=Object.prototype,o=Function.prototype.toString,p=s.hasOwnProperty,r=s.toString,c=RegExp("^"+o.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=function(n,t){var s=null==n?void 0:n[t];return function(n){return null!=n&&(function(n){return function(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}(n)&&r.call(n)==e}(n)?c.test(o.call(n)):function(n){return!!n&&"object"==typeof n}(n)&&a.test(n))}(s)?s:void 0}},681:function(n,t){var e=9007199254740991,a="[object Arguments]",s="[object Function]",o="[object GeneratorFunction]",p=Object.prototype,r=p.hasOwnProperty,c=p.toString,u=p.propertyIsEnumerable;n.exports=function(n){return function(n){return function(n){return!!n&&"object"==typeof n}(n)&&function(n){return null!=n&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=e}(n.length)&&!function(n){var t=function(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}(n)?c.call(n):"";return t==s||t==o}(n)}(n)}(n)&&r.call(n,"callee")&&(!u.call(n,"callee")||c.call(n)==a)}},682:function(n,t){function e(n){return!!n&&"object"==typeof n}var a="[object Function]",s=/^\[object .+?Constructor\]$/,o=Object.prototype,p=Function.prototype.toString,r=o.hasOwnProperty,c=o.toString,u=RegExp("^"+p.call(r).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),l=9007199254740991,i=function(n,t){var o=null==n?void 0:n[t];return function(n){return null!=n&&(function(n){return function(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}(n)&&c.call(n)==a}(n)?u.test(p.call(n)):e(n)&&s.test(n))}(o)?o:void 0}(Array,"isArray")||function(n){return e(n)&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=l}(n.length)&&"[object Array]"==c.call(n)};n.exports=i},716:function(n,t,e){"use strict";e(29),e(130),e(733)},717:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(e(648)),o=a(e(734)),p=a(e(735));s.default.CheckboxItem=o.default,s.default.AgreeItem=p.default,t.default=s.default,n.exports=t.default},733:function(n,t){},734:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},o=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),p=a(e(0)),r=a(e(3)),c=a(e(131)),u=a(e(648)),l=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},i=c.default.Item,f=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,p.default.Component),o(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.listPrefixCls,a=(t.onChange,t.disabled),o=t.checkboxProps,c=t.onClick,f=l(t,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),k=f.prefixCls,d=f.className,b=f.children,y=(0,r.default)(k+"-item",d,function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}({},k+"-item-disabled",!0===a));a||(f.onClick=c||function(){});var h={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(t){t in n.props&&(h[t]=n.props[t])}),p.default.createElement(i,s({},f,{prefixCls:e,className:y,thumb:p.default.createElement(u.default,s({},o,h))}),b)}}]),t}();t.default=f,f.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},n.exports=t.default},735:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},o=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),p=a(e(0)),r=a(e(3)),c=a(e(648)),u=a(e(521)),l=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},i=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,p.default.Component),o(t,[{key:"render",value:function(){var n=this.props,t=n.style,e=l(n,["style"]),a=e.prefixCls,o=e.className,i=(0,r.default)(a+"-agree",o);return p.default.createElement("div",s({},(0,u.default)(e),{className:i,style:t}),p.default.createElement(c.default,s({},e,{className:a+"-agree-label"})))}}]),t}();t.default=i,i.defaultProps={prefixCls:"am-checkbox"},n.exports=t.default},829:function(n,t,e){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Ph.D.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bachelor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'College diploma\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem demo\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          Undergraduate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>Auxiliary text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Agree <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'agree it\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>agreement<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function t(n){return n&&n.__esModule?n:{default:n}}var a=e(0);e(0);e(481);var s=t(e(482)).default;e(481);var o=t(e(482)).default;e(130);var p=t(e(131)).default;e(130);var r=t(e(131)).default;e(716);var c=t(e(717)).default;e(716);var u=t(e(717)).default,l=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),i=u.CheckboxItem,f=c.AgreeItem,k=function(t){function e(){var t,a,s,o;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);for(var p=arguments.length,r=Array(p),c=0;c<p;c++)r[c]=arguments[c];return a=s=n(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),s.onChange=function(n){console.log(n)},o=a,n(s,o)}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(e,a.Component),l(e,[{key:"render",value:function(){var n=this;return a.createElement("div",null,a.createElement(p,{renderHeader:function(){return"CheckboxItem demo"}},[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"College diploma"}].map(function(t){return a.createElement(i,{key:t.value,onChange:function(){return n.onChange(t.value)}},t.label)}),a.createElement(i,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"Undergraduate",a.createElement(r.Item.Brief,null,"Auxiliary text"))),a.createElement(s,null,a.createElement(o.Item,null,a.createElement(f,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"Agree ",a.createElement("a",{onClick:function(n){n.preventDefault(),alert("agree it")}},"agreement")))))}}]),e}();return a.createElement(k,null)}}}});