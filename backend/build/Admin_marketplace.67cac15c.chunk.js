"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5516],{9226:(N,M,n)=>{n.d(M,{Z:()=>v});var e=n(67294);const v=(k,D)=>{const[P,C]=(0,e.useState)(k);return(0,e.useEffect)(()=>{const u=setTimeout(()=>{C(k)},D);return()=>{clearTimeout(u)}},[k,D]),P}},2635:(N,M,n)=>{n.r(M),n.d(M,{MarketPlacePage:()=>fe,default:()=>kt});var e=n(67294),y=n(17034),v=n(185),k=n(49066),D=n(82777),P=n(11047),C=n(77296),u=n(41580),Ee=n(49123),V=n(42761),g=n(60698),Me=n(64593),E=n(86896),ye=n(9226);const ke=()=>{const a=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,r]=(0,e.useState)(a),l=()=>r(!0),i=()=>r(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",l),window.addEventListener("offline",i),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",i)}),[]),s};var be=n(87751),w=n(52624),B=n(85893);const Re=a=>(0,B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,B.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,B.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),Ce=Re;var X=n(17772);const xe=()=>{const{formatMessage:a}=(0,E.Z)(),{trackUsage:s}=(0,g.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(g.Y_,{title:a({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:a({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Ce,null),iconBackground:"alternative100",endAction:e.createElement(w.J,{as:X.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Se=n(72775),z=n(29728),Te=n(70968),Ze=n(89597),we=n(45697),t=n.n(we),O=n(71997),De=n(37108),_=n(40619),ee=n(82562);const te=({message:a,value:s,onChange:r,possibleFilters:l,onClear:i,customizeContent:d})=>{const o=(c,m)=>`${c} (${m})`;return e.createElement(_.P,{"data-testid":`${a}-button`,label:a,placeholder:a,size:"M",onChange:r,onClear:i,value:s,customizeContent:d,multi:!0},Object.entries(l).map(([c,m])=>e.createElement(ee.W,{"data-testid":`${c}-${m}`,key:c,value:c},o(c,m))))};te.propTypes={message:t().string.isRequired,value:t().array.isRequired,onChange:t().func.isRequired,possibleFilters:t().object.isRequired,onClear:t().func.isRequired,customizeContent:t().func.isRequired};const ae=te,ne=({source:a,onToggle:s,query:r,npmPackageType:l,possibleCategories:i,possibleCollections:d,handleSelectChange:o,handleSelectClear:c})=>{const{formatMessage:m}=(0,E.Z)();return e.createElement(De.J2,{source:a,onDismiss:s,padding:3,spacing:4},e.createElement(Le,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ae,{message:m({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:r?.collections||[],onChange:f=>{o({collections:f})},onClear:()=>c("collections"),possibleFilters:d,customizeContent:f=>m({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:f.length})}),l==="plugin"&&e.createElement(ae,{message:m({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:r?.categories||[],onChange:f=>{o({categories:f})},onClear:()=>c("categories"),possibleFilters:i,customizeContent:f=>m({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:f.length}),name:"categories"})))};ne.propTypes={onToggle:t().func.isRequired,source:t().shape({current:t().instanceOf(Element)}).isRequired,query:t().object.isRequired,npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Oe=ne,Le=(0,O.ZP)(P.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,U=({name:a,handleRemove:s})=>e.createElement(u.x,{padding:1},e.createElement(Se.V,{icon:e.createElement(Te.Z,null),onClick:s},a)),Ne=(0,O.ZP)(z.z)`
  height: ${({theme:a})=>a.sizes.input.S};
