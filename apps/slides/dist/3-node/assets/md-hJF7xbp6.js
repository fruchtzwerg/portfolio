import{G as e,K as t,Mt as n,Qt as r,R as i,X as a,ht as o,nn as s,z as c}from"./modules/shiki-CijQLMt1.js";import{nt as l,rt as u}from"./index-t10CK_ib.js";import{t as d}from"./slidev/CodeBlockWrapper-CF0Xj8vP.js";import{t as f}from"./slidev/default-DDFjBJlg.js";var p={__name:`event-loop.md__slidev_4`,setup(p){let{$slidev:m,$nav:h,$clicksContext:g,$clicks:_,$page:v,$renderContext:y,$frontmatter:b}=u();return g.setup(),(u,p)=>{let m=d;return o(),c(f,s(a(r(l)(r(b),3))),{default:n(()=>[p[1]||=i(`h1`,null,`Event Loop`,-1),p[2]||=i(`p`,null,[i(`a`,{href:`https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick`,target:`_blank`},`Documentation`)],-1),p[3]||=i(`p`,null,`The event loop enables Node.js’s non-blocking I/O. It’s a single-threaded loop.`,-1),t(m,{title:``,ranges:[]},{default:n(()=>[...p[0]||=[i(`pre`,{class:`shiki shiki-themes ariake-dark min-light slidev-code`,style:{"--shiki-dark":`#C4C4CD`,"--shiki-light":`#24292eff`,"--shiki-dark-bg":`#0E1019`,"--shiki-light-bg":`#ffffff`}},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`   ┌───────────────────────────┐`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`┌─>│           timers          │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  └─────────────┬─────────────┘`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  ┌─────────────┴─────────────┐`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  │     pending callbacks     │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  └─────────────┬─────────────┘`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  ┌─────────────┴─────────────┐`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  │       idle, prepare       │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  └─────────────┬─────────────┘      ┌───────────────┐`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  ┌─────────────┴─────────────┐      │   incoming:   │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  │           poll            │<─────┤  connections, │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  └─────────────┬─────────────┘      │   data, etc.  │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  ┌─────────────┴─────────────┐      └───────────────┘`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  │           check           │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  └─────────────┬─────────────┘`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`│  ┌─────────────┴─────────────┐`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`└──┤      close callbacks      │`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,null,`   └───────────────────────────┘`)])])],-1)]]),_:1})]),_:1},16)}}};export{p as default};