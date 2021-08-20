var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,n)=>{for(var i in n||(n={}))a.call(n,i)&&r(e,i,n[i]);if(t)for(var i of t(n))o.call(n,i)&&r(e,i,n[i]);return e};import{A as i,$ as s,c as l,d as m,R as u,S as d,T as c,G as p,C as g,a as h,s as v,Y as y,b,M as f,e as E,f as w,g as k,h as L,i as x,I as q,j as S,k as I,l as A,m as j,n as T,o as C,P,p as M,q as O,r as z}from"./vendor.31ca166f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const B=s`${i`
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
`}`;const V=l({palette:{type:"dark",primary:m},typography:{button:{textTransform:"none"}},overrides:{MuiTouchRipple:{root:{opacity:.5}}}}),N=n({},V),R=({children:e})=>u.createElement(d,{injectFirst:!0},u.createElement(c,{theme:V},u.createElement(p,{theme:N},u.createElement(g,null),u.createElement(B,null),e))),F=h(((e,t,a)=>({player:u.createRef(),videoId:void 0,setVideoId:a=>{var o;e({videoId:a}),null==(o=t().player.current)||o.getInternalPlayer().loadVideoById(a)},playVideoAt:(a,o)=>{var r,n,i;const s=t().player;t().videoId!==a?(e({videoId:a}),null==(r=s.current)||r.getInternalPlayer().loadVideoById(a,o)):(null==(n=s.current)||n.getInternalPlayer().seekTo(o,!0),null==(i=s.current)||i.getInternalPlayer().playVideo())},activeTab:0,setActiveTab:t=>e({activeTab:t}),searchTerm:void 0,setSearchTerm:t=>e({searchTerm:t}),filterBySearch:e=>{const a=t().searchTerm;return e.filter((e=>!a||e.question.toLowerCase().includes(a.toLowerCase())))}})));var $={videoId:"88N4s2qxRIM",qanda:[{time:10,question:"Chris, what is your goal for today?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:120,question:"Is the intention going forward to keep nerfing the game as suggested in the 3.15 marketing?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:265,question:"Will Fortify still be in the game next league?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:304,question:"You said that the community misunderstood the marketing, why do you think there was such an obvious misunderstanding and why does the marketing often seem very misleading?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:450,question:"You explicitely wanted to bundle all the nerfs into one patch. Do you think that was a successful approach or with hindsight would you rather have spread the nerfs out accross a number of patches?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:580,question:"A question about the Mana changes in regards to 3.16: There a certain builds that are almost not functioning right now due to mana changes. Are you going to make a broad pass on all the mana multipliers to make sure they fit the state the game was in before?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{time:679,question:"Are you trying to slow down Path of Exile and do you want PoE to be a slower game?",answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}]};const D=v((({className:e})=>{const{player:t,setVideoId:a}=F();return u.createElement(y,{containerClassName:e,ref:t,onReady:()=>a($.videoId)})}))`
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
`,G=v(b)``;v(G).attrs({variant:"h1"})``,v(G).attrs({variant:"h2"})``,v(G).attrs({variant:"h3"})``,v(G).attrs({variant:"h4"})``,v(G).attrs({variant:"h5"})``;const H=v(G).attrs({variant:"h6"})``,U=v((e=>u.createElement(f,n({},e))))``,W=v((e=>u.createElement(E,n({},e))))``,Y=v.div`
  margin-left: auto;
`;var K=()=>u.createElement(w,{position:"static"},u.createElement(k,null,u.createElement(H,null,"3.15+ Interviews with Chris Wilson"),u.createElement(Y,null,u.createElement(W,{component:"a",href:"https://github.com/alumpe/chris-wilson-interviews",target:"_blank"},u.createElement(L,null)))));const Q=v.div`
  margin-bottom: 1rem;
`,Z=()=>{const{searchTerm:e,setSearchTerm:t}=F();return u.createElement(Q,null,u.createElement(x,{placeholder:"Search",value:null!=e?e:"",onChange:e=>t(e.target.value||void 0),InputProps:{startAdornment:u.createElement(q,{position:"start"},u.createElement(S,null))}}))},_=v((e=>{var r=e,{children:i,value:s,index:l}=r,m=((e,r)=>{var n={};for(var i in e)a.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&t)for(var i of t(e))r.indexOf(i)<0&&o.call(e,i)&&(n[i]=e[i]);return n})(r,["children","value","index"]);return u.createElement("div",n({role:"tabpanel",hidden:s!==l},m),i)}))`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,J=v((e=>u.createElement(I,n({},e))))``,X=v((e=>u.createElement(A,n({expandIcon:u.createElement(j,null)},e))))`
  .MuiAccordionSummary-content {
    align-items: center;
  }

  ${U} {
    margin-left: auto;
    min-width: 6rem;
  }
`,ee=v((e=>u.createElement(T,n({},e))))``,te=v.span`
  ${({isHighlighted:e})=>e&&i`
      background-color: #ffff0040;
    `}
`,ae=(e,t)=>{if(!t)return e;const a=e.split(new RegExp(`(${t})`,"gi"));return u.createElement("span",null,a.map(((e,a)=>u.createElement(te,{key:a,isHighlighted:e.toLowerCase()===t.toLowerCase()},e))))},oe=({data:e})=>{const{filterBySearch:t,searchTerm:a,playVideoAt:o}=F();return u.createElement(u.Fragment,null,t(e.qanda).map((t=>u.createElement(J,null,u.createElement(X,null,u.createElement(b,null,ae(t.question,a)),u.createElement(U,{startIcon:u.createElement(C,null),size:"small",onClick:a=>((e,t,a)=>{e.stopPropagation(),o(t,a)})(a,e.videoId,t.time)},(e=>{const t=e=>`0${e}`.slice(-2),a=Math.floor(e/3600);e-=3600*a;const o=Math.floor(e/60);return[a,o,e-60*o].map(t).join(":")})(t.time))),u.createElement(ee,null,u.createElement(b,null,ae(t.answer,a)))))))};var re={videoId:"8QcfWqTVUBs",qanda:[{time:60,question:"Are there any mid-league changes coming for 3.15?",answer:""}]};const ne=()=>{const{activeTab:e,setActiveTab:t}=F();return u.createElement(u.Fragment,null,u.createElement(P,{style:{marginBottom:"1rem"}},u.createElement(M,{value:e,onChange:(e,a)=>t(a),indicatorColor:"primary",textColor:"primary",centered:!0},u.createElement(O,{label:"Baeclast"}),u.createElement(O,{label:"Ziz & Mathil"}),u.createElement(O,{label:"Ghazzy, Grimro, Tuna, DatModz"}))),u.createElement(_,{value:e,index:0},u.createElement(oe,{data:$})),u.createElement(_,{value:e,index:1},u.createElement(oe,{data:re})),u.createElement(_,{value:e,index:2},"Coming soon"))},ie=v.div`
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
`,ue=()=>u.createElement(ie,null,u.createElement(K,null),u.createElement(me,null,u.createElement(se,null,u.createElement("div",null,u.createElement(D,null))),u.createElement(le,null,u.createElement(Z,null),u.createElement(ne,null)))),de=()=>u.createElement(u.StrictMode,null,u.createElement(R,null,u.createElement(ue,null)));z.render(u.createElement(de,null),document.getElementById("root"));
