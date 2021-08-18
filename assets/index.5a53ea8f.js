var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(e,l)=>{for(var o in l||(l={}))r.call(l,o)&&a(e,o,l[o]);if(t)for(var o of t(l))n.call(l,o)&&a(e,o,l[o]);return e};import{A as o,$ as i,c as s,R as c,S as m,T as d,G as u,C as h,a as g,s as p,Y as f,b as E,M as v,d as b,e as y,f as w,g as x,h as I,I as T,i as k,j as C,k as S,l as M,m as O,n as j,P as z,o as P,p as q,q as L}from"./vendor.297cf6fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const $=i`${o`
  html {
    display: flex;
    height: 100%;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`}`;const N=s({palette:{type:"dark"},typography:{button:{textTransform:"none"}},overrides:{MuiTouchRipple:{root:{opacity:.5}}}}),A=l({},N),B=({children:e})=>c.createElement(m,{injectFirst:!0},c.createElement(d,{theme:N},c.createElement(u,{theme:A},c.createElement(h,null),c.createElement($,null),e))),F=g(((e,t,r)=>({player:c.createRef(),videoId:"88N4s2qxRIM",setVideoId:t=>e({videoId:t}),activeTab:0,setActiveTab:t=>e({activeTab:t}),searchTerm:void 0,setSearchTerm:t=>e({searchTerm:t}),filterBySearch:e=>{const r=t().searchTerm;return e.filter((e=>!r||e.question.toLowerCase().includes(r.toLowerCase())))}}))),R=()=>{const{player:e,videoId:t,setVideoId:r}=F();return{player:e,videoId:t,seekTo:t=>{var r,n;null==(r=e.current)||r.getInternalPlayer().seekTo(t,!0),null==(n=e.current)||n.getInternalPlayer().playVideo()},setVideoId:r}},V=p((({className:e})=>{const{player:t,videoId:r}=R();return c.createElement(f,{containerClassName:e,videoId:r,ref:t})}))`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
  align-self: center;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`,G=p(E)``;p(G).attrs({variant:"h1"})``,p(G).attrs({variant:"h2"})``,p(G).attrs({variant:"h3"})``,p(G).attrs({variant:"h4"})``,p(G).attrs({variant:"h5"})``;const H=p(G).attrs({variant:"h6"})``,D=p((e=>c.createElement(v,l({},e))))``,U=p((e=>c.createElement(b,l({},e))))``,W=p.div`
  margin-left: auto;
`;var K=()=>c.createElement(y,{position:"static"},c.createElement(w,null,c.createElement(H,null,"3.15+ Interviews with Chris Wilson"),c.createElement(W,null,c.createElement(U,{component:"a",href:"https://github.com/alumpe/chris-wilson-interviews",target:"_blank"},c.createElement(x,null)))));const Y=p.div`
  margin-bottom: 1rem;
`,Z=()=>{const{searchTerm:e,setSearchTerm:t}=F();return c.createElement(Y,null,c.createElement(I,{placeholder:"Search",value:null!=e?e:"",onChange:e=>t(e.target.value||void 0),InputProps:{startAdornment:c.createElement(T,{position:"start"},c.createElement(k,null))}}))},_=e=>{const a=e,{children:o,value:i,index:s}=a,m=((e,a)=>{var l={};for(var o in e)r.call(e,o)&&a.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&t)for(var o of t(e))a.indexOf(o)<0&&n.call(e,o)&&(l[o]=e[o]);return l})(a,["children","value","index"]);return c.createElement("div",l({role:"tabpanel",hidden:i!==s,id:`scrollable-auto-tabpanel-${s}`,"aria-labelledby":`scrollable-auto-tab-${s}`},m),i===s&&o)},J=p((e=>c.createElement(C,l({},e))))``,Q=p((e=>c.createElement(S,l({expandIcon:c.createElement(M,null)},e))))`
  .MuiAccordionSummary-content {
    align-items: center;
  }

  ${D} {
    margin-left: auto;
    min-width: 6rem;
  }
`,X=p((e=>c.createElement(O,l({},e))))``,ee=p.span`
  ${({isHighlighted:e})=>e&&o`
      background-color: #ffff0040;
    `}
`,te=({data:e})=>{const{seekTo:t}=R(),{filterBySearch:r,searchTerm:n}=F();return c.createElement(c.Fragment,null,r(e).map((e=>c.createElement(J,null,c.createElement(Q,null,c.createElement(E,null,((e,t)=>{if(!t)return e;const r=e.split(new RegExp(`(${t})`,"gi"));return c.createElement("span",null,r.map(((e,r)=>c.createElement(ee,{key:r,isHighlighted:e.toLowerCase()===t.toLowerCase()},e))))})(e.question,n)),c.createElement(D,{startIcon:c.createElement(j,null),size:"small",onClick:r=>((e,r)=>{e.stopPropagation(),t(r)})(r,e.time)},(e=>{const t=e=>`0${e}`.slice(-2),r=Math.floor(e/3600);e-=3600*r;const n=Math.floor(e/60);return[r,n,e-60*n].map(t).join(":")})(e.time))),c.createElement(X,null,c.createElement(E,null,e.answer))))))};var re=[{time:10,question:"Chris, what is your goal for today?",answer:""},{time:120,question:"Is the intention going forward to keep nerfing the game as suggested in the 3.15 marketing?",answer:""},{time:265,question:"Will Fortify still be in the game next league?",answer:""}];const ne=()=>{const{activeTab:e,setActiveTab:t}=F();return c.createElement(c.Fragment,null,c.createElement(z,{style:{marginBottom:"1rem"}},c.createElement(P,{value:e,onChange:(e,r)=>t(r),indicatorColor:"primary",textColor:"primary",centered:!0},c.createElement(q,{label:"Baeclast"}),c.createElement(q,{label:"Ziz & Mathil"}),c.createElement(q,{label:"Ghazzy, Grimro, Tuna, DatModz"}))),c.createElement(_,{value:e,index:0},c.createElement(te,{data:re})),c.createElement(_,{value:e,index:1},"Coming soon"),c.createElement(_,{value:e,index:2},"Coming soon"))},ae=p.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,le=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,oe=p.div``,ie=p.div`
  padding: 2rem;
  flex-grow: 1;
  grid-column-gap: 2rem;
  display: grid;
  align-content: center;
  grid-template-columns: minmax(30rem, 40rem) minmax(40rem, auto);
`,se=()=>c.createElement(ae,null,c.createElement(K,null),c.createElement(ie,null,c.createElement(le,null,c.createElement("div",null,c.createElement(V,null))),c.createElement(oe,null,c.createElement(Z,null),c.createElement(ne,null)))),ce=()=>c.createElement(c.StrictMode,null,c.createElement(B,null,c.createElement(se,null)));L.render(c.createElement(ce,null),document.getElementById("root"));
