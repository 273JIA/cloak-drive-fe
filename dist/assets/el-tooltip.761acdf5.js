import{ar as g,as as x}from"./index.65b9b639.js";const s=new Map;if(g){let e;document.addEventListener("mousedown",t=>e=t),document.addEventListener("mouseup",t=>{if(e){for(const n of s.values())for(const{documentHandler:o}of n)o(t,e);e=void 0}})}function u(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:x(t.arg)&&n.push(t.arg),function(o,a){const r=t.instance.popperRef,c=o.target,d=a==null?void 0:a.target,i=!t||!t.instance,f=!c||!d,p=e.contains(c)||e.contains(d),m=e===c,h=n.length&&n.some(l=>l==null?void 0:l.contains(c))||n.length&&n.includes(d),v=r&&(r.contains(c)||r.contains(d));i||f||p||m||h||v||t.value(o,a)}}const E={beforeMount(e,t){s.has(e)||s.set(e,[]),s.get(e).push({documentHandler:u(e,t),bindingFn:t.value})},updated(e,t){s.has(e)||s.set(e,[]);const n=s.get(e),o=n.findIndex(r=>r.bindingFn===t.oldValue),a={documentHandler:u(e,t),bindingFn:t.value};o>=0?n.splice(o,1,a):n.push(a)},unmounted(e){s.delete(e)}};export{E as C};
