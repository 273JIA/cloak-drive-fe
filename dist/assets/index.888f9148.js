import{cs as $,ct as J}from"./index.94d4cfde.js";var M={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(S,O){(function(_,g){S.exports=g()})($,function(){return function(){var x={686:function(s,u,t){t.d(u,{default:function(){return X}});var c=t(279),f=t.n(c),l=t(370),h=t.n(l),y=t(817),m=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=m()(n);return d("cut"),e},p=v;function E(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var R=function(n,e){var r=E(n);e.container.appendChild(r);var o=m()(r);return d("copy"),r.remove(),o},j=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=R(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=R(n.value,e):(r=m()(n),d("copy")),r},L=j;function w(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(i)}var D=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,a=n.target,b=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(a!==void 0)if(a&&w(a)==="object"&&a.nodeType===1){if(r==="copy"&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return L(b,{container:o});if(a)return r==="cut"?p(a):L(a,{container:o})},F=D;function T(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}function H(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function N(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function I(i,n,e){return n&&N(i.prototype,n),e&&N(i,e),i}function z(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&k(i,n)}function k(i,n){return k=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},k(i,n)}function B(i){var n=G();return function(){var r=A(i),o;if(n){var a=A(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return U(this,o)}}function U(i,n){return n&&(T(n)==="object"||typeof n=="function")?n:Y(i)}function Y(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function G(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function A(i){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(i)}function P(i,n){var e="data-clipboard-".concat(i);if(!!n.hasAttribute(e))return n.getAttribute(e)}var V=function(i){z(e,i);var n=B(e);function e(r,o){var a;return H(this,e),a=n.call(this),a.resolveOptions(o),a.listenClick(r),a}return I(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=T(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var a=this;this.listener=h()(o,"click",function(b){return a.onClick(b)})}},{key:"onClick",value:function(o){var a=o.delegateTarget||o.currentTarget,b=this.action(a)||"copy",C=F({action:b,container:this.container,target:this.target(a),text:this.text(a)});this.emit(C?"success":"error",{action:b,text:C,trigger:a,clearSelection:function(){a&&a.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return P("action",o)}},{key:"defaultTarget",value:function(o){var a=P("target",o);if(a)return document.querySelector(a)}},{key:"defaultText",value:function(o){return P("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(o,a)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],a=typeof o=="string"?[o]:o,b=!!document.queryCommandSupported;return a.forEach(function(C){b=b&&!!document.queryCommandSupported(C)}),b}}]),e}(f()),X=V},828:function(s){var u=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(f,l){for(;f&&f.nodeType!==u;){if(typeof f.matches=="function"&&f.matches(l))return f;f=f.parentNode}}s.exports=c},438:function(s,u,t){var c=t(828);function f(y,m,d,v,p){var E=h.apply(this,arguments);return y.addEventListener(d,E,p),{destroy:function(){y.removeEventListener(d,E,p)}}}function l(y,m,d,v,p){return typeof y.addEventListener=="function"?f.apply(null,arguments):typeof d=="function"?f.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(E){return f(E,m,d,v,p)}))}function h(y,m,d,v){return function(p){p.delegateTarget=c(p.target,m),p.delegateTarget&&v.call(y,p)}}s.exports=l},879:function(s,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(s,u,t){var c=t(879),f=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!c.string(v))throw new TypeError("Second argument must be a String");if(!c.fn(p))throw new TypeError("Third argument must be a Function");if(c.node(d))return h(d,v,p);if(c.nodeList(d))return y(d,v,p);if(c.string(d))return m(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(E){E.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(v,p)})}}}function m(d,v,p){return f(document.body,d,v,p)}s.exports=l},817:function(s){function u(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),h=document.createRange();h.selectNodeContents(t),l.removeAllRanges(),l.addRange(h),c=l.toString()}return c}s.exports=u},279:function(s){function u(){}u.prototype={on:function(t,c,f){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:c,ctx:f}),this},once:function(t,c,f){var l=this;function h(){l.off(t,h),c.apply(f,arguments)}return h._=c,this.on(t,h,f)},emit:function(t){var c=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),l=0,h=f.length;for(l;l<h;l++)f[l].fn.apply(f[l].ctx,c);return this},off:function(t,c){var f=this.e||(this.e={}),l=f[t],h=[];if(l&&c)for(var y=0,m=l.length;y<m;y++)l[y].fn!==c&&l[y].fn._!==c&&h.push(l[y]);return h.length?f[t]=h:delete f[t],this}},s.exports=u,s.exports.TinyEmitter=u}},_={};function g(s){if(_[s])return _[s].exports;var u=_[s]={exports:{}};return x[s](u,u.exports,g),u.exports}return function(){g.n=function(s){var u=s&&s.__esModule?function(){return s.default}:function(){return s};return g.d(u,{a:u}),u}}(),function(){g.d=function(s,u){for(var t in u)g.o(u,t)&&!g.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:u[t]})}}(),function(){g.o=function(s,u){return Object.prototype.hasOwnProperty.call(s,u)}}(),g(686)}().default})})(M);const K=J(M.exports),Z=S=>{const O=(S==null?void 0:S.appendToBody)===void 0?!0:S.appendToBody;return{toClipboard(x,_){return new Promise((g,s)=>{const u=document.createElement("button"),t=new K(u,{text:()=>x,action:()=>"copy",container:_!==void 0?_:document.body});t.on("success",c=>{t.destroy(),g(c)}),t.on("error",c=>{t.destroy(),s(c)}),O&&document.body.appendChild(u),u.click(),O&&document.body.removeChild(u)})}}};export{Z as u};
