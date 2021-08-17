var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,l=(e,l)=>{for(var a in l||(l={}))r.call(l,a)&&n(e,a,l[a]);if(t)for(var a of t(l))o.call(l,a)&&n(e,a,l[a]);return e};import{A as a,$ as i,c as s,R as c,S as d,T as m,G as u,C as p,a as f,Y as g,s as y,M as b,b as h,d as E,e as v,f as I,g as w}from"./vendor.4f2329e1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const x=i`${a`
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
`}`;const k=s({palette:{type:"dark"},typography:{button:{textTransform:"none"}},overrides:{MuiTouchRipple:{root:{opacity:.5}}}}),S=l({},k),O=({children:e})=>c.createElement(d,{injectFirst:!0},c.createElement(m,{theme:k},c.createElement(u,{theme:S},c.createElement(p,null),c.createElement(x,null),e))),j=f((e=>({player:c.createRef(),videoId:"88N4s2qxRIM",setVideoId:t=>e({videoId:t})}))),M=()=>{const{player:e,videoId:t}=(()=>{const{player:e,videoId:t,setVideoId:r}=j();return{player:e,videoId:t,seekTo:t=>{var r;null==(r=e.current)||r.getInternalPlayer().seekTo(t,!0)},setVideoId:r}})();return c.createElement(g,{videoId:t,ref:e})},N=y((e=>c.createElement(b,l({},e))))``,L=y((e=>c.createElement(h,l({expandIcon:c.createElement(E,null)},e))))``,P=y((e=>c.createElement(v,l({},e))))``;function R(){return c.createElement("div",{className:"App"},c.createElement(M,null),c.createElement(N,null,c.createElement(L,null,c.createElement(I,null,"Accordion 1")),c.createElement(P,null,c.createElement(I,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}const T=()=>c.createElement(c.StrictMode,null,c.createElement(O,null,c.createElement(R,null)));w.render(c.createElement(T,null),document.getElementById("root"));
