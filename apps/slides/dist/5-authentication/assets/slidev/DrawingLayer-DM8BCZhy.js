import{d as l,t as i,$ as u,D as m,E as c,o as p,b as d,i as f,A as t}from"../modules/vue-DNHloqFD.js";import{u as _}from"./context-B_CaBeIt.js";import{u as v}from"./DrawingPreview-DeYzxcKR.js";import{b as g}from"../index-CdEvcece.js";import"./index-0GLnZ6r3.js";import"../modules/shiki-CIea-X9Q.js";const w=l({__name:"DrawingLayer",setup(b){const{drauu:e,drawingEnabled:n,loadCanvas:a}=v(),r=_().$scale,o=i();return u(()=>{e.mount(o.value,o.value.parentElement),m(r,s=>e.options.coordinateScale=1/s,{immediate:!0}),a()}),c(()=>{e.unmount()}),(s,D)=>(p(),d("svg",{ref_key:"svg",ref:o,class:f(["w-full h-full absolute top-0",{"pointer-events-none":!t(n),"touch-none":t(n)}])},null,2))}}),B=g(w,[["__file","/Users/ben/git/personal/portfolio/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};