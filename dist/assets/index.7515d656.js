import{P as r}from"./index.c923d329.js";import{r as d,Y as l,Z as u,o as _,g as p,M as m,C as c,t as f,cB as x,V as v}from"./index.65b9b639.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.985f7b33.js";/* empty css                  */import"./el-input.992ae77e.js";import"./el-scrollbar.654896dc.js";import"./index.79cc9621.js";import"./index.bc454b2f.js";const g={class:"code-text-content"},h={class:"layui-code code-text"},B={__name:"index",setup(b){const e=d(""),s=l(),i=(t,o)=>{x.get(v.getPreviewUrl(t)).then(a=>{a.status===200?(e.value=a.data,layui.use("code",function(){layui.code({elem:".layui-code.code-text",title:o,encode:!1,about:!1})})):e.value="Failed to get resources"}).catch(a=>{e.value="Failed to get resources"})},n=()=>{let t=s.params.fileId,o=s.query.filename;i(t,o)};return u(()=>{n()}),(t,o)=>(_(),p("div",null,[m(r),c("div",g,[c("pre",h,"                "+f(e.value)+`
            `,1)])]))}},U=y(B,[["__scopeId","data-v-892d77b2"]]);export{U as default};
