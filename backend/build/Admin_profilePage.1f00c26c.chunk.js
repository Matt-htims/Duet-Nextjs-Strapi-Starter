"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9497],{81959:(q,Z,a)=>{a.r(Z),a.d(Z,{default:()=>ce});var e=a(67294),c=a(14087),y=a(185),j=a(53979),x=a(49066),G=a(29728),f=a(41580),v=a(11047),l=a(60698),M=a(85018),P=a(14916),L=a(64593),C=a(86896),b=a(88767),_=a(50592),ee=a(51319),W=a(19631),Y=a(16364),ae=a(25752),O=a(75515),R=a(11276),u=a(67819),D=a(8934),F=a(94123),te=a(45697),t=a.n(te),$=a(71997);const X=(0,$.ZP)(Y.o)`
  ::-ms-reveal {
    display: none;
  }
`,H=(0,$.ZP)(ae.E)`
  svg {
    height: ${(0,l.Q1)(16)};
    width: ${(0,l.Q1)(16)};
    path {
      fill: ${({theme:s})=>s.colors.neutral600};
    }
  }
`,N=({errors:s,onChange:d,values:m})=>{const{formatMessage:i}=(0,C.Z)(),[n,I]=(0,e.useState)(!1),[r,A]=(0,e.useState)(!1),[T,z]=(0,e.useState)(!1);return e.createElement(f.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(O.Z,{variant:"delta",as:"h2"},i({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(R.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(Y.o,{error:s.currentPassword?i({id:s.currentPassword,defaultMessage:s.currentPassword}):"",onChange:d,value:m.currentPassword,label:i({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:n?"text":"password",endAction:e.createElement(H,{onClick:h=>{h.stopPropagation(),I(w=>!w)},label:i(n?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},n?e.createElement(D.Z,null):e.createElement(F.Z,null))}))),e.createElement(R.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(X,{error:s.password?i({id:s.password,defaultMessage:s.password}):"",onChange:d,value:m.password,label:i({id:"global.password",defaultMessage:"Password"}),name:"password",type:r?"text":"password",autoComplete:"new-password",endAction:e.createElement(H,{onClick:h=>{h.stopPropagation(),A(w=>!w)},label:i(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?e.createElement(D.Z,null):e.createElement(F.Z,null))})),e.createElement(u.P,{s:12,col:6},e.createElement(X,{error:s.confirmPassword?i({id:s.confirmPassword,defaultMessage:s.confirmPassword}):"",onChange:d,value:m.confirmPassword,label:i({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:T?"text":"password",autoComplete:"new-password",endAction:e.createElement(H,{onClick:h=>{h.stopPropagation(),z(w=>!w)},label:i(T?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},T?e.createElement(D.Z,null):e.createElement(F.Z,null))})))))};N.propTypes={errors:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string}),onChange:t().func,values:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string})},N.defaultProps={errors:{},onChange(){},values:{currentPassword:"",password:"",confirmPassword:""}};const se=N;var J=a(40619),V=a(82562),ne=a(11700),re=a.n(ne);const B=({onChange:s,values:d,localeNames:m,allApplicationThemes:i})=>{const{formatMessage:n}=(0,C.Z)(),I=Object.keys(i).filter(r=>i[r]);return e.createElement(f.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(O.Z,{variant:"delta",as:"h2"},n({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(O.Z,null,n({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(f.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},n({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(R.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(J.P,{label:n({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:n({id:"global.select",defaultMessage:"Select"}),hint:n({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{s({target:{name:"preferedLanguage",value:null}})},clearLabel:n({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:d.preferedLanguage,onChange:r=>{s({target:{name:"preferedLanguage",value:r}})}},Object.entries(m).map(([r,A])=>e.createElement(V.W,{value:r,key:r},A)))),e.createElement(u.P,{s:12,col:6},e.createElement(J.P,{label:n({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:n({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:n({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:d.currentTheme,onChange:r=>{s({target:{name:"currentTheme",value:r}})}},I.map(r=>e.createElement(V.W,{value:r,key:r},n({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:n({id:r,defaultMessage:re()(r)})}))))))))};B.propTypes={allApplicationThemes:t().object,onChange:t().func,values:t().shape({preferedLanguage:t().string,currentTheme:t().string}),localeNames:t().object},B.defaultProps={allApplicationThemes:{},onChange(){},values:{preferedLanguage:null,currentTheme:""},localeNames:{}};const oe=B,Q=({errors:s,onChange:d,values:m})=>{const{formatMessage:i}=(0,C.Z)();return e.createElement(f.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(O.Z,{variant:"delta",as:"h2"},i({id:"global.profile",defaultMessage:"Profile"})),e.createElement(R.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:s.firstname,onChange:d,value:m.firstname,type:"text",name:"firstname",required:!0})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:s.lastname,onChange:d,value:m.lastname,type:"text",name:"lastname"})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:s.email,onChange:d,value:m.email,type:"email",name:"email",required:!0})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:s.username,onChange:d,value:m.username,type:"text",name:"username"})))))};Q.propTypes={errors:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string}),onChange:t().func,values:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string})},Q.defaultProps={errors:{},onChange(){},values:{firstname:"",lastname:"",username:"",email:""}};const le=Q;var ie=a(87561),de=a(17405);const me=ie.Ry().shape(de.Rw),ce=()=>{const{changeLocale:s,localeNames:d}=(0,_.Z)(),{setUserDisplayName:m}=(0,l.L7)(),i=(0,b.useQueryClient)(),{formatMessage:n}=(0,C.Z)(),{trackUsage:I}=(0,l.rS)(),r=(0,l.lm)(),{lockApp:A,unlockApp:T}=(0,l.o1)(),{notifyStatus:z}=(0,c.G)(),{currentTheme:h,themes:w,onChangeTheme:ue}=(0,ee.M1)(),{get:K,put:ge}=(0,l.kY)();(0,l.go)();const{isLoading:pe,data:U}=(0,b.useQuery)("user",async()=>{const{data:o}=await K("/admin/users/me");return o.data},{onSuccess(){z(n({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),{isLoading:fe,data:he}=(0,b.useQuery)(["providers","isSSOLocked"],async()=>{if(window.strapi.isEE){const{data:{data:o}}=await K("/admin/providers/isSSOLocked");return o}return{isSSOLocked:!1}},{onError(){r({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})}}),we=pe||fe,k=(0,b.useMutation)(async o=>{const{confirmPassword:g,currentTheme:p,...E}=o,{data:S}=await ge("/admin/users/me",E);return{...S.data,currentTheme:o.currentTheme}},{async onSuccess(o){await i.invalidateQueries("user");const{email:g,firstname:p,lastname:E,username:S,preferedLanguage:Te}=o;l.I8.setUserInfo({email:g,firstname:p,lastname:E,username:S,preferedLanguage:Te});const Ze=o.username||(0,W.Pp)(o.firstname,o.lastname);m(Ze),s(o.preferedLanguage),ue(o.currentTheme),I("didChangeMode",{newMode:o.currentTheme}),r({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){T()},refetchActive:!0}),{isLoading:Ee}=k,ve=async(o,{setErrors:g})=>{A();const p=o.username||null;k.mutate({...o,username:p},{onError(E){const S=E?.response?.data;return S?.data?g(S.data):r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};if(we)return e.createElement(y.o,{"aria-busy":"true"},e.createElement(L.q,{title:n({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(j.T,{title:n({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(x.D,null,e.createElement(l.dO,null)));const Pe=he?.isSSOLocked,{email:Se,firstname:ye,lastname:Me,username:Le,preferedLanguage:Ie}=U,Ae={email:Se,firstname:ye,lastname:Me,username:Le,preferedLanguage:Ie,currentTheme:h};return e.createElement(y.o,{"aria-busy":Ee},e.createElement(L.q,{title:n({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(P.J9,{onSubmit:ve,initialValues:Ae,validateOnChange:!1,validationSchema:me,enableReinitialize:!0},({errors:o,values:g,handleChange:p,isSubmitting:E})=>e.createElement(l.l0,null,e.createElement(j.T,{title:U.username||(0,W.Pp)(U.firstname,U.lastname),primaryAction:e.createElement(G.z,{startIcon:e.createElement(M.Z,null),loading:E,type:"submit"},n({id:"global.save",defaultMessage:"Save"}))}),e.createElement(f.x,{paddingBottom:10},e.createElement(x.D,null,e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(le,{errors:o,onChange:p,values:g}),!Pe&&e.createElement(se,{errors:o,onChange:p,values:g}),e.createElement(oe,{allApplicationThemes:w,onChange:p,values:g,localeNames:d})))))))}},17405:(q,Z,a)=>{a.d(Z,{YM:()=>l,Rw:()=>x});var e=a(87561),c=a(60698);const y={firstname:e.Z_().trim().required(c.I0.required),lastname:e.Z_(),email:e.Z_().email(c.I0.email).lowercase().required(c.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,c.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,c.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(M,P)=>M?P.required(c.I0.required):P)},x={...y,currentPassword:e.Z_().when(["password","confirmPassword"],(M,P,L)=>M||P?L.required(c.I0.required):L),preferedLanguage:e.Z_().nullable()},f={roles:e.IX().min(1,c.I0.required).required(c.I0.required)},l=e.Ry().shape({...y,isActive:e.Xg(),...f})}}]);
