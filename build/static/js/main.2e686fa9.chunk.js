(this.webpackJsonpe_mendoza_portfolio=this.webpackJsonpe_mendoza_portfolio||[]).push([[0],{114:function(e,t,n){e.exports=n(206)},119:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),l=n.n(o),c=(n(119),n(23)),i=n(105),u=n(60),s=function(e){var t=Object(u.b)({opacity:1,from:{opacity:0}});return r.a.createElement(u.a.div,{className:"e-card-info",style:t},r.a.createElement("h1",{className:"e-card-title"},e.title),r.a.createElement("p",{className:"e-card-sub-title"},e.subTitle),r.a.createElement(re,{onClick:function(){return Object(i.a)(e.link)},target:"_blank",rel:"noopener noreferrer"},"Take Me There!"))},m=n(24),d=n(11),p=n(20),f=n(17),b=n(16),E=n(235),g=n(83),h=n.n(g),v=n(84),k=n.n(v),y=n(85),C=n.n(y),x=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleCardClick=function(e){var t=Object(m.a)(a.state.items);t[e].selected=!t[e].selected,t.forEach((function(t){t.id!==e&&(t.selected=!1)})),a.setState({items:t})},a.makeItems=function(e){return e.map((function(e){return r.a.createElement(w,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})}))},a.state={items:[{id:0,title:"Ed's Autos",subTitle:"Check out my full-stack project!",imgSrc:h.a,link:"https://eds-autos-prod.herokuapp.com/",selected:!1},{id:1,title:"My GitHub",subTitle:"Check out my code",imgSrc:k.a,link:"https://github.com/MendozaEduardo",selected:!1},{id:2,title:"Storybook",subTitle:"Check out the storybook docs for my site",imgSrc:C.a,link:"https://eds-style-guide.netlify.app",selected:!1}]},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(E.a,{container:!0,className:"my-5",justify:"center"},r.a.createElement(E.a,{container:!0,item:!0,className:"my-2",sm:12,justify:"center"},r.a.createElement("h1",null,"Check out My Projects")),r.a.createElement(E.a,{container:!0,item:!0,lg:12,spacing:3,justify:"space-evenly"},this.makeItems(this.state.items)))}}]),n}(r.a.Component),w=function(e){return r.a.createElement("div",{onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"e-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(s,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},S=n(250),j=n(51),O=function(){return r.a.createElement(S.a,{position:"static",color:"default"},r.a.createElement(j.a,{align:"center",variant:"subtitle1"},"Eduardo Mendoza"))},M=n(38),H="#3127E8",I="#529e66",N="#367b48",T="#276738",A="#e1c542",B="#cab23f",W="#b49e35",z="#d0454c",L="#b54248",F="#95353a",P="#ffffff",D="#e1e1e1",G="#737581",R="#000000",_="1.25rem",J="0.8rem",U="0.64rem",X={primaryColor:"#2721A5",primaryHoverColor:H,primaryActiveColor:"#4A43D8",textColorOnPrimary:P,textColor:R,textColorInverted:P,textOnDisabled:D,disabled:G,formElementBackground:P,textOnFormElementBackground:R,primaryFont:"'Roboto Slab', monospace",status:{warningColor:A,warningColorHover:B,warningColorActive:W,errorColor:z,errorColorHover:L,errorColorActive:F,successColor:I,successColorHover:N,successColorActive:T}},Y="768px",Z="992px",$="1200px",q={viewport4:"(min-width: ".concat("480px",")"),viewport7:"(min-width: ".concat(Y,")"),viewport9:"(min-width: ".concat(Z,")"),viewport12:"(min-width: ".concat($,")")},K=n(50);function Q(){var e=Object(M.a)(["\n  background-color: transparent;\n  border: none;\n  color: ",";\n\n  &:disabled {\n    background: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  ",";\n"]);return Q=function(){return e},e}function V(){var e=Object(M.a)(["\n  background: none;\n  border: 2px solid ",";\n  color: ",";\n\n  &:disabled {\n    background: none;\n    color: ",";\n    border: 2px solid ",";\n    cursor: not-allowed;\n  }\n\n  ",";\n"]);return V=function(){return e},e}function ee(){var e=Object(M.a)(["\n  background-color: ",";\n  border: none;\n  color: ",";\n\n  &:disabled {\n    background-color: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  ",";\n"]);return ee=function(){return e},e}function te(){var e=Object(M.a)(["\n  padding: 12px 24px;\n  font-size: ",';\n  border-radius: 5px;\n  min-width: 80px;\n  cursor: pointer;\n  font-family: "Roboto Slab", monospace;\n  transition: background-color 0.2s linear, color 0.2s linear;\n\n  &:hover {\n    background-color: ',";\n    color: ",";\n  }\n\n  &:focus {\n    outline: 3px solid ",";\n    outline-offset: 2px;\n  }\n\n  &:active {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n"]);return te=function(){return e},e}var ne={small:function(){return"\n    font-size: ".concat(U,";\n    padding: 8px;\n  ")},large:function(){return"\n    font-size: ".concat(_,";\n    padding: 16px 24px;\n  ")},warning:function(e){var t=e.props;return"\n    background: ".concat(t.theme.status.warningColor,";\n    color: ").concat(t.theme.textColorInverted,";\n    \n    &:hover, &:focus {\n        background-color: ").concat(t.theme.status.warningColorHover,";\n        outline: 3px solid ").concat(t.theme.status.warningColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n\n    &:active {\n        background-color: ").concat(t.theme.status.warningColorActive,";\n    }\n  ")},primaryButtonWarning:function(e){var t=e.props;return"\n    background-color: ".concat(t.theme.status.warningColor,";\n    color: ").concat(t.theme.textColorInverted,";\n    ")},secondaryButtonWarning:function(e){var t=e.props;return"\n    background: none;\n    border: 2px solid ".concat(t.theme.status.warningColor,";\n    color: ").concat(t.theme.status.warningColor,";\n\n    &:hover, &:focus {\n        background-color: ").concat(t.theme.status.warningColorHover,";\n        outline: 3px solid ").concat(t.theme.status.warningColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},tertiaryButtonWarning:function(e){var t=e.props;return"\n    background: none;\n    color: ".concat(t.theme.status.warningColor,";\n\n    &:hover, &:focus {\n        outline: 3px solid ").concat(t.theme.status.warningColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},error:function(e){var t=e.props;return"\n    background: ".concat(t.theme.status.errorColor,";\n    color: ").concat(t.theme.textColorInverted,";\n\n    &:hover, &:focus {\n        background-color: ").concat(t.theme.status.errorColorHover,";\n        outline: 3px solid ").concat(t.theme.status.errorColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n    &:active {\n        background-color: ").concat(t.theme.status.errorColorActive,";\n    }\n  ")},primaryButtonError:function(e){var t=e.props;return"\n    background-color: ".concat(t.theme.status.errorColor,";\n    color: ").concat(t.theme.textColorInverted,";\n  ")},secondaryButtonError:function(e){var t=e.props;return"\n    background: none;\n    border: 2px solid ".concat(t.theme.status.errorColor,";\n    color: ").concat(t.theme.status.errorColor,";\n\n    &:hover, &:focus {\n        outline: 3px solid ").concat(t.theme.status.errorColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},tertiaryButtonError:function(e){var t=e.props;return"\n    background: none;\n    border: none;\n    color: ".concat(t.theme.status.errorColor,";\n\n    &:hover, &:focus {\n        outline: 3px solid ").concat(t.theme.status.errorColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},success:function(e){var t=e.props;return"\n    background: none;\n    color: ".concat(t.theme.status.successColor,";\n\n    &:hover, &:focus {\n        background-color: ").concat(t.theme.status.successColorHover,";\n        outline: 3px solid ").concat(t.theme.status.successColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n\n    &:active {\n        background-color: ").concat(t.theme.status.successColorActive,";\n    }\n  ")},primaryButtonSuccess:function(e){var t=e.props;return"\n    background-color: ".concat(t.theme.status.successColor,";\n    color: ").concat(t.theme.textColorInverted,";\n    ")},secondaryButtonSuccess:function(e){var t=e.props;return"\n    border: 2px solid ".concat(t.theme.status.successColor,";\n  ")}},ae=c.b.button(te(),J,(function(e){return e.theme.primaryHoverColor}),(function(e){return e.theme.textColorOnPrimary}),(function(e){return e.theme.primaryHoverColor}),(function(e){return e.theme.primaryActiveColor}),(function(e){return e.theme.primaryActiveColor}),(function(e){return e.theme.textColorOnPrimary})),re=(Object(c.b)(ae)(ee(),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.textColorOnPrimary}),(function(e){return e.theme.disabled}),(function(e){return e.theme.textOnDisabled}),Object(K.applyStyleModifiers)(ne)),Object(c.b)(ae)(V(),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.disabled}),(function(e){return e.theme.disabled}),Object(K.applyStyleModifiers)(ne))),oe=(Object(c.b)(ae)(Q(),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.disabled}),Object(K.applyStyleModifiers)(ne)),n(58)),le=n(98),ce=n(92),ie=n.n(ce),ue=n(93),se=n.n(ue),me=n(94),de=n.n(me),pe=n(95),fe=n.n(pe),be=n(96),Ee=n.n(be),ge=n(97),he=n.n(ge),ve={bannerSm:ie.a,bannerMd:se.a,bannerLg:de.a},ke=[{img:he.a,title:"Griller and Smoker of Meats",featured:!0},{img:fe.a,title:"Youth Mentor",featured:!0},{img:Ee.a,title:"Avid Runner",featured:!0}],ye=function(){return r.a.createElement(le.a,{fluid:"true"},r.a.createElement(oe.a,{controls:!1,indicators:!1},r.a.createElement(oe.a.Item,null,r.a.createElement("picture",null,r.a.createElement("source",{media:q.viewport12,srcSet:ve.bannerLg}),r.a.createElement("source",{media:q.viewport7,srcSet:ve.bannerMd}),r.a.createElement("img",{src:ve.bannerSm,alt:"Welcome"})))))},Ce=function(){return r.a.createElement(E.a,{container:!0,className:"aboutMeWrapper",direction:"column",justify:"space-around",alignItems:"center"},r.a.createElement(E.a,{item:!0,md:4},r.a.createElement("h2",null,r.a.createElement("strong",null,"About Me")),r.a.createElement("h4",null,"Hey there, my name is Eduardo Mendoza and I'm a developer from Austin. I enjoy coding and am continually looking for ways to develop my skillset.")))},xe=n(237),we=n(239),Se=n(251),je=n(240),Oe=n(238),Me=Object(xe.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center",textAlign:"center",overflow:"hidden",backgroundColor:e.palette.grey},gridList:{width:1e3,height:550,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%, rgba(0,0,0,0) 100%)"}}}));function He(){var e=Me();return r.a.createElement(Oe.a,{className:e.root},r.a.createElement("h1",null,"Some Snapshots into my Life"),r.a.createElement(we.a,{cellHeight:500,spacing:1,className:e.gridList},ke.map((function(t){return r.a.createElement(Se.a,{key:t.img,cols:2,rows:1},r.a.createElement("img",{src:t.img,alt:t.title}),r.a.createElement(je.a,{title:t.title,titlePosition:"top",className:e.titleBar}))}))))}var Ie=n(15),Ne=n(241),Te=n(242),Ae=n(243),Be=n(100),We=n.n(Be),ze=n(101),Le=n.n(ze),Fe=Object(xe.a)((function(e){return{grow:{flexGrow:1},title:Object(Ie.a)({},e.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"},inputInput:Object(Ie.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(Ie.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Ie.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Pe(){var e=Fe();return r.a.createElement("div",{className:e.grow},r.a.createElement(S.a,{position:"static",color:"default"},r.a.createElement(Ne.a,null,r.a.createElement(j.a,{className:e.title,variant:"h6",noWrap:!0},"Eduardo Mendoza"),r.a.createElement("div",{className:e.grow}),r.a.createElement(Te.a,{"aria-label":"LinkedIn Link",color:"inherit",href:"https://www.linkedin.com/in/eduardo-mendoza-1b3ba9128/"},r.a.createElement(Ae.a,{color:"secondary"},r.a.createElement(We.a,null))),r.a.createElement(Te.a,{"aria-label":"GitHub link",color:"inherit",href:"https://github.com/MendozaEduardo"},r.a.createElement(Ae.a,{color:"secondary"},r.a.createElement(Le.a,null))))))}var De=n(244),Ge=n(245),Re=n(246),_e=n(247),Je=n(248),Ue=n(104),Xe=n.n(Ue),Ye=n(102),Ze=n.n(Ye),$e=n(103),qe=n.n($e);function Ke(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{container:!0,className:"aboutMeWrapper",direction:"column",justify:"space-around",alignItems:"center"},r.a.createElement(E.a,{item:!0,md:4},r.a.createElement("h2",null,r.a.createElement("strong",null,"What's in my Toolbox?")))),r.a.createElement(Oe.a,{className:"skillsContainer",maxWidth:"lg"},r.a.createElement(E.a,{container:!0,direction:"row"},r.a.createElement(E.a,{item:!0,lg:4,md:4,sm:8},r.a.createElement(De.a,{"aria-label":"Technical Skills"},r.a.createElement(Ge.a,null,r.a.createElement(Re.a,null,r.a.createElement(Ze.a,null)),r.a.createElement(_e.a,{primary:"Programming/Spoken Languages"})),r.a.createElement(Je.a,{variant:"middle"}),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"JavaScript - includes JSX")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"CSS")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"HTML")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Spanish (Fluent)")))),r.a.createElement(Je.a,null),r.a.createElement(E.a,{item:!0,lg:4,md:4,sm:8},r.a.createElement(De.a,{"aria-label":"Technical Skills"},r.a.createElement(Ge.a,null,r.a.createElement(Re.a,null,r.a.createElement(qe.a,null)),r.a.createElement(_e.a,{primary:"Libraries and Frameworks"})),r.a.createElement(Je.a,{variant:"middle"}),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"React")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Material-UI")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Bootstrap")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"react-spring")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Semantic UI")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null)))),r.a.createElement(E.a,{item:!0,lg:4,md:4,sm:8},r.a.createElement(De.a,{"aria-label":"Technical Skills"},r.a.createElement(Ge.a,null,r.a.createElement(Re.a,null,r.a.createElement(Xe.a,null)),r.a.createElement(_e.a,{primary:"Other Developer Tools"})),r.a.createElement(Je.a,{variant:"middle"}),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Node.js")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Figma")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Storybook")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Github/Gitlab")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Codepen")),r.a.createElement(Ge.a,null,r.a.createElement(_e.a,null,"Passport.js")))))))}var Qe=n(249),Ve=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe.a,null),r.a.createElement(E.a,null,r.a.createElement(Ce,null),r.a.createElement(Ke,null),r.a.createElement(Je.a,{variant:"middle",className:"my-4"}),r.a.createElement(He,null),r.a.createElement(Je.a,{variant:"middle",className:"my-4"}),r.a.createElement(x,null)))},et=function(){var e="Eduardo Mendoza",t={title:"Welcome To My Site",subTitle:"Check out my projects!"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{theme:X},r.a.createElement(Pe,null),r.a.createElement(ye,null),r.a.createElement(Ve,{title:e,subTitle:t.subTitle}),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(205);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,n){e.exports=n.p+"static/media/edsAutos.751d14ad.png"},84:function(e,t,n){e.exports=n.p+"static/media/githubMark.e409fcbd.png"},85:function(e,t,n){e.exports=n.p+"static/media/storybookDoc.a0996046.png"},92:function(e,t,n){e.exports=n.p+"static/media/background-sm.2f04a68e.png"},93:function(e,t,n){e.exports=n.p+"static/media/background-md.9aebddc2.png"},94:function(e,t,n){e.exports=n.p+"static/media/background-lg.4a1a3f9a.png"},95:function(e,t,n){e.exports=n.p+"static/media/thaiSkit.449df427.png"},96:function(e,t,n){e.exports=n.p+"static/media/LHR.8bd99870.png"},97:function(e,t,n){e.exports=n.p+"static/media/meatSmoker.3d548e10.png"}},[[114,1,2]]]);
//# sourceMappingURL=main.2e686fa9.chunk.js.map