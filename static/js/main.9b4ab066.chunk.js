(this["webpackJsonplabluby-projeto"]=this["webpackJsonplabluby-projeto"]||[]).push([[0],{211:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,l,d,b,j,p,u,x,h,m,g,O,f,v,w,k,y,C,F,N,S,z,B,L,A,E,P,V,I,T,q,D,J,R,H,G,U,M,K,Q,W,X=t(1),Y=t.n(X),Z=t(80),$=t.n(Z),_=t(17),ee=t(6),ne=t(24),te=t(5),re=t.n(te),ae=t(8),ce=t(4),ie=t(34),oe=t.n(ie),se=oe.a.create({baseURL:"https://autoluby.dev.luby.com.br/"}),le=function(e,n){return{url:"https://autoluby.dev.luby.com.br/"+n,options:{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}}},de=function(){var e=localStorage.getItem("user");if(!e)return null;var n=JSON.parse(e);return null!==n&&void 0!==n?n:null},be=function(){var e=Object(ae.a)(re.a.mark((function e(n,t){var r;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.post("login",{email:n,password:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),je=t(0),pe=Object(X.createContext)(),ue=function(e){var n=e.children,t=Object(ee.f)(),r=Y.a.useState(""),a=Object(ce.a)(r,2),c=a[0],i=a[1],o=Y.a.useState(null),s=Object(ce.a)(o,2),l=s[0],d=s[1],b=Y.a.useState(!1),j=Object(ce.a)(b,2),p=j[0],u=j[1],x=Y.a.useState(!1),h=Object(ce.a)(x,2),m=h[0],g=h[1],O=Y.a.useState(!1),f=Object(ce.a)(O,2),v=f[0],w=f[1];Y.a.useEffect((function(){var e=de();Object(ae.a)(re.a.mark((function n(){var t;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=7;break}return i(e),w(!0),n.next=5,be(e.email,e.password);case 5:t=n.sent,d(t);case 7:case"end":return n.stop()}}),n)})))()}),[]);var k=function(){var e=Object(ae.a)(re.a.mark((function e(n,r){var a,c,o;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,se.post("login",{email:n,password:r});case 4:a=e.sent,c=a.data,o={token:c.token,email:n,password:r},i(o),s=o,localStorage.setItem("user",JSON.stringify(s)),d(c),w(!0),t("LabLuby-Projeto/Home"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),g(!0),setTimeout((function(){return g(!1)}),2e3);case 18:return e.prev=18,u(!1),e.finish(18);case 21:case"end":return e.stop()}var s}),e,null,[[1,14,18,21]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(je.jsx)(pe.Provider,{value:Object(ne.a)(Object(ne.a)({},c),{},{autheticate:k,logout:function(){i(null),window.localStorage.removeItem("user"),w(!1),t("/LabLuby-Projeto")},data:l,loading:p,error:m,loginIsOk:v}),children:n})},xe=function(){return Object(X.useContext)(pe)},he=function(e){var n=e.ProtectComponent,t=xe(),r=t.loginIsOk,a=t.token;return r||a?Object(je.jsx)(je.Fragment,{children:n}):Object(je.jsx)("h1",{children:"Voc\xea n\xe3o possui acesso"})},me=t(12),ge=t(87),Oe=t(37),fe=t(2),ve=t(3),we=ve.b.input(r||(r=Object(fe.a)(["\n    display: block;\n    padding: 10px 0px 10px 15px;\n    font-size:1.4rem;\n    font-weight:400;\n    border-radius:3px;\n    margin-top:6px;\n    width: 100%;\n    background:var(--inputBackground);\n    border:var(--inputBorder) 1px solid;\n\n"]))),ke=ve.b.label(a||(a=Object(fe.a)(["\n      display:block;\n      color:var(--veryGrey);\n      font-size:1.4rem;\n      margin-bottom:35px;\n      font-weight:700;\n"]))),ye=function(e){return Object(je.jsxs)(ke,{children:[e.label,Object(je.jsx)(we,Object(ne.a)({},e))]})},Ce=t.p+"static/media/background.59e6f3dc.jpg",Fe=t.p+"static/media/logo-full.fe94f4b4.svg",Ne=ve.b.div(c||(c=Object(fe.a)(["\n  display: grid;\n  grid-template-columns: 1fr minmax(350px,1fr);\n  grid-template-rows:1fr;\n height: 100vh;\n"]))),Se=ve.b.div(i||(i=Object(fe.a)(["\n  background: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),Ce),ze=ve.b.section(o||(o=Object(fe.a)(["\n  display: grid;\n  grid-template-columns:minmax(350px,825px);\n  justify-content: center;\n  align-self:start;\n  grid-template-rows:60px auto;\n  gap:11rem;\n    \n"]))),Be=ve.b.img.attrs({src:Fe})(s||(s=Object(fe.a)(["\npadding:70px 0 0 10px;\n"]))),Le=ve.b.div(l||(l=Object(fe.a)(["\ndisplay: grid;\nplace-content:center center;\ngap:70px;\nalign-self:start;\n"]))),Ae=ve.b.div(d||(d=Object(fe.a)(["\nposition:relative;\n"]))),Ee=ve.b.div(b||(b=Object(fe.a)(["\n\n\nh1{\n    font-size:3.8rem;\n    font-weight:700;\n    color:var(--black)\n}\np{\n    color:var(--grey);\n    font-size:1.2rem;\n    font-weight: 700;\n}\n\n"]))),Pe=ve.b.div(j||(j=Object(fe.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nmargin-bottom:40px;\ncolor:var(--red);\na{\n    color:var(--red);\n    padding:10px 0;\n}\n"]))),Ve=ve.b.div(p||(p=Object(fe.a)(["\nmargin-top:40px;\nmargin-bottom:10px;\np{\n  color:var(--veryGrey);\n  font-weight:500;\n  font-size:1.4rem;\n}\na{\n  color:var(--red);\n}\n"]))),Ie=t.p+"static/media/checkBox.cd57cd67.svg",Te=Object(X.createContext)(),qe=function(e){var n=e.children,t=Y.a.useState(JSON.parse(null===localStorage.getItem("check")||JSON.parse(localStorage.getItem("check")))),r=Object(ce.a)(t,2),a=r[0],c=r[1];return Object(je.jsx)(Te.Provider,{value:{handleCheckboxChange:function(){window.localStorage.setItem("check",!a),c(!a)},checked:a},children:n})},De=function(){return Object(X.useContext)(Te)},Je=ve.b.div(u||(u=Object(fe.a)(["\n   display: flex;\n   align-items: center;\n"]))),Re=ve.b.input.attrs({type:"checkbox"})(x||(x=Object(fe.a)(["\n   overflow: hidden;\n   white-space: nowrap;width: 1px;\n   height: 1px;\n   margin: -1px;\n   padding: 0;\n"]))),He=ve.b.label(h||(h=Object(fe.a)(["\n   color:var(--red);\n"]))),Ge=ve.b.label(m||(m=Object(fe.a)(["\n   width: 24px;\n   height: 24px;\n   margin-right: 6px;\n   background: ",";\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   img {\n      display: ",";\n      filter: invert(75%) sepia(11%) \n      saturate(6042%) hue- rotate(30deg) \n      brightness(105%) contrast(68%);\n   }\n"])),(function(e){return e.checked?"#F54A48":"#F9F9F9"}),(function(e){return e.checked?"flex":"none"})),Ue=function(e){var n=e.valueLabel,t=De(),r=t.handleCheckboxChange,a=t.checked;return Object(je.jsxs)(Je,{checked:a,onClick:r,readOnly:!0,children:[Object(je.jsx)(Re,{checked:a,onClick:r,readOnly:!0}),Object(je.jsx)(Ge,{checked:a,readOnly:!0,children:Object(je.jsx)("img",{alt:"tick icon",style:{width:"15px"},src:Ie})}),Object(je.jsxs)(He,{children:[" ",n," "]})]})},Me=ve.b.button(g||(g=Object(fe.a)(["\nwidth:100%;\nheight: 37px;\nborder: none;\nborder-radius:3px;\nbackground-color:var(--red);\ncolor:var(--background);\nfont-size:1.4rem;\nfont-weight:700;\n\n   &:hover{\n    background-color:#DF3938;\n}\n &:active{\n    background-color:#DF3938;\n    border:1.5px #971212 solid ;\n}\n"]))),Ke=ve.b.p(O||(O=Object(fe.a)(["\ncolor:red;\nposition:absolute;\nbottom:-25px;\n"]))),Qe=function(e){var n=e.children;return Object(je.jsx)(Ke,{children:n})},We=Oe.a().shape({email:Oe.b().required("O campo \xe9 obrigat\xf3rio.").email("E-mail inv\xe1lido."),password:Oe.b().required("O campo \xe9 obrigat\xf3rio.").max(5)}).required(),Xe=function(){var e,n,t=xe(),r=t.autheticate,a=t.loading,c=t.error,i=De().checked,o=function(e,n){var t=Object(X.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(c){return console.log(c),n}})),r=Object(ce.a)(t,2),a=r[0],i=r[1];return[a,function(n){try{var t=n instanceof Function?n(a):n;i(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(c){console.log(c)}}]}("password",""),s=Object(ce.a)(o,2),l=s[0],d=s[1],b=Object(ee.f)(),j=Object(me.e)({resolver:Object(ge.a)(We)}),p=j.control,u=j.handleSubmit,x=j.formState.errors;Y.a.useEffect((function(){de()&&b("Home")}),[b]);return Y.a.useEffect((function(){!1===i&&localStorage.removeItem("password")}),[i,l]),Object(je.jsxs)(Ne,{children:[Object(je.jsxs)(ze,{children:[Object(je.jsx)(Be,{}),Object(je.jsxs)(Le,{children:[Object(je.jsxs)(Ee,{children:[Object(je.jsx)("h1",{children:"Bem-vindo \xe0 AutoLuby"}),Object(je.jsx)("p",{children:"Fa\xe7a o login para acessar sua conta."})]}),Object(je.jsxs)("form",{onSubmit:u((function(e){console.log(x),r(e.email,e.password),i&&d(e.password)})),children:[Object(je.jsxs)(Ae,{children:[Object(je.jsx)(me.a,{control:p,render:function(e){var n=e.field,t=n.value,r=n.onChange,a=n.onBlur;return Object(je.jsx)(ye,{type:"email",value:t,onChange:r,onBlur:a,placeholder:"@mail.com",label:"Endere\xe7o de email",errors:x})},name:"email",defaultValue:""}),Object(je.jsx)(Qe,{children:null===(e=x.email)||void 0===e?void 0:e.message})]}),Object(je.jsxs)(Ae,{children:[Object(je.jsx)(me.a,{control:p,render:function(e){var n=e.field,t=n.value,r=n.onChange,a=n.onBlur;return Object(je.jsx)(ye,{type:"password",value:t,onChange:r,onBlur:a,placeholder:"senha",label:"Senha",errors:x})},name:"password",defaultValue:""}),Object(je.jsx)(Qe,{children:null===(n=x.password)||void 0===n?void 0:n.message})]}),Object(je.jsxs)(Pe,{children:[Object(je.jsx)(Ue,{valueLabel:"Lembrar minha senha"}),Object(je.jsx)("a",{href:"*",children:"Esqueceu a senha?"})]}),c&&Object(je.jsx)(Qe,{children:"Dados incorretos"}),a?Object(je.jsx)(Me,{type:"submit",disabled:!0,children:"Carregando..."}):Object(je.jsx)(Me,{type:"submit",children:"Entrar"}),Object(je.jsx)(Ve,{children:Object(je.jsxs)("p",{children:["Ainda n\xe3o tem uma conta? ",Object(je.jsx)("a",{href:"*",children:"Criar Conta"})]})})]})]})]}),Object(je.jsx)(Se,{})]})},Ye=Object(ve.a)(f||(f=Object(fe.a)(["\n\n:root {\n    --background:#FFF;\n    --grey:#A2A2A2;\n    --black:#3C3C3C;\n    --veryGrey:#7C7C7C;\n    --inputBackground:#F9F9F9;\n    --inputBorder:#E6E6E6;\n    --red:#F54A48;\n    --colorTextBasic:#858585;\n}\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    text-decoration:none;\n    list-style:none;\n    font-family: 'Roboto';\n    \n}\n\nhtml{\n    font-size: 62.5%;\n    \n}\n    \n    @media (max-width: 720px) {\n        html{\n           font-size:57.6925%; \n        }\n    }\n\nbody{\n        font-size:1.4rem;\n        -webkit-font-smoothing:antialiased;\n}\n\nimg{\n    display:block;\n    max-width:100%;\n}\n\nbutton{\n    cursor:pointer;\n}\n\n"]))),Ze=t.p+"static/media/frame-car1.8972ec05.jpg",$e=t.p+"static/media/frame-car2.e3966751.jpg",_e=t.p+"static/media/client.c224996a.jpg",en=function(){return Object(je.jsx)("img",{src:Fe,alt:"LogoLuby"})},nn=ve.b.header(v||(v=Object(fe.a)(["\npadding:31.5px 0;\nbackground:var(--background);\nbox-shadow:0 2px 25px rgb(169,169,169,20%)\n"]))),tn=ve.b.div(w||(w=Object(fe.a)(["\nmax-width: 1777px;\nmargin:0 auto;\ndisplay: flex;\njustify-content:space-between;\nalign-items:center;\npadding: 0 10px;\n\n   button{\n       color:var(--background);\n       background-color:var(--red);\n       height:38px;\n       padding:10px;\n       font-size:1.4rem;\n       font-weight:700;\n       border:none;\n       display:flex;\n       align-items: center;\n       border-radius:3px;\n       img{\n           margin-left:10px;\n       }\n   }\n   div{\n    width:430px;\n   }\n"]))),rn=t.p+"static/media/log-out.38d9cfe6.svg",an=t.p+"static/media/search.dde39e78.svg",cn=ve.b.label(k||(k=Object(fe.a)(["\n position: relative;\n            img{\n                width:20px;\n                height:20px;\n                position: absolute;\n                right:12px;\n                top:0px;\n            }\n\n"]))),on=ve.b.input.attrs((function(){return{type:"search"}}))(y||(y=Object(fe.a)(["\nheight:44px;\nwidth:100%;\nbackground:var(--inputBackground);\nborder:var(--inputBorder) solid 1px;\npadding-left: 15px;\nborder-radius: 3px;\n"]))),sn=function(e){var n=e.onChange;return Object(je.jsxs)(cn,{children:[Object(je.jsx)(on,{onChange:n}),Object(je.jsx)("img",{src:an,alt:"search"})]})},ln=function(e){var n=e.search,t=xe().logout;return Object(je.jsx)(nn,{children:Object(je.jsxs)(tn,{children:[Object(je.jsx)(en,{}),Object(je.jsx)("div",{children:n&&Object(je.jsx)(sn,{})}),Object(je.jsxs)("button",{onClick:t,children:["Sair ",Object(je.jsx)("img",{src:rn,alt:"logout"})]})]})})},dn=ve.b.main(C||(C=Object(fe.a)(["\n  max-width:801px;\n  margin:65px auto 0 auto;\n"]))),bn=ve.b.section(F||(F=Object(fe.a)(["\n   margin-bottom:10px;\n    h1{\n    font-size: 3rem;\n    font-weight:700;\n    color:var(--black);\n    display: block;\n    margin-bottom:5px;\n    }\n    p{\n        font-size:1.8rem;\n        font-weight:500;\n        color:var(--colorTextBasic)\n    }\n"]))),jn=Object(ve.c)(N||(N=Object(fe.a)(["\nfrom{\ntransform: scale(1);\n}\nto{\n  transform: scale(1.1)\n}\n"]))),pn=ve.b.nav(S||(S=Object(fe.a)(["\ndisplay:grid;\nmargin-top:30px;\ngap:20px;\n\n.item-menu {\n  display: flex;\n  border-radius:3px;\n  border:1px solid var(--inputBorder);\n  \n    &:hover{\n      animation: "," .3s ease forwards ;\n    }\n    .wrapper{\n    display: flex;\n    flex-direction:column;\n    justify-content:space-between;\n    flex:1;\n    padding:30px;\n    \n      h2{\n        color:#495057;\n        font-weight: 700;\n        margin-bottom:10px;\n        font-size:2.6rem;\n      };\n      span{\n        display: block;\n        text-align:end;\n        font-weight: 700;\n        font-size: 1.3rem;\n        color:var(--red)\n      }\n}}\n"])),jn),un=function(){var e=xe(),n=e.data,t=e.loading;return console.log(n),Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(ln,{search:!0}),Object(je.jsx)(dn,{children:t?Object(je.jsx)("p",{children:"Carregando..."}):Object(je.jsxs)(bn,{children:[Object(je.jsxs)("h1",{children:["Bem-vindo, ",n&&n.user.name]}),Object(je.jsx)("p",{children:"Menu"}),Object(je.jsxs)(pn,{children:[Object(je.jsxs)(_.b,{to:"veiculosVendidos&Reservados",className:"item-menu",children:[Object(je.jsxs)("div",{className:"wrapper",children:[Object(je.jsxs)("div",{children:[Object(je.jsx)("h2",{children:"Ve\xedculos reservados e vendidos "}),Object(je.jsx)("p",{children:"Ve\xedculos reservados e vendidos por voc\xea"})]}),n&&Object(je.jsxs)("span",{children:[n.totalVehiclesLoggedUser," Ve\xedculos"]})]}),Object(je.jsx)("img",{src:Ze,alt:"Imagem de carro n\xfamero 1"})]}),Object(je.jsxs)(_.b,{to:"veiculosTotais",className:"item-menu",children:[Object(je.jsxs)("div",{className:"wrapper",children:[Object(je.jsxs)("div",{children:[Object(je.jsx)("h2",{children:"Listagem geral de ve\xedculos"}),Object(je.jsx)("p",{children:"Listagem de ve\xedculos de toda a empresa"})]}),n&&Object(je.jsxs)("span",{children:[n.totalVehicles," Ve\xedculos"]})]}),Object(je.jsx)("img",{src:$e,alt:"Imagem de carro n\xfamero 2"})]}),Object(je.jsxs)(_.b,{to:"funcionarios",className:"item-menu",children:[Object(je.jsxs)("div",{className:"wrapper",children:[Object(je.jsxs)("div",{children:[Object(je.jsx)("h2",{children:"Funcion\xe1rios da empresa"}),Object(je.jsx)("p",{children:"Listagem de todos os funcion\xe1rios da empresa"})]}),n&&Object(je.jsxs)("span",{children:[n.totalEmployees," Ve\xedculos"]})]}),Object(je.jsx)("img",{src:_e,alt:"Imagem de funcionario"})]})]})]})})]})},xn=function(){var e=Y.a.useState(null),n=Object(ce.a)(e,2),t=n[0],r=n[1],a=Y.a.useState(null),c=Object(ce.a)(a,2),i=c[0],o=c[1],s=Y.a.useState(!0),l=Object(ce.a)(s,2),d=l[0],b=l[1];return{info:t,loading:d,error:i,request:Y.a.useCallback(function(){var e=Object(ae.a)(re.a.mark((function e(n,t){var a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(null),b(!0),e.next=5,oe.a.get(n,t);case 5:if(200!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",r(a.data));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,b(!1),e.abrupt("return",{response:a});case 17:case"end":return e.stop()}}),e,null,[[0,10,13,17]])})));return function(n,t){return e.apply(this,arguments)}}(),[])}},hn={color:"#FFFFFF",background:"#F54A48"},mn={color:"#858585",background:"none"},gn=ve.b.div(z||(z=Object(fe.a)([" \n    width:559px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    \n    .prev{\n        background-color: #EDEDED;\n        img{\n            margin-right:8px;\n        }\n    }\n    .next{\n        background: none;\n        img{\n            margin-left: 8px;\n        }\n    }\n    .next, .prev{\n    display: flex;\n    padding: 5px 8px;\n    align-items: center;\n    border:none;\n    font-size:1.4rem;\n    color:var(--colorTextBasic);\n    font-weight:700;\n    }\n\n    div{\n        display: flex;\n        align-items:center;\n    }\n    input {\n        width:206px;\n        height: 40px;\n        border-radius: 3px;\n        border:var(--inputBorder) 1px solid;\n        background-color: var(--inputBackground);\n    }\n    label{\n        position: relative;\n    }\n    .img-search{\n        position:absolute;\n        right: 10px;\n        top:12px;\n    }\n"]))),On=ve.b.button(B||(B=Object(fe.a)([" \nborder-radius:3px;\nheight: 24px;\nwidth: 24px;\nborder: none;\nmargin: 0 8px;\nfont-size:1.3rem;\nfont-weight: 600;\n","\n"])),(function(e){return e["data-direction"]===e.pageNumber?hn:mn})),fn=t.p+"static/media/arrow-left.e234b337.svg",vn=t.p+"static/media/arrow-right.83dc8f23.svg",wn=function(e){var n=e.onChange,t=e.setPageNumber,r=e.pageNumber,a=function(e){switch(e.target.dataset.direction){case"prev":t((function(){return 1===r?r=1:r-1}));break;case"next":t((function(){return 3===r?r=3:r+1}));break;case"1":t(1);break;case"2":t(2);break;case"3":t(3);break;default:return null}};return Object(je.jsxs)(gn,{children:[Object(je.jsxs)("div",{children:[Object(je.jsxs)("button",{className:"prev",onClick:a,"data-direction":"prev",children:[Object(je.jsx)("img",{src:fn,alt:"seta para voltar"}),"Anterior"]}),Object(je.jsx)(On,{onClick:a,"data-direction":"1",pageNumber:String(r),children:"1"}),Object(je.jsx)(On,{onClick:a,"data-direction":"2",pageNumber:String(r),children:"2"}),Object(je.jsx)(On,{onClick:a,"data-direction":"3",pageNumber:String(r),children:"3"}),Object(je.jsxs)("button",{className:"next",onClick:a,"data-direction":"next",children:["Proximo",Object(je.jsx)("img",{src:vn,alt:"seta para o pr\xf3ximo"})]})]}),Object(je.jsxs)("label",{children:[Object(je.jsx)("img",{src:an,alt:"search",className:"img-search"}),Object(je.jsx)("input",{type:"search",onChange:n})]})]})},kn={color:"#F54A48",background:"#F54A4833"},yn={color:"#34C38F",background:"#34C38F33"},Cn={color:"#FAC12F",background:"#FAC12F33"},Fn=ve.b.main(L||(L=Object(fe.a)(["\n  max-width: 1620px;\n  margin: 45px auto 0 auto;\n \n  h1 {\n    font-size: 3rem;\n    font-weight: 700;\n    color: var(--black);\n    display: block;\n    margin-bottom: 5px;\n  }\n"]))),Nn=ve.b.section(A||(A=Object(fe.a)(["\n h2{\n     font-size: 2rem;\n     font-weight: 600;\n }\n"]))),Sn=ve.b.div(E||(E=Object(fe.a)(["\n    margin-top:40px;\n    padding:20px 15px;\n    border-radius: 3px;\n    border:1px solid var(--inputBorder);\n    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);\n  \n\n"]))),zn=ve.b.div(P||(P=Object(fe.a)([" \n    display: flex;\n    justify-content: space-between;\n"]))),Bn=ve.b.div(V||(V=Object(fe.a)(["\nmargin-top: 20px;\n\n\n .wrapper-table{\n     display: grid;\n     grid-template-columns:repeat(8, 102px);\n     margin:25px 0 50px 0;\n     font-size:1.6rem;\n     font-weight: 500;\n     color: #495057;\n     justify-content: space-between;\n    align-items:center;\n    gap:10px;\n     .center{\n    padding: 6px 0;\n    text-align:center;\n    }\n \n }\n .head-table{\n    display: grid;\n    gap:10px;\n    grid-template-columns:repeat(8, 102px);\n    background-color: var(--inputBackground);\n    padding:26px 0;\n    border-radius: 3px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color:var(--colorTextBasic);\n    font-size:1.3rem;\n    justify-content: space-between;\n    .center{\n    text-align:center;\n}\n }\n"]))),Ln=ve.b.li(I||(I=Object(fe.a)([" \nborder-radius:3px;\n","\n\n"])),(function(e){switch(e.children){case"Vendido":return kn;case"Dispon\xedvel":return yn;case"Reservado":return Cn;default:return""}})),An=function(){var e=xe().token,n=xn(),t=n.info,r=n.request,a=(n.loading,n.error),c=Y.a.useState([]),i=Object(ce.a)(c,2),o=i[0],s=i[1],l=Y.a.useState(1),d=Object(ce.a)(l,2),b=d[0],j=d[1];Y.a.useEffect((function(){e&&Object(ae.a)(re.a.mark((function n(){var t,a,c,i,o;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=le(e,"vehicles"),a=t.url,c=t.options,n.next=3,r(a+"?page=".concat(b),c);case 3:i=n.sent,o=i.response,s(o.data.vehicles);case 6:case"end":return n.stop()}}),n)})))()}),[e,r,b]);return console.log(a),Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(ln,{}),Object(je.jsx)(Fn,{children:Object(je.jsxs)(Nn,{children:[Object(je.jsx)("h1",{children:"Todos Ve\xedculos"}),Object(je.jsxs)(Sn,{children:[Object(je.jsxs)(zn,{children:[Object(je.jsx)("h2",{children:"Listagem geral de ve\xedculos"}),Object(je.jsx)(wn,{setPageNumber:j,onChange:function(e){var n=e.target,r=t.vehicles.filter((function(e){return e.model.includes(n.value)}));s(r)},info:t,pageNumber:b})]}),Object(je.jsxs)(Bn,{children:[Object(je.jsxs)("ul",{className:"head-table",children:[Object(je.jsx)("li",{children:"marca"}),Object(je.jsx)("li",{children:"modelo"}),Object(je.jsx)("li",{className:"center",children:"ano"}),Object(je.jsx)("li",{children:"km"}),Object(je.jsx)("li",{children:"cor"}),Object(je.jsx)("li",{className:"center",children:"status"}),Object(je.jsx)("li",{children:"chassi"}),Object(je.jsx)("li",{children:"valor"})]}),Object(je.jsx)("ul",{children:o&&o.map((function(e){var n=e.chassi,t=e.brand,r=e.color,a=e.km,c=e.model,i=e.status,o=e.value,s=e.yer;return Object(je.jsxs)("div",{className:"wrapper-table",children:[Object(je.jsx)(Ln,{children:t}),Object(je.jsx)(Ln,{children:c}),Object(je.jsx)(Ln,{className:"center",children:s}),Object(je.jsx)(Ln,{children:a}),Object(je.jsx)(Ln,{children:r}),Object(je.jsx)(Ln,{className:"center bg-red",children:i}),Object(je.jsx)(Ln,{children:n.slice(0,3)}),Object(je.jsx)(Ln,{children:o})]},n)}))})]})]})]})})]})},En={color:"#F54A48",background:"#F54A4833"},Pn={color:"#34C38F",background:"#34C38F33"},Vn={color:"#FAC12F",background:"#FAC12F33"},In=ve.b.main(T||(T=Object(fe.a)(["\n  max-width: 1620px;\n  margin: 45px auto 0 auto;\n \n  h1 {\n    font-size: 3rem;\n    font-weight: 700;\n    color: var(--black);\n    display: block;\n    margin-bottom: 5px;\n  }\n"]))),Tn=ve.b.section(q||(q=Object(fe.a)(["\n h2{\n     font-size: 2rem;\n     font-weight: 600;\n }\n"]))),qn=ve.b.div(D||(D=Object(fe.a)(["\n    margin-top:40px;\n    padding:20px 15px;\n    border-radius: 3px;\n    border:1px solid var(--inputBorder);\n    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);\n  \n\n"]))),Dn=ve.b.div(J||(J=Object(fe.a)([" \n    display: flex;\n    justify-content: space-between;\n"]))),Jn=(ve.b.div(R||(R=Object(fe.a)(["\nmargin-top: 20px;\n\n\n .wrapper-table{\n     display: grid;\n     grid-template-columns:repeat(8, 102px);\n     margin:25px 0 50px 0;\n     font-size:1.6rem;\n     font-weight: 500;\n     color: #495057;\n     justify-content: space-between;\n    align-items:center;\n\n     .center{\n    padding: 6px 0;\n    text-align:center;\n    }\n \n }\n .head-table{\n    display: grid;\n    grid-template-columns:repeat(8, 102px);\n    background-color: var(--inputBackground);\n    padding:26px 0;\n    border-radius: 3px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color:var(--colorTextBasic);\n    font-size:1.3rem;\n    justify-content: space-between;\n    .center{\n    text-align:center;\n}\n }\n"]))),ve.b.li(H||(H=Object(fe.a)([" \nborder-radius:3px;\n","\n\n"])),(function(e){switch(e.children){case"Vendido":return En;case"Dispon\xedvel":return Pn;case"Reservado":return Vn;default:return""}})),function(){var e=xe().token,n=xn(),t=n.info,r=n.request,a=(n.loading,n.error,Y.a.useState([])),c=Object(ce.a)(a,2),i=c[0],o=c[1],s=Y.a.useState(1),l=Object(ce.a)(s,2),d=l[0],b=l[1],j=function(e){var n=e.filter((function(e){return e.status.includes("Vendido")||e.status.includes("Reservado")}));o(n)};Y.a.useEffect((function(){e&&Object(ae.a)(re.a.mark((function n(){var t,a,c,i,s,l;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=le(e,"vehicles"),a=t.url,c=t.options,n.next=3,r(a+"?page=".concat(d),c);case 3:i=n.sent,void 0!==(s=i.response).data.vehicles?(l=s.data.vehicles,j(l)):o([]);case 6:case"end":return n.stop()}}),n)})))()}),[e,r,d]);return Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(ln,{}),Object(je.jsx)(In,{children:Object(je.jsxs)(Tn,{children:[Object(je.jsx)("h1",{children:"Seus Ve\xedculos"}),Object(je.jsxs)(qn,{children:[Object(je.jsxs)(Dn,{children:[Object(je.jsx)("h2",{children:"Listagem de ve\xedculos reservados e vendidos"}),Object(je.jsx)(wn,{setPageNumber:b,onChange:function(e){var n=e.target;if(void 0!==t.vehicles){var r=t.vehicles.filter((function(e){return e.model.includes(n.value)}));j(r)}},info:t,pageNumber:d})]}),Object(je.jsxs)(Bn,{children:[Object(je.jsxs)("ul",{className:"head-table",children:[Object(je.jsx)("li",{children:"marca"}),Object(je.jsx)("li",{children:"modelo"}),Object(je.jsx)("li",{className:"center",children:"ano"}),Object(je.jsx)("li",{children:"km"}),Object(je.jsx)("li",{children:"cor"}),Object(je.jsx)("li",{className:"center",children:"status"}),Object(je.jsx)("li",{children:"chassi"}),Object(je.jsx)("li",{children:"valor"})]}),Object(je.jsx)("ul",{children:i&&i.map((function(e){var n=e.chassi,t=e.brand,r=e.color,a=e.km,c=e.model,i=e.status,o=e.value,s=e.yer;return Object(je.jsxs)("div",{className:"wrapper-table",children:[Object(je.jsx)(Ln,{children:t}),Object(je.jsx)(Ln,{children:c}),Object(je.jsx)(Ln,{className:"center",children:s}),Object(je.jsx)(Ln,{children:a}),Object(je.jsx)(Ln,{children:r}),Object(je.jsx)(Ln,{className:"center bg-red",children:i}),Object(je.jsx)(Ln,{children:n.slice(0,3)}),Object(je.jsx)(Ln,{children:o})]},n)}))})]})]})]})})]})}),Rn=ve.b.main(G||(G=Object(fe.a)(["\n  max-width: 1620px;\n  margin: 45px auto 0 auto;\n \n  h1 {\n    font-size: 3rem;\n    font-weight: 700;\n    color: var(--black);\n    display: block;\n    margin-bottom: 5px;\n  }\n"]))),Hn=ve.b.section(U||(U=Object(fe.a)(["\n h2{\n     font-size: 2rem;\n     font-weight: 600;\n }\n"]))),Gn=ve.b.div(M||(M=Object(fe.a)(["\n    margin-top:40px;\n    padding:20px 15px;\n    border-radius: 3px;\n    border:1px solid var(--inputBorder);\n    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);\n\n    .wrapper-table-employees{\n     display: grid;\n     grid-template-columns: repeat(4,minmax(100px, 150px)) 2fr;\n     margin:25px 0 50px 0;\n     font-size:1.6rem;\n     font-weight: 500;\n     color: #495057;\n     justify-content: space-between;\n     align-items:center;\n     gap:20px;\n     .center{\n    padding: 6px 0;\n    text-align:center;\n    }\n}\n    .head-table-employees{\n    display: grid;\n    grid-template-columns: repeat(4,minmax(100px, 150px)) 2fr;\n    gap:20px;\n    background-color: var(--inputBackground);\n    padding:26px 0;\n    border-radius: 3px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color:var(--colorTextBasic);\n    font-size:1.3rem;\n    justify-content: space-between;\n         .center{\n    text-align:center;\n        }\n    }\n"]))),Un=ve.b.div(K||(K=Object(fe.a)([" \n    display: flex;\n    justify-content: space-between;\n"]))),Mn=(ve.b.div(Q||(Q=Object(fe.a)(["\nmargin-top: 20px;\n"]))),ve.b.li(W||(W=Object(fe.a)([" \n\n"])))),Kn=function(){var e=xe().token,n=xn(),t=n.info,r=n.request,a=(n.loading,n.error,Y.a.useState([])),c=Object(ce.a)(a,2),i=c[0],o=c[1],s=Y.a.useState(1),l=Object(ce.a)(s,2),d=l[0],b=l[1];Y.a.useEffect((function(){e&&Object(ae.a)(re.a.mark((function n(){var t,a,c,i,s,l;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=le(e,"employees"),a=t.url,c=t.options,n.next=3,r(a+"?page=".concat(d),c);case 3:i=n.sent,s=i.response,l=s.data.employees,o(l),console.log(l);case 8:case"end":return n.stop()}}),n)})))()}),[e,r,d]);return Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(ln,{}),Object(je.jsx)(Rn,{children:Object(je.jsxs)(Hn,{children:[Object(je.jsx)("h1",{children:"Funcion\xe1rios"}),Object(je.jsxs)(Gn,{children:[Object(je.jsxs)(Un,{children:[Object(je.jsx)("h2",{children:"Listagem de funcion\xe1rios da empresa"}),Object(je.jsx)(wn,{setPageNumber:b,onChange:function(e){var n=e.target,r=t.employees.filter((function(e){return e.name.toUpperCase().includes(n.value.toUpperCase())}));o(r)},info:t,pageNumber:d})]}),Object(je.jsxs)(Bn,{children:[Object(je.jsxs)("ul",{className:"head-table-employees",children:[Object(je.jsx)("li",{children:"Nome"}),Object(je.jsx)("li",{children:"email"}),Object(je.jsx)("li",{children:"cpf"}),Object(je.jsx)("li",{children:"valor"}),Object(je.jsx)("li",{children:"bio"})]}),Object(je.jsx)("ul",{children:i&&i.map((function(e){var n=e.name,t=e.cpf,r=e.email,a=e.salary,c=e.bio;return Object(je.jsxs)("div",{className:"wrapper-table-employees",children:[Object(je.jsx)(Mn,{children:n}),Object(je.jsx)(Mn,{children:r}),Object(je.jsx)(Mn,{children:t}),Object(je.jsx)(Mn,{children:a}),Object(je.jsx)(Mn,{children:c})]},t)}))})]})]})]})})]})},Qn=function(){return Object(je.jsxs)(_.a,{children:[Object(je.jsx)(ue,{children:Object(je.jsx)(qe,{children:Object(je.jsxs)(ee.c,{children:[Object(je.jsx)(ee.a,{path:"LabLuby-Projeto/Home",element:Object(je.jsx)(he,{ProtectComponent:Object(je.jsx)(un,{})})}),Object(je.jsx)(ee.a,{path:"LabLuby-Projeto/Home/veiculosTotais",element:Object(je.jsx)(he,{ProtectComponent:Object(je.jsx)(An,{})})}),Object(je.jsx)(ee.a,{path:"LabLuby-Projeto/Home/veiculosVendidos&Reservados",element:Object(je.jsx)(he,{ProtectComponent:Object(je.jsx)(Jn,{})})}),Object(je.jsx)(ee.a,{path:"LabLuby-Projeto/Home/funcionarios",element:Object(je.jsx)(he,{ProtectComponent:Object(je.jsx)(Kn,{})})}),Object(je.jsx)(ee.a,{path:"/LabLuby-Projeto",element:Object(je.jsx)(Xe,{}),end:!0})]})})}),Object(je.jsx)(Ye,{})]})};$.a.render(Object(je.jsx)(Y.a.StrictMode,{children:Object(je.jsx)(Qn,{})}),document.getElementById("root"))}},[[211,1,2]]]);
//# sourceMappingURL=main.9b4ab066.chunk.js.map