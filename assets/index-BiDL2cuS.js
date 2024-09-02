import{b as ve,i as re,d as R,u as nt,a as Z,r as T,p as ke,o as xe,c as i,e as k,f as ne,n as G,g as w,_ as _e,h as he,j as fe,k as h,l as B,w as $,m as te,E as ce,t as W,q as $e,s as We,v as Ce,x as Q,y as ot,T as at,z as ye,A as Ie,B as lt,C as E,D as st,F as Me,G as it,H as ut,I as Pe,J as pe,K as Ke,L as H,M as de,N as je,O as ct,P as K,Q as Oe,R as rt,S as dt,U as mt,V as pt,W as ht,X as Fe,Y as ft,Z as vt,$ as _t,a0 as Ve,a1 as ue,a2 as ge,a3 as oe,a4 as gt,a5 as P,a6 as se,a7 as me,a8 as Ne,a9 as qe,aa as Ue,ab as x,ac as yt,ad as bt,ae as Le,af as Ge,ag as kt,ah as Mt,ai as xt,aj as $t,ak as Ct,al as It,am as Ae,an as wt,ao as St,ap as Tt,aq as Et,ar as Pt,as as Nt,at as De,au as we,av as He,aw as zt,ax as Bt,ay as Re,az as Ot,aA as Ft,aB as Lt,aC as At,aD as Dt,aE as Ht,aF as Rt,aG as Wt,aH as Kt,aI as jt}from"./index-OhFtdMCe.js";import{E as ze,a as Vt,C as qt}from"./el-popper-CxadCetP.js";const be=function(e,t,...n){let a;t.includes("mouse")||t.includes("click")?a="MouseEvents":t.includes("key")?a="KeyboardEvent":a="HTMLEvents";const o=document.createEvent(a);return o.initEvent(t,...n),e.dispatchEvent(o),e},Ze=Symbol("breadcrumbKey"),Ut=ve({separator:{type:String,default:"/"},separatorIcon:{type:re}}),Gt=R({name:"ElBreadcrumb"}),Zt=R({...Gt,props:Ut,setup(e){const t=e,{t:n}=nt(),a=Z("breadcrumb"),o=T();return ke(Ze,t),xe(()=>{const m=o.value.querySelectorAll(`.${a.e("item")}`);m.length&&m[m.length-1].setAttribute("aria-current","page")}),(m,f)=>(i(),k("div",{ref_key:"breadcrumb",ref:o,class:G(w(a).b()),"aria-label":w(n)("el.breadcrumb.label"),role:"navigation"},[ne(m.$slots,"default")],10,["aria-label"]))}});var Jt=_e(Zt,[["__file","breadcrumb.vue"]]);const Qt=ve({to:{type:he([String,Object]),default:""},replace:Boolean}),Xt=R({name:"ElBreadcrumbItem"}),Yt=R({...Xt,props:Qt,setup(e){const t=e,n=$e(),a=fe(Ze,void 0),o=Z("breadcrumb"),m=n.appContext.config.globalProperties.$router,f=T(),g=()=>{!t.to||!m||(t.replace?m.replace(t.to):m.push(t.to))};return(s,p)=>{var y,c;return i(),k("span",{class:G(w(o).e("item"))},[h("span",{ref_key:"link",ref:f,class:G([w(o).e("inner"),w(o).is("link",!!s.to)]),role:"link",onClick:g},[ne(s.$slots,"default")],2),(y=w(a))!=null&&y.separatorIcon?(i(),B(w(ce),{key:0,class:G(w(o).e("separator"))},{default:$(()=>[(i(),B(te(w(a).separatorIcon)))]),_:1},8,["class"])):(i(),k("span",{key:1,class:G(w(o).e("separator")),role:"presentation"},W((c=w(a))==null?void 0:c.separator),3))],2)}}});var Je=_e(Yt,[["__file","breadcrumb-item.vue"]]);const en=We(Jt,{BreadcrumbItem:Je}),tn=Ce(Je);let nn=class{constructor(t,n){this.parent=t,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(t){t===this.subMenuItems.length?t=0:t<0&&(t=this.subMenuItems.length-1),this.subMenuItems[t].focus(),this.subIndex=t}addListeners(){const t=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",a=>{let o=!1;switch(a.code){case Q.down:{this.gotoSubIndex(this.subIndex+1),o=!0;break}case Q.up:{this.gotoSubIndex(this.subIndex-1),o=!0;break}case Q.tab:{be(t,"mouseleave");break}case Q.enter:case Q.space:{o=!0,a.currentTarget.click();break}}return o&&(a.preventDefault(),a.stopPropagation()),!1})})}},on=class{constructor(t,n){this.domNode=t,this.submenu=null,this.submenu=null,this.init(n)}init(t){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${t}-menu`);n&&(this.submenu=new nn(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",t=>{let n=!1;switch(t.code){case Q.down:{be(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case Q.up:{be(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case Q.tab:{be(t.currentTarget,"mouseleave");break}case Q.enter:case Q.space:{n=!0,t.currentTarget.click();break}}n&&t.preventDefault()})}},an=class{constructor(t,n){this.domNode=t,this.init(n)}init(t){const n=this.domNode.childNodes;Array.from(n).forEach(a=>{a.nodeType===1&&new on(a,t)})}};const ln=R({name:"ElMenuCollapseTransition",setup(){const e=Z("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,a){ye(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",a()},onAfterEnter(n){Ie(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),lt(n,e.m("collapse"))?(Ie(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ye(n,e.m("collapse"))):(ye(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),Ie(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){ye(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function sn(e,t,n,a,o,m){return i(),B(at,ot({mode:"out-in"},e.listeners),{default:$(()=>[ne(e.$slots,"default")]),_:3},16)}var un=_e(ln,[["render",sn],["__file","menu-collapse-transition.vue"]]);function Qe(e,t){const n=E(()=>{let o=e.parent;const m=[t.value];for(;o.type.name!=="ElMenu";)o.props.index&&m.unshift(o.props.index),o=o.parent;return m});return{parentMenu:E(()=>{let o=e.parent;for(;o&&!["ElMenu","ElSubMenu"].includes(o.type.name);)o=o.parent;return o}),indexPath:n}}function cn(e){return E(()=>{const n=e.backgroundColor;return n?new st(n).shade(20).toString():""})}const Xe=(e,t)=>{const n=Z("menu");return E(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":cn(e).value||"","active-color":e.activeTextColor||"",level:`${t}`}))},rn=ve({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:re},expandOpenIcon:{type:re},collapseCloseIcon:{type:re},collapseOpenIcon:{type:re}}),Se="ElSubMenu";var Be=R({name:Se,props:rn,setup(e,{slots:t,expose:n}){const a=$e(),{indexPath:o,parentMenu:m}=Qe(a,E(()=>e.index)),f=Z("menu"),g=Z("sub-menu"),s=fe("rootMenu");s||Me(Se,"can not inject root menu");const p=fe(`subMenu:${m.value.uid}`);p||Me(Se,"can not inject sub menu");const y=T({}),c=T({});let C;const b=T(!1),O=T(),I=T(null),N=E(()=>A.value==="horizontal"&&L.value?"bottom-start":"right-start"),V=E(()=>A.value==="horizontal"&&L.value||A.value==="vertical"&&!s.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?r.value?e.expandOpenIcon:e.expandCloseIcon:it:e.collapseCloseIcon&&e.collapseOpenIcon?r.value?e.collapseOpenIcon:e.collapseCloseIcon:ut),L=E(()=>p.level===0),X=E(()=>{const _=e.teleported;return _===void 0?L.value:_}),ie=E(()=>s.props.collapse?`${f.namespace.value}-zoom-in-left`:`${f.namespace.value}-zoom-in-top`),l=E(()=>A.value==="horizontal"&&L.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),r=E(()=>s.openedMenus.includes(e.index)),v=E(()=>{let _=!1;return Object.values(y.value).forEach(S=>{S.active&&(_=!0)}),Object.values(c.value).forEach(S=>{S.active&&(_=!0)}),_}),A=E(()=>s.props.mode),q=Pe({index:e.index,indexPath:o,active:v}),Y=Xe(s.props,p.level+1),ae=E(()=>{var _;return(_=e.popperOffset)!=null?_:s.props.popperOffset}),le=E(()=>{var _;return(_=e.popperClass)!=null?_:s.props.popperClass}),U=E(()=>{var _;return(_=e.showTimeout)!=null?_:s.props.showTimeout}),u=E(()=>{var _;return(_=e.hideTimeout)!=null?_:s.props.hideTimeout}),d=()=>{var _,S,D;return(D=(S=(_=I.value)==null?void 0:_.popperRef)==null?void 0:S.popperInstanceRef)==null?void 0:D.destroy()},M=_=>{_||d()},F=()=>{s.props.menuTrigger==="hover"&&s.props.mode==="horizontal"||s.props.collapse&&s.props.mode==="vertical"||e.disabled||s.handleSubMenuClick({index:e.index,indexPath:o.value,active:v.value})},z=(_,S=U.value)=>{var D;if(_.type!=="focus"){if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||e.disabled){p.mouseInChild.value=!0;return}p.mouseInChild.value=!0,C==null||C(),{stop:C}=Oe(()=>{s.openMenu(e.index,o.value)},S),X.value&&((D=m.value.vnode.el)==null||D.dispatchEvent(new MouseEvent("mouseenter")))}},J=(_=!1)=>{var S;if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"){p.mouseInChild.value=!1;return}C==null||C(),p.mouseInChild.value=!1,{stop:C}=Oe(()=>!b.value&&s.closeMenu(e.index,o.value),u.value),X.value&&_&&((S=p.handleMouseleave)==null||S.call(p,!0))};pe(()=>s.props.collapse,_=>M(!!_));{const _=D=>{c.value[D.index]=D},S=D=>{delete c.value[D.index]};ke(`subMenu:${a.uid}`,{addSubMenu:_,removeSubMenu:S,handleMouseleave:J,mouseInChild:b,level:p.level+1})}return n({opened:r}),xe(()=>{s.addSubMenu(q),p.addSubMenu(q)}),Ke(()=>{p.removeSubMenu(q),s.removeSubMenu(q)}),()=>{var _;const S=[(_=t.title)==null?void 0:_.call(t),H(ce,{class:g.e("icon-arrow"),style:{transform:r.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&s.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>de(V.value)?H(a.appContext.components[V.value]):H(V.value)})],D=s.isMenuPopup?H(ze,{ref:I,visible:r.value,effect:"light",pure:!0,offset:ae.value,showArrow:!1,persistent:!0,popperClass:le.value,placement:N.value,teleported:X.value,fallbackPlacements:l.value,transition:ie.value,gpuAcceleration:!1},{content:()=>{var j;return H("div",{class:[f.m(A.value),f.m("popup-container"),le.value],onMouseenter:ee=>z(ee,100),onMouseleave:()=>J(!0),onFocus:ee=>z(ee,100)},[H("ul",{class:[f.b(),f.m("popup"),f.m(`popup-${N.value}`)],style:Y.value},[(j=t.default)==null?void 0:j.call(t)])])},default:()=>H("div",{class:g.e("title"),onClick:F},S)}):H(K,{},[H("div",{class:g.e("title"),ref:O,onClick:F},S),H(Vt,{},{default:()=>{var j;return je(H("ul",{role:"menu",class:[f.b(),f.m("inline")],style:Y.value},[(j=t.default)==null?void 0:j.call(t)]),[[ct,r.value]])}})]);return H("li",{class:[g.b(),g.is("active",v.value),g.is("opened",r.value),g.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:r.value,onMouseenter:z,onMouseleave:()=>J(),onFocus:z},[D])}}});const dn=ve({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:he(Array),default:()=>rt([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:re,default:()=>dt},popperEffect:{type:he(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),Te=e=>Array.isArray(e)&&e.every(t=>de(t)),mn={close:(e,t)=>de(e)&&Te(t),open:(e,t)=>de(e)&&Te(t),select:(e,t,n,a)=>de(e)&&Te(t)&&ht(n)&&(a===void 0||a instanceof Promise)};var pn=R({name:"ElMenu",props:dn,emits:mn,setup(e,{emit:t,slots:n,expose:a}){const o=$e(),m=o.appContext.config.globalProperties.$router,f=T(),g=Z("menu"),s=Z("sub-menu"),p=T(-1),y=T(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),c=T(e.defaultActive),C=T({}),b=T({}),O=E(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),I=()=>{const u=c.value&&C.value[c.value];if(!u||e.mode==="horizontal"||e.collapse)return;u.indexPath.forEach(M=>{const F=b.value[M];F&&N(M,F.indexPath)})},N=(u,d)=>{y.value.includes(u)||(e.uniqueOpened&&(y.value=y.value.filter(M=>d.includes(M))),y.value.push(u),t("open",u,d))},V=u=>{const d=y.value.indexOf(u);d!==-1&&y.value.splice(d,1)},L=(u,d)=>{V(u),t("close",u,d)},X=({index:u,indexPath:d})=>{y.value.includes(u)?L(u,d):N(u,d)},ie=u=>{(e.mode==="horizontal"||e.collapse)&&(y.value=[]);const{index:d,indexPath:M}=u;if(!(Fe(d)||Fe(M)))if(e.router&&m){const F=u.route||d,z=m.push(F).then(J=>(J||(c.value=d),J));t("select",d,M,{index:d,indexPath:M,route:F},z)}else c.value=d,t("select",d,M,{index:d,indexPath:M})},l=u=>{const d=C.value,M=d[u]||c.value&&d[c.value]||d[e.defaultActive];M?c.value=M.index:c.value=u},r=u=>{const d=getComputedStyle(u),M=Number.parseInt(d.marginLeft,10),F=Number.parseInt(d.marginRight,10);return u.offsetWidth+M+F||0},v=()=>{var u,d;if(!f.value)return-1;const M=Array.from((d=(u=f.value)==null?void 0:u.childNodes)!=null?d:[]).filter(ee=>ee.nodeName!=="#comment"&&(ee.nodeName!=="#text"||ee.nodeValue)),F=64,z=getComputedStyle(f.value),J=Number.parseInt(z.paddingLeft,10),_=Number.parseInt(z.paddingRight,10),S=f.value.clientWidth-J-_;let D=0,j=0;return M.forEach((ee,tt)=>{D+=r(ee),D<=S-F&&(j=tt+1)}),j===M.length?-1:j},A=u=>b.value[u].indexPath,q=(u,d=33.34)=>{let M;return()=>{M&&clearTimeout(M),M=setTimeout(()=>{u()},d)}};let Y=!0;const ae=()=>{if(p.value===v())return;const u=()=>{p.value=-1,vt(()=>{p.value=v()})};Y?u():q(u)(),Y=!1};pe(()=>e.defaultActive,u=>{C.value[u]||(c.value=""),l(u)}),pe(()=>e.collapse,u=>{u&&(y.value=[])}),pe(C.value,I);let le;mt(()=>{e.mode==="horizontal"&&e.ellipsis?le=ft(f,ae).stop:le==null||le()});const U=T(!1);{const u=z=>{b.value[z.index]=z},d=z=>{delete b.value[z.index]};ke("rootMenu",Pe({props:e,openedMenus:y,items:C,subMenus:b,activeIndex:c,isMenuPopup:O,addMenuItem:z=>{C.value[z.index]=z},removeMenuItem:z=>{delete C.value[z.index]},addSubMenu:u,removeSubMenu:d,openMenu:N,closeMenu:L,handleMenuItemClick:ie,handleSubMenuClick:X})),ke(`subMenu:${o.uid}`,{addSubMenu:u,removeSubMenu:d,mouseInChild:U,level:0})}return xe(()=>{e.mode==="horizontal"&&new an(o.vnode.el,g.namespace.value)}),a({open:d=>{const{indexPath:M}=b.value[d];M.forEach(F=>N(F,M))},close:V,handleResize:ae}),()=>{var u,d;let M=(d=(u=n.default)==null?void 0:u.call(n))!=null?d:[];const F=[];if(e.mode==="horizontal"&&f.value){const S=pt(M),D=p.value===-1?S:S.slice(0,p.value),j=p.value===-1?[]:S.slice(p.value);j!=null&&j.length&&e.ellipsis&&(M=D,F.push(H(Be,{index:"sub-menu-more",class:s.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>H(ce,{class:s.e("icon-more")},{default:()=>H(e.ellipsisIcon)}),default:()=>j})))}const z=Xe(e,0),J=e.closeOnClickOutside?[[qt,()=>{y.value.length&&(U.value||(y.value.forEach(S=>t("close",S,A(S))),y.value=[]))}]]:[],_=je(H("ul",{key:String(e.collapse),role:"menubar",ref:f,style:z.value,class:{[g.b()]:!0,[g.m(e.mode)]:!0,[g.m("collapse")]:e.collapse}},[...M,...F]),J);return e.collapseTransition&&e.mode==="vertical"?H(un,()=>_):_}}});const hn=ve({index:{type:he([String,null]),default:null},route:{type:he([String,Object])},disabled:Boolean}),fn={click:e=>de(e.index)&&Array.isArray(e.indexPath)},Ee="ElMenuItem",vn=R({name:Ee,components:{ElTooltip:ze},props:hn,emits:fn,setup(e,{emit:t}){const n=$e(),a=fe("rootMenu"),o=Z("menu"),m=Z("menu-item");a||Me(Ee,"can not inject root menu");const{parentMenu:f,indexPath:g}=Qe(n,_t(e,"index")),s=fe(`subMenu:${f.value.uid}`);s||Me(Ee,"can not inject sub menu");const p=E(()=>e.index===a.activeIndex),y=Pe({index:e.index,indexPath:g,active:p}),c=()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:g.value,route:e.route}),t("click",y))};return xe(()=>{s.addSubMenu(y),a.addMenuItem(y)}),Ke(()=>{s.removeSubMenu(y),a.removeMenuItem(y)}),{parentMenu:f,rootMenu:a,active:p,nsMenu:o,nsMenuItem:m,handleClick:c}}});function _n(e,t,n,a,o,m){const f=Ve("el-tooltip");return i(),k("li",{class:G([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:e.handleClick},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(i(),B(f,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:$(()=>[ne(e.$slots,"title")]),default:$(()=>[h("div",{class:G(e.nsMenu.be("tooltip","trigger"))},[ne(e.$slots,"default")],2)]),_:3},8,["effect"])):(i(),k(K,{key:1},[ne(e.$slots,"default"),ne(e.$slots,"title")],64))],10,["onClick"])}var Ye=_e(vn,[["render",_n],["__file","menu-item.vue"]]);const gn={title:String},yn="ElMenuItemGroup",bn=R({name:yn,props:gn,setup(){return{ns:Z("menu-item-group")}}});function kn(e,t,n,a,o,m){return i(),k("li",{class:G(e.ns.b())},[h("div",{class:G(e.ns.e("title"))},[e.$slots.title?ne(e.$slots,"title",{key:1}):(i(),k(K,{key:0},[ue(W(e.title),1)],64))],2),h("ul",null,[ne(e.$slots,"default")])],2)}var et=_e(bn,[["render",kn],["__file","menu-item-group.vue"]]);const Mn=We(pn,{MenuItem:Ye,MenuItemGroup:et,SubMenu:Be}),xn=Ce(Ye);Ce(et);const $n=Ce(Be),Cn={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},In=h("path",{fill:"currentColor",d:"M176 416a112 112 0 1 1 0 224a112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224"},null,-1),wn=[In];function Sn(e,t){return i(),k("svg",Cn,[...wn])}const Tn=ge({name:"ep-more-filled",render:Sn}),En={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Pn=h("path",{fill:"currentColor",d:"M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),Nn=[Pn];function zn(e,t){return i(),k("svg",En,[...Nn])}const Bn=ge({name:"ep-close",render:zn}),On={class:"lg-tags-container"},Fn={class:"tabs-wrap"},Ln=["onClick"],An=["onClick"],Dn={class:"func-iocn"},Hn=R({name:"lgTags",__name:"index",props:{values:{type:Array,default:()=>[]},currentTagIndex:{type:Number,default:0}},emits:["select","close"],setup(e,{emit:t}){const n=e,a=t,o=f=>{a("select",f)},m=f=>{a("close",f)};return(f,g)=>{const s=Bn,p=ce,y=Tn;return i(),k("div",On,[h("div",Fn,[(i(!0),k(K,null,oe(n.values,(c,C)=>(i(),k("div",{class:G(["tag-item",e.currentTagIndex===C?"activeTagSty":""]),key:C},[h("div",{class:"tag-item-tit",onClick:b=>o(c)},W(c.title),9,Ln),c.path!=="/layout/home"?(i(),k("div",{key:0,class:"tag-item-icon",onClick:gt(b=>m(c),["stop"])},[P(p,{size:"14",color:"#999"},{default:$(()=>[P(s)]),_:1})],8,An)):se("",!0)],2))),128))]),h("div",Dn,[P(y,{size:"14",color:"#999"})])])}}}),Rn=me(Hn,[["__scopeId","data-v-b1e3aec9"]]),Wn={class:"lg-home-aside-container"},Kn=R({name:"lgAside",__name:"index",props:{menuData:{type:Array,default:()=>[]},chooseMenuKey:{type:String,default:"1-1"},isFoldMenu:{type:Boolean}},emits:["select"],setup(e,{emit:t}){const n=e,a=t;function o(m){a("select",{key:m})}return(m,f)=>{const g=ce,s=xn,p=$n,y=Mn;return i(),k("div",Wn,[P(y,{"default-active":e.chooseMenuKey,class:"el-menu-vertical-demo",collapse:e.isFoldMenu,"unique-opened":!0,onSelect:o,"active-text-color":"#165DFF","collapse-transition":!1},{default:$(()=>[(i(!0),k(K,null,oe(n.menuData,(c,C)=>(i(),k(K,{key:C},[c.children&&c.children.length>0?(i(),B(p,{key:0,"data-index":C,index:c.key},{title:$(()=>[P(g,{size:"16",color:"#4E5969"},{default:$(()=>[c.icon?(i(),B(te(c.icon),{key:0})):se("",!0)]),_:2},1024),h("span",null,W(c.title),1)]),default:$(()=>[(i(!0),k(K,null,oe(c.children,(b,O)=>(i(),k(K,{key:O},[b.children&&b.children.length>0?(i(),B(p,{key:0,"data-index":O,index:b.key},{title:$(()=>[P(g,{size:"16",color:"#4E5969"},{default:$(()=>[b.icon?(i(),B(te(b.icon),{key:0})):se("",!0)]),_:2},1024),h("span",null,W(b.title),1)]),default:$(()=>[(i(!0),k(K,null,oe(b.children,(I,N)=>(i(),B(s,{key:N,"data-index":N,index:I.key},{title:$(()=>[ue(W(I.title),1)]),default:$(()=>[P(g,{size:"16",color:"#4E5969"},{default:$(()=>[I.icon?(i(),B(te(I.icon),{key:0})):se("",!0)]),_:2},1024)]),_:2},1032,["data-index","index"]))),128))]),_:2},1032,["data-index","index"])):(i(),B(s,{key:1,index:b.key},{title:$(()=>[ue(W(b.title),1)]),default:$(()=>[P(g,{size:"16",color:"#4E5969"},{default:$(()=>[b.icon?(i(),B(te(b.icon),{key:0})):se("",!0)]),_:2},1024)]),_:2},1032,["index"]))],64))),128))]),_:2},1032,["data-index","index"])):(i(),B(s,{key:1,index:c.key},{title:$(()=>[ue(W(c.title),1)]),default:$(()=>[P(g,{size:"16",color:"#4E5969"},{default:$(()=>[c.icon?(i(),B(te(c.icon),{key:0})):se("",!0)]),_:2},1024)]),_:2},1032,["index"]))],64))),128))]),_:1},8,["default-active","collapse"])])}}}),jn=me(Kn,[["__scopeId","data-v-3eb4cfe9"]]),Vn={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},qn=h("path",{fill:"currentColor",d:"M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zm0 64v128h576V768zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0"},null,-1),Un=h("path",{fill:"currentColor",d:"M512 448a64 64 0 1 0 0-128a64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256a128 128 0 0 1 0 256"},null,-1),Gn=[qn,Un];function Zn(e,t){return i(),k("svg",Vn,[...Gn])}const Jn=ge({name:"ep-discount",render:Zn}),Qn={key:0,class:"lg-home-msg-container"},Xn={class:"lg-msg-tab-wrap"},Yn=["onClick"],eo={class:"lg-msg-content-wrap"},to={class:"msg-lf-icon"},no=["src"],oo={class:"msg-rt"},ao={class:"msg-tit"},lo={class:"msg-time"},so={class:"lg-msg-btn-wrap"},io={class:"lg-msg-btn-item"},uo=R({name:"lgMessage",__name:"index",props:{show:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=e,a=t,o=T([{title:"通知",name:"notice",totalNum:2},{title:"待办",name:"toHandle",totalNum:6}]),m=T(0),f=[{title:"通知！通知！今年过年放假一个月。",icon:"",time:"2024-04-28 16:48:00"},{title:"通知！通知！今年过年放假一个月。",icon:"",time:"2024-04-28 16:48:00"},{title:"通知！通知！今年过年放假一个月。",icon:"",time:"2024-04-28 16:48:00"},{title:"通知！通知！今年过年放假一个月。",icon:"",time:"2024-04-28 16:48:00"}];function g(p){m.value!=p&&(m.value=p)}function s(){a("close",{msg:"close"})}return(p,y)=>{const c=Jn,C=ce;return n.show?(i(),k("div",Qn,[h("div",Xn,[(i(!0),k(K,null,oe(w(o),(b,O)=>(i(),k("div",{class:G(["lg-msg-tab-item",O===w(m)?"activeTabSty":""]),key:O,onClick:I=>g(O)},W(b.title)+" ("+W(b.totalNum)+") ",11,Yn))),128))]),h("div",eo,[(i(),k(K,null,oe(f,(b,O)=>h("div",{class:"lg-msg-content-item",key:O},[h("div",to,[h("img",{src:b.icon||"https://image-1304394105.cos.ap-guangzhou.myqcloud.com/home/202404281501424.png",alt:""},null,8,no)]),h("div",oo,[h("div",ao,W(b.title),1),h("div",lo,W(b.time),1)])])),64))]),h("div",so,[h("div",io,[P(C,{class:"elIcon",size:"18"},{default:$(()=>[P(c)]),_:1}),ue(" 清空 ")]),ue(" | "),h("div",{class:"lg-msg-btn-item",onClick:s},"关闭")])])):se("",!0)}}}),co=me(uo,[["__scopeId","data-v-64fd1d60"]]),ro={class:"lg-breadcrumbs-container"},mo={class:"link-title"},po=R({name:"lgBreadcrumbs",__name:"index",setup(e){const t=Ne(),n=E(()=>{let a=[{title:"首页",path:"/layout/home"}];return t.matched.forEach(o=>{o.meta.title&&o.path&&o.path!=="/layout"&&o.path!=="/layout/home"&&a.push({title:o.meta.title,path:o.components?o.path:""})}),a});return(a,o)=>{const m=tn,f=en;return i(),k("div",ro,[P(f,{separator:"/"},{default:$(()=>[(i(!0),k(K,null,oe(w(n),(g,s)=>(i(),B(m,{key:s,to:g.path},{default:$(()=>[h("div",mo,W(g.title),1)]),_:2},1032,["to"]))),128))]),_:1})])}}}),ho=me(po,[["__scopeId","data-v-dac58d87"]]),fo={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},vo=h("path",{fill:"currentColor",d:"M128 192h768v128H128zm0 256h512v128H128zm0 256h768v128H128zm576-352l192 160l-192 128z"},null,-1),_o=[vo];function go(e,t){return i(),k("svg",fo,[..._o])}const yo=ge({name:"ep-expand",render:go}),bo={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ko=h("path",{fill:"currentColor",d:"M896 192H128v128h768zm0 256H384v128h512zm0 256H128v128h768zM320 384L128 512l192 128z"},null,-1),Mo=[ko];function xo(e,t){return i(),k("svg",bo,[...Mo])}const $o=ge({name:"ep-fold",render:xo}),Co={class:"lg-home-hd-container"},Io={class:"center-wrap"},wo={class:"rt-wrap"},So=["onClick"],To={key:0,class:"user-fun-wrap"},Eo=["onClick"],Po=R({name:"lgHeaderStrip",__name:"index",props:{isFoldMenu:{type:Boolean}},emits:["foldMenu"],setup(e,{emit:t}){const{setUpStore:n}=qe(),a=e,o=t,m=Ue(),f=Ne(),g=T([{title:"消息",tips:"消息通知",key:"message",icon:x(yt)},{title:"切换",tips:"切换主题模式",key:"switchTheme",icon:x(bt)},{title:"全屏",tips:"点击切换全屏模式",key:"fullScreen",icon:x(Le)},{title:"设置",key:"setting",tips:"页面设置",icon:x(Ge)}]),s=[{title:"个人中心",toPath:"/layout/userCenter",icon:x(kt)},{title:"退出登录",toPath:"/layout/login",icon:x(Mt)}],p=T(!1),y=l=>{p.value&&!l.target.closest(".user-fun-item")&&!l.target.closest(".user-avatar-img")&&(p.value=!1),L.value&&!l.target.closest(".button-item")&&!l.target.closest(".lg-home-msg-container")&&(L.value=!1)};function c(l){if(p.value=!1,l.toPath==="/layout/login"){$t({message:"退出登录成功,请重新登录!",type:"success",duration:1e3}),Ct.logOutLogIn();return}m.push(l.toPath)}function C(){p.value=!p.value,p.value&&document.addEventListener("click",y)}function b(){f.path!=="/layout/home"&&m.push("/layout/home")}const O=T(!0),I=()=>{O.value=!O.value;const l=document.documentElement;l&&(O.value?(l.classList.remove("dark"),l.classList.add("light"),document.documentElement.removeAttribute("theme"),n.setTheme("light")):(l.classList.remove("light"),document.documentElement.setAttribute("theme","dark"),l.classList.add("dark"),n.setTheme("dark")))},N={message:()=>{console.log("消息"),L.value=!L.value,L.value&&document.addEventListener("click",y)},switchTheme:()=>{console.log("切换主题"),I()},fullScreen:()=>{document.fullscreenElement?(document.exitFullscreen(),g.value[2].icon=Le):document.documentElement.requestFullscreen().then(()=>{g.value[2].icon=It}).catch(l=>{alert(`Error attempting to enable full-screen mode: ${l.message} (${l.name})`)})},setting:()=>{console.log("设置")}};function V(l){N[l.key]()}const L=T(!1);function X(){L.value=!1}function ie(){o("foldMenu",{state:!a.isFoldMenu})}return xt(()=>{document.removeEventListener("click",y)}),(l,r)=>{const v=$o,A=yo,q=ce,Y=ho,ae=ze,le=co;return i(),k("div",Co,[h("div",{class:"lf-wrap",onClick:b},"Lg Design Pro"),h("div",Io,[h("div",{class:"fold-btn",onClick:ie},[P(q,{size:"24"},{default:$(()=>[e.isFoldMenu?(i(),B(A,{key:1})):(i(),B(v,{key:0}))]),_:1})]),P(Y)]),h("div",wo,[(i(!0),k(K,null,oe(w(g),(U,u)=>(i(),k("div",{class:"button-item",onClick:d=>V(U),key:u},[P(ae,{class:"box-item",effect:"dark",content:U.tips,placement:"bottom"},{default:$(()=>[P(q,{size:"16",color:"#4E5969"},{default:$(()=>[(i(),B(te(U.icon)))]),_:2},1024)]),_:2},1032,["content"])],8,So))),128)),h("div",{class:"user-avatar"},[h("img",{onClick:C,class:"user-avatar-img",src:"https://image-1304394105.cos.ap-guangzhou.myqcloud.com/home/202402020850368.png",alt:""})]),w(p)?(i(),k("div",To,[(i(),k(K,null,oe(s,(U,u)=>h("div",{class:"user-fun-item",key:u,onClick:d=>c(U)},[P(q,{class:"user-fun-item-icon",size:"16",color:"#4E5969"},{default:$(()=>[(i(),B(te(U.icon)))]),_:2},1024),ue(" "+W(U.title),1)],8,Eo)),64))])):se("",!0),P(le,{show:w(L),onClose:X},null,8,["show"])])])}}}),No=me(Po,[["__scopeId","data-v-266e036b"]]),zo={class:"home-container"},Bo={class:"lg-container"},Oo={class:"lg-header"},Fo={class:"lg-container"},Lo={class:"lg-main-content"},Ao=R({name:"layoutManage",__name:"index",setup(e){const{setUpStore:t}=qe(),n=Ue(),a=Ne(),o=T([{title:"首页",path:"/layout/home",key:"1-1",icon:x(St),name:"layoutHome"},{title:"平台组件",path:"",key:"1-2",icon:x(Tt),children:[{title:"消息组件",key:"1-2-1",path:"/message",icon:x(Et)},{title:"用户操作",key:"1-2-2",path:"/message",icon:x(Pt)}]},{title:"业务工具",path:"",key:"1-3",icon:x(Nt),children:[{title:"图片上传",key:"1-3-1",path:"/layout/uploadImage",icon:x(De)},{title:"文件列表",key:"1-3-2",path:"/drawingBTool",icon:x(we)},{title:"图床管理",key:"1-3-3",path:"/drawingBTool",icon:x(He)}]},{title:"系统管理",path:"/",key:"1-4",icon:x(Ge),children:[{title:"权限管理",key:"1-4-1",path:"/drawingBTool",icon:x(De)},{title:"菜单管理",key:"1-4-2",path:"/layout/systemManagement/menuManagement",icon:x(we)},{title:"角色管理",key:"1-4-3",path:"/drawingBTool",icon:x(He)},{title:"部门管理",key:"1-4-4",path:"/drawingBTool",icon:x(we)}]},{title:"功能测试",path:"",key:"1-5",icon:x(zt),children:[{title:"测试Pinia",key:"1-5-1",path:"/layout/testFun/testPinia",icon:x(Bt),name:"layoutTestPinia"},{title:"测试页面",key:"1-5-2",path:"/layout/testFun/testPage",icon:x(Re),name:"layoutTestPage"},{title:"右键菜单",key:"1-5-3",path:"/layout/testFun/testRightMenu",icon:x(Re),name:"layoutTestRightMenu"},{title:"满天星空",key:"1-5-4",path:"/layout/testFun/starFlash",icon:x(Ot),name:"starFlash"},{title:"星空闪烁",key:"1-5-5",path:"/layout/testFun/starrySkyFlicker",icon:x(Ft),name:"starrySkyFlicker"},{title:"流水按钮",key:"1-5-6",path:"/layout/testFun/flowingWaterLamp",icon:x(Lt),name:"flowingWaterLamp"},{title:"航行轨迹",key:"1-5-7",path:"/layout/testFun/navigationTrajectory",icon:x(At),name:"navigationTrajectory"}]},{title:"项目入口",path:"/",key:"1-6",icon:x(Dt),children:[{title:"PC端项目",path:"/",key:"1-6-1",icon:x(Ht),children:[{title:"项目1",path:"/",key:"1-6-1-1",icon:""},{title:"项目2",path:"/",key:"1-6-1-2",icon:""}]},{title:"移动端项目",path:"/",key:"1-6-2",icon:x(Rt),children:[{title:"项目1",path:"/",key:"1-6-2-1",icon:""},{title:"项目2",path:"/",key:"1-6-2-2",icon:""}]},{title:"可视化大屏",path:"/",key:"1-6-3",icon:x(Wt),children:[{title:"项目1",path:"/",key:"1-6-3-1",icon:""},{title:"项目2",path:"/",key:"1-6-3-2",icon:""}]}]},{title:"接口文档",path:"/layout/toWebView?url=http://127.0.0.1:3000/api-docs/#/",key:"1-7",icon:x(Kt)},{title:"关于平台",path:"/layout/aboutPlatform",name:"aboutPlatform",key:"1-8",icon:x(jt)}]),m=T("1-1");function f(l){m.value=l.key;const r=g(o.value,l.key);r.path&&n.push(r.path),N.value=I.value.findIndex(v=>v.key===r.key)}function g(l,r){for(const v of l){if(v.key===r)return v;if(v.children&&v.children.length>0){const A=g(v.children,r);if(A)return A}}}function s(l,r){for(const v of l){if(v.path===r)return v;if(v.children&&v.children.length>0){const A=s(v.children,r);if(A)return A}}}function p(){let l=a.fullPath;const r=s(o.value,l);r&&(m.value=r.key,V({title:r.title,path:r.path,key:r.key,name:r.name}))}pe(()=>a,l=>{let r=l.fullPath,v=s(o.value,r);if(!v){V({title:l.meta.title,path:l.fullPath,key:"",name:l.name}),m.value="";return}m.value=v.key,V({title:v.title,path:v.path,key:v.key,name:v.name})},{deep:!0});function y(){if(t.getTheme==="dark"){const r=document.documentElement;r.classList.remove("light"),r.setAttribute("theme","dark"),r.classList.add("dark")}}const c=T(!1);function C(l){c.value=l.state,t.setMenuFold(l.state)}const b=E(()=>`calc(100% - ${c.value?"83px":"220px"})`);function O(){const l=t.getMenuFold;c.value=l||!1}const I=T([]),N=T(0);function V(l){if(I.value.some(v=>v.key===l.key))return;I.value.push(l);let r=a.fullPath;t.addKeepAlive(a.name),N.value=I.value.findIndex(v=>v.path===r)}function L(){I.value=t.getTags;let l=a.fullPath;N.value=I.value.findIndex(r=>r.path===l)}function X(l){N.value=I.value.findIndex(r=>r.path===l.path),n.push(l.path)}function ie(l){t.closeTag(l.key),t.delKeepAlive(l.name),I.value=I.value.filter(v=>v.key!==l.key);let r=a.path;if(l.path===r){N.value=I.value.length-1,n.push(I.value[N.value].path);return}N.value=I.value.findIndex(v=>v.path===r)}return L(),O(),y(),p(),(l,r)=>{const v=No,A=jn,q=Rn,Y=Ve("router-view");return i(),k("div",zo,[h("div",Bo,[h("div",Oo,[P(v,{isFoldMenu:w(c),onFoldMenu:C},null,8,["isFoldMenu"])]),h("div",Fo,[h("div",{class:"lg-aside",style:Ae({width:w(c)?"63px":"200px"})},[P(A,{menuData:w(o),chooseMenuKey:w(m),onSelect:f,isFoldMenu:w(c)},null,8,["menuData","chooseMenuKey","isFoldMenu"])],4),h("div",{class:"lg-main",style:Ae({width:w(b)})},[P(q,{values:w(I),currentTagIndex:w(N),onSelect:X,onClose:ie},null,8,["values","currentTagIndex"]),h("div",Lo,[P(Y,null,{default:$(({Component:ae})=>[(i(),B(wt,{include:w(t).getKeepAlive},[(i(),B(te(ae)))],1032,["include"]))]),_:1})])],4)])])])}}}),jo=me(Ao,[["__scopeId","data-v-03bc7c11"]]);export{jo as default};
