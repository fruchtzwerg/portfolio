import{d as h,a0 as w,D as B,o as A,c as I,F as V,av as $,v as o,aw as f,ax as G,l as M,a3 as T,ay as D,z as F,b as L,e as S,f as E,i as U,h as X}from"../modules/vue-DV57PELF.js";import{X as j,b as x,Y as K,F as O,C as P}from"../index-Bw_mHhHX.js";import{u as R}from"./context-CECbKFzD.js";import{h as Y}from"./layoutHelper-CpohVtsN.js";const q=h({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(a){const l=a,{$clicksContext:r}=R();return w(()=>{B(c=>{if(!r)return;let i=+l.size;Number.isNaN(i)&&(console.warn(`[slidev] Invalid size for VClickGap: ${l.size}`),i=1);const d=r.currentOffset+i-1,t=j();r.register(t,{max:d,delta:i}),c(()=>r.unregister(t))})}),(c,i)=>(A(),I(V))}}),H=x(q,[["__file","/Users/ben/git/personal/portfolio/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/builtin/VClickGap.vue"]]),k=["ul","ol"],J=h({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var b,N;const a=+this.every,[l,r]=K(this.at),c=$("click"),i=(n,e)=>T(n,[[c,e,"",{hide:this.hide,fade:this.fade}]]),d=n=>n.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?d(e.children):[e]);let t=(N=(b=this.$slots).default)==null?void 0:N.call(b);if(!t)return;t=d(O(t));const C=(n,e=1)=>d(n).map(s=>{if(!f(s))return s;if(k.includes(s.type)&&Array.isArray(s.children)){const u=p(s.children,e+1);return o(s,{},u)}return o(s)});let g=1,m=0;const p=(n,e=1)=>d(n).map(s=>{if(!f(s)||s.type===G)return s;const u=+r+Math.ceil(g++/a)-1;let _;e<+this.depth&&Array.isArray(s.children)?_=o(s,{},C(s.children,e)):_=o(s);const v=u-m;return m=u,i(_,l?v>=0?`+${v}`:`${v}`:u)}),y=()=>M(H,{size:+r+Math.ceil((g-1)/a)-1-m});if(t.length===1&&k.includes(t[0].type)&&Array.isArray(t[0].children))return o(t[0],{},[...p(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const n=t[0];if(Array.isArray(n.children))return o(n,{},n.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?o(e,{},[...p(e.children),y()]):o(e):e))}return[...p(t),y()]}}),re=h({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:a=>o("span",a)}},render(){return o(J,{every:P,at:this.at,hide:this.hide,fade:this.fade},{default:()=>{var a,l;return(l=(a=this.$slots).default)==null?void 0:l.call(a).map(r=>r.type===D?this.wrapText(r):r)}})}}),Q={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},W=h({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(a){const l=a,r=F(()=>Y(l.image,!1,l.backgroundSize));return(c,i)=>(A(),L("div",Q,[S("div",{class:U(["slidev-layout default",l.class])},[E(c.$slots,"default")],2),S("div",{class:"w-full h-full",style:X(r.value)},null,4)]))}}),ae=x(W,[["__file","/Users/ben/git/personal/portfolio/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/layouts/image-right.vue"]]);export{ae as I,re as _};