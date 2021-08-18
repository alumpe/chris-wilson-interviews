var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,l)=>{for(var o in l||(l={}))n.call(l,o)&&a(e,o,l[o]);if(t)for(var o of t(l))r.call(l,o)&&a(e,o,l[o]);return e};import{A as o,$ as i,c as s,R as c,S as m,T as d,G as u,C as p,a as g,Y as f,s as h,b as E,M as b,d as v,e as y,f as x,g as w,h as I,i as k,j as T,k as z,l as M,m as C,n as O,P as S,o as j,p as q,q as P}from"./vendor.891a8f87.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const A=i`${o`
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
`}`;const F=s({palette:{type:"dark"},typography:{button:{textTransform:"none"}},overrides:{MuiTouchRipple:{root:{opacity:.5}}}}),N=l({},F),$=({children:e})=>c.createElement(m,{injectFirst:!0},c.createElement(d,{theme:F},c.createElement(u,{theme:N},c.createElement(p,null),c.createElement(A,null),e))),R=g(((e,t,n)=>({player:c.createRef(),videoId:"88N4s2qxRIM",setVideoId:t=>e({videoId:t}),activeTab:0,setActiveTab:t=>e({activeTab:t})}))),L=()=>{const{player:e,videoId:t,setVideoId:n}=R();return{player:e,videoId:t,seekTo:t=>{var n;null==(n=e.current)||n.getInternalPlayer().seekTo(t,!0)},setVideoId:n}},B=()=>{const{player:e,videoId:t}=L();return c.createElement(f,{videoId:t,ref:e})},G=h(E)``;h(G).attrs({variant:"h1"})``,h(G).attrs({variant:"h2"})``,h(G).attrs({variant:"h3"})``,h(G).attrs({variant:"h4"})``,h(G).attrs({variant:"h5"})``;const V=h(G).attrs({variant:"h6"})``,D=h((e=>c.createElement(b,l({},e))))``,U=h((e=>c.createElement(v,l({},e))))``,W=h.div`
  margin-left: auto;
`;var H=()=>c.createElement(y,{position:"static"},c.createElement(x,null,c.createElement(V,null,"3.15+ Interviews with Chris Wilson"),c.createElement(W,null,c.createElement(U,{component:"a",href:"https://github.com/alumpe/chris-wilson-interviews",target:"_blank"},c.createElement(w,null)))));const K=h.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  box-sizing: border-box;

  > * {
    margin: 0;
    box-sizing: border-box;
    padding: 4px;
  }
`,Y=()=>c.createElement(K,null,c.createElement("div",null,c.createElement(I,null)),c.createElement("div",null,c.createElement(k,{label:"Search"}))),Z=e=>{const a=e,{children:o,value:i,index:s}=a,m=((e,a)=>{var l={};for(var o in e)n.call(e,o)&&a.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&t)for(var o of t(e))a.indexOf(o)<0&&r.call(e,o)&&(l[o]=e[o]);return l})(a,["children","value","index"]);return c.createElement("div",l({role:"tabpanel",hidden:i!==s,id:`scrollable-auto-tabpanel-${s}`,"aria-labelledby":`scrollable-auto-tab-${s}`},m),i===s&&o)},_=h((e=>c.createElement(T,l({},e))))``,J=h((e=>c.createElement(z,l({expandIcon:c.createElement(M,null)},e))))`
  .MuiAccordionSummary-content {
    align-items: center;
  }

  ${D} {
    margin-left: auto;
  }
`,Q=h((e=>c.createElement(C,l({},e))))``,X=({data:e})=>{const{seekTo:t}=L();return c.createElement(c.Fragment,null,e.map((e=>c.createElement(_,null,c.createElement(J,null,c.createElement(E,null,e.question),c.createElement(D,{startIcon:c.createElement(O,null),size:"small",onClick:n=>((e,n)=>{e.stopPropagation(),t(n)})(n,e.time)},(e=>{const t=e=>`0${e}`.slice(-2),n=Math.floor(e/3600);e-=3600*n;const r=Math.floor(e/60);return[n,r,e-60*r].map(t).join(":")})(e.time))),c.createElement(Q,null,c.createElement(E,null,e.answer))))))};var ee=[{time:10,question:"Chris, what is your goal for today?",answer:""},{time:120,question:"Is the intention going forward to keep nerfing the game as suggested in the 3.15 marketing?",answer:""},{time:265,question:"Will Fortify still be in the game next league?",answer:""}];const te=()=>{const{activeTab:e,setActiveTab:t}=R();return c.createElement(c.Fragment,null,c.createElement(S,null,c.createElement(j,{value:e,onChange:(e,n)=>t(n),indicatorColor:"primary",textColor:"primary",centered:!0},c.createElement(q,{label:"Baeclast"}),c.createElement(q,{label:"Ziz & Mathil"}),c.createElement(q,{label:"Ghazzy, Grimro, Tuna, DatModz"}))),c.createElement(Z,{value:e,index:0},c.createElement(X,{data:ee})),c.createElement(Z,{value:e,index:1},"Coming soon"),c.createElement(Z,{value:e,index:2},"Coming soon"))},ne=h.div`
  padding: 1rem;
`,re=h.div`
  padding: 1rem;
`,ae=h.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 50rem 1fr;
`;function le(){return c.createElement("div",{className:"App"},c.createElement(H,null),c.createElement(ae,null,c.createElement(ne,null,c.createElement(B,null)),c.createElement(re,null,c.createElement(Y,null),c.createElement(te,null))))}const oe=()=>c.createElement(c.StrictMode,null,c.createElement($,null,c.createElement(le,null)));P.render(c.createElement(oe,null),document.getElementById("root"));
