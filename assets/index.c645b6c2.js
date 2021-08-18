var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,n)=>{for(var i in n||(n={}))a.call(n,i)&&r(e,i,n[i]);if(t)for(var i of t(n))o.call(n,i)&&r(e,i,n[i]);return e};import{A as i,$ as s,c as l,d as m,R as u,S as d,T as c,G as p,C as g,a as h,s as v,Y as y,b,M as f,e as E,f as w,g as k,h as L,i as x,I as S,j as q,k as j,l as A,m as I,n as T,o as C,P as M,p as P,q as O,r as z}from"./vendor.31ca166f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const N=s`${i`
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
`}`;const B=l({palette:{type:"dark",primary:m},typography:{button:{textTransform:"none"}},overrides:{MuiTouchRipple:{root:{opacity:.5}}}}),F=n({},B),R=({children:e})=>u.createElement(d,{injectFirst:!0},u.createElement(c,{theme:B},u.createElement(p,{theme:F},u.createElement(g,null),u.createElement(N,null),e))),$=h(((e,t,a)=>({player:u.createRef(),videoId:"88N4s2qxRIM",setVideoId:t=>e({videoId:t}),activeTab:0,setActiveTab:t=>e({activeTab:t}),searchTerm:void 0,setSearchTerm:t=>e({searchTerm:t}),filterBySearch:e=>{const a=t().searchTerm;return e.filter((e=>!a||e.question.toLowerCase().includes(a.toLowerCase())))}}))),V=()=>{const{player:e,videoId:t,setVideoId:a}=$();return{player:e,videoId:t,seekTo:t=>{var a,o;null==(a=e.current)||a.getInternalPlayer().seekTo(t,!0),null==(o=e.current)||o.getInternalPlayer().playVideo()},setVideoId:a}},D=v((({className:e})=>{const{player:t,videoId:a}=V();return u.createElement(y,{containerClassName:e,videoId:a,ref:t})}))`
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
`,G=v(b)``;v(G).attrs({variant:"h1"})``,v(G).attrs({variant:"h2"})``,v(G).attrs({variant:"h3"})``,v(G).attrs({variant:"h4"})``,v(G).attrs({variant:"h5"})``;const H=v(G).attrs({variant:"h6"})``,Y=v((e=>u.createElement(f,n({},e))))``,U=v((e=>u.createElement(E,n({},e))))``,W=v.div`
  margin-left: auto;
`;var K=()=>u.createElement(w,{position:"static"},u.createElement(k,null,u.createElement(H,null,"3.15+ Interviews with Chris Wilson"),u.createElement(W,null,u.createElement(U,{component:"a",href:"https://github.com/alumpe/chris-wilson-interviews",target:"_blank"},u.createElement(L,null)))));const Z=v.div`
  margin-bottom: 1rem;
`,_=()=>{const{searchTerm:e,setSearchTerm:t}=$();return u.createElement(Z,null,u.createElement(x,{placeholder:"Search",value:null!=e?e:"",onChange:e=>t(e.target.value||void 0),InputProps:{startAdornment:u.createElement(S,{position:"start"},u.createElement(q,null))}}))},J=v((e=>{var r=e,{children:i,value:s,index:l}=r,m=((e,r)=>{var n={};for(var i in e)a.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&t)for(var i of t(e))r.indexOf(i)<0&&o.call(e,i)&&(n[i]=e[i]);return n})(r,["children","value","index"]);return u.createElement("div",n({role:"tabpanel",hidden:s!==l},m),i)}))`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,Q=v((e=>u.createElement(j,n({},e))))``,X=v((e=>u.createElement(A,n({expandIcon:u.createElement(I,null)},e))))`
  .MuiAccordionSummary-content {
    align-items: center;
  }

  ${Y} {
    margin-left: auto;
    min-width: 6rem;
  }
`,ee=v((e=>u.createElement(T,n({},e))))``,te=v.span`
  ${({isHighlighted:e})=>e&&i`
      background-color: #ffff0040;
    `}
`,ae=(e,t)=>{if(!t)return e;const a=e.split(new RegExp(`(${t})`,"gi"));return u.createElement("span",null,a.map(((e,a)=>u.createElement(te,{key:a,isHighlighted:e.toLowerCase()===t.toLowerCase()},e))))},oe=({data:e})=>{const{seekTo:t}=V(),{filterBySearch:a,searchTerm:o}=$();return u.createElement(u.Fragment,null,a(e).map((e=>u.createElement(Q,null,u.createElement(X,null,u.createElement(b,null,ae(e.question,o)),u.createElement(Y,{startIcon:u.createElement(C,null),size:"small",onClick:a=>((e,a)=>{e.stopPropagation(),t(a)})(a,e.time)},(e=>{const t=e=>`0${e}`.slice(-2),a=Math.floor(e/3600);e-=3600*a;const o=Math.floor(e/60);return[a,o,e-60*o].map(t).join(":")})(e.time))),u.createElement(ee,null,u.createElement(b,null,ae(e.answer,o)))))))};var re=[{time:10,question:"Chris, what is your goal for today?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:120,question:"Is the intention going forward to keep nerfing the game as suggested in the 3.15 marketing?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:265,question:"Will Fortify still be in the game next league?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:304,question:"You said that the community misunderstood the marketing, why do you think there was such an obvious misunderstanding and why does the marketing often seem very misleading?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:450,question:"You explicitely wanted to bundle all the nerfs into one patch. Do you think that was a successful approach or with hindsight would you rather have spread the nerfs out accross a number of patches?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:580,question:"A question about the Mana changes in regards to 3.16: There a certain builds that are almost not functioning right now due to mana changes. Are you going to make a broad pass on all the mana multipliers to make sure they fit the state the game was in before?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:679,question:"Are you trying to slow down Path of Exile and do you want PoE to be a slower game?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}];const ne=()=>{const{activeTab:e,setActiveTab:t}=$();return u.createElement(u.Fragment,null,u.createElement(M,{style:{marginBottom:"1rem"}},u.createElement(P,{value:e,onChange:(e,a)=>t(a),indicatorColor:"primary",textColor:"primary",centered:!0},u.createElement(O,{label:"Baeclast"}),u.createElement(O,{label:"Ziz & Mathil"}),u.createElement(O,{label:"Ghazzy, Grimro, Tuna, DatModz"}))),u.createElement(J,{value:e,index:0},u.createElement(oe,{data:re})),u.createElement(J,{value:e,index:1},"Coming soon"),u.createElement(J,{value:e,index:2},"Coming soon"))},ie=v.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,se=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,le=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  overflow-y: auto;
`,me=v.div`
  padding: 2rem;
  flex-grow: 1;
  grid-column-gap: 2rem;
  display: grid;
  grid-template-columns: minmax(30rem, 40rem) minmax(40rem, auto);
  overflow-y: auto;
`,ue=()=>u.createElement(ie,null,u.createElement(K,null),u.createElement(me,null,u.createElement(se,null,u.createElement("div",null,u.createElement(D,null))),u.createElement(le,null,u.createElement(_,null),u.createElement(ne,null)))),de=()=>u.createElement(u.StrictMode,null,u.createElement(R,null,u.createElement(ue,null)));z.render(u.createElement(de,null),document.getElementById("root"));
