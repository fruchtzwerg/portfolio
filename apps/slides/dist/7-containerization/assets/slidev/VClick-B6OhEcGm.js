import{d as _,$ as k,C as S,o as w,c as V,F as $,au as z,v as n,av as f,aw as B,l as I,a2 as G,ax as M}from"../modules/vue-D8tilZHj.js";import{K as T,b as F,L,F as D,C as K}from"../index-2wCLglk1.js";import{u as E}from"./context-CceD1aDK.js";const O=_({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(l){const o=l,{$clicksContext:s}=E();return k(()=>{S(p=>{if(!s)return;let i=+o.size;Number.isNaN(i)&&(console.warn(`[slidev] Invalid size for VClickGap: ${o.size}`),i=1);const c=s.currentOffset+i-1,t=T();s.register(t,{max:c,delta:i}),p(()=>s.unregister(t))})}),(p,i)=>(w(),V($))}}),P=F(O,[["__file","/Users/ben/git/personal/portfolio/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/builtin/VClickGap.vue"]]),g=["ul","ol"],R=_({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var A,b;const l=+this.every,[o,s]=L(this.at),p=z("click"),i=(a,e)=>G(a,[[p,e,"",{hide:this.hide,fade:this.fade}]]),c=a=>a.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?c(e.children):[e]);let t=(b=(A=this.$slots).default)==null?void 0:b.call(A);if(!t)return;t=c(D(t));const x=(a,e=1)=>c(a).map(r=>{if(!f(r))return r;if(g.includes(r.type)&&Array.isArray(r.children)){const d=u(r.children,e+1);return n(r,{},d)}return n(r)});let N=1,h=0;const u=(a,e=1)=>c(a).map(r=>{if(!f(r)||r.type===B)return r;const d=+s+Math.ceil(N++/l)-1;let m;e<+this.depth&&Array.isArray(r.children)?m=n(r,{},x(r.children,e)):m=n(r);const v=d-h;return h=d,i(m,o?v>=0?`+${v}`:`${v}`:d)}),y=()=>I(P,{size:+s+Math.ceil((N-1)/l)-1-h});if(t.length===1&&g.includes(t[0].type)&&Array.isArray(t[0].children))return n(t[0],{},[...u(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const a=t[0];if(Array.isArray(a.children))return n(a,{},a.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?n(e,{},[...u(e.children),y()]):n(e):e))}return[...u(t),y()]}}),q=_({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>n("span",l)}},render(){return n(R,{every:K,at:this.at,hide:this.hide,fade:this.fade},{default:()=>{var l,o;return(o=(l=this.$slots).default)==null?void 0:o.call(l).map(s=>s.type===M?this.wrapText(s):s)}})}});export{q as _};