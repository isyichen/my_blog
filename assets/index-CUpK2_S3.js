import{d as E,r as t,o as L,c as o,e as c,f as $,N,am as V,P as W,a3 as b,a6 as z,ch as B,t as H,a7 as k,a5 as l,w as u,cD as A,cE as P,k as d}from"./index-CQKQ9J8o.js";const R={key:0,class:"context-menu"},T=["onClick"],j=E({name:"lgRightClickMenu",__name:"index",props:{menus:{type:Array,default:()=>[]}},setup(n,{expose:_}){function m(e){e.click()}const a=t(!1),i=t(),h=t(0),v=t(0),s=t(0),w=t(0),x=t(0),y=t(0),M=e=>{e.preventDefault(),e.stopPropagation();let f=e.clientX,p=e.clientY;console.log(f,p)};function C(){a.value=!1}function D(){a.value=!0}_({handleCloseMenu:C,handleClickInside:D});function I(e){s.value=e.width,w.value=e.height}return L(()=>{const e=i.value;x.value=window.innerWidth,y.value=window.innerHeight,e.addEventListener("contextmenu",M)}),(e,f)=>{const p=B("size-ob");return o(),c("div",{class:"right-click-menu-container",ref_key:"menuContext",ref:i},[$(e.$slots,"default",{},void 0,!0),a.value?(o(),c("div",R,[N((o(),c("div",{class:"menus-wrap",style:V({left:h.value+"px",top:v.value+"px"})},[(o(!0),c(W,null,b(n.menus,(g,S)=>(o(),c("div",{class:"menu-item",key:S,onClick:K=>m(g)},H(g.title),9,T))),128))],4)),[[p,I]])])):z("",!0)],512)}}}),F=k(j,[["__scopeId","data-v-4dcaf4e6"]]),r=n=>(A("data-v-97958dcd"),n=n(),P(),n),O={class:"test-right-menu"},X=r(()=>d("div",{class:"right-item-wrap"},"区域：1",-1)),Y=r(()=>d("div",{class:"right-item-wrap"},"区域：2",-1)),q=r(()=>d("div",{class:"right-item-wrap"},"区域：3",-1)),G=r(()=>d("div",{class:"right-item-wrap"},"区域：4",-1)),J=Object.assign({name:"laoutTestRightMenu"},{__name:"index",setup(n){const _=[{title:"添加",key:"ADD",click:()=>{console.log("添加")}},{title:"删除",key:"DEL",click:()=>{console.log("删除")}},{title:"编辑",key:"EDIT",click:()=>{console.log("编辑")}},{title:"查看",key:"VIEW",click:()=>{console.log("查看")}}],m=[],a=[],i=[];return(h,v)=>{const s=F;return o(),c("div",O,[l(s,{menus:_},{default:u(()=>[X]),_:1}),l(s,{menus:m},{default:u(()=>[Y]),_:1}),l(s,{menus:a},{default:u(()=>[q]),_:1}),l(s,{menus:i},{default:u(()=>[G]),_:1})])}}}),U=k(J,[["__scopeId","data-v-97958dcd"]]);export{U as default};
