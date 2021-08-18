var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(e,l)=>{for(var o in l||(l={}))r.call(l,o)&&a(e,o,l[o]);if(t)for(var o of t(l))n.call(l,o)&&a(e,o,l[o]);return e};import{A as o,$ as i,c as s,R as c,S as m,T as d,G as u,C as h,a as g,Y as p,s as f,b as E,M as v,d as b,e as y,f as w,g as x,h as I,i as T,j as k,k as C,l as S,m as z,n as M,P as O,o as j,p as q,q as L}from"./vendor.891a8f87.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const $=i`${o`
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
`}`;const P=s({palette:{type:"dark"},typography:{button:{textTransform:"none"}},overrides:{MuiTouchRipple:{root:{opacity:.5}}}}),A=l({},P),F=({children:e})=>c.createElement(m,{injectFirst:!0},c.createElement(d,{theme:P},c.createElement(u,{theme:A},c.createElement(h,null),c.createElement($,null),e))),N=g(((e,t,r)=>({player:c.createRef(),videoId:"88N4s2qxRIM",setVideoId:t=>e({videoId:t}),activeTab:0,setActiveTab:t=>e({activeTab:t}),searchTerm:void 0,setSearchTerm:t=>e({searchTerm:t}),filterBySearch:e=>{const r=t().searchTerm;return e.filter((e=>!r||e.question.toLowerCase().includes(r.toLowerCase())))}}))),R=()=>{const{player:e,videoId:t,setVideoId:r}=N();return{player:e,videoId:t,seekTo:t=>{var r;null==(r=e.current)||r.getInternalPlayer().seekTo(t,!0)},setVideoId:r}},B=()=>{const{player:e,videoId:t}=R();return c.createElement(p,{videoId:t,ref:e})},G=f(E)``;f(G).attrs({variant:"h1"})``,f(G).attrs({variant:"h2"})``,f(G).attrs({variant:"h3"})``,f(G).attrs({variant:"h4"})``,f(G).attrs({variant:"h5"})``;const H=f(G).attrs({variant:"h6"})``,V=f((e=>c.createElement(v,l({},e))))``,D=f((e=>c.createElement(b,l({},e))))``,U=f.div`
  margin-left: auto;
`;var W=()=>c.createElement(y,{position:"static"},c.createElement(w,null,c.createElement(H,null,"3.15+ Interviews with Chris Wilson"),c.createElement(U,null,c.createElement(D,{component:"a",href:"https://github.com/alumpe/chris-wilson-interviews",target:"_blank"},c.createElement(x,null)))));const K=f.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  box-sizing: border-box;

  > * {
    margin: 0;
    box-sizing: border-box;
    padding: 4px;
  }
`,Y=()=>{const{searchTerm:e,setSearchTerm:t}=N();return c.createElement(K,null,c.createElement("div",null,c.createElement(I,null)),c.createElement("div",null,c.createElement(T,{label:"Search",value:null!=e?e:"",onChange:e=>t(e.target.value||void 0)})))},Z=e=>{const a=e,{children:o,value:i,index:s}=a,m=((e,a)=>{var l={};for(var o in e)r.call(e,o)&&a.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&t)for(var o of t(e))a.indexOf(o)<0&&n.call(e,o)&&(l[o]=e[o]);return l})(a,["children","value","index"]);return c.createElement("div",l({role:"tabpanel",hidden:i!==s,id:`scrollable-auto-tabpanel-${s}`,"aria-labelledby":`scrollable-auto-tab-${s}`},m),i===s&&o)},_=f((e=>c.createElement(k,l({},e))))``,J=f((e=>c.createElement(C,l({expandIcon:c.createElement(S,null)},e))))`
  .MuiAccordionSummary-content {
    align-items: center;
  }

  ${V} {
    margin-left: auto;
    min-width: 6rem;
  }
`,Q=f((e=>c.createElement(z,l({},e))))``,X=f.span`
  ${({isHighlighted:e})=>e&&o`
      background-color: #ffff0040;
    `}
`,ee=({data:e})=>{const{seekTo:t}=R(),{filterBySearch:r,searchTerm:n}=N();return c.createElement(c.Fragment,null,r(e).map((e=>c.createElement(_,null,c.createElement(J,null,c.createElement(E,null,((e,t)=>{if(!t)return e;const r=e.split(new RegExp(`(${t})`,"gi"));return c.createElement("span",null,r.map(((e,r)=>c.createElement(X,{key:r,isHighlighted:e.toLowerCase()===t.toLowerCase()},e))))})(e.question,n)),c.createElement(V,{startIcon:c.createElement(M,null),size:"small",onClick:r=>((e,r)=>{e.stopPropagation(),t(r)})(r,e.time)},(e=>{const t=e=>`0${e}`.slice(-2),r=Math.floor(e/3600);e-=3600*r;const n=Math.floor(e/60);return[r,n,e-60*n].map(t).join(":")})(e.time))),c.createElement(Q,null,c.createElement(E,null,e.answer))))))};var te=[{time:10,question:"Chris, what is your goal for today?",answer:""},{time:120,question:"Is the intention going forward to keep nerfing the game as suggested in the 3.15 marketing?",answer:""},{time:265,question:"Will Fortify still be in the game next league?",answer:""}];const re=()=>{const{activeTab:e,setActiveTab:t}=N();return c.createElement(c.Fragment,null,c.createElement(O,null,c.createElement(j,{value:e,onChange:(e,r)=>t(r),indicatorColor:"primary",textColor:"primary",centered:!0},c.createElement(q,{label:"Baeclast"}),c.createElement(q,{label:"Ziz & Mathil"}),c.createElement(q,{label:"Ghazzy, Grimro, Tuna, DatModz"}))),c.createElement(Z,{value:e,index:0},c.createElement(ee,{data:te})),c.createElement(Z,{value:e,index:1},"Coming soon"),c.createElement(Z,{value:e,index:2},"Coming soon"))},ne=f.div`
  padding: 1rem;
`,ae=f.div`
  padding: 1rem;
`,le=f.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 50rem 1fr;
`;function oe(){return c.createElement("div",{className:"App"},c.createElement(W,null),c.createElement(le,null,c.createElement(ne,null,c.createElement(B,null)),c.createElement(ae,null,c.createElement(Y,null),c.createElement(re,null))))}const ie=()=>c.createElement(c.StrictMode,null,c.createElement(F,null,c.createElement(oe,null)));L.render(c.createElement(ie,null),document.getElementById("root"));
