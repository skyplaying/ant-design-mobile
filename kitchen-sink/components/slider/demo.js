webpackJsonp([12],{442:function(n,a,s){n.exports={basic:s(925)}},480:function(n,a,s){"use strict";a.__esModule=!0,a.default=function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}},487:function(n,a,s){"use strict";a.__esModule=!0;var t=function(n){return n&&n.__esModule?n:{default:n}}(s(498));a.default=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,t.default)(n)}},498:function(n,a,s){n.exports={default:s(499),__esModule:!0}},499:function(n,a,s){s(138),s(500),n.exports=s(15).Array.from},500:function(n,a,s){"use strict";var t=s(78),e=s(21),p=s(77),o=s(501),c=s(502),l=s(137),u=s(503),i=s(504);e(e.S+e.F*!s(506)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),f="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,v=0,h=i(k);if(g&&(m=t(m,d>2?arguments[2]:void 0,2)),void 0==h||f==Array&&c(h))for(s=new f(a=l(k.length));a>v;v++)u(s,v,g?m(k[v],v):k[v]);else for(r=h.call(k),s=new f;!(e=r.next()).done;v++)u(s,v,g?o(r,m,[e.value,v],!0):e.value);return s.length=v,s}})},501:function(n,a,s){var t=s(30);n.exports=function(n,a,s,e){try{return e?a(t(s)[0],s[1]):a(s)}catch(a){var p=n.return;throw void 0!==p&&t(p.call(n)),a}}},502:function(n,a,s){var t=s(45),e=s(20)("iterator"),p=Array.prototype;n.exports=function(n){return void 0!==n&&(t.Array===n||p[e]===n)}},503:function(n,a,s){"use strict";var t=s(17),e=s(35);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},504:function(n,a,s){var t=s(505),e=s(20)("iterator"),p=s(45);n.exports=s(15).getIteratorMethod=function(n){if(void 0!=n)return n[e]||n["@@iterator"]||p[t(n)]}},505:function(n,a,s){var t=s(79),e=s(20)("toStringTag"),p="Arguments"==t(function(){return arguments}());n.exports=function(n){var a,s,o;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(s=function(n,a){try{return n[a]}catch(n){}}(a=Object(n),e))?s:p?t(a):"Object"==(o=t(a))&&"function"==typeof a.callee?"Arguments":o}},506:function(n,a,s){var t=s(20)("iterator"),e=!1;try{var p=[7][t]();p.return=function(){e=!0},Array.from(p,function(){throw 2})}catch(n){}n.exports=function(n,a){if(!a&&!e)return!1;var s=!1;try{var p=[7],o=p[t]();o.next=function(){return{done:s=!0}},p[t]=function(){return o},n(p)}catch(n){}return s}},523:function(n,a,s){var t=s(21),e=s(15),p=s(31);n.exports=function(n,a){var s=(e.Object||{})[n]||Object[n],o={};o[n]=a(s),t(t.S+t.F*p(function(){s(1)}),"Object",o)}},619:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}a.__esModule=!0;var e=t(s(620)),p=t(s(623));a.default=function n(a,s,t){null===a&&(a=Function.prototype);var o=(0,p.default)(a,s);if(void 0===o){var c=(0,e.default)(a);return null===c?void 0:n(c,s,t)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(t)}},620:function(n,a,s){n.exports={default:s(621),__esModule:!0}},621:function(n,a,s){s(622),n.exports=s(15).Object.getPrototypeOf},622:function(n,a,s){var t=s(77),e=s(141);s(523)("getPrototypeOf",function(){return function(n){return e(t(n))}})},623:function(n,a,s){n.exports={default:s(624),__esModule:!0}},624:function(n,a,s){s(625);var t=s(15).Object;n.exports=function(n,a){return t.getOwnPropertyDescriptor(n,a)}},625:function(n,a,s){var t=s(22),e=s(80).f;s(523)("getOwnPropertyDescriptor",function(){return function(n,a){return e(t(n),a)}})},635:function(n,a,s){"use strict";a.f=function(n,a){return Object.keys(a).some(function(s){return n.target===Object(p.findDOMNode)(a[s])})},a.h=function(n,a){var s=a.min,t=a.max;return n<s||n>t},a.g=function(n){return n.touches.length>1||"touchend"===n.type.toLowerCase()&&n.touches.length>0},a.d=function(n,a){return n?a.clientY:a.pageX},a.e=function(n,a){return n?a.touches[0].clientY:a.touches[0].pageX},a.c=function(n,a){var s=a.getBoundingClientRect();return n?s.top+.5*s.height:s.left+.5*s.width},a.a=function(n,a){var s=a.max,t=a.min;return n<=t?t:n>=s?s:n},a.b=function(n,a){var s=a.step,t=function(n,a){var s=a.marks,t=a.step,p=a.min,o=Object.keys(s).map(parseFloat);if(null!==t){var c=Math.round((n-p)/t)*t+p;o.push(c)}var l=o.map(function(a){return Math.abs(n-a)});return o[l.indexOf(Math.min.apply(Math,e()(l)))]}(n,a);return null===s?t:parseFloat(t.toFixed(function(n){var a=n.toString(),s=0;return a.indexOf(".")>=0&&(s=a.length-a.indexOf(".")-1),s}(s)))},a.i=function(n){n.stopPropagation(),n.preventDefault()};var t=s(487),e=s.n(t),p=s(0)},657:function(n,a,s){"use strict";a.a=function(n,a,s){var t=p.default.unstable_batchedUpdates?function(n){p.default.unstable_batchedUpdates(s,n)}:s;return e()(n,a,t)};var t=s(144),e=s.n(t),p=s(0)},687:function(n,a,s){"use strict";var t=s(2),e=s.n(t),p=s(0);a.a=function(n){var a=n.className,s=n.included,t=n.vertical,o=n.offset,c=n.length,l=n.style,u=t?{bottom:o+"%",height:c+"%"}:{left:o+"%",width:c+"%"},i=e()({visibility:s?"visible":"hidden"},l,u);return p.default.createElement("div",{className:a,style:i})}},688:function(n,a,s){"use strict";function t(){}a.a=function(n){var a,s;return s=a=function(n){function a(n){r()(this,a);var s=m()(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.onMouseDown=function(n){if(0===n.button){var a=s.props.vertical,t=N.d(a,n);if(N.f(n,s.handlesRefs)){var e=N.c(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentMouseEvents(),N.i(n)}},s.onTouchStart=function(n){if(!N.g(n)){var a=s.props.vertical,t=N.e(a,n);if(N.f(n,s.handlesRefs)){var e=N.c(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentTouchEvents(),N.i(n)}},s.onMouseMove=function(n){if(s.sliderRef){var a=N.d(s.props.vertical,n);s.onMove(n,a-s.dragOffset)}else s.onEnd()},s.onTouchMove=function(n){if(!N.g(n)&&s.sliderRef){var a=N.e(s.props.vertical,n);s.onMove(n,a-s.dragOffset)}else s.onEnd()},s.saveSlider=function(n){s.sliderRef=n},s.handlesRefs={},s}return y()(a,n),f()(a,[{key:"componentWillUnmount",value:function(){v()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this)&&v()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents()}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=Object(O.a)(document,"touchmove",this.onTouchMove),this.onTouchUpListener=Object(O.a)(document,"touchend",this.onEnd)}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=Object(O.a)(document,"mousemove",this.onMouseMove),this.onMouseUpListener=Object(O.a)(document,"mouseup",this.onEnd)}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"getSliderStart",value:function(){var n=this.sliderRef.getBoundingClientRect();return this.props.vertical?n.top:n.left}},{key:"getSliderLength",value:function(){var n=this.sliderRef;if(!n)return 0;var a=n.getBoundingClientRect();return this.props.vertical?a.height:a.width}},{key:"calcValue",value:function(n){var a=this.props,s=a.vertical,t=a.min,e=a.max,p=Math.abs(Math.max(n,0)/this.getSliderLength());return s?(1-p)*(e-t)+t:p*(e-t)+t}},{key:"calcValueByPos",value:function(n){var a=n-this.getSliderStart();return this.trimAlignValue(this.calcValue(a))}},{key:"calcOffset",value:function(n){var a=this.props,s=a.min;return(n-s)/(a.max-s)*100}},{key:"saveHandle",value:function(n,a){this.handlesRefs[n]=a}},{key:"render",value:function(){var n,s=this.props,e=s.prefixCls,p=s.className,o=s.marks,l=s.dots,i=s.step,r=s.included,k=s.disabled,f=s.vertical,d=s.min,m=s.max,g=s.children,h=s.maximumTrackStyle,y=s.style,x=s.railStyle,w=s.dotStyle,O=s.activeDotStyle,j=v()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"render",this).call(this),_=j.tracks,M=j.handles,N=S()(e,(n={},u()(n,e+"-with-marks",Object.keys(o).length),u()(n,e+"-disabled",k),u()(n,e+"-vertical",f),u()(n,p,p),n));return b.default.createElement("div",{ref:this.saveSlider,className:N,onTouchStart:k?t:this.onTouchStart,onMouseDown:k?t:this.onMouseDown,style:y},b.default.createElement("div",{className:e+"-rail",style:c()({},h,x)}),_,b.default.createElement(C.a,{prefixCls:e,vertical:f,marks:o,dots:l,step:i,included:r,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:d,dotStyle:w,activeDotStyle:O}),M,b.default.createElement(E.a,{className:e+"-mark",vertical:f,marks:o,included:r,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:d}),g)}}]),a}(n),a.displayName="ComponentEnhancer("+n.displayName+")",a.propTypes=c()({},n.propTypes,{min:w.a.number,max:w.a.number,step:w.a.number,marks:w.a.object,included:w.a.bool,className:w.a.string,prefixCls:w.a.string,disabled:w.a.bool,children:w.a.any,onBeforeChange:w.a.func,onChange:w.a.func,onAfterChange:w.a.func,handle:w.a.func,dots:w.a.bool,vertical:w.a.bool,style:w.a.object,minimumTrackStyle:w.a.object,maximumTrackStyle:w.a.object,handleStyle:w.a.oneOfType([w.a.object,w.a.arrayOf(w.a.object)]),trackStyle:w.a.oneOfType([w.a.object,w.a.arrayOf(w.a.object)]),railStyle:w.a.object,dotStyle:w.a.object,activeDotStyle:w.a.object}),a.defaultProps=c()({},n.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(n){var a=n.index,s=p()(n,["index"]);return delete s.dragging,b.default.createElement(M.a,c()({},s,{key:a}))},onBeforeChange:t,onChange:t,onAfterChange:t,included:!0,disabled:!1,dots:!1,vertical:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),s};var e=s(480),p=s.n(e),o=s(2),c=s.n(o),l=s(34),u=s.n(l),i=s(5),r=s.n(i),k=s(8),f=s.n(k),d=s(6),m=s.n(d),g=s(619),v=s.n(g),h=s(7),y=s.n(h),b=s(0),x=s(1),w=s.n(x),O=s(657),j=s(3),S=s.n(j),_=s(11),C=(s.n(_),s(689)),E=s(690),M=s(691),N=s(635)},689:function(n,a,s){"use strict";var t=s(34),e=s.n(t),p=s(2),o=s.n(p),c=s(0),l=s(3),u=s.n(l),i=s(11),r=s.n(i);a.a=function(n){var a=n.prefixCls,s=n.vertical,t=n.marks,p=n.dots,l=n.step,i=n.included,k=n.lowerBound,f=n.upperBound,d=n.max,m=n.min,g=n.dotStyle,v=n.activeDotStyle,h=d-m,y=function(n,a,s,t,e,p){r()(!s||t>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var o=Object.keys(a).map(parseFloat);if(s)for(var c=e;c<=p;c+=t)o.indexOf(c)>=0||o.push(c);return o}(0,t,p,l,m,d).map(function(n){var t,p=Math.abs(n-m)/h*100+"%",l=!i&&n===f||i&&n<=f&&n>=k,r=s?o()({bottom:p},g):o()({left:p},g);l&&(r=o()({},r,v));var d=u()((t={},e()(t,a+"-dot",!0),e()(t,a+"-dot-active",l),t));return c.default.createElement("span",{className:d,style:r,key:n})});return c.default.createElement("div",{className:a+"-step"},y)}},690:function(n,a,s){"use strict";var t=s(2),e=s.n(t),p=s(16),o=s.n(p),c=s(34),l=s.n(c),u=s(0),i=s(3),r=s.n(i);a.a=function(n){var a=n.className,s=n.vertical,t=n.marks,p=n.included,c=n.upperBound,i=n.lowerBound,k=n.max,f=n.min,d=Object.keys(t),m=d.length,g=.9*(m>1?100/(m-1):100),v=k-f,h=d.map(parseFloat).sort(function(n,a){return n-a}).map(function(n){var k,d=!p&&n===c||p&&n<=c&&n>=i,m=r()((k={},l()(k,a+"-text",!0),l()(k,a+"-text-active",d),k)),h=s?{marginBottom:"-50%",bottom:(n-f)/v*100+"%"}:{width:g+"%",marginLeft:-g/2+"%",left:(n-f)/v*100+"%"},y=t[n],b="object"===(void 0===y?"undefined":o()(y))&&!u.default.isValidElement(y),x=b?y.label:y,w=b?e()({},h,y.style):h;return u.default.createElement("span",{className:m,style:w,key:n},x)});return u.default.createElement("div",{className:a},h)}},691:function(n,a,s){"use strict";var t=s(2),e=s.n(t),p=s(480),o=s.n(p),c=s(5),l=s.n(c),u=s(8),i=s.n(u),r=s(6),k=s.n(r),f=s(7),d=s.n(f),m=s(0),g=s(1),v=s.n(g),h=function(n){function a(){return l()(this,a),k()(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return d()(a,n),i()(a,[{key:"render",value:function(){var n=this.props,a=n.className,s=n.vertical,t=n.offset,p=n.style,c=n.disabled,l=n.min,u=n.max,i=n.value,r=o()(n,["className","vertical","offset","style","disabled","min","max","value"]),k=s?{bottom:t+"%"}:{left:t+"%"},f=e()({},p,k),d={};return void 0!==i&&(d=e()({},d,{"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":i,"aria-disabled":!!c})),m.default.createElement("div",e()({role:"slider"},d,r,{className:a,style:f}))}}]),a}(m.default.Component);a.a=h,h.propTypes={className:v.a.string,vertical:v.a.bool,offset:v.a.number,style:v.a.object,disabled:v.a.bool,min:v.a.number,max:v.a.number,value:v.a.number}},770:function(n,a,s){"use strict";s(926)},771:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),p=t(s(0)),o=t(s(927)),c=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.default.Component),e(a,[{key:"render",value:function(){return p.default.createElement("div",{className:this.props.prefixCls+"-wrapper"},p.default.createElement(o.default,this.props))}}]),a}();a.default=c,c.defaultProps={prefixCls:"am-slider"},n.exports=a.default},925:function(n,a,s){n.exports={content:[["p","Basic slider. When ",["code","disabled"]," is ",["code","true"],", the slider will not be interactable"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/slider/demo/basic.md",id:"components-slider-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint arrow-body-style: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  log <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-slider-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider <span class="token keyword">with</span> customized color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">trackStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">railStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">handleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              borderColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              marginLeft<span class="token punctuation">:</span> <span class="token string">\'-7px\'</span><span class="token punctuation">,</span>\n              marginTop<span class="token punctuation">:</span> <span class="token string">\'-4.5px\'</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{default:n}}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var t=s(0);s(0);s(134);var e=n(s(135)).default;s(770);var p=n(s(771)).default;s(128);var o=n(s(129)).default;s(134);var c=n(s(135)).default;s(770);var l=n(s(771)).default;s(128);var u=n(s(129)).default;s(134);var i=n(s(135)).default;s(770);var r=n(s(771)).default;s(128);var k=n(s(129)).default,f=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),d=function(n){function s(){var n,t,e,p;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,s);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return t=e=a(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(c))),e.log=function(n){return function(a){console.log(n+": "+a)}},p=t,a(e,p)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(s,t.Component),f(s,[{key:"render",value:function(){return t.createElement("div",{className:"am-slider-example"},t.createElement(k,{size:"lg"}),t.createElement(i,{size:"lg"},t.createElement("p",{className:"sub-title"},"Slider"),t.createElement(r,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),t.createElement(u,{size:"lg"}),t.createElement(c,{size:"lg"},t.createElement("p",{className:"sub-title"},"Disabled slider"),t.createElement(l,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,disabled:!0,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),t.createElement(o,{size:"lg"}),t.createElement(e,{size:"lg"},t.createElement("p",{className:"sub-title"},"Slider with customized color"),t.createElement(p,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,trackStyle:{backgroundColor:"red",height:"5px"},railStyle:{backgroundColor:"blue",height:"5px"},handleStyle:{borderColor:"blue",height:"14px",width:"14px",marginLeft:"-7px",marginTop:"-4.5px",backgroundColor:"blue"}})))}}]),s}();return t.createElement(d,null)},style:".demo-preview-item .am-slider-wrapper {\n  margin-bottom: 15px;\n}\n.demo-preview-item .am-slider-example {\n  overflow: hidden;\n}\n.am-wingblank.am-wingblank-lg {\n  margin-bottom: 30px;\n}\n.demo-preview-item .am-slider-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n  margin: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-wingblank.am-wingblank-lg</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span><span class="token pseudo-class">:last-child</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},926:function(n,a){},927:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(2),e=s.n(t),p=s(5),o=s.n(p),c=s(8),l=s.n(c),u=s(6),i=s.n(u),r=s(7),k=s.n(r),f=s(0),d=s(1),m=s.n(d),g=s(11),v=(s.n(g),s(687)),h=s(688),y=s(635),b=function(n){function a(n){o()(this,a);var s=i()(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onEnd=function(){s.setState({dragging:!1}),s.removeDocumentEvents(),s.props.onAfterChange(s.getValue())};var t=void 0!==n.defaultValue?n.defaultValue:n.min,e=void 0!==n.value?n.value:t;return s.state={value:s.trimAlignValue(e),dragging:!1},s}return k()(a,n),l()(a,[{key:"componentWillReceiveProps",value:function(n){if("value"in n||"min"in n||"max"in n){var a=this.state.value,s=void 0!==n.value?n.value:a,t=this.trimAlignValue(s,n);t!==a&&(this.setState({value:t}),y.h(s,n)&&this.props.onChange(t))}}},{key:"onChange",value:function(n){var a=this.props;!("value"in a)&&this.setState(n);var s=n.value;a.onChange(s)}},{key:"onStart",value:function(n){this.setState({dragging:!0});var a=this.props,s=this.getValue();a.onBeforeChange(s);var t=this.calcValueByPos(n);this.startValue=t,this.startPosition=n,t!==s&&this.onChange({value:t})}},{key:"onMove",value:function(n,a){y.i(n);var s=this.state,t=this.calcValueByPos(a);t!==s.value&&this.onChange({value:t})}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e()({},this.props,a),t=y.a(n,s);return y.b(t,s)}},{key:"render",value:function(){var n=this,a=this.props,s=a.prefixCls,t=a.vertical,p=a.included,o=a.disabled,c=a.minimumTrackStyle,l=a.trackStyle,u=a.handleStyle,i=a.min,r=a.max,k=a.handle,d=this.state,m=d.value,g=d.dragging,h=this.calcOffset(m),y=k({className:s+"-handle",vertical:t,offset:h,value:m,dragging:g,disabled:o,min:i,max:r,style:u[0]||u,ref:function(a){return n.saveHandle(0,a)}}),b=l[0]||l;return{tracks:f.default.createElement(v.a,{className:s+"-track",vertical:t,included:p,offset:0,length:h,style:e()({},c,b)}),handles:y}}}]),a}(f.default.Component);b.propTypes={defaultValue:m.a.number,value:m.a.number,disabled:m.a.bool},a.default=Object(h.a)(b)}});