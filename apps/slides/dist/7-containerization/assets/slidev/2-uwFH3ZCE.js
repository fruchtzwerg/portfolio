import{d as v,r as C,A as d,o,c as f,k as b,f as g,b as c,y as m,F as P,_ as A,i as h,l as _,g as L,h as T,e as S,q as I,s as D}from"../modules/vue-D8tilZHj.js";import{u as z,b as p,F as N,G as $}from"../index-2wCLglk1.js";import{T as B}from"./title-renderer-B1q_RwjM.js";import{u as k,p as F,f as M}from"./context-CceD1aDK.js";import{h as w}from"../layout-helper-kTUSWJqX.js";import"../modules/shiki-DWUOYu4G.js";import"./index-DzbYd94U.js";const H=["href","innerHTML"],R=["href"],U=v({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(a){const{isPrintMode:s}=z();return(t,n)=>{const l=C("RouterLink");return!d(s)&&t.title?(o(),f(l,{key:0,to:String(t.to),onClick:n[0]||(n[0]=u=>u.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!d(s)&&!t.title?(o(),f(l,{key:1,to:String(t.to),onClick:n[1]||(n[1]=u=>u.target.blur())},{default:b(()=>[g(t.$slots,"default")]),_:3},8,["to"])):d(s)&&t.title?(o(),c("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,H)):(o(),c("a",{key:3,href:`#${t.to}`},[g(t.$slots,"default")],8,R))}}}),V=p(U,[["__file","/Users/ben/git/personal/portfolio/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/builtin/Link.vue"]]),O=["start"],E=v({__name:"TocList",props:{level:{type:Number,required:!0,default:1},start:{type:Number,required:!1},listStyle:{type:[String,Array],required:!1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(a){const s=a,t=m(()=>[...N(s.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${s.level}`]),n=m(()=>[...N(s.listStyle||[])]);return(l,u)=>{const y=V,r=C("TocList",!0);return l.list&&l.list.length>0?(o(),c("ol",{key:0,class:h(t.value),start:l.level===1?l.start:void 0,style:T(n.value.length>=l.level?`list-style:${n.value[l.level-1]}`:void 0)},[(o(!0),c(P,null,A(l.list,e=>(o(),c("li",{key:e.path,class:h(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[_(y,{to:e.path},{default:b(()=>[_(d(B),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(o(),f(r,{key:0,level:l.level+1,"list-style":l.listStyle,list:e.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):L("v-if",!0)],2))),128))],14,O)):L("v-if",!0)}}}),j=p(E,[["__file","/Users/ben/git/personal/portfolio/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/builtin/TocList.vue"]]),G=v({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},start:{type:[String,Number],required:!1,default:1},listStyle:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:Number.POSITIVE_INFINITY},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(a){const s=a,{$slidev:t}=k();function n(r,e=1){if(e>Number(s.maxDepth))return[];if(e<Number(s.minDepth)){const i=r.find(q=>q.active||q.activeParent);return i?n(i.children,e+1):[]}return r.map(i=>({...i,children:n(i.children,e+1)}))}function l(r){return r.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:l(e.children)}))}function u(r){const e=r.some(i=>i.active||i.activeParent||i.hasActiveParent);return r.filter(()=>e).map(i=>({...i,children:u(i.children)}))}const y=m(()=>{const r=t==null?void 0:t.nav.tocTree;if(!r)return[];let e=n(r);return s.mode==="onlyCurrentTree"?e=l(e):s.mode==="onlySiblings"&&(e=u(e)),e});return(r,e)=>{const i=j;return o(),c("div",{class:"slidev-toc",style:T(`column-count:${r.columns}`)},[_(i,{level:1,start:r.start,"list-style":r.listStyle,list:y.value,"list-class":r.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),Y=p(G,[["__file","/Users/ben/git/personal/portfolio/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/builtin/Toc.vue"]]),J={class:"slidev-layout px-8 content"},K=v({__name:"image-large",props:{image:{type:String,required:!0},dim:{type:null,required:!1},backgroundSize:{type:null,required:!1,default:"cover"},imagePosition:{type:String,required:!1,default:"right"}},setup(a){k();const s=a,t=m(()=>w(s.image,s.dim,s.backgroundSize));return(n,l)=>(o(),c("div",{class:h(["grid grid-cols-[3fr_5fr] container w-full h-full auto-rows-fr",{"image-left":s.imagePosition==="left"}])},[S("div",J,[g(n.$slots,"default",{},void 0,!0)]),S("div",{class:"w-full h-full image",style:T(t.value)},null,4)],2))}}),Q=p(K,[["__scopeId","data-v-3002c376"],["__file","/Users/ben/git/personal/portfolio/apps/slides/layouts/image-large.vue"]]),W=S("h1",null,"Table of contents",-1),X={__name:"2",setup(a){return F($),k(),(s,t)=>{const n=Y;return o(),f(Q,I(D(d(M)(d($),1))),{default:b(()=>[W,_(n,{maxDepth:"1"})]),_:1},16)}}},ne=p(X,[["__file","/@slidev/slides/2.md"]]);export{ne as default};