import{b as m,ad as y,d as f,u as h,c as b,o as a,g as o,f as r,w as g,E as v,a as i,F as E,h as l,n as d,j as c,_ as C,p as B}from"./index.65b9b639.js";const w=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:y}}),L={click:t=>t instanceof MouseEvent},S=f({name:"ElLink"}),$=f({...S,props:w,emits:L,setup(t,{emit:u}){const s=t,n=h("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||u("click",e)}return(e,_)=>(a(),o("a",{class:d(i(p)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(a(),r(i(E),{key:0},{default:g(()=>[(a(),r(v(e.icon)))]),_:1})):l("v-if",!0),e.$slots.default?(a(),o("span",{key:1,class:d(i(n).e("inner"))},[c(e.$slots,"default")],2)):l("v-if",!0),e.$slots.icon?c(e.$slots,"icon",{key:2}):l("v-if",!0)],10,["href","target"]))}});var P=C($,[["__file","link.vue"]]);const N=B(P);export{N as E};
