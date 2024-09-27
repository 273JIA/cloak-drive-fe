import{b as _,ad as C,d as c,af as E,u as y,r as v,a1 as P,Z as S,o,g as p,j as B,n,a as e,_ as k,q as $,a2 as w,C as x,f,w as j,E as N,F as q,t as A,ah as D,p as K,am as T}from"./index.6c9c4166.js";const I=Symbol("breadcrumbKey"),z=_({separator:{type:String,default:"/"},separatorIcon:{type:C}}),F=c({name:"ElBreadcrumb"}),L=c({...F,props:z,setup(l){const t=l,{t:u}=E(),s=y("breadcrumb"),r=v();return P(I,t),S(()=>{const a=r.value.querySelectorAll(`.${s.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,i)=>(o(),p("div",{ref_key:"breadcrumb",ref:r,class:n(e(s).b()),"aria-label":e(u)("el.breadcrumb.label"),role:"navigation"},[B(a.$slots,"default")],10,["aria-label"]))}});var M=k(L,[["__file","breadcrumb.vue"]]);const O=_({to:{type:$([String,Object]),default:""},replace:Boolean}),V=c({name:"ElBreadcrumbItem"}),Z=c({...V,props:O,setup(l){const t=l,u=D(),s=w(I,void 0),r=y("breadcrumb"),a=u.appContext.config.globalProperties.$router,i=v(),h=()=>{!t.to||!a||(t.replace?a.replace(t.to):a.push(t.to))};return(b,G)=>{var m,d;return o(),p("span",{class:n(e(r).e("item"))},[x("span",{ref_key:"link",ref:i,class:n([e(r).e("inner"),e(r).is("link",!!b.to)]),role:"link",onClick:h},[B(b.$slots,"default")],2),(m=e(s))!=null&&m.separatorIcon?(o(),f(e(q),{key:0,class:n(e(r).e("separator"))},{default:j(()=>[(o(),f(N(e(s).separatorIcon)))]),_:1},8,["class"])):(o(),p("span",{key:1,class:n(e(r).e("separator")),role:"presentation"},A((d=e(s))==null?void 0:d.separator),3))],2)}}});var g=k(Z,[["__file","breadcrumb-item.vue"]]);const J=K(M,{BreadcrumbItem:g}),Q=T(g);export{Q as E,J as a};
