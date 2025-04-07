import{p as B}from"./chunk-K2ZEYYM2-Da8yGmT4.js";import{p as U}from"./radar-MK3ICKWK-55CS4JTO-nLXdmw4p.js";import{F as V,o as Z,p as j,s as q,g as H,e as J,d as K,a as i,m as C,x as Q,f as X,G as Y,a7 as ee,a9 as te,aa as z,ab as ae,n as re,ac as ie}from"./Mermaid.vue_vue_type_script_setup_true_lang-BNOgdQvI.js";import"./chunk-TGZYFRKZ-C6zrLEZn.js";import"./index-us3eykaf.js";import"./modules/vue-BUplyEHI.js";import"./modules/shiki-CRuElP9a.js";import"./modules/file-saver-C8BEGaqa.js";var F=V.pie,D={sections:new Map,showData:!1,config:F},m=D.sections,w=D.showData,se=structuredClone(F),oe=i(()=>structuredClone(se),"getConfig"),ne=i(()=>{m=new Map,w=D.showData,Q()},"clear"),le=i(({label:e,value:a})=>{m.has(e)||(m.set(e,a),C.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>m,"getSections"),pe=i(e=>{w=e},"setShowData"),de=i(()=>w,"getShowData"),G={getConfig:oe,clear:ne,setDiagramTitle:Z,getDiagramTitle:j,setAccTitle:q,getAccTitle:H,setAccDescription:J,getAccDescription:K,addSection:le,getSections:ce,setShowData:pe,getShowData:de},ge=i((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await U("pie",e);C.debug(a),ge(a,G)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),me=fe,he=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return ie().value(s=>s.value)(a)},"createPieArcs"),Se=i((e,a,W,s)=>{C.debug(`rendering pie chart
`+e);const n=s.db,y=X(),T=Y(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,h=c,S=ee(a),l=S.append("g");l.attr("transform","translate("+h/2+","+c/2+")");const{themeVariables:r}=y;let[A]=te(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(h,c)/2-$,M=z().innerRadius(0).outerRadius(g),O=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),v=he(b),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=ae(P);l.selectAll("mySlices").data(v).enter().append("path").attr("d",M).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let E=0;b.forEach(t=>{E+=t}),l.selectAll("mySlices").data(v).enter().append("text").text(t=>(t.data.value/E*100).toFixed(0)+"%").attr("transform",t=>"translate("+O.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,u)=>{const f=o+d,I=f*p.domain().length/2,L=12*o,N=u*f-I;return"translate("+L+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(t=>{const{label:u,value:f}=t.data;return n.getShowData()?`${u} [${f}]`:u});const R=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=h+$+o+d+R;S.attr("viewBox",`0 0 ${k} ${c}`),re(S,c,k,T.useMaxWidth)},"draw"),ve={draw:Se},_e={parser:ue,db:G,renderer:ve,styles:me};export{_e as diagram};