`,se=({possibleCollections:a,possibleCategories:s,npmPackageType:r,query:l,handleSelectClear:i,handleSelectChange:d})=>{const[o,c]=(0,e.useState)(!1),m=(0,e.useRef)(),{formatMessage:f}=(0,E.Z)(),h=()=>c(p=>!p),b=(p,R)=>{const T={[R]:l[R].filter(L=>L!==p)};d(T)};return e.createElement(e.Fragment,null,e.createElement(u.x,{paddingTop:1,paddingBottom:1},e.createElement(Ne,{variant:"tertiary",ref:m,"data-testid":"filters-button",startIcon:e.createElement(Ze.Z,null),onClick:h,size:"S"},f({id:"app.utils.filters",defaultMessage:"Filters"})),o&&e.createElement(Oe,{onToggle:h,source:m,query:l,handleSelectClear:i,handleSelectChange:d,possibleCollections:a,possibleCategories:s,npmPackageType:r})),l.collections?.map(p=>e.createElement(U,{name:p,key:p,handleRemove:()=>b(p,"collections")})),r==="plugin"&&l.categories?.map(p=>e.createElement(U,{name:p,key:p,handleRemove:()=>b(p,"categories")})))};U.propTypes={name:t().string.isRequired,handleRemove:t().func.isRequired},se.propTypes={npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,query:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Be=se;var Ie=n(77197),je=n(11276),Ae=n(67819),S=n(75515),$e=n(86031),Fe=n(19306);const Ve=(0,O.ZP)(u.x)`
  background: ${({theme:a})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${a.colors.neutral150} 100%)`};
  opacity: 0.33;
`,ze=()=>e.createElement(Fe.M,null,Array(12).fill(null).map((a,s)=>e.createElement(Ve,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),re=({content:a})=>e.createElement(u.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(ze,null),e.createElement(u.x,{position:"absolute",top:11,width:"100%"},e.createElement(P.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(w.J,{as:$e.Z,color:"",width:"160px",height:"88px"}),e.createElement(u.x,{paddingTop:6},e.createElement(S.Z,{variant:"delta",as:"p",textColor:"neutral600"},a)))));re.propTypes={content:t().string.isRequired};const Ue=re;var H=n(84495),ie=n(80994),He=n(86783),Qe=n(23450),Ge=n.n(Qe),We=n(61473),Ke=n(85018),le=n(65186),Je=n(36625),oe=n.n(Je);const I=({description:a,installMessage:s,disabled:r,handleCopy:l,pluginName:i})=>e.createElement(H.u,{"data-testid":`tooltip-${i}`,description:a},e.createElement(u.x,null,e.createElement(z.z,{size:"S",startIcon:e.createElement(le.Z,null),variant:"secondary",disabled:r,onClick:l},s))),Q=({strapiPeerDepVersion:a,strapiAppVersion:s,handleCopy:r,pluginName:l})=>{const{formatMessage:i}=(0,E.Z)(),d=oe().validRange(a),o=oe().satisfies(s,d),c=i({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!d)return e.createElement(I,{installMessage:c,pluginName:l,description:i({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:r});if(!o)return e.createElement(I,{installMessage:c,pluginName:l,description:i({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:d}),disabled:!0})}return e.createElement(z.z,{size:"S",startIcon:e.createElement(le.Z,null),variant:"secondary",onClick:r},c)};I.defaultProps={disabled:!1,handleCopy:null},I.propTypes={description:t().string.isRequired,installMessage:t().string.isRequired,disabled:t().bool,handleCopy:t().func,pluginName:t().string.isRequired},Q.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},Q.propTypes={strapiAppVersion:t().string,strapiPeerDepVersion:t().string,handleCopy:t().func.isRequired,pluginName:t().string.isRequired};const Ye=Q,G=({isInstalled:a,isInDevelopmentMode:s,commandToCopy:r,strapiAppVersion:l,strapiPeerDepVersion:i,pluginName:d})=>{const o=(0,g.lm)(),{formatMessage:c}=(0,E.Z)(),{trackUsage:m}=(0,g.rS)(),{copy:f}=(0,g.VP)(),h=async()=>{await f(r)&&(m("willInstallPlugin"),o({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return a?e.createElement(u.x,{paddingLeft:4},e.createElement(w.J,{as:Ke.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(S.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},c({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(Ye,{strapiAppVersion:l,strapiPeerDepVersion:i,handleCopy:h,pluginName:d}):null};G.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},G.propTypes={isInstalled:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,commandToCopy:t().string.isRequired,strapiAppVersion:t().string,strapiPeerDepVersion:t().string,pluginName:t().string.isRequired};const qe=G;var Xe=n(70004),_e=n(57750),et=n(69353),tt=n(7217);const at=(0,O.ZP)(Xe.i)`
  width: ${(0,g.Q1)(12)};
  transform: rotate(90deg);
`,W=({githubStars:a,npmDownloads:s,npmPackageType:r})=>{const{formatMessage:l}=(0,E.Z)();return e.createElement(P.k,{gap:1},!!a&&e.createElement(e.Fragment,null,e.createElement(w.J,{as:_e.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement(w.J,{as:et.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${r}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:a,package:r})},e.createElement(S.Z,{variant:"pi",textColor:"neutral800"},a)),e.createElement(at,{unsetMargin:!1,background:"neutral200"})),e.createElement(w.J,{as:tt.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${r}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:r})},e.createElement(S.Z,{variant:"pi",textColor:"neutral800"},s)))};W.defaultProps={githubStars:0,npmDownloads:0},W.propTypes={githubStars:t().number,npmDownloads:t().number,npmPackageType:t().string.isRequired};const nt=W,st=(0,O.ZP)(S.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,K=({npmPackage:a,isInstalled:s,useYarn:r,isInDevelopmentMode:l,npmPackageType:i,strapiAppVersion:d})=>{const{attributes:o}=a,{formatMessage:c}=(0,E.Z)(),{trackUsage:m}=(0,g.rS)(),f=r?`yarn add ${o.npmPackageName}`:`npm install ${o.npmPackageName}`,h=c({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),b=`https://market.strapi.io/${Ge().plural(i)}/${o.slug}`;return e.createElement(P.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(u.x,null,e.createElement(P.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(u.x,{as:"img",src:o.logo.url,alt:`${o.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(nt,{githubStars:o.githubStars,npmDownloads:o.npmDownloads,npmPackageType:i})),e.createElement(u.x,{paddingTop:4},e.createElement(S.Z,{as:"h3",variant:"delta"},e.createElement(P.k,{alignItems:"center"},o.name,o.validated&&!o.madeByStrapi&&e.createElement(H.u,{description:c({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(P.k,null,e.createElement(w.J,{as:He.Z,marginLeft:2,color:"success600"}))),o.madeByStrapi&&e.createElement(H.u,{description:h},e.createElement(P.k,null,e.createElement(u.x,{as:"img",src:We,alt:h,marginLeft:1,width:6,height:"auto"})))))),e.createElement(u.x,{paddingTop:2},e.createElement(st,{as:"p",variant:"omega",textColor:"neutral600"},o.description))),e.createElement(P.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(ie.Q,{size:"S",href:b,isExternal:!0,endIcon:e.createElement(X.Z,null),"aria-label":c({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:o.name}),variant:"tertiary",onClick:()=>m("didPluginLearnMore")},c({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(qe,{isInstalled:s,isInDevelopmentMode:l,commandToCopy:f,strapiAppVersion:d,strapiPeerDepVersion:o.strapiVersion,pluginName:o.name})))};K.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},K.propTypes={npmPackage:t().shape({id:t().string.isRequired,attributes:t().shape({name:t().string.isRequired,description:t().string.isRequired,slug:t().string.isRequired,npmPackageName:t().string.isRequired,npmPackageUrl:t().string.isRequired,repositoryUrl:t().string.isRequired,logo:t().object.isRequired,developerName:t().string.isRequired,validated:t().bool.isRequired,madeByStrapi:t().bool.isRequired,strapiCompatibility:t().oneOf(["v3","v4"]),strapiVersion:t().string,githubStars:t().number,npmDownloads:t().number}).isRequired}).isRequired,isInstalled:t().bool.isRequired,useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool,npmPackageType:t().string.isRequired,strapiAppVersion:t().string};const rt=K,J=({status:a,npmPackages:s,installedPackageNames:r,useYarn:l,isInDevelopmentMode:i,npmPackageType:d,strapiAppVersion:o,debouncedSearch:c})=>{const{formatMessage:m}=(0,E.Z)();if(a==="error")return e.createElement(P.k,{paddingTop:8},e.createElement(g.Hn,null));if(a==="loading")return e.createElement(P.k,{justifyContent:"center",paddingTop:8},e.createElement(Ie.a,null,"Loading content..."));const f=m({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:c});return s.length===0?e.createElement(Ue,{content:f}):e.createElement(je.r,{gap:4,"data-testid":"marketplace-results"},s.map(h=>e.createElement(Ae.P,{col:4,s:6,xs:12,style:{height:"100%"},key:h.id},e.createElement(rt,{npmPackage:h,isInstalled:r.includes(h.attributes.npmPackageName),useYarn:l,isInDevelopmentMode:i,npmPackageType:d,strapiAppVersion:o}))))};J.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},J.propTypes={status:t().string.isRequired,npmPackages:t().array,installedPackageNames:t().arrayOf(t().string),useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,npmPackageType:t().string.isRequired,strapiAppVersion:t().string,debouncedSearch:t().string};const ce=J,de=({pagination:a})=>e.createElement(u.x,{paddingTop:4},e.createElement(P.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(g.tU,{pagination:a})));de.propTypes={pagination:t().shape({page:t().number.isRequired,pageCount:t().number.isRequired,pageSize:t().number.isRequired,total:t().number.isRequired}).isRequired};const it=de,lt=n.p+"9d5d788027e86620c234.svg";var ot=n(53979);const ct=a=>(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...a,children:(0,B.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),dt=ct,Y=({isOnline:a,npmPackageType:s})=>{const{formatMessage:r}=(0,E.Z)(),{trackUsage:l}=(0,g.rS)(),i=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(ot.T,{title:r({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:r({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:a&&e.createElement(ie.Q,{startIcon:e.createElement(dt,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>l(i),isExternal:!0},r({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},ge=Y;Y.defaultProps={npmPackageType:"plugin"},Y.propTypes={isOnline:t().bool.isRequired,npmPackageType:t().string};const gt=()=>{const{formatMessage:a}=(0,E.Z)();return e.createElement(y.A,null,e.createElement(v.o,null,e.createElement(ge,{isOnline:!1}),e.createElement(P.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,g.Q1)(120)},e.createElement(u.x,{paddingBottom:2},e.createElement(S.Z,{textColor:"neutral700",variant:"alpha"},a({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(u.x,{paddingBottom:6},e.createElement(S.Z,{textColor:"neutral700",variant:"epsilon"},a({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:lt,alt:"offline",style:{width:"88px",height:"88px"}}))))},pt=(0,O.ZP)(u.x)`
  font-weight: ${({theme:a})=>a.fontWeights.semiBold};

  span {
    font-size: ${({theme:a})=>a.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,pe=({sortQuery:a,handleSelectChange:s})=>{const{formatMessage:r}=(0,E.Z)(),l={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(pt,null,e.createElement(_.P,{size:"S",id:"sort-by-select",value:a,customizeContent:()=>r(l[a].selected),onChange:i=>{s({sort:i})},label:r({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(l).map(([i,d])=>e.createElement(ee.W,{key:i,value:i},r(d.option)))))};pe.propTypes={sortQuery:t().string.isRequired,handleSelectChange:t().func.isRequired};const ut=pe;var mt=n(14087),ft=n(80129),j=n.n(ft),ue=n(88767);const me="https://market-api.strapi.io",ht=async(a={})=>{try{const s=j().stringify(j().parse(a)),r=await fetch(`${me}/plugins?${s}`);if(!r.ok)throw new Error("Failed to fetch marketplace plugins.");return await r.json()}catch(s){console.error(s)}return null},Pt=(a,s)=>{const r=(0,g.lm)();return(0,ue.useQuery)(["list-marketplace-plugins",s],()=>ht(s),{onSuccess(){a&&a()},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},vt=async(a={})=>{try{const s=j().stringify(j().parse(a)),r=await fetch(`${me}/providers?${s}`);if(!r.ok)throw new Error("Failed to fetch marketplace providers.");return await r.json()}catch(s){console.error(s)}return null},Et=(a,s)=>{const r=(0,g.lm)();return(0,ue.useQuery)(["list-marketplace-providers",s],()=>vt(s),{onSuccess(){a&&a()},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Mt({npmPackageType:a,debouncedSearch:s,query:r,tabQuery:l}){const{notifyStatus:i}=(0,mt.G)(),{formatMessage:d}=(0,E.Z)(),o=d({id:"global.marketplace",defaultMessage:"Marketplace"}),c=()=>{i(d({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:o}))},m={page:r?.page||1,pageSize:r?.pageSize||24},{data:f,status:h}=Pt(c,{...l.plugin,pagination:m,search:s}),{data:b,status:p}=Et(c,{...l.provider,pagination:m,search:s}),R=a==="plugin"?f:b,T=a==="plugin"?h:p,[L,A]=(0,e.useState)({}),[$,F]=(0,e.useState)({});(0,e.useEffect)(()=>{T==="success"&&A(R.meta.collections),h==="success"&&F(f.meta.categories)},[f?.meta.categories,h,R?.meta.collections,T]);const{pagination:q}=T==="success"?R.meta:{};return{pluginsResponse:f,providersResponse:b,pluginsStatus:h,providersStatus:p,possibleCollections:L,possibleCategories:$,pagination:q}}const yt=Mt,fe=()=>{const{formatMessage:a}=(0,E.Z)(),{trackUsage:s}=(0,g.rS)(),r=(0,e.useRef)(s),l=(0,g.lm)(),[{query:i},d]=(0,g.Kx)(),o=(0,ye.Z)(i?.search,500)||"",{autoReload:c,dependencies:m,useYarn:f,strapiVersion:h}=(0,g.L7)(),b=ke(),p=i?.npmPackageType||"plugin",[R,T]=(0,e.useState)({plugin:p==="plugin"?{...i}:{},provider:p==="provider"?{...i}:{}});(0,g.go)(),(0,e.useEffect)(()=>{r.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{c||l({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[l,c]);const{pluginsResponse:L,providersResponse:A,pluginsStatus:$,providersStatus:F,possibleCollections:q,possibleCategories:bt,pagination:he}=yt({npmPackageType:p,debouncedSearch:o,query:i,tabQuery:R});if(!b)return e.createElement(gt,null);const Rt=Z=>{const x=Z===0?"plugin":"provider",xt=R[x]&&Object.keys(R[x]).length;d(xt?{...R[x],search:i?.search||"",npmPackageType:x,page:1}:{npmPackageType:x,collections:[],categories:[],sort:"name:asc",page:1,search:i?.search||""})},Pe=Z=>{d({...Z,page:1}),T(x=>({...x,[p]:{...x[p],...Z}}))},Ct=Z=>{d({[Z]:[],page:null},"remove"),T(x=>({...x,[p]:{}}))},ve=Object.keys(m);return e.createElement(y.A,null,e.createElement(v.o,null,e.createElement(Me.q,{title:a({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ge,{isOnline:b,npmPackageType:p}),e.createElement(k.D,null,e.createElement(D.v,{label:a({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(p),onTabChange:Rt},e.createElement(P.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(C.m,null,e.createElement(C.O,null,a({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",$==="success"?`(${L.meta.pagination.total})`:"..."),e.createElement(C.O,null,a({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",F==="success"?`(${A.meta.pagination.total})`:"...")),e.createElement(u.x,{width:"25%"},e.createElement(Ee.w,{name:"searchbar",onClear:()=>d({search:"",page:1}),value:i?.search,onChange:Z=>d({search:Z.target.value,page:1}),clearLabel:a({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(P.k,{paddingBottom:4,gap:2},e.createElement(ut,{sortQuery:i?.sort||"name:asc",handleSelectChange:Pe}),e.createElement(Be,{npmPackageType:p,possibleCollections:q,possibleCategories:bt,query:i||{},handleSelectChange:Pe,handleSelectClear:Ct})),e.createElement(V.n,null,e.createElement(V.x,null,e.createElement(ce,{npmPackages:L?.data,status:$,installedPackageNames:ve,useYarn:f,isInDevelopmentMode:c,npmPackageType:"plugin",strapiAppVersion:h,debouncedSearch:o})),e.createElement(V.x,null,e.createElement(ce,{npmPackages:A?.data,status:F,installedPackageNames:ve,useYarn:f,isInDevelopmentMode:c,npmPackageType:"provider",debouncedSearch:o})))),he&&e.createElement(it,{pagination:he}),e.createElement(u.x,{paddingTop:8},e.createElement(xe,null)))))},kt=()=>e.createElement(g.O4,{permissions:be.Z.marketplace.main},e.createElement(fe,null))},19306:(N,M,n)=>{n.d(M,{M:()=>y});var e=n(71997);const y=e.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:v})=>v.spaces[4]};
`},17034:(N,M,n)=>{n.d(M,{A:()=>P});var e=n(85893),y=n(71997),v=n(41580);const k=(0,y.ZP)(v.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:C})=>C?"auto 1fr":"1fr"};
`,D=(0,y.ZP)(v.x)`
  overflow-x: hidden;
`,P=({sideNav:C,children:u})=>(0,e.jsxs)(k,{hasSideNav:!!C,children:[C,(0,e.jsx)(D,{paddingBottom:10,children:u})]})},57750:(N,M,n)=>{n.d(M,{Z:()=>v});var e=n(85893);const y=k=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...k,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),v=y},69353:(N,M,n)=>{n.d(M,{Z:()=>v});var e=n(85893);const y=k=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...k,children:(0,e.jsx)("path",{fill:"#212134",d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"})}),v=y}}]);
