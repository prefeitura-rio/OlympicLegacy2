import{a9 as ve,S as Y,i as Z,s as $,l as N,f as b,x as S,T as q,U as L,a as f,d as c,b as i,a5 as Q,aa as j,r as B,u as T,w as C,W as pe,H as d,L as X,j as ee,m as te,o as se,v as le,A as be,e as o,k as z,c as n,n as H,M as J,t as W,g as K,I,J as y}from"./vendor-53c8acd6.js";import{l as ke,s as Ie}from"./linear-7c76cc5d.js";import{S as ye}from"./index-b1604cb0.js";function U(a,{delay:e=0,duration:t=400,easing:l=ve}={}){const s=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:l,css:r=>`opacity: ${r*s}`}}function re(a,e,t){const l=a.slice();return l[8]=e[t],l}function ie(a,e,t){const l=a.slice();return l[8]=e[t],l}function ae(a){let e,t,l,s,r,_,g;return{c(){e=q("ellipse"),this.h()},l(u){e=L(u,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,class:!0}),f(e).forEach(c),this.h()},h(){i(e,"cx",t=a[5](a[8].cx)),i(e,"cy",l=a[5](a[8].cy)),i(e,"rx",s=a[5](a[8].rx)),i(e,"ry",r=a[5](a[8].ry)),i(e,"fill","white"),i(e,"class","svelte-1xamoy9")},m(u,m){b(u,e,m),g=!0},p(u,m){(!g||m&44&&t!==(t=u[5](u[8].cx)))&&i(e,"cx",t),(!g||m&44&&l!==(l=u[5](u[8].cy)))&&i(e,"cy",l),(!g||m&44&&s!==(s=u[5](u[8].rx)))&&i(e,"rx",s),(!g||m&44&&r!==(r=u[5](u[8].ry)))&&i(e,"ry",r)},i(u){g||(Q(()=>{_||(_=j(e,U,{},!0)),_.run(1)}),g=!0)},o(u){_||(_=j(e,U,{},!1)),_.run(0),g=!1},d(u){u&&c(e),u&&_&&_.end()}}}function ce(a){let e,t,l=a[8].rx>0&&ae(a);return{c(){l&&l.c(),e=N()},l(s){l&&l.l(s),e=N()},m(s,r){l&&l.m(s,r),b(s,e,r),t=!0},p(s,r){s[8].rx>0?l?(l.p(s,r),r&12&&S(l,1)):(l=ae(s),l.c(),S(l,1),l.m(e.parentNode,e)):l&&(B(),T(l,1,1,()=>{l=null}),C())},i(s){t||(S(l),t=!0)},o(s){T(l),t=!1},d(s){l&&l.d(s),s&&c(e)}}}function oe(a){let e,t,l,s,r,_,g;return{c(){e=q("ellipse"),this.h()},l(u){e=L(u,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0}),f(e).forEach(c),this.h()},h(){i(e,"class","circle-overlay svelte-1xamoy9"),i(e,"cx",t=a[5](a[8].cx)),i(e,"cy",l=a[5](a[8].cy)),i(e,"rx",s=a[5](a[8].rx)),i(e,"ry",r=a[5](a[8].ry)),i(e,"fill","none"),i(e,"stroke-width","20")},m(u,m){b(u,e,m),g=!0},p(u,m){(!g||m&44&&t!==(t=u[5](u[8].cx)))&&i(e,"cx",t),(!g||m&44&&l!==(l=u[5](u[8].cy)))&&i(e,"cy",l),(!g||m&44&&s!==(s=u[5](u[8].rx)))&&i(e,"rx",s),(!g||m&44&&r!==(r=u[5](u[8].ry)))&&i(e,"ry",r)},i(u){g||(Q(()=>{_||(_=j(e,U,{},!0)),_.run(1)}),g=!0)},o(u){_||(_=j(e,U,{},!1)),_.run(0),g=!1},d(u){u&&c(e),u&&_&&_.end()}}}function ne(a){let e,t,l=a[8].rx>0&&oe(a);return{c(){l&&l.c(),e=N()},l(s){l&&l.l(s),e=N()},m(s,r){l&&l.m(s,r),b(s,e,r),t=!0},p(s,r){s[8].rx>0?l?(l.p(s,r),r&12&&S(l,1)):(l=oe(s),l.c(),S(l,1),l.m(e.parentNode,e)):l&&(B(),T(l,1,1,()=>{l=null}),C())},i(s){t||(S(l),t=!0)},o(s){T(l),t=!1},d(s){l&&l.d(s),s&&c(e)}}}function Ee(a){let e,t,l,s,r,_,g,u,m,x,v,M,D,F,h,G=a[3][a[2]],V=[];for(let p=0;p<G.length;p+=1)V[p]=ce(ie(a,G,p));const w=p=>T(V[p],1,1,()=>{V[p]=null});let O=a[3][a[2]],P=[];for(let p=0;p<O.length;p+=1)P[p]=ne(re(a,O,p));const ge=p=>T(P[p],1,1,()=>{P[p]=null});return{c(){e=q("svg"),t=q("g"),l=q("image"),_=q("image"),u=q("mask"),m=q("rect");for(let p=0;p<V.length;p+=1)V[p].c();for(let p=0;p<P.length;p+=1)P[p].c();this.h()},l(p){e=L(p,"svg",{viewBox:!0,xmlns:!0,"xml:space":!0,class:!0});var E=f(e);t=L(E,"g",{mask:!0});var k=f(t);l=L(k,"image",{href:!0,x:!0,y:!0,height:!0,width:!0}),f(l).forEach(c),k.forEach(c),_=L(E,"image",{style:!0,href:!0,x:!0,y:!0,height:!0,width:!0}),f(_).forEach(c),u=L(E,"mask",{id:!0});var R=f(u);m=L(R,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,"fill-opacity":!0}),f(m).forEach(c);for(let A=0;A<V.length;A+=1)V[A].l(R);R.forEach(c);for(let A=0;A<P.length;A+=1)P[A].l(E);E.forEach(c),this.h()},h(){i(l,"href",s=`${a[6]?"/":"/OlympicLegacy/"}assets/img/${a[1]}`),i(l,"x","0"),i(l,"y","0"),i(l,"height","100%"),i(l,"width","100%"),i(t,"mask",r=`url(#mask-${a[0]})`),pe(_,"z-index","1000"),i(_,"href",g=`${a[6]?"/":"/OlympicLegacy/"}assets/img/${a[1]=="geral_01.png"?"north_01.png":a[1]=="geral_02.png"?"north_02.png":"north_03.png"}`),i(_,"x","200"),i(_,"y","200"),i(_,"height","10%"),i(_,"width","10%"),i(m,"x","0"),i(m,"y","0"),i(m,"width",x=a[4][1]),i(m,"height",v=a[4][1]),i(m,"fill","white"),i(m,"fill-opacity",.1),i(u,"id",M=`mask-${a[0]}`),i(e,"viewBox",F="0 0 "+a[4][1]+" "+a[4][1]),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"xml:space","preserve"),i(e,"class","svg svelte-1xamoy9")},m(p,E){b(p,e,E),d(e,t),d(t,l),d(e,_),d(e,u),d(u,m);for(let k=0;k<V.length;k+=1)V[k].m(u,null);for(let k=0;k<P.length;k+=1)P[k].m(e,null);h=!0},p(p,[E]){if((!h||E&2&&s!==(s=`${p[6]?"/":"/OlympicLegacy/"}assets/img/${p[1]}`))&&i(l,"href",s),(!h||E&1&&r!==(r=`url(#mask-${p[0]})`))&&i(t,"mask",r),(!h||E&2&&g!==(g=`${p[6]?"/":"/OlympicLegacy/"}assets/img/${p[1]=="geral_01.png"?"north_01.png":p[1]=="geral_02.png"?"north_02.png":"north_03.png"}`))&&i(_,"href",g),(!h||E&16&&x!==(x=p[4][1]))&&i(m,"width",x),(!h||E&16&&v!==(v=p[4][1]))&&i(m,"height",v),E&44){G=p[3][p[2]];let k;for(k=0;k<G.length;k+=1){const R=ie(p,G,k);V[k]?(V[k].p(R,E),S(V[k],1)):(V[k]=ce(R),V[k].c(),S(V[k],1),V[k].m(u,null))}for(B(),k=G.length;k<V.length;k+=1)w(k);C()}if((!h||E&1&&M!==(M=`mask-${p[0]}`))&&i(u,"id",M),E&44){O=p[3][p[2]];let k;for(k=0;k<O.length;k+=1){const R=re(p,O,k);P[k]?(P[k].p(R,E),S(P[k],1)):(P[k]=ne(R),P[k].c(),S(P[k],1),P[k].m(e,null))}for(B(),k=O.length;k<P.length;k+=1)ge(k);C()}(!h||E&16&&F!==(F="0 0 "+p[4][1]+" "+p[4][1]))&&i(e,"viewBox",F)},i(p){if(!h){for(let E=0;E<G.length;E+=1)S(V[E]);Q(()=>{D||(D=j(u,U,{},!0)),D.run(1)});for(let E=0;E<O.length;E+=1)S(P[E]);h=!0}},o(p){V=V.filter(Boolean);for(let E=0;E<V.length;E+=1)T(V[E]);D||(D=j(u,U,{},!1)),D.run(0),P=P.filter(Boolean);for(let E=0;E<P.length;E+=1)T(P[E]);h=!1},d(p){p&&c(e),X(V,p),p&&D&&D.end(),X(P,p)}}}function xe(a,e,t){let l,{name:s="mask-name"}=e,{imgPath:r=""}=e,{selected:_=""}=e,{iconPath:g=""}=e,{positions:u=[]}=e,{imageRange:m=[0,1]}=e;const x=!1;return a.$$set=v=>{"name"in v&&t(0,s=v.name),"imgPath"in v&&t(1,r=v.imgPath),"selected"in v&&t(2,_=v.selected),"iconPath"in v&&t(7,g=v.iconPath),"positions"in v&&t(3,u=v.positions),"imageRange"in v&&t(4,m=v.imageRange)},a.$$.update=()=>{a.$$.dirty&16&&t(5,l=ke().domain([0,1]).range(m))},[s,r,_,u,m,l,x,g]}class De extends Y{constructor(e){super();Z(this,e,xe,Ee,$,{name:0,imgPath:1,selected:2,iconPath:7,positions:3,imageRange:4})}}function ue(a,e,t){const l=a.slice();return l[15]=e[t],l[17]=t,l}function _e(a){let e,t;return e=new De({props:{name:a[1],selected:a[6].id,imgPath:a[2],positions:a[4],imageRange:a[5]}}),{c(){ee(e.$$.fragment)},l(l){te(e.$$.fragment,l)},m(l,s){se(e,l,s),t=!0},p(l,s){const r={};s&2&&(r.name=l[1]),s&64&&(r.selected=l[6].id),s&4&&(r.imgPath=l[2]),s&16&&(r.positions=l[4]),s&32&&(r.imageRange=l[5]),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function Me(a){let e,t=a[15].text+"";return{c(){e=o("div"),this.h()},l(l){e=n(l,"DIV",{class:!0});var s=f(e);s.forEach(c),this.h()},h(){i(e,"class","step-text svelte-6dmb0h")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[15].text+"")&&(e.innerHTML=t)},d(l){l&&c(e)}}}function Ve(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/tezca-explorable.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ge(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/vila_dos_atletas.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Fe(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/transol\xEDmpica.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function we(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/transoeste.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Pe(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/transcarioca.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Se(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/terminal_deodoro.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Te(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/teleferico_providencia.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Re(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/sistema_vlt.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function qe(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/sistema_brt.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Le(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/sambodromo.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Oe(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/riocentro.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ae(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/rede_hoteleira.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function ze(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/pra\xE7a_mau\xE1.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function He(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/piscinoes.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ne(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/pequena_africa.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function je(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/parque_rita_lee.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ue(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/parque_madureira.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Be(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/parque_deodoro.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ce(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/novas_vias.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Je(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/museu_do_amanh\xE3.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function We(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/museu_de_arte_do_rio.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ke(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/marina_da_gloria.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Qe(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/largo_da_prainha.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Xe(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/GET_jose_mauro_de_vasconcellos.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ye(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/parque.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function Ze(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/GET_emiliano_galdino.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function $e(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/GEO_isabel_salgado.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function et(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/entorno_do_engenhao.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function tt(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/edificio_a_noite.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function st(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/duplicacao_do_joa.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function lt(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/derrubada_da_perimetral.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function rt(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/centro_de_opera\xE7\xF5es_rio.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function it(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/campo_de_golfe.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function at(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0,id:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/terminal_intermodal_gentileza.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h"),i(e,"id","terminal_intermodal_gentileza")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function ct(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/boulevard_olimpico.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function ot(a){let e,t,l;return{c(){e=o("div"),t=o("img"),this.h()},l(s){e=n(s,"DIV",{class:!0});var r=f(e);t=n(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),this.h()},h(){i(t,"class","photo_logo svelte-6dmb0h"),y(t.src,l="assets/img/avenida_rio_branco.png")||i(t,"src",l),i(t,"alt","Foto"),i(e,"class","image-container svelte-6dmb0h")},m(s,r){b(s,e,r),d(e,t)},p:I,d(s){s&&c(e)}}}function he(a){let e,t=a[15].title+"";return{c(){e=o("div"),this.h()},l(l){e=n(l,"DIV",{class:!0});var s=f(e);s.forEach(c),this.h()},h(){i(e,"class","step-title svelte-6dmb0h")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[15].title+"")&&(e.innerHTML=t)},d(l){l&&c(e)}}}function me(a){let e;function t(r,_){return r[15].background_text==="transporte"?_t:r[15].background_text==="educa\xE7\xE3o"?ut:nt}let l=t(a),s=l(a);return{c(){s.c(),e=N()},l(r){s.l(r),e=N()},m(r,_){s.m(r,_),b(r,e,_)},p(r,_){l===(l=t(r))&&s?s.p(r,_):(s.d(1),s=l(r),s&&(s.c(),s.m(e.parentNode,e)))},d(r){s.d(r),r&&c(e)}}}function nt(a){let e,t=a[15].background_text+"";return{c(){e=o("div"),this.h()},l(l){e=n(l,"DIV",{class:!0});var s=f(e);s.forEach(c),this.h()},h(){i(e,"class","step-background svelte-6dmb0h"),J(e,"transporte",a[15].background_text==="transporte"),J(e,"reformasurbanas",a[15].background_text==="reformas urbanas")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[15].background_text+"")&&(e.innerHTML=t),s&8&&J(e,"transporte",l[15].background_text==="transporte"),s&8&&J(e,"reformasurbanas",l[15].background_text==="reformas urbanas")},d(l){l&&c(e)}}}function ut(a){let e,t,l,s,r,_;return{c(){e=o("div"),t=o("span"),l=W("EDUCA"),s=z(),r=o("span"),_=W("\xC7\xC3O"),this.h()},l(g){e=n(g,"DIV",{class:!0});var u=f(e);t=n(u,"SPAN",{class:!0});var m=f(t);l=K(m,"EDUCA"),m.forEach(c),s=H(u),r=n(u,"SPAN",{class:!0});var x=f(r);_=K(x,"\xC7\xC3O"),x.forEach(c),u.forEach(c),this.h()},h(){i(t,"class","part1 svelte-6dmb0h"),i(r,"class","part2 svelte-6dmb0h"),i(e,"class","step-background educacao svelte-6dmb0h")},m(g,u){b(g,e,u),d(e,t),d(t,l),d(e,s),d(e,r),d(r,_)},p:I,d(g){g&&c(e)}}}function _t(a){let e,t,l,s,r,_;return{c(){e=o("div"),t=o("span"),l=W("TRANS"),s=z(),r=o("span"),_=W("PORTE"),this.h()},l(g){e=n(g,"DIV",{class:!0});var u=f(e);t=n(u,"SPAN",{class:!0});var m=f(t);l=K(m,"TRANS"),m.forEach(c),s=H(u),r=n(u,"SPAN",{class:!0});var x=f(r);_=K(x,"PORTE"),x.forEach(c),u.forEach(c),this.h()},h(){i(t,"class","part1 svelte-6dmb0h"),i(r,"class","part2 svelte-6dmb0h"),i(e,"class","step-background transporte svelte-6dmb0h")},m(g,u){b(g,e,u),d(e,t),d(t,l),d(e,s),d(e,r),d(r,_)},p:I,d(g){g&&c(e)}}}function fe(a){let e,t=a[15].description+"";return{c(){e=o("div"),this.h()},l(l){e=n(l,"DIV",{class:!0});var s=f(e);s.forEach(c),this.h()},h(){i(e,"class","step-description svelte-6dmb0h")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[15].description+"")&&(e.innerHTML=t)},d(l){l&&c(e)}}}function de(a){let e,t,l,s,r,_,g,u;function m(h,G){return h[15].text=="avenida_rio_branco"?ot:h[15].text=="boulevard_olimpico"?ct:h[15].text=="terminal_intermodal_gentileza"?at:h[15].text=="campo_de_golfe"?it:h[15].text=="cor"?rt:h[15].text=="derrubada_da_perimetral"?lt:h[15].text=="duplicacao_do_joa"?st:h[15].text=="edificio_a_noite"?tt:h[15].text=="entorno_do_engenhao"?et:h[15].text=="GEO_isabel_salgado"?$e:h[15].text=="GET_emiliano_galdino"?Ze:h[15].text=="parque"?Ye:h[15].text=="GET_jose_mauro_de_vasconcellos"?Xe:h[15].text=="largo_da_prainha"?Qe:h[15].text=="marina_da_gloria"?Ke:h[15].text=="museu_de_arte_do_rio"?We:h[15].text=="museu_do_amanh\xE3"?Je:h[15].text=="novas_vias"?Ce:h[15].text=="parque_deodoro"?Be:h[15].text=="parque_madureira"?Ue:h[15].text=="parque_rita_lee"?je:h[15].text=="pequena_africa"?Ne:h[15].text=="piscinoes"?He:h[15].text=="praca_maua"?ze:h[15].text=="rede_hoteleira"?Ae:h[15].text=="riocentro"?Oe:h[15].text=="sambodromo"?Le:h[15].text=="sistema_brt"?qe:h[15].text=="sistema_vlt"?Re:h[15].text=="teleferico_providencia"?Te:h[15].text=="terminal_deodoro"?Se:h[15].text=="transcarioca"?Pe:h[15].text=="transoeste"?we:h[15].text=="transolimpica"?Fe:h[15].text=="vila_dos_atletas"?Ge:h[15].text=="foto14"?Ve:Me}let x=m(a),v=x(a),M=a[15].title&&he(a),D=a[15].background_text&&me(a),F=a[15].description&&fe(a);return{c(){e=o("div"),v.c(),t=z(),M&&M.c(),l=z(),s=o("div"),D&&D.c(),r=z(),F&&F.c(),_=z(),this.h()},l(h){e=n(h,"DIV",{class:!0,id:!0});var G=f(e);v.l(G),t=H(G),M&&M.l(G),l=H(G),s=n(G,"DIV",{class:!0});var V=f(s);D&&D.l(V),r=H(V),F&&F.l(V),V.forEach(c),_=H(G),G.forEach(c),this.h()},h(){i(s,"class","step-wrapper svelte-6dmb0h"),i(e,"class",g="step step-"+a[0]+" svelte-6dmb0h"),i(e,"id",u="id-"+a[17])},m(h,G){b(h,e,G),v.m(e,null),d(e,t),M&&M.m(e,null),d(e,l),d(e,s),D&&D.m(s,null),d(s,r),F&&F.m(s,null),d(e,_)},p(h,G){x===(x=m(h))&&v?v.p(h,G):(v.d(1),v=x(h),v&&(v.c(),v.m(e,t))),h[15].title?M?M.p(h,G):(M=he(h),M.c(),M.m(e,l)):M&&(M.d(1),M=null),h[15].background_text?D?D.p(h,G):(D=me(h),D.c(),D.m(s,r)):D&&(D.d(1),D=null),h[15].description?F?F.p(h,G):(F=fe(h),F.c(),F.m(s,null)):F&&(F.d(1),F=null),G&1&&g!==(g="step step-"+h[0]+" svelte-6dmb0h")&&i(e,"class",g)},d(h){h&&c(e),v.d(),M&&M.d(),D&&D.d(),F&&F.d()}}}function ht(a){let e,t,l,s,r,_=a[7]&&_e(a),g=a[3],u=[];for(let m=0;m<g.length;m+=1)u[m]=de(ue(a,g,m));return{c(){e=o("div"),t=o("figure"),_&&_.c(),l=z(),s=o("div");for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){e=n(m,"DIV",{id:!0,class:!0});var x=f(e);t=n(x,"FIGURE",{class:!0});var v=f(t);_&&_.l(v),v.forEach(c),l=H(x),s=n(x,"DIV",{class:!0});var M=f(s);for(let D=0;D<u.length;D+=1)u[D].l(M);M.forEach(c),x.forEach(c),this.h()},h(){i(t,"class","svelte-6dmb0h"),i(s,"class","scroll-area svelte-6dmb0h"),i(e,"id","scrolly"),i(e,"class","svelte-6dmb0h")},m(m,x){b(m,e,x),d(e,t),_&&_.m(t,null),d(e,l),d(e,s);for(let v=0;v<u.length;v+=1)u[v].m(s,null);r=!0},p(m,x){if(m[7]?_?(_.p(m,x),x&128&&S(_,1)):(_=_e(m),_.c(),S(_,1),_.m(t,null)):_&&(B(),T(_,1,1,()=>{_=null}),C()),x&9){g=m[3];let v;for(v=0;v<g.length;v+=1){const M=ue(m,g,v);u[v]?u[v].p(M,x):(u[v]=de(M),u[v].c(),u[v].m(s,null))}for(;v<u.length;v+=1)u[v].d(1);u.length=g.length}},i(m){r||(S(_),r=!0)},o(m){T(_),r=!1},d(m){m&&c(e),_&&_.d(),X(u,m)}}}function mt(a){let e,t;return e=new ye({props:{id:"gods-iconography-"+a[0],fullBleed:!0,$$slots:{default:[ht]},$$scope:{ctx:a}}}),{c(){ee(e.$$.fragment)},l(l){te(e.$$.fragment,l)},m(l,s){se(e,l,s),t=!0},p(l,[s]){const r={};s&1&&(r.id="gods-iconography-"+l[0]),s&262399&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function ft(a,e,t){const l=!1;let{title:s="Tezcatlipoca"}=e,{name:r="mask-name"}=e,{source:_="illustration source"}=e,{sourceUrl:g=void 0}=e,{imgPath:u=""}=e,{selected:m=""}=e,{steps:x=[]}=e,{positions:v=[]}=e,{imageRange:M=[0,1]}=e,D=x[0],F=!0,h=!1;const G=w=>{t(8,m=w.index),t(6,D=x[w.index]),h&&t(7,F=!1)},V=w=>{h&&t(7,F=!0)};return be(()=>{h=/iPhone/i.test(navigator.userAgent),Ie().setup({step:`div .step-${s}`,offset:.5}).onStepEnter(G).onStepExit(V)}),a.$$set=w=>{"title"in w&&t(0,s=w.title),"name"in w&&t(1,r=w.name),"source"in w&&t(10,_=w.source),"sourceUrl"in w&&t(11,g=w.sourceUrl),"imgPath"in w&&t(2,u=w.imgPath),"selected"in w&&t(8,m=w.selected),"steps"in w&&t(3,x=w.steps),"positions"in w&&t(4,v=w.positions),"imageRange"in w&&t(5,M=w.imageRange)},[s,r,u,x,v,M,D,F,m,l,_,g]}class pt extends Y{constructor(e){super();Z(this,e,ft,mt,$,{ssr:9,title:0,name:1,source:10,sourceUrl:11,imgPath:2,selected:8,steps:3,positions:4,imageRange:5})}get ssr(){return this.$$.ctx[9]}}const bt={mapa_02:[{cx:.5,cy:.5,rx:.5,ry:.5}],parque_rita_lee:[{cx:.45,cy:.55,rx:.15,ry:.15}],GEO_isabel_salgado:[{cx:.43,cy:.56,rx:.055,ry:.055}],GET_emiliano_galdino:[{cx:.145,cy:.1,rx:.1,ry:.1},{cx:.46,cy:.175,rx:.1,ry:.1},{cx:.64,cy:.3,rx:.1,ry:.1},{cx:.6,cy:.68,rx:.1,ry:.1}],parque:[{cx:.85,cy:.33,rx:.15,ry:.15}]},kt={mapa_03:[{cx:.5,cy:.5,rx:.5,ry:.5}],terminal_gentileza:[{cx:.725,cy:.6,rx:.1,ry:.1}],sistema_brt:[{cx:.5,cy:.5,rx:.5,ry:.5}],sistema_vlt:[{cx:.725,cy:.7,rx:.1,ry:.12}],transoeste:[{cx:.2,cy:.4,rx:.2,ry:.3}],transcarioca:[{cx:.55,cy:.51,rx:.4,ry:.15}],transolimpica:[{cx:.35,cy:.38,rx:.3,ry:.1}]},It={mapa_01:[{cx:.5,cy:.5,rx:.5,ry:.5}],museu_do_amanh\u00E3:[{cx:.84,cy:.58,rx:.13,ry:.13}],museu_de_arte_do_rio:[{cx:.6,cy:.58,rx:.11,ry:.11}],centro_de_operacoes_rio:[{cx:.33,cy:.58,rx:.11,ry:.11}],praca_maua:[{cx:.75,cy:.62,rx:.25,ry:.2}]};export{pt as S,It as a,bt as b,kt as t};
