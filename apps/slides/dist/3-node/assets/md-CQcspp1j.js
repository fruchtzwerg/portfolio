import{_ as i}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D98L9XFG.js";import{o as r,c,k as a,e as n,l as u,m as d,ae as s,q as m,s as k,S as e}from"./modules/vue-DqyYkKqv.js";import{I as f}from"./slidev/default-m0J3kcKl.js";import{u as g,f as h}from"./slidev/context-5ERYHSt8.js";import"./modules/unplugin-icons-Oe2e3nhT.js";import"./index-vLjcKSoT.js";import"./modules/shiki-DBUm8ogk.js";const w={__name:"event-loop.md__slidev_4",setup(_){const{$slidev:v,$nav:x,$clicksContext:p,$clicks:C,$page:$,$renderContext:b,$frontmatter:t}=g();return p.setup(),(B,l)=>{const o=i;return r(),c(f,m(k(e(h)(e(t),3))),{default:a(()=>[l[1]||(l[1]=n("h1",null,"Event Loop",-1)),l[2]||(l[2]=n("p",null,[n("a",{href:"https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick",target:"_blank"},"Documentation")],-1)),l[3]||(l[3]=n("p",null,"The event loop enables Node.js’s non-blocking I/O. It’s a single-threaded loop.",-1)),u(o,d({},{ranges:[]}),{default:a(()=>l[0]||(l[0]=[n("pre",{class:"shiki shiki-themes ariake-dark min-light slidev-code",style:{"--shiki-dark":"#C4C4CD","--shiki-light":"#24292eff","--shiki-dark-bg":"#0E1019","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"   ┌───────────────────────────┐")]),s(`
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
`),n("span",{class:"line"},[n("span",null,"   └───────────────────────────┘")])])],-1)])),_:1},16)]),_:1},16)}}};export{w as default};
