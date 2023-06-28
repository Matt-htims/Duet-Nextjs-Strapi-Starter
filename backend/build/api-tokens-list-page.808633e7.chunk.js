"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8056],{56856:(W,h,t)=>{t.d(h,{Z:()=>N});var e=t(67294),s=t(15234),L=t(79031),y=t(37909),v=t(75515),V=t(11047),r=t(60698),M=t(45697),n=t.n(M),Z=t(16550),x=t(41580),A=t(12028),O=t(20022),E=t(86896);const b=({tokenName:a,onClickDelete:c,tokenType:u})=>{const{formatMessage:k}=(0,E.Z)(),{trackUsage:p}=(0,r.rS)(),[g,i]=(0,e.useState)(!1),T=()=>{i(!1),p("willDeleteToken",{tokenType:u}),c()};return e.createElement(x.x,{paddingLeft:1,onClick:f=>f.stopPropagation()},e.createElement(A.h,{onClick:()=>{i(!0)},label:k({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${a}`}),name:"delete",noBorder:!0,icon:e.createElement(O.Z,null)}),e.createElement(r.QH,{onToggleDialog:()=>i(!1),onConfirm:T,isOpen:g}))};b.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired,tokenType:n().string.isRequired};const Y=b;var F=t(8934),w=t(71997);const $={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},K=(0,w.ZP)(r.rU)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,C=({tokenName:a,tokenId:c,buttonType:u,children:k})=>{const{formatMessage:p}=(0,E.Z)(),{location:{pathname:g}}=(0,Z.k6)();return e.createElement(K,{to:`${g}/${c}`,title:p($[u],{target:a})},k)};C.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},C.defaultProps={buttonType:"edit"};const P=C,m=({tokenName:a,tokenId:c})=>e.createElement(P,{tokenName:a,tokenId:c,buttonType:"read"},e.createElement(F.Z,null));m.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const S=m;var D=t(4585);const I=({tokenName:a,tokenId:c})=>e.createElement(P,{tokenName:a,tokenId:c},e.createElement(D.Z,null));I.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const Q=I,d=({permissions:a,headers:c,contentType:u,isLoading:k,tokens:p,onConfirmDelete:g,tokenType:i})=>{const{canDelete:T,canUpdate:f,canRead:R}=a,B=T||f||R,[{query:U}]=(0,r.Kx)(),[,H]=U?U.sort.split(":"):"ASC",{push:j,location:{pathname:o}}=(0,Z.k6)(),{trackUsage:J}=(0,r.rS)(),G=p.sort((l,X)=>{const z=l.name.localeCompare(X.name);return H==="DESC"?-z:z});return e.createElement(r.tM,{headers:c,contentType:u,rows:p,withBulkActions:B,isLoading:k,onConfirmDelete:g},e.createElement(s.p,null,G.map(l=>e.createElement(L.Tr,{key:l.id,...(0,r.X7)({fn(){J("willEditTokenFromList",{tokenType:i}),j(`${o}/${l.id}`)},condition:f})},e.createElement(y.Td,{maxWidth:(0,r.Q1)(250)},e.createElement(v.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},l.name)),e.createElement(y.Td,{maxWidth:(0,r.Q1)(250)},e.createElement(v.Z,{textColor:"neutral800",ellipsis:!0},l.description)),e.createElement(y.Td,null,e.createElement(v.Z,{textColor:"neutral800"},e.createElement(r.ij,{timestamp:new Date(l.createdAt)}))),e.createElement(y.Td,null,l.lastUsedAt&&e.createElement(v.Z,{textColor:"neutral800"},e.createElement(r.ij,{timestamp:new Date(l.lastUsedAt)}))),B&&e.createElement(y.Td,null,e.createElement(V.k,{justifyContent:"end"},f&&e.createElement(Q,{tokenName:l.name,tokenId:l.id}),!f&&R&&e.createElement(S,{tokenName:l.name,tokenId:l.id}),T&&e.createElement(Y,{tokenName:l.name,onClickDelete:()=>g(l.id),tokenType:i})))))))};d.propTypes={tokens:n().array,permissions:n().shape({canRead:n().bool,canDelete:n().bool,canUpdate:n().bool}).isRequired,headers:n().arrayOf(n().shape({cellFormatter:n().func,key:n().string.isRequired,metadatas:n().shape({label:n().string.isRequired,sortable:n().bool}).isRequired,name:n().string.isRequired})),contentType:n().string.isRequired,isLoading:n().bool,onConfirmDelete:n().func,tokenType:n().string.isRequired},d.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const N=d},47670:(W,h,t)=>{t.d(h,{Z:()=>e,f:()=>s});const e="api-token",s="transfer-token"},87427:(W,h,t)=>{t.r(h),t.d(h,{default:()=>C});var e=t(67294),s=t(60698),L=t(87751),y=t(185),v=t(53979),V=t(49066),r=t(29728),M=t(96315),n=t(80129),Z=t.n(n),x=t(86896),A=t(88767),O=t(16550),E=t(47670),b=t(56856);const F=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],$=()=>{(0,s.go)();const P=(0,A.useQueryClient)(),{formatMessage:m}=(0,x.Z)(),S=(0,s.lm)(),{allowedActions:{canCreate:D,canDelete:I,canUpdate:Q,canRead:d}}=(0,s.ss)(L.Z.settings["api-tokens"]),{push:N}=(0,O.k6)(),{trackUsage:a}=(0,s.rS)(),{startSection:c}=(0,s.c1)(),u=(0,e.useRef)(c),{get:k,del:p}=(0,s.kY)();(0,e.useEffect)(()=>{u.current&&u.current("apiTokens")},[]),(0,e.useEffect)(()=>{N({search:Z().stringify({sort:"name:ASC"},{encode:!1})})},[N]);const g=F.map(o=>({...o,metadatas:{...o.metadatas,label:m(o.metadatas.label)}})),{data:i,status:T,isFetching:f}=(0,A.useQuery)(["api-tokens"],async()=>{a("willAccessTokenList",{tokenType:E.Z});const{data:{data:o}}=await k("/admin/api-tokens");return a("didAccessTokenList",{number:o.length,tokenType:E.Z}),o},{enabled:d,onError(){S({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),R=d&&(T!=="success"&&T!=="error"||T==="success"&&f),B=(0,A.useMutation)(async o=>{await p(`/admin/api-tokens/${o}`)},{async onSuccess(){await P.invalidateQueries(["api-tokens"]),a("didDeleteToken")},onError(o){o?.response?.data?.data?S({type:"warning",message:o.response.data.data}):S({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),U=d&&i,H=d&&!i&&!D,j=d&&!i&&D;return e.createElement(y.o,{"aria-busy":R},e.createElement(s.SL,{name:"API Tokens"}),e.createElement(v.T,{title:m({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:m({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:D?e.createElement(s.Qj,{"data-testid":"create-api-token-button",startIcon:e.createElement(M.Z,null),size:"S",onClick:()=>a("willAddTokenFromList",{tokenType:E.Z}),to:"/settings/api-tokens/create"},m({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),e.createElement(V.D,null,!d&&e.createElement(s.ZF,null),U&&e.createElement(b.Z,{permissions:{canRead:d,canDelete:I,canUpdate:Q},headers:g,contentType:"api-tokens",rows:i,isLoading:R,onConfirmDelete:o=>B.mutateAsync(o),tokens:i,tokenType:E.Z}),j&&e.createElement(s.dJ,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(r.z,{variant:"secondary",startIcon:e.createElement(M.Z,null)},m({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),H&&e.createElement(s.dJ,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},C=()=>e.createElement(s.O4,{permissions:L.Z.settings["api-tokens"].main},e.createElement($,null))}}]);
