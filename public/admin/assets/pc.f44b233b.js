import{_ as y}from"./index.065f20cf.js";import{I as V,w as b}from"./element-plus.fa1aa32c.js";import B from"./menu.c4cd42a7.js";import P from"./preview-pc.99d9afdb.js";import{_ as h}from"./attr-setting.vue_vue_type_script_setup_true_lang.724acfb1.js";import"./index.59aaa4c5.js";import{s as C,a as E}from"./decoration.83b16a64.js";import"./lodash.bbe6f09f.js";import{d as _,a0 as I,r as l,e as c,w as N,ag as k,o as d,c as S,V as i,M as s,a as M,u,O,L as T,T as F}from"./@vue.cab01781.js";import{d as J}from"./index.b4f64333.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./attr.vue_vue_type_script_setup_true_lang.2b4c071f.js";import"./index.415e0265.js";import"./picker.76a5b792.js";import"./index.8bea8b0f.js";import"./picker.875a9fd4.js";import"./index.d59923be.js";import"./usePaging.ae501cf0.js";import"./index.97dfb889.js";import"./index.vue_vue_type_script_setup_true_lang.2ded5aed.js";import"./vue3-video-play.05975c53.js";import"./vuedraggable.5917840d.js";import"./vue.a15b7233.js";import"./sortablejs.c69601cb.js";import"./content.vue_vue_type_script_setup_true_lang.5ece554b.js";import"./decoration-img.4f734099.js";import"./attr.vue_vue_type_script_setup_true_lang.6b2577ef.js";import"./content.5ccc7a27.js";import"./attr.vue_vue_type_script_setup_true_lang.63cab1bc.js";import"./add-nav.vue_vue_type_script_setup_true_lang.b3e4c10f.js";import"./content.13abcbd2.js";import"./attr.vue_vue_type_script_setup_true_lang.28ae0e2d.js";import"./content.vue_vue_type_script_setup_true_lang.7a231d34.js";import"./attr.vue_vue_type_script_setup_true_lang.06a2fa18.js";import"./content.c4825e84.js";import"./attr.vue_vue_type_script_setup_true_lang.0b87e513.js";import"./content.b622bc0f.js";import"./attr.vue_vue_type_script_setup_true_lang.826ca739.js";import"./content.vue_vue_type_script_setup_true_lang.6415bddf.js";import"./attr.vue_vue_type_script_setup_true_lang.0583d8bc.js";import"./content.562208ed.js";const U={class:"decoration-pages min-w-[1100px]"},W={class:"flex h-full items-start"},L=F("\u4FDD\u5B58"),$=_({name:"decorationPc"}),j=_({...$,setup(q){const a=I({[4]:{id:4,pageType:4,name:"pc\u9996\u9875\u88C5\u4FEE",pageData:[]}}),o=l("4"),r=l(0),p=c(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),f=c(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData[r.value])!=null?t:""}),n=async()=>{const e=await E({id:o.value});a[String(e.id)].pageData=JSON.parse(e.pageData),r.value=p.value.findIndex(t=>!t.disabled)},g=async()=>{await C({...a[o.value],pageData:JSON.stringify(a[o.value].pageData)}),n()};return N(o,()=>{r.value=p.value.findIndex(e=>!e.disabled),n()},{immediate:!0}),(e,t)=>{const v=V,D=b,x=y,w=k("perms");return d(),S("div",U,[i(v,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:s(()=>[M("div",W,[i(B,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=m=>o.value=m),menus:a},null,8,["modelValue","menus"]),i(P,{class:"mx-4",modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=m=>r.value=m),pageData:u(p)},null,8,["modelValue","pageData"]),i(h,{class:"flex-1",widget:u(f),type:"pc"},null,8,["widget"])])]),_:1}),O((d(),T(x,{class:"mt-4",fixed:!1},{default:s(()=>[i(D,{type:"primary",onClick:g},{default:s(()=>[L]),_:1})]),_:1})),[[w,["decorate:pages:save"]]])])}}});const oe=J(j,[["__scopeId","data-v-0219c0b6"]]);export{oe as default};