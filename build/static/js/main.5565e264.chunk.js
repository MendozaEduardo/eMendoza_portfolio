(this.webpackJsonpe_mendoza_portfolio=this.webpackJsonpe_mendoza_portfolio||[]).push([[0],{185:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(23),c=t.n(a),i=(t(96),t(5)),l=t(52),u=t(4),s=(t(97),t(84)),m=t(7),d=t(188),f=t(191),p=t(192),b=(t(187),t(189)),h=(t(190),t(90)),g=t(24),v="#3127E8",x="#529e66",C="#367b48",k="#276738",y="#e1c542",O="#cab23f",E="#b49e35",j="#d0454c",w="#b54248",H="#95353a",S="#ffffff",B="#e1e1e1",A="#737581",z="#000000",T="'Roboto Slab', monospace",F="3.052rem",M="1.953rem",I="1.563rem",N="1.25rem",D="0.8rem",P="0.64rem",R={primaryColor:"#2721A5",primaryHoverColor:v,primaryActiveColor:"#4A43D8",textColorOnPrimary:S,textColor:z,textColorInverted:S,textOnDisabled:B,disabled:A,formElementBackground:S,textOnFormElementBackground:z,primaryFont:T,status:{warningColor:y,warningColorHover:O,warningColorActive:E,errorColor:j,errorColorHover:w,errorColorActive:H,successColor:x,successColorHover:C,successColorActive:k}},W={primaryColor:S,primaryHoverColor:"#f4f5f7",primaryActiveColor:B,textColorOnPrimary:v,textColor:v,textColorInverted:S,textOnDisabled:B,disabled:A,formElementBackground:"#4F4D87",textOnFormElementBackground:S,primaryFont:T,status:{warningColor:y,warningColorHover:O,warningColorActive:E,errorColor:j,errorColorHover:w,errorColorActive:H,successColor:x,successColorHover:C,successColorActive:k}},_=t(89);function J(){var n=Object(i.a)(["\n","\nhtml{\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\n*, *:before, *:after {\n    box-sizing: inherit;\n}\n\nbody{\n    margin: 0;\n    font-family: ",";\n}\n\nmain{\n    width: 90%;\n    margin: 0 auto; \n}"]);return J=function(){return n},n}Object(u.b)(J(),Object(_.a)(),T);function L(){var n=Object(i.a)(['\n    font-family: "Roboto Slab", monospace;\n    font-size: ',";\n    color: ",";\n  "]);return L=function(){return n},n}function G(){var n=Object(i.a)(['\n    font-family: "Roboto Slab", monospace;\n    font-size: ',";\n    color: ",";\n  "]);return G=function(){return n},n}var $=function(n){var e=u.c.h4(G(),I,(function(n){return n.theme.textOnFormElementBackground})),t=u.c.p(L(),D,(function(n){return n.theme.textOnFormElementBackground})),o=Object(g.b)({opacity:1,from:{opacity:0}});return r.a.createElement(g.a.div,{className:"e-card-info",style:o},r.a.createElement(e,{className:"e-card-title"},n.title),r.a.createElement(t,{className:"e-card-sub-title"},n.subTitle),r.a.createElement(vn,{onClick:function(){return Object(h.a)(n.link)},target:"_blank",rel:"noopener noreferrer"},"Take Me There!"))},q=t(21),K=t(10),Q=t(16),U=t(13),V=t(12),X=t(80),Y=t.n(X),Z=t(81),nn=t.n(Z),en=t(82),tn=t.n(en),on=function(n){Object(U.a)(t,n);var e=Object(V.a)(t);function t(n){var o;return Object(K.a)(this,t),(o=e.call(this,n)).handleCardClick=function(n){console.log(n);var e=Object(q.a)(o.state.items);e[n].selected=!e[n].selected,e.forEach((function(e){e.id!==n&&(e.selected=!1)})),o.setState({items:e})},o.makeItems=function(n){return n.map((function(n){return r.a.createElement(rn,{item:n,click:function(e){return o.handleCardClick(n.id,e)},key:n.id})}))},o.state={items:[{id:0,title:"Ed's Autos",subTitle:"Check out my full-stack project!",imgSrc:Y.a,link:"https://eds-autos-prod.herokuapp.com/",selected:!1},{id:1,title:"My GitHub Page",subTitle:"Check out my projects",imgSrc:nn.a,link:"https://github.com/MendozaEduardo",selected:!1},{id:2,title:"Storybook Documentation",subTitle:"Check out the storybook documentation for this site",imgSrc:tn.a,link:"https://eds-style-guide.netlify.app",selected:!1}]},o}return Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(r.a.Component),rn=function(n){return r.a.createElement("div",{className:"d-inline-block e-card",onClick:function(e){return n.click(n.item)}},r.a.createElement("img",{className:"e-card-image",src:n.item.imgSrc,alt:n.item.imgSrc}),n.item.selected&&r.a.createElement($,{title:n.item.title,subTitle:n.item.subTitle,link:n.item.link}))};function an(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return an=function(){return n},n}u.c.footer(an());var cn=t(83),ln=t.n(cn);function un(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n"]);return un=function(){return n},n}u.c.svg(un()),ln.a;var sn=t(42);function mn(){var n=Object(i.a)(["\n  background-color: transparent;\n  border: none;\n  color: ",";\n\n  &:disabled {\n    background: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  ",";\n"]);return mn=function(){return n},n}function dn(){var n=Object(i.a)(["\n  background: none;\n  border: 2px solid ",";\n  color: ",";\n\n  &:disabled {\n    background: none;\n    color: ",";\n    border: 2px solid ",";\n    cursor: not-allowed;\n  }\n\n  ",";\n"]);return dn=function(){return n},n}function fn(){var n=Object(i.a)(["\n  background-color: ",";\n  border: none;\n  margin-right: 30px;\n  color: ",";\n\n  &:disabled {\n    background-color: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  ",";\n"]);return fn=function(){return n},n}function pn(){var n=Object(i.a)(["\n  padding: 12px 24px;\n  font-size: ",';\n  border-radius: 5px;\n  min-width: 100px;\n  cursor: pointer;\n  font-family: "Roboto Slab", monospace;\n  transition: background-color 0.2s linear, color 0.2s linear;\n\n  &:hover {\n    background-color: ',";\n    color: ",";\n  }\n\n  &:focus {\n    outline: 3px solid ",";\n    outline-offset: 2px;\n  }\n\n  &:active {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n"]);return pn=function(){return n},n}var bn={small:function(){return"\n    font-size: ".concat(P,";\n    padding: 8px;\n  ")},large:function(){return"\n    font-size: ".concat(N,";\n    padding: 16px 24px;\n  ")},warning:function(n){var e=n.props;return"\n    background: ".concat(e.theme.status.warningColor,";\n    color: ").concat(e.theme.textColorInverted,";\n    \n    &:hover, &:focus {\n        background-color: ").concat(e.theme.status.warningColorHover,";\n        outline: 3px solid ").concat(e.theme.status.warningColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n\n    &:active {\n        background-color: ").concat(e.theme.status.warningColorActive,";\n    }\n  ")},primaryButtonWarning:function(n){var e=n.props;return"\n    background-color: ".concat(e.theme.status.warningColor,";\n    color: ").concat(e.theme.textColorInverted,";\n    ")},secondaryButtonWarning:function(n){var e=n.props;return"\n    background: none;\n    border: 2px solid ".concat(e.theme.status.warningColor,";\n    color: ").concat(e.theme.status.warningColor,";\n\n    &:hover, &:focus {\n        background-color: ").concat(e.theme.status.warningColorHover,";\n        outline: 3px solid ").concat(e.theme.status.warningColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},tertiaryButtonWarning:function(n){var e=n.props;return"\n    background: none;\n    color: ".concat(e.theme.status.warningColor,";\n\n    &:hover, &:focus {\n        outline: 3px solid ").concat(e.theme.status.warningColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},error:function(n){var e=n.props;return"\n    background: ".concat(e.theme.status.errorColor,";\n    color: ").concat(e.theme.textColorInverted,";\n\n    &:hover, &:focus {\n        background-color: ").concat(e.theme.status.errorColorHover,";\n        outline: 3px solid ").concat(e.theme.status.errorColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n    &:active {\n        background-color: ").concat(e.theme.status.errorColorActive,";\n    }\n  ")},primaryButtonError:function(n){var e=n.props;return"\n    background-color: ".concat(e.theme.status.errorColor,";\n    color: ").concat(e.theme.textColorInverted,";\n  ")},secondaryButtonError:function(n){var e=n.props;return"\n    background: none;\n    border: 2px solid ".concat(e.theme.status.errorColor,";\n    color: ").concat(e.theme.status.errorColor,";\n\n    &:hover, &:focus {\n        outline: 3px solid ").concat(e.theme.status.errorColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},tertiaryButtonError:function(n){var e=n.props;return"\n    background: none;\n    border: none;\n    color: ".concat(e.theme.status.errorColor,";\n\n    &:hover, &:focus {\n        outline: 3px solid ").concat(e.theme.status.errorColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n  ")},success:function(n){var e=n.props;return"\n    background: none;\n    color: ".concat(e.theme.status.successColor,";\n\n    &:hover, &:focus {\n        background-color: ").concat(e.theme.status.successColorHover,";\n        outline: 3px solid ").concat(e.theme.status.successColorHover,";\n        outline-offset: 2px;\n        border: 2px solid transparent;\n    }\n\n    &:active {\n        background-color: ").concat(e.theme.status.successColorActive,";\n    }\n  ")},primaryButtonSuccess:function(n){var e=n.props;return"\n    background-color: ".concat(e.theme.status.successColor,";\n    color: ").concat(e.theme.textColorInverted,";\n    ")},secondaryButtonSuccess:function(n){var e=n.props;return"\n    border: 2px solid ".concat(e.theme.status.successColor,";\n  ")}},hn=u.c.button(pn(),D,(function(n){return n.theme.primaryHoverColor}),(function(n){return n.theme.textColorOnPrimary}),(function(n){return n.theme.primaryHoverColor}),(function(n){return n.theme.primaryActiveColor}),(function(n){return n.theme.primaryActiveColor}),(function(n){return n.theme.textColorOnPrimary})),gn=Object(u.c)(hn)(fn(),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.textColorOnPrimary}),(function(n){return n.theme.disabled}),(function(n){return n.theme.textOnDisabled}),Object(sn.applyStyleModifiers)(bn)),vn=Object(u.c)(hn)(dn(),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.disabled}),(function(n){return n.theme.disabled}),Object(sn.applyStyleModifiers)(bn));Object(u.c)(hn)(mn(),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.disabled}),Object(sn.applyStyleModifiers)(bn));function xn(){var n=Object(i.a)(["\n  cursor: pointer;\n  background: none;\n  border: none;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n"]);return xn=function(){return n},n}function Cn(){var n=Object(i.a)(["\n  font-size: ",";\n  max-width: 70%;\n  text-align: center;\n"]);return Cn=function(){return n},n}function kn(){var n=Object(i.a)(["\n  font-size: ",";\n"]);return kn=function(){return n},n}function yn(){var n=Object(i.a)(["\n  width: 800px;\n  height: 580px;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: 2px;\n"]);return yn=function(){return n},n}u.c.div(yn(),(function(n){return n.theme.formElementBackground}),(function(n){return n.theme.textOnFormElementBackground})),u.c.h3(kn(),M),u.c.p(Cn(),D),u.c.button(xn());function On(){var n=Object(i.a)(["\n  font-size: ",";\n  text-align: center;\n"]);return On=function(){return n},n}function En(){var n=Object(i.a)(["\n  font-size: ",";\n  text-align: center;\n"]);return En=function(){return n},n}function jn(){var n=Object(i.a)(['\n  font-family: "Roboto Slab", monospace;\n  color: ',";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]);return jn=function(){return n},n}var wn=u.c.div(jn(),(function(n){return n.theme.textOnFormElementBackground})),Hn=u.c.h1(En(),F),Sn=u.c.h3(On(),M),Bn=function(n){return r.a.createElement("div",null,r.a.createElement(wn,null,r.a.createElement(Hn,null,n.title),r.a.createElement(Sn,null,n.subTitle),r.a.createElement(on,null)))};function An(){var n=Object(i.a)(['\n    font-family: "Roboto Slab", monospace;\n    font-size: ',";\n    color: ",";\n  "]);return An=function(){return n},n}var zn=function(){var n=Object(o.useState)(!1),e=Object(l.a)(n,2),t=e[0],a=e[1],c=u.c.h4(An(),I,(function(n){return n.theme.textOnFormElementBackground})),i=Object(o.useState)({title:"Eduardo Mendoza, Front-End Developer",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"}],home:{title:"Welcome To My Site",subTitle:"Check out my projects!"},about:{title:"About Me"},contact:{title:"Let's Talk!"}}),b=Object(l.a)(i,1)[0];return r.a.createElement(s.a,null,r.a.createElement(u.a,{theme:t?W:R},r.a.createElement(d.a,{className:"p-0",fluid:!0,style:{background:t?R.primaryColor:W.primaryColor}},r.a.createElement(f.a,{className:"border-bottom mb-5",bg:"transparent",expand:"lg"},r.a.createElement(gn,{onClick:function(){return a(!t)}},"Change Theme"),r.a.createElement(c,null,b.title),r.a.createElement(f.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(f.a.Collapse,{id:"navbar-toggle"},r.a.createElement(p.a,{className:"ml-auto"}))),r.a.createElement(m.a,{path:"/",exact:!0,render:function(){return r.a.createElement(Bn,{title:b.home.title,subTitle:b.home.subTitle})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(184);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(zn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},80:function(n,e,t){n.exports=t.p+"static/media/edsAutos.67a15851.png"},81:function(n,e,t){n.exports=t.p+"static/media/githubMark.e409fcbd.png"},82:function(n,e,t){n.exports=t.p+"static/media/storybookDoc.a7980f9f.png"},83:function(n,e,t){n.exports=t.p+"static/media/welcome-modal.e70969ca.svg"},91:function(n,e,t){n.exports=t(185)},96:function(n,e,t){},97:function(n,e,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.5565e264.chunk.js.map