/* empty css                  */import{E as k,a as M,b as S,c as L}from"./el-col.a870dadc.js";import"./el-tooltip.704dbad3.js";import"./el-scrollbar.d9e482b0.js";import{E as N}from"./el-divider.abf729b4.js";import{P as U}from"./index.323aa197.js";import{Y as C,r as u,Z as D,o as v,g as I,M as o,C as a,t as g,w as i,cl as F,aB as h,ak as R,bX as A,V as p,f as H}from"./index.57de75bb.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.6b5203ca.js";import"./index.4638f3e1.js";import"./index.5c809ec3.js";import"./el-input.8287fb26.js";import"./index.02a247c6.js";const T={class:"pan-video-content"},X={class:"video-name-content"},Y={class:"video-name"},Z={class:"video-content"},j=["src"],q={class:"video-list-content"},z={slot:"title"},G={__name:"index",setup(J){const _=C(),r=u(""),n=u([]),d=u(""),s=u("0"),x=t=>{n.value=new Array,t.forEach((e,l)=>{e.filename=e.filename.substring(0,e.filename.lastIndexOf(".")),e.filename.length>15&&(e.filename=e.filename.substring(0,16)+"..."),e.fileId===_.params.fileId&&(r.value=e.filename,d.value=p.getPreviewUrl(e.fileId)),n.value.push(e)}),s.value=_.params.fileId},E=()=>{let t="",e=s.value;if(n.value.some((c,f)=>{if(c.fileId===e)return t=f,!0}),t===n.value.length-1)return;let l=n.value[++t];r.value=l.filename,d.value=p.getPreviewUrl(l.fileId),s.value=l.fileId},y=t=>{s.value=t,n.value.some(e=>{if(e.fileId===t)return r.value=e.filename,d.value=p.getPreviewUrl(e.fileId),!0})},w=()=>{document.getElementById("r_pan_video_player").addEventListener("ended",()=>{E()},!1)},b=()=>{F.list({parentId:_.params.parentId,fileTypes:"9"},function(t){t.code===0?(x(t.data),w()):h.error(t.message)},function(t){h.error(t)})};return D(()=>{b()}),(t,e)=>{const l=N,c=k,f=M,P=S,B=L;return v(),I("div",null,[o(U),a("div",T,[a("div",X,[a("p",Y,g(r.value),1)]),o(l),o(B,null,{default:i(()=>[o(c,{span:18},{default:i(()=>[a("div",Z,[a("video",{id:"r_pan_video_player",src:d.value,autoplay:"true",controls:"true"},null,8,j)])]),_:1}),o(c,{span:6},{default:i(()=>[a("div",q,[o(P,{class:"video-list","default-active":s.value,onSelect:y},{default:i(()=>[(v(!0),I(R,null,A(n.value,(m,V)=>(v(),H(f,{key:V,index:m.fileId},{default:i(()=>[e[0]||(e[0]=a("i",{class:"fa fa-video-camera"},null,-1)),a("span",z,g(m.filename),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])])]),_:1})]),_:1})])])}}},de=O(G,[["__scopeId","data-v-b378156b"]]);export{de as default};
