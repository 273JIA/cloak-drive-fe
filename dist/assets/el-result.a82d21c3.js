import{cG as b,s as y,cH as k,cI as C,b as $,d as m,u as w,c as E,o as l,g as a,C as f,j as i,n as t,a as e,h as c,_ as I,f as S,E as h,t as p,p as B}from"./index.dd2d866e.js";const n={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},d={[n.success]:b,[n.warning]:y,[n.error]:k,[n.info]:C},R=$({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),N=m({name:"ElResult"}),T=m({...N,props:R,setup(v){const _=v,o=w("result"),r=E(()=>{const s=_.icon,u=s&&n[s]?n[s]:"icon-info",g=d[u]||d["icon-info"];return{class:u,component:g}});return(s,u)=>(l(),a("div",{class:t(e(o).b())},[f("div",{class:t(e(o).e("icon"))},[i(s.$slots,"icon",{},()=>[e(r).component?(l(),S(h(e(r).component),{key:0,class:t(e(r).class)},null,8,["class"])):c("v-if",!0)])],2),s.title||s.$slots.title?(l(),a("div",{key:0,class:t(e(o).e("title"))},[i(s.$slots,"title",{},()=>[f("p",null,p(s.title),1)])],2)):c("v-if",!0),s.subTitle||s.$slots["sub-title"]?(l(),a("div",{key:1,class:t(e(o).e("subtitle"))},[i(s.$slots,"sub-title",{},()=>[f("p",null,p(s.subTitle),1)])],2)):c("v-if",!0),s.$slots.extra?(l(),a("div",{key:2,class:t(e(o).e("extra"))},[i(s.$slots,"extra")],2)):c("v-if",!0)],2))}});var D=I(T,[["__file","result.vue"]]);const P=B(D);export{P as E};
