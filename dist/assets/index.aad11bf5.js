import{bz as I,r as u,c as s,V as i,aB as x}from"./index.6c9c4166.js";const b=I("task",()=>{const a=u([]),n=u(!1),f=s(()=>a.value.length),o=s(()=>a.value.length<=0);function c(){a.value=new Array,n.value=!1}function r(t){a.value.push(t)}function d(t){for(let e=0;e<a.value.length;e++)if(t===a.value[e].filename){a.value.splice(e,1);break}}function v(t){let e=a.value.find(l=>t.filename===l.filename);e.status=t.status,e.statusText=t.statusText}function m(t){let e=a.value.find(l=>t.filename===l.filename);e.speed=t.speed,e.percentage=t.percentage,e.uploadedSize=t.uploadedSize,e.timeRemaining=t.timeRemaining}function g(t){let e=a.value.find(l=>t===l.filename);e.target.pause(),e.status=i.fileStatus.PAUSE.code,e.statusText=i.fileStatus.PAUSE.text}function p(t){a.value.find(l=>t===l.filename).target.resume()}function k(t){for(let e=0;e<a.value.length;e++)if(t===a.value[e].filename){a.value[e].target.cancel(),a.value.splice(e,1),a.value.length===0&&(n.value=!1),x.info("File:"+t+" Cancel Upload");break}}function S(t){let e=a.value.find(l=>t===l.filename);e.target.bootstrap(),e.target.resume()}function T(t){n.value=t}function h(t){return a.value.find(e=>t===e.filename)}return{taskList:a,viewFlag:n,uploadTaskNum:f,uploadTaskFlag:o,clear:c,add:r,remove:d,updateStatus:v,updateProcess:m,pause:g,resume:p,cancel:k,retry:S,updateViewFlag:T,getUploadTask:h}});export{b as u};
