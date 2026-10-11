import{n as e}from"./chunk-AMVFOWMQ.BG397M7l.js";import{t}from"./chunk-YJFJOXZG.O8Tz-_M0.js";import{C as n,E as r,J as i,Q as a,Y as o,b as s,l as c,m as l,o as u,x as d}from"./chunk-W7FHEGFS.9KFZKI7N.js";import{t as f}from"./ordinal.BAxfPAgN.js";import"./src.C9XlS5Fr.js";import{t as p}from"./arc.CDVcXlh3.js";import{t as m}from"./pie.SfIPPF4W.js";import{t as h}from"./chunk-ESPTBK3J.wZ7Qjhze.js";import{t as g}from"./chunk-VII2H2IX.BbbS01qs.js";import"./chunk-7CNTSYG4.Do4mnafg.js";import{n as _}from"./chunk-AVOQS6W5.DI7z7jJu.js";import"./chunk-SMNF56RZ.yDHrA2en.js";import"./chunk-HYPPI3ZF.DPecuLKn.js";import"./chunk-L7AX7Q5O.CBITNmqP.js";import"./chunk-Y6GNCWZP.Ck7udpU5.js";import"./chunk-F2POBAJA.EoOy48c3.js";import"./chunk-YKIWWWOI.CtjNADFZ.js";import"./chunk-2J33SXOW.DTyi8iot.js";import"./chunk-QAEMDNMD.DolI_MLE.js";import"./chunk-DMEBR2WU.ConPzBil.js";import"./chunk-QOC2S56Y.BGQ4-ZUY.js";import"./chunk-DUQKCFHH.CKLlbEcz.js";import"./chunk-3BMV2AHI.CXwjZmo4.js";import"./chunk-F2TNDQHD.By7ofHHR.js";import"./chunk-FFYXBZFL.B426Crtq.js";import"./chunk-KOCW2XDZ.BIhkFlNa.js";import"./chunk-WGJ4HU3W.BQ5VuDUg.js";import{h as v,i as y}from"./chunk-S2UQUSRU.Cd7d7xNw.js";var b=l.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:e(()=>structuredClone(w),`getConfig`),clear:e(()=>{S=new Map,C=x.showData,u()},`clear`),setDiagramTitle:a,getDiagramTitle:r,setAccTitle:o,getAccTitle:d,setAccDescription:i,getAccDescription:s,addSection:e(({label:e,value:n})=>{if(n<0)throw Error(`"${e}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);S.has(e)||(S.set(e,n),t.debug(`added new section: ${e}, with value: ${n}`))},`addSection`),getSections:e(()=>S,`getSections`),setShowData:e(e=>{C=e},`setShowData`),getShowData:e(()=>C,`getShowData`)},E=e((e,t)=>{g(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),D={parse:e(async e=>{let n=await _(`pie`,e);t.debug(n),E(n,T)},`parse`)},O=e(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
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
`,`getStyles`),k=e(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return m().value(e=>e.value).sort(null)(n)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:e((e,r,i,a)=>{t.debug(`rendering pie chart
`+e);let o=a.db,s=n(),l=y(o.getConfig(),s.pie),u=h(r),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:m}=s,[g]=v(m.pieOuterStrokeWidth);g??=2;let _=l.legendPosition,b=l.textPosition,x=l.donutHole>0&&l.donutHole<=.9?l.donutHole:0,S=p().innerRadius(x*185).outerRadius(185),C=p().innerRadius(185*b).outerRadius(185*b),w=d.append(`g`);w.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+g/2).attr(`class`,`pieOuterCircle`);let T=o.getSections(),E=k(T),D=[m.pie1,m.pie2,m.pie3,m.pie4,m.pie5,m.pie6,m.pie7,m.pie8,m.pie9,m.pie10,m.pie11,m.pie12],O=0;T.forEach(e=>{O+=e});let A=E.filter(e=>(e.data.value/O*100).toFixed(0)!==`0`),j=f(D).domain([...T.keys()]);w.selectAll(`mySlices`).data(A).enter().append(`path`).attr(`d`,S).attr(`fill`,e=>j(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return l.highlightSlice===`hover`?t+=` highlightedOnHover`:l.highlightSlice===e.data.label&&(t+=` highlighted`),t}),w.selectAll(`mySlices`).data(A).enter().append(`text`).text(e=>(e.data.value/O*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+C.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let M=d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`),N=[...T.entries()].map(([e,t])=>({label:e,value:t})),P=d.selectAll(`.legend`).data(N).enter().append(`g`).attr(`class`,`legend`);P.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>j(e.label)).style(`stroke`,e=>j(e.label)),P.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let F=Math.max(...P.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),I=450,L=490,R=N.length*22;switch(_){case`center`:P.attr(`transform`,(e,t)=>{let n=22*N.length/2,r=-F/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:I+=R,P.attr(`transform`,(e,t)=>`translate(${-F/2-22}, ${t*22-185})`),w.attr(`transform`,()=>`translate(0, ${R+22})`);break;case`bottom`:I+=R,P.attr(`transform`,(e,t)=>{let n=-F/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:L+=22+F,P.attr(`transform`,(e,t)=>{let n=22*N.length/2;return`translate(-207,`+(t*22-n)+`)`}),w.attr(`transform`,()=>`translate(${F+18+4}, 0)`);break;default:L+=22+F,P.attr(`transform`,(e,t)=>{let n=22*N.length/2;return`translate(216,`+(t*22-n)+`)`})}let z=M.node()?.getBoundingClientRect().width??0,B=225-z/2,V=225+z/2,H=Math.min(0,B),U=Math.max(L,V)-H;u.attr(`viewBox`,`${H} 0 ${U} ${I}`),c(u,I,U,l.useMaxWidth)},`draw`)},styles:O};export{A as diagram};