import{_ as k,a as B,b as F}from"./index.19e9d648.js";/* empty css                  */import{E as C}from"./el-divider.695f23ba.js";import{E as I,a as S}from"./el-breadcrumb-item.d794ce26.js";import{aw as f,ax as b,Q as v,o as l,g as d,M as a,w as i,C as m,ak as w,bX as E,a as $,f as P,t as T,r as A,Z as L}from"./index.dd2d866e.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import"./el-input.e0af548d.js";import"./el-scrollbar.e9b54d88.js";import"./index.ab413e75.js";import"./el-link.711ea7c9.js";import"./index.d47addcd.js";import"./debounce.8dc7df07.js";import"./el-loading.e5e57046.js";import"./el-tag.100269bb.js";import"./el-tooltip.057d09f4.js";import"./el-tree.af8ebc3d.js";import"./index.c15ac132.js";import"./index.1872399d.js";import"./index.25237369.js";const R={class:"pan-main-breadcrumb-content"},D=["onClick"],M={__name:"index",setup(y){const r=f(),o=b(),{breadCrumbs:s}=v(r),_=()=>{if(o.setSearchFlag(!1),s.value.length>1){let e=[...s.value];e.pop();let t=e.pop().id;c(t)}},c=e=>{if(e!=="-1"){let t=new Array;s.value.some(n=>{if(t.push(n),n.id==e)return!0}),r.reset(t),o.setParentId(e),o.setSearchFlag(!1),o.loadFileList()}};return(e,t)=>{const n=I,u=S,g=C;return l(),d("div",R,[a(u,{style:{display:"inline-block"}},{default:i(()=>[a(n,null,{default:i(()=>[m("a",{class:"breadcrumb-item-a",onClick:_,href:"#"},"Return")]),_:1})]),_:1}),a(g,{direction:"vertical",style:{"vertical-align":"top !important"}}),a(u,{"separator-icon":"ArrowRight",style:{display:"inline-block"}},{default:i(()=>[(l(!0),d(w,null,E($(s),(p,x)=>(l(),P(n,{key:x},{default:i(()=>[m("a",{class:"breadcrumb-item-a",onClick:X=>c(p.id),href:"#"},T(p.name),9,D)]),_:2},1024))),128))]),_:1})])}}},N=h(M,[["__scopeId","data-v-e36cf89d"]]);const V={class:"button-search-content"},Q={__name:"index",setup(y){const r=b(),o=f(),{searchFlag:s,defaultParentId:_,defaultParentFilename:c}=v(r),e=A(["upload","createFolder","download","delete","rename","share","copy","transfer"]);return L(()=>{if(!s.value){let t={id:_.value,name:c.value};o.clear(),o.addItem(t),r.refreshParentId(),r.setFileTypes("-1"),r.loadFileList()}}),(t,n)=>(l(),d("div",null,[m("div",V,[a(k,{"button-array":e.value},null,8,["button-array"]),a(B)]),a(N),a(F)]))}},ce=h(Q,[["__scopeId","data-v-10a9995f"]]);export{ce as default};
