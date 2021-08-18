var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,o=(e,o)=>{for(var l in o||(o={}))r.call(o,l)&&a(e,l,o[l]);if(t)for(var l of t(o))n.call(o,l)&&a(e,l,o[l]);return e};import{A as l,$ as i,c as s,R as c,S as m,T as d,G as u,C as p,a as h,Y as f,s as g,M as y,b,d as E,e as v,f as I,g as w,h as k,i as x,j as S,k as O,l as j}from"./vendor.128d48ce.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const M=i`${l`
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
`}`;const N=s({palette:{type:"dark"},typography:{button:{textTransform:"none"}},overrides:{MuiTouchRipple:{root:{opacity:.5}}}}),L=o({},N),P=({children:e})=>c.createElement(m,{injectFirst:!0},c.createElement(d,{theme:N},c.createElement(u,{theme:L},c.createElement(p,null),c.createElement(M,null),e))),R=h((e=>({player:c.createRef(),videoId:"88N4s2qxRIM",setVideoId:t=>e({videoId:t})}))),T=()=>{const{player:e,videoId:t}=(()=>{const{player:e,videoId:t,setVideoId:r}=R();return{player:e,videoId:t,seekTo:t=>{var r;null==(r=e.current)||r.getInternalPlayer().seekTo(t,!0)},setVideoId:r}})();return c.createElement(f,{videoId:t,ref:e})},z=g((e=>c.createElement(y,o({},e))))``,A=g((e=>c.createElement(b,o({expandIcon:c.createElement(E,null)},e))))``,C=g((e=>c.createElement(v,o({},e))))``,F=g(I)``;g(F).attrs({variant:"h1"})``,g(F).attrs({variant:"h2"})``,g(F).attrs({variant:"h3"})``,g(F).attrs({variant:"h4"})``,g(F).attrs({variant:"h5"})``;const V=g(F).attrs({variant:"h6"})``;g((e=>c.createElement(w,o({},e))))``;const q=g((e=>c.createElement(k,o({},e))))``,B=g.div`
  margin-left: auto;
`;var U=()=>c.createElement(x,{position:"static"},c.createElement(S,null,c.createElement(V,null,"3.15+ Interviews with Chris Wilson"),c.createElement(B,null,c.createElement(q,{component:"a",href:"https://github.com/alumpe/chris-wilson-interviews",target:"_blank"},c.createElement(O,null)))));function $(){return c.createElement("div",{className:"App"},c.createElement(U,null),c.createElement(T,null),c.createElement(z,null,c.createElement(A,null,c.createElement(I,null,"Accordion 1")),c.createElement(C,null,c.createElement(I,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}const D=()=>c.createElement(c.StrictMode,null,c.createElement(P,null,c.createElement($,null)));j.render(c.createElement(D,null),document.getElementById("root"));
