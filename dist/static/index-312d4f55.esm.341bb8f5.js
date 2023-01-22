import{r as d,j as i,ah as oe,ae as H,aF as ie,ai as ae,cL as ce,v as Y,y as ue,E as le,at as de,g as R,P as pe,cM as me,M as fe,cN as he,cO as ye,cP as ge,b9 as Te,bx as Pe,G,h as F,ac as N,a4 as be,bn as Le,a3 as w,a2 as C,af as Ie,F as Oe,aN as Se,cQ as xe,aa as M,l as Re,q as ve,t as _e,aR as $,cR as je,cS as we,cT as Ce,cU as De,aL as q,d as Ee,cV as Fe,c1 as $e,c2 as Ae,aP as Ne,cW as Me,cX as qe,br as W,bt as We,cY as ke,bi as Be,aS as Ue,aV as Ve,cZ as He,c_ as Ye,c$ as Ge,bj as Ke}from"./sanity.03975367.js";import{u as Xe,c as k,b as ze}from"./index-989e9e04.esm.8ba64606.js";import{P as Qe}from"./PaneItem-c5593821.esm.9de3ce13.js";import"./index.a83fe02b.js";function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?B(Object(t),!0).forEach(function(r){Ze(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ze(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const U=100,A=2e3,K={by:[{field:"_createdAt",direction:"desc"}]},Je={};function et(e,n){return e._id?G(e._id):"item-".concat(n)}function tt(e){return Ce(e).map(n=>{const t=n.draft||n.published;return f(f({},t),{},{hasPublished:!!n.published,hasDraft:!!n.draft})})}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function rt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const r=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(r[0]==="$"){const o=r.slice(1),u=n[o];return typeof u=="string"?u:null}return r}function st(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(n=>[it(n),(n.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function it(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function at(e,n){const t=e.by.map(r=>{if(r.mapWith)return r;const o=ct(n,r.field);return o?lt(o,"datetime")?f(f({},r),{},{mapWith:"dateTime"}):o.jsonType==="string"?f(f({},r),{},{mapWith:"lower"}):r:r});return t.every((r,o)=>r===e.by[o])?e:f(f({},e),{},{by:t})}function ct(e,n){const t=fe(n);let r=e;for(const o of t){if(!r)return;if(typeof o=="string"){r=ut(r,o);continue}if(!(he(o)||ye(o))||r.jsonType!=="array")return;const[s,a]=r.of||[];if(a||!s)return;if(!ge(s)){r=s;continue}const[p,y]=s.to||[];if(y||!p)return;r=p}return r}function ut(e,n){if(!("fields"in e))return;const t=e.fields.find(r=>r.name===n);return t?t.type:void 0}function lt(e,n){let t=e.type;for(;t;){if(t.name===n||!t.type&&t.jsonType===n)return!0;t=t.type}return!1}function dt(e){const{childItemId:n,error:t,filterIsSimpleTypeContraint:r,fullList:o,isActive:u,isLoading:s,items:a,layout:p,onListChange:y,onRetry:m,showIcons:l}=e,b=Y(),{collapsed:v}=Te(),{collapsed:g,index:O}=Pe(),[L,_]=d.exports.useState(!1);d.exports.useEffect(()=>{if(g)return;const c=setTimeout(()=>{_(!0)},0);return()=>{clearTimeout(c)}},[g]);const S=d.exports.useCallback(c=>{const T=G(c._id),h=n===T;return i(Qe,{icon:l===!1?!1:void 0,id:T,pressed:!u&&h,selected:u&&h,layout:p,schemaType:b.get(c._type),value:c})},[n,u,p,b,l]),I=d.exports.useMemo(()=>{if(!L)return null;if(t)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(N,{width:1,children:R(be,{paddingX:4,paddingY:5,space:4,children:[i(Le,{as:"h3",children:"Could not fetch list items"}),R(w,{as:"p",children:["Error: ",i("code",{children:t.message})]}),m&&i(C,{children:i(H,{icon:Ie,onClick:m,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(ze,{ms:300,children:R(Oe,{children:[i(Se,{muted:!0}),i(C,{marginTop:3,children:i(w,{align:"center",muted:!0,size:1,children:"Loading documents\u2026"})})]})})});if(!s&&a.length===0)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(N,{width:1,children:i(C,{paddingX:4,paddingY:5,children:i(w,{align:"center",muted:!0,size:2,children:r?"No documents of this type":"No matching documents"})})})});const c=o&&a.length===A;return R(C,{padding:2,children:[a.length>0&&i(xe,{gap:1,getItemKey:et,items:a,renderItem:S,onChange:y},"".concat(O,"-").concat(g)),s&&i(M,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(w,{align:"center",muted:!0,size:1,children:"Loading\u2026"})}),c&&i(M,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:R(w,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",A," documents"]})})]})},[t,r,o,y,s,a,m,S,L,g,O]);return i(Re,{overflow:v?void 0:"auto",children:I})}const X=d.exports.memo(e=>{let{index:n,initialValueTemplates:t=[],menuItems:r=[],menuItemGroups:o=[],setLayout:u,setSortOrder:s,title:a}=e;const{features:p}=Xe(),y=d.exports.useMemo(()=>({setLayout:m=>{let{layout:l}=m;u(l)},setSortOrder:m=>{s(m)}}),[u,s]);return i(oe,{backButton:p.backButton&&n>0&&i(H,{as:ie,"data-as":"a",icon:ae,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:y,menuItemGroups:o,menuItems:r})})});X.displayName="DocumentListPaneHeader";const pt={result:null,error:!1},mt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new De,r=t.next.bind(t);return e.pipe(q(s=>({client:s.client,query:s.query,params:s.params})),Ee(Fe),$e(1),Ae()).pipe(Ne(s=>{const a=Me(s.client,s.query,s.params,n).pipe(q(mt),qe());return W($({loading:!0}).pipe(We(400),ke(a)),a)})).pipe(Be(pt),Ue((s,a)=>Ve($(ft(s)),W(He(window,"online"),t).pipe(Ye(1),Ge(a)))),Ke((s,a)=>f(f(f({},s),a),{},{onRetry:r})))};function yt(e){var n;const{apiVersion:t,defaultOrdering:r,filter:o,params:u,sortOrder:s}=e,a=ve(_e),[p,y]=d.exports.useState(!1),m=d.exports.useRef(p),[l,b]=d.exports.useState(null),v=(l==null?void 0:l.error)||null,g=(l==null?void 0:l.loading)||l===null,O=l==null?void 0:l.onRetry,L=(n=l==null?void 0:l.result)==null?void 0:n.documents,_=d.exports.useMemo(()=>L?tt(L):null,[L]),S=d.exports.useMemo(()=>{const c=s==null?void 0:s.extendedProjection,T=["_id","_type"],h=T.join(","),P=r||(s==null?void 0:s.by)||[],j=p?A:U,D=P.length>0?P:K.by,x=ot(D);if(c){const E=T.concat(c).join(",");return["*[".concat(o,"] {").concat(E,"}"),"order(".concat(x,") [0...").concat(j,"]"),"{".concat(h,"}")].join("|")}return"*[".concat(o,"]|order(").concat(x,")[0...").concat(j,"]{").concat(h,"}")},[r,o,p,s]),I=d.exports.useCallback(c=>{let{toIndex:T}=c;g||m.current||T>=U/2&&(y(!0),m.current=!0)},[g]);return d.exports.useEffect(()=>{const c=p?P=>Boolean(P.result):()=>!0;b(P=>P?f(f({},P),{},{loading:!0}):null);const h=ht($({client:a,query:S,params:u}),{apiVersion:t,tag:"desk.document-list"}).pipe(je(c)).subscribe(b);return()=>h.unsubscribe()},[t,a,p,S,u]),d.exports.useEffect(()=>{b(null),y(!1),m.current=!1},[o,u,s,t]),{error:v,fullList:p,handleListChange:I,isLoading:g,items:_,onRetry:O}}const V=[];function gt(e){const n=d.exports.useRef(e);return we(n.current,e)||(n.current=e),n.current}const It=d.exports.memo(function(n){const{childItemId:t,index:r,isActive:o,isSelected:u,pane:s,paneKey:a}=n,p=Y(),{name:y}=ue(),{defaultLayout:m="default",displayOptions:l,initialValueTemplates:b=V,menuItems:v,menuItemGroups:g,options:O,title:L}=s,{apiVersion:_,defaultOrdering:S=V,filter:I}=O,c=gt(O.params||Je),T=s.source,h=d.exports.useMemo(()=>rt(I,c),[I,c]),P=(l==null?void 0:l.showIcons)!==!1,[j,D]=k(h,"layout",m),[x,E]=k(h,"sortOrder",K),z=h&&x?at(x,p.get(h)):x,Q=le(z),Z=st(I),{error:J,fullList:ee,handleListChange:te,isLoading:ne,items:re,onRetry:se}=yt({defaultOrdering:S,filter:I,params:c,sortOrder:Q,apiVersion:_});return i(de,{name:T||y,children:R(pe,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:u,children:[me,i(X,{index:r,initialValueTemplates:b,menuItems:v,menuItemGroups:g,setLayout:D,setSortOrder:E,title:L}),i(dt,{childItemId:t,error:J,filterIsSimpleTypeContraint:Z,fullList:ee,isActive:o,isLoading:ne,items:re,layout:j,onListChange:te,onRetry:se,showIcons:P})]})})});export{It as default};