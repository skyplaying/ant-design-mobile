webpackJsonp([36],{463:function(n,a,s){n.exports={basic:s(949)}},521:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a.default},665:function(n,a,s){"use strict";s(29),s(43),s(950)},666:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},o=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),c=t(s(0)),l=t(s(3)),u=t(s(44)),i=t(s(521)),r=t(s(76)),k=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var s=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.onClick=function(){var n=s.props,a=n.disabled,t=n.onChange;if(!a){var e=s.state.selected;s.setState({selected:!e},function(){t&&t(!e)})}},s.onTagClose=function(){s.props.onClose&&s.props.onClose(),s.setState({closed:!0},s.props.afterClose)},s.state={selected:n.selected,closed:!1},s}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,c.default.Component),o(a,[{key:"componentWillReceiveProps",value:function(n){this.props.selected!==n.selected&&this.setState({selected:n.selected})}},{key:"render",value:function(){var n,a=this.props,s=a.children,t=a.className,o=a.prefixCls,k=a.disabled,d=a.closable,f=a.small,g=a.style,m=(0,l.default)(t,o,(n={},e(n,o+"-normal",!k&&(!this.state.selected||f||d)),e(n,o+"-small",f),e(n,o+"-active",this.state.selected&&!k&&!f&&!d),e(n,o+"-disabled",k),e(n,o+"-closable",d),n)),b=!d||k||f?null:c.default.createElement(r.default,{activeClassName:o+"-close-active"},c.default.createElement("div",{className:o+"-close",role:"button",onClick:this.onTagClose,"aria-label":"remove tag"},c.default.createElement(u.default,{type:"cross-circle",size:"xs","aria-hidden":"true"})));return this.state.closed?null:c.default.createElement("div",p({},(0,i.default)(this.props),{className:m,onClick:this.onClick,style:g}),c.default.createElement("div",{className:o+"-text"},s),b)}}]),a}();a.default=k,k.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,closable:!1,small:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=a.default},949:function(n,a,s){n.exports={content:{"zh-CN":[["p","Tag \u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a",["code","selectable"]," / ",["code","readonly"],", \u540e\u8005\u662f\u65e0\u4ea4\u4e92\u7684\uff0c\u5c3a\u5bf8\u66f4\u5c0f\uff0c\u901a\u5e38\u7528\u4e8e\u5185\u5bb9\u5c55\u793a\u3002"]],"en-US":[["p","There are two kinds of Tag, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`tag selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selected<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tag-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>Selected<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Callback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">afterClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      Closable\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>Small and Readonly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{default:n}}var a=s(0);s(0);s(665);var t=n(s(666)).default;s(665);var e=n(s(666)).default;s(665);var p=n(s(666)).default;s(665);var o=n(s(666)).default;s(665);var c=n(s(666)).default;s(665);var l=n(s(666)).default;return a.createElement("div",{className:"tag-container"},a.createElement(l,{"data-seed":"logId"},"Basic"),a.createElement(c,{selected:!0},"Selected"),a.createElement(o,{disabled:!0},"Disabled"),a.createElement(p,{onChange:function(n){console.log("tag selected: "+n)}},"Callback"),a.createElement(e,{closable:!0,onClose:function(){console.log("onClose")},afterClose:function(){console.log("afterClose")}},"Closable"),a.createElement(t,{small:!0},"Small and Readonly"))},style:".tag-container{\n  display: flex;\n  padding-top: 9px;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 9px;\n  margin-bottom: 9px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.tag-container</span></span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.tag-container</span> > div </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},950:function(n,a){}});