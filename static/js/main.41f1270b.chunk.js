(this["webpackJsonpui-search-component-example"]=this["webpackJsonpui-search-component-example"]||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},17:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);n(17);var r=n(0),a=n.n(r),o=n(11),c=n.n(o),i=n(3),s=n.n(i),l=n(15),u=n(5),d=n(6),m=n(1),p=n(4),h=n.n(p),f=n(2);function b(){const e=Object(m.a)(["\n  animation: "," 2s infinite linear;\n"]);return b=function(){return e},e}function g(){const e=Object(m.a)(["\n  background-color: rgb(",", 0.2);\n  border-radius: 12px;\n  color: ",";\n  display: block;\n  font-weight: 800;\n  margin-top: 1rem;\n  padding: 1rem;\n  text-align: center;\n"]);return g=function(){return e},e}function k(){const e=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return k=function(){return e},e}function x(){const e=Object(m.a)(["\n  animation: "," 0.92s ease;\n  background-color: ",";\n  border: ",";\n  border-radius: 0px 0px 4px 4px;\n  position: absolute;\n  max-height: ","px;\n  top: 78px;\n  left: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 9;\n\n  "," {\n    height: ","px;\n  }\n"]);return x=function(){return e},e}function v(){const e=Object(m.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  padding: 0 16px;\n  transition: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n"]);return v=function(){return e},e}function E(){const e=Object(m.a)(["\n  font-weight: 600;\n  margin-bottom: 8px;\n"]);return E=function(){return e},e}function j(){const e=Object(m.a)(["\n  animation: slideDown 0.62s both;\n  animation-timing-function: ease;\n  align-items: center;\n  background-color: ",";\n  border: ",";\n  border-radius: 4px;\n  color: ",";\n  cursor: text;\n  display: flex;\n  flex: 1;\n  flex-direction: columns;\n  padding: 1px 16px;\n  position: relative;\n  z-index: 10;\n\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:focus-within {\n    ","\n    border-color: ",";\n\n    "," {\n      color: ",";\n    }\n  }\n\n  > * {\n    cursor: text;\n  }\n"]);return j=function(){return e},e}function y(){const e=Object(m.a)(["\n  color: ",";\n\n  ",":focus & {\n    color: ",";\n  }\n"]);return y=function(){return e},e}function w(){const e=Object(m.a)(["\n  background-color: transparent;\n  border: none;\n  color: ",";\n  flex: 1;\n  font-size: 1rem;\n  margin-right: 14px;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding: 16px 0;\n"]);return w=function(){return e},e}function O(){const e=Object(m.a)(["\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n  "]);return O=function(){return e},e}function C(){const e=Object(m.a)(["\n    from {transform: rotate(0deg);}\n    to {transform: rotate(360deg);}\n  "]);return C=function(){return e},e}function L(){const e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n"]);return L=function(){return e},e}var R={highlightSearch:(e,t)=>{const n=new RegExp("(".concat(t,")"),"gi"),r=e.split(n);return a.a.createElement("div",null,r.map((e,t)=>a.a.createElement("span",{key:t},e.match(n)?a.a.createElement("b",null,e):e)))}};let I;const S=f.a.div(I||(I=L()));let T,H;const M={white:"#ffffff",gray:{lightest:"#fafafa",light:"#d2d2d2",base:"#9b9b9b",dark:"#404040",darker:"#757575",darkest:"#2b2b2b"},accent:"#FF7300"};var W={animations:{spin:Object(f.b)(T||(T=C())),fadeIn:Object(f.b)(H||(H=O()))},colors:M,borders:{default:"1px solid ".concat(M.gray.light)},shadows:{default:"box-shadow: 0px 0px 8px rgba(255, 115, 0, 0.2);"},transitions:{default:"0.23s ease-in-out"}};let z;const D=f.a.input(z||(z=w()),W.colors.gray.dark);let V;const N=f.a.label(V||(V=y()),W.colors.gray.darker,D,W.colors.gray.darker);let F;const q=f.a.div(F||(F=j()),W.colors.white,W.borders.default,W.colors.gray.dark,W.colors.gray.lightest,W.colors.gray.base,W.shadows.default,W.colors.accent,N,W.colors.accent);let A;const J=f.a.label(A||(A=E()));let Q;const B=f.a.div(Q||(Q=v()),W.transitions.default,W.colors.gray.lightest,W.colors.gray.lightest);let K;const P=f.a.div(K||(K=x()),W.animations.fadeIn,W.colors.white,W.borders.default,({itemsHeight:e,itemsVisible:t})=>e*t,B,({itemsHeight:e})=>e||42);let U;const G=f.a.div(U||(U=k()));let X;const Y=f.a.span(X||(X=g()),W.colors.accent,W.colors.accent),Z=({results:e,searchTerm:t,selectedIndex:n,itemsHeight:o,itemsVisible:c,onItemSelected:i,itemRenderer:s})=>{const l=Object(r.useRef)();return((e,t,n,a)=>{Object(r.useEffect)(()=>{const r=document.querySelector(".active").offsetTop,a=e.current,o=t*n,c=r<a.scrollTop,i=r+t>a.scrollTop+o;c?a.scrollTop=r:i&&(a.scrollTop=r+t-o)},[a])})(l,o,c,n),a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{onClick:()=>i({})}),a.a.createElement(P,{ref:l,itemsHeight:o,itemsVisible:c},e.map(r=>{const o=e[n],c=r.id===(null===o||void 0===o?void 0:o.id)&&"active";return a.a.createElement(B,{key:r.id,className:c,onClick:()=>i(r)},s?s(r):R.highlightSearch(r.description,t))})))};let $;const _=()=>a.a.createElement(ee,{xmlns:"http://www.w3.org/2000/svg",className:"spin",width:"22",height:"22",fill:"none"},a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M11 1v4"}),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M11 17v4",opacity:"0.6"}),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3.93 3.93l2.83 2.83",opacity:"0.3"}),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.24 15.24l2.83 2.83",opacity:"0.7"}),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M1 11h4",opacity:"0.4"}),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M17 11h4",opacity:"0.8"}),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3.93 18.07l2.83-2.83",opacity:"0.5"}),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.24 6.76l2.83-2.83",opacity:"0.9"})),ee=f.a.svg($||($=b()),W.animations.spin),te=()=>a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.35-4.35"})),ne=({getData:e,name:t,label:n,placeholder:o,onChange:c,itemsHeight:i,itemsVisible:l,itemRenderer:m})=>{const p=Object(r.useState)([]),h=Object(d.a)(p,2),f=h[0],b=h[1],g=Object(r.useState)(),k=Object(d.a)(g,2),x=k[0],v=k[1],E=Object(r.useState)(),j=Object(d.a)(E,2),y=j[0],w=j[1],O=Object(r.useState)(0),C=Object(d.a)(O,2),L=C[0],R=C[1],I=Object(r.useState)(""),T=Object(d.a)(I,2),H=T[0],M=T[1],W=Object(r.useRef)(H);((e,t,n)=>{const a=Object(r.useCallback)(e,n);Object(r.useEffect)(()=>{const e=setTimeout(()=>{a()},t);return()=>{clearTimeout(e)}},[a,t])})(Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(H&&H!==W.current&&H.length>=2)){t.next=8;break}return v(!0),w(),R(0),t.next=6,e(H).then(e=>{v(!1),b(e),e.length||w("No se encontraron resultados")}).catch(e=>{w(e)});case 6:t.next=9;break;case 8:c("");case 9:case"end":return t.stop()}}),t)}))),600,[H]);const z=e=>{b([]),M(e.description||""),W.current=e.description||"",c(e)};return a.a.createElement(S,null,n&&""!==n&&a.a.createElement(J,{htmlFor:t},n),a.a.createElement(q,null,a.a.createElement(D,{type:"text",autoComplete:"off",id:t,name:t,placeholder:o,value:H,onChange:e=>{const t=e.currentTarget.value;M(t)},onKeyDown:({key:e})=>{const t=f[L];"Enter"===e?t&&(z(t),b([])):"ArrowDown"===e?L<f.length-1&&R(L+1):"ArrowUp"===e?L>0&&R(L-1):"Escape"===e&&(M(""),w(""),b([]))}}),a.a.createElement(N,{htmlFor:t},x?a.a.createElement(_,null):a.a.createElement(te,null))),!x&&(null===f||void 0===f?void 0:f.length)>0&&a.a.createElement(Z,{results:f,searchTerm:H,selectedIndex:L,itemsHeight:i,itemsVisible:l,onItemSelected:z,itemRenderer:m||null}),y&&""!==y&&a.a.createElement(Y,{className:"error"},y))};ne.propTypes={getData:h.a.func.isRequired,name:h.a.string.isRequired,label:h.a.string,placeholder:h.a.string,onChange:h.a.func,itemsHeight:h.a.number,itemsVisible:h.a.number},ne.defaultProps={name:"searchInput",value:{},onChange:()=>null,itemsHeight:60,itemsVisible:6},ne.utils=R;var re=ne;var ae={getRemoteCharacters:function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=String(t).toLowerCase().trim(),e.next=3,fetch("".concat("https://rickandmortyapi.com/api/character","?name=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};n(27);const oe=e=>a.a.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},a.a.createElement("div",{style:{marginRight:10}},a.a.createElement("img",{src:e.image,alt:"".concat(e.name),style:{borderRadius:20,height:40,width:40}})),a.a.createElement("div",null,a.a.createElement("div",null,e.name),a.a.createElement("small",null,e.species)));var ce=()=>{const e=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,a,o,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null===(n=t)||void 0===n?void 0:n.toLowerCase().trim(),""!==(null===(r=t)||void 0===r?void 0:r.trim())){e.next=3;break}return e.abrupt("return",[]);case 3:return e.prev=3,e.next=6,ae.getRemoteCharacters(t);case 6:if(a=e.sent,o=a.results,c=a.error,!o){e.next=14;break}return i=o.map(e=>Object(l.a)({description:e.name},e)),e.abrupt("return",i);case 14:if(!c){e.next=16;break}throw c;case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(3),e.abrupt("return",[]);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),t=e=>{console.log(e)};return a.a.createElement("div",null,a.a.createElement("div",{className:"search-container",style:{position:"relative",zIndex:10}},a.a.createElement(re,{getData:e,name:"main-search",label:"Encuentra profesionales de confianza",placeholder:"Qu\xe9 necesitas ...",onChange:t})),a.a.createElement("div",{className:"search-container",style:{position:"relative",zIndex:9}},a.a.createElement(re,{getData:e,name:"main-search",label:"Encuentra profesionales de confianza (ItemRenderer)",placeholder:"Qu\xe9 necesitas ...",onChange:t,itemRenderer:oe,itemsHeight:60})))};c.a.render(a.a.createElement(ce,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.41f1270b.chunk.js.map