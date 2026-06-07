import{_ as i}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-qnne4pkJ.js";import{o as r,b as c,w as a,g as n,d as u,m as d,C as s,v as m,x as f,z as e}from"./modules/vue-CAJQaPXj.js";import{I as k}from"./slidev/default-_Isz5EzB.js";import{u as g,f as h}from"./slidev/context-CFkYu_yZ.js";import"./modules/unplugin-icons-Co2J18wt.js";import"./index-CsIL_c5L.js";import"./modules/shiki-Dh-glFI5.js";const j={__name:"event-loop.md__slidev_4",setup(_){const{$clicksContext:p,$frontmatter:t}=g();return p.setup(),(x,l)=>{const o=i;return r(),c(k,m(f(e(h)(e(t),3))),{default:a(()=>[l[1]||(l[1]=n("h1",null,"Event Loop",-1)),l[2]||(l[2]=n("p",null,[n("a",{href:"https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick",target:"_blank"},"Documentation")],-1)),l[3]||(l[3]=n("p",null,"The event loop enables Node.js’s non-blocking I/O. It’s a single-threaded loop.",-1)),u(o,d({},{title:"",ranges:[]}),{default:a(()=>[...l[0]||(l[0]=[n("pre",{class:"shiki shiki-themes ariake-dark min-light slidev-code",style:{"--shiki-dark":"#C4C4CD","--shiki-light":"#24292eff","--shiki-dark-bg":"#0E1019","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"   ┌───────────────────────────┐")]),s(`
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
`),n("span",{class:"line"},[n("span",null,"   └───────────────────────────┘")])])],-1)])]),_:1},16)]),_:1},16)}}};export{j as default};
