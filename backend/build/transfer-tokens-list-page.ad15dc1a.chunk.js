"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9600],{56856:(H,h,t)=>{t.d(h,{Z:()=>B});var e=t(67294),o=t(15234),R=t(79031),y=t(37909),C=t(75515),V=t(11047),l=t(60698),M=t(45697),n=t.n(M),b=t(16550),O=t(41580),S=t(12028),x=t(20022),E=t(86896);const N=({tokenName:s,onClickDelete:c,tokenType:u})=>{const{formatMessage:v}=(0,E.Z)(),{trackUsage:f}=(0,l.rS)(),[g,i]=(0,e.useState)(!1),T=()=>{i(!1),f("willDeleteToken",{tokenType:u}),c()};return e.createElement(O.x,{paddingLeft:1,onClick:p=>p.stopPropagation()},e.createElement(S.h,{onClick:()=>{i(!0)},label:v({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${s}`}),name:"delete",noBorder:!0,icon:e.createElement(x.Z,null)}),e.createElement(l.QH,{onToggleDialog:()=>i(!1),onConfirm:T,isOpen:g}))};N.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired,tokenType:n().string.isRequired};const K=N;var F=t(8934),j=t(71997);const $={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},W=(0,j.ZP)(l.rU)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:s})=>s.colors.neutral800};
      }
    }
  }
`,A=({tokenName:s,tokenId:c,buttonType:u,children:v})=>{const{formatMessage:f}=(0,E.Z)(),{location:{pathname:g}}=(0,b.k6)();return e.createElement(W,{to:`${g}/${c}`,title:f($[u],{target:s})},v)};A.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},A.defaultProps={buttonType:"edit"};const Z=A,m=({tokenName:s,tokenId:c})=>e.createElement(Z,{tokenName:s,tokenId:c,buttonType:"read"},e.createElement(F.Z,null));m.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const k=m;var L=t(4585);const I=({tokenName:s,tokenId:c})=>e.createElement(Z,{tokenName:s,tokenId:c},e.createElement(L.Z,null));I.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const Q=I,d=({permissions:s,headers:c,contentType:u,isLoading:v,tokens:f,onConfirmDelete:g,tokenType:i})=>{const{canDelete:T,canUpdate:p,canRead:D}=s,U=T||p||D,[{query:P}]=(0,l.Kx)(),[,Y]=P?P.sort.split(":"):"ASC",{push:w,location:{pathname:a}}=(0,b.k6)(),{trackUsage:J}=(0,l.rS)(),G=f.sort((r,X)=>{const z=r.name.localeCompare(X.name);return Y==="DESC"?-z:z});return e.createElement(l.tM,{headers:c,contentType:u,rows:f,withBulkActions:U,isLoading:v,onConfirmDelete:g},e.createElement(o.p,null,G.map(r=>e.createElement(R.Tr,{key:r.id,...(0,l.X7)({fn(){J("willEditTokenFromList",{tokenType:i}),w(`${a}/${r.id}`)},condition:p})},e.createElement(y.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(C.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},r.name)),e.createElement(y.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(C.Z,{textColor:"neutral800",ellipsis:!0},r.description)),e.createElement(y.Td,null,e.createElement(C.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(r.createdAt)}))),e.createElement(y.Td,null,r.lastUsedAt&&e.createElement(C.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(r.lastUsedAt)}))),U&&e.createElement(y.Td,null,e.createElement(V.k,{justifyContent:"end"},p&&e.createElement(Q,{tokenName:r.name,tokenId:r.id}),!p&&D&&e.createElement(k,{tokenName:r.name,tokenId:r.id}),T&&e.createElement(K,{tokenName:r.name,onClickDelete:()=>g(r.id),tokenType:i})))))))};d.propTypes={tokens:n().array,permissions:n().shape({canRead:n().bool,canDelete:n().bool,canUpdate:n().bool}).isRequired,headers:n().arrayOf(n().shape({cellFormatter:n().func,key:n().string.isRequired,metadatas:n().shape({label:n().string.isRequired,sortable:n().bool}).isRequired,name:n().string.isRequired})),contentType:n().string.isRequired,isLoading:n().bool,onConfirmDelete:n().func,tokenType:n().string.isRequired},d.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const B=d},47670:(H,h,t)=>{t.d(h,{Z:()=>e,f:()=>o});const e="api-token",o="transfer-token"},70798:(H,h,t)=>{t.r(h),t.d(h,{default:()=>A});var e=t(67294),o=t(60698),R=t(87751),y=t(185),C=t(53979),V=t(49066),l=t(29728),M=t(96315),n=t(80129),b=t.n(n),O=t(86896),S=t(88767),x=t(16550),E=t(47670),N=t(56856);const F=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],$=()=>{(0,o.go)();const Z=(0,S.useQueryClient)(),{formatMessage:m}=(0,O.Z)(),k=(0,o.lm)(),{allowedActions:{canCreate:L,canDelete:I,canUpdate:Q,canRead:d}}=(0,o.ss)(R.Z.settings["transfer-tokens"]),{push:B}=(0,x.k6)(),{trackUsage:s}=(0,o.rS)(),{startSection:c}=(0,o.c1)(),u=(0,e.useRef)(c),{get:v,del:f}=(0,o.kY)();(0,e.useEffect)(()=>{u.current&&u.current("transferTokens")},[]),(0,e.useEffect)(()=>{B({search:b().stringify({sort:"name:ASC"},{encode:!1})})},[B]);const g=F.map(a=>({...a,metadatas:{...a.metadatas,label:m(a.metadatas.label)}})),{data:i,status:T,isFetching:p}=(0,S.useQuery)(["transfer-tokens"],async()=>{s("willAccessTokenList",{tokenType:E.f});const{data:{data:a}}=await v("/admin/transfer/tokens");return s("didAccessTokenList",{number:a.length,tokenType:E.f}),a},{enabled:d,onError(a){console.log("error",a),a?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?k({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),D=d&&(T!=="success"&&T!=="error"||T==="success"&&p),U=(0,S.useMutation)(async a=>{await f(`/admin/transfer/tokens/${a}`)},{async onSuccess(){await Z.invalidateQueries(["transfer-tokens"])},onError(a){a?.response?.data?.data?k({type:"warning",message:a.response.data.data}):a?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?k({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),P=d&&i,Y=d&&!i&&!L,w=d&&!i&&L;return e.createElement(y.o,{"aria-busy":D},e.createElement(o.SL,{name:"Transfer Tokens"}),e.createElement(C.T,{title:m({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:m({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:L?e.createElement(o.Qj,{"data-testid":"create-transfer-token-button",startIcon:e.createElement(M.Z,null),size:"S",onClick:()=>s("willAddTokenFromList",{tokenType:E.f}),to:"/settings/transfer-tokens/create"},m({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})):void 0}),e.createElement(V.D,null,!d&&e.createElement(o.ZF,null),P&&e.createElement(N.Z,{permissions:{canRead:d,canDelete:I,canUpdate:Q},headers:g,contentType:"trasfer-tokens",rows:i,isLoading:D,onConfirmDelete:a=>U.mutateAsync(a),tokens:i,tokenType:E.f}),w&&e.createElement(o.dJ,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:e.createElement(l.z,{variant:"secondary",startIcon:e.createElement(M.Z,null)},m({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"}))}),Y&&e.createElement(o.dJ,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},A=()=>e.createElement(o.O4,{permissions:R.Z.settings["transfer-tokens"].main},e.createElement($,null))}}]);
