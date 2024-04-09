import{o as e,c as o,k as t,q as i,s as p,A as a,e as n,a1 as s}from"../modules/vue-D8tilZHj.js";import{I as c}from"./default-CsUk4FMn.js";import{b as r,I as l}from"../index-D8__KWxq.js";import{p as u,u as d,f as h}from"./context-Dbz_vjL3.js";import"../modules/shiki-DWUOYu4G.js";const _=n("h1",null,"Event Loop",-1),f=n("p",null,[n("a",{href:"https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick",target:"_blank",rel:"noopener"},"Documentation")],-1),m=n("p",null,"The event loop enables Node.js’s non-blocking I/O. It’s a single-threaded loop.",-1),k=n("pre",{class:"shiki shiki-themes ariake-dark min-light slidev-code",style:{"--shiki-dark":"#C4C4CD","--shiki-light":"#24292eff","--shiki-dark-bg":"#0E1019","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-"},[n("span",{class:"line"},[n("span",null,"   ┌───────────────────────────┐")]),s(`
`),n("span",{class:"line"},[n("span",null,"┌─>│           timers          │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  └─────────────┬─────────────┘")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  ┌─────────────┴─────────────┐")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  │     pending callbacks     │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  └─────────────┬─────────────┘")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  ┌─────────────┴─────────────┐")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  │       idle, prepare       │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  └─────────────┬─────────────┘      ┌───────────────┐")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  ┌─────────────┴─────────────┐      │   incoming:   │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  │           poll            │<─────┤  connections, │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  └─────────────┬─────────────┘      │   data, etc.  │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  ┌─────────────┴─────────────┐      └───────────────┘")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  │           check           │")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  └─────────────┬─────────────┘")]),s(`
`),n("span",{class:"line"},[n("span",null,"│  ┌─────────────┴─────────────┐")]),s(`
`),n("span",{class:"line"},[n("span",null,"└──┤      close callbacks      │")]),s(`
`),n("span",{class:"line"},[n("span",null,"   └───────────────────────────┘")])])],-1),g={__name:"4",setup(b){return u(l),d(),(v,x)=>(e(),o(c,i(p(a(h)(a(l),3))),{default:t(()=>[_,f,m,k]),_:1},16))}},N=r(g,[["__file","/@slidev/slides/4.md"]]);export{N as default};
