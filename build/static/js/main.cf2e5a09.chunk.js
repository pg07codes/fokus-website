(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(46)},33:function(e,t,a){e.exports=a.p+"static/media/logo.2aa2bd6e.svg"},34:function(e,t,a){e.exports=a.p+"static/media/tasks.a60bccbc.png"},35:function(e,t,a){e.exports=a.p+"static/media/sounds.fdc261dd.png"},36:function(e,t,a){e.exports=a.p+"static/media/summary.817593bd.png"},37:function(e,t,a){e.exports=a.p+"static/media/fokusBox.bd8da4fb.png"},38:function(e,t,a){e.exports=a.p+"static/media/labels.9bc6ed46.png"},39:function(e,t,a){e.exports=a.p+"static/media/tasksDark.3bebddad.png"},40:function(e,t,a){e.exports=a.p+"static/media/taskCreation.f1e858b6.gif"},41:function(e,t,a){e.exports=a.p+"static/media/reOrder.ecaf540f.gif"},42:function(e,t,a){e.exports=a.p+"static/media/progressSummary.9f66a979.gif"},43:function(e,t,a){e.exports=a.p+"static/media/soundscapes.52ff8b97.gif"},44:function(e,t,a){e.exports=a.p+"static/media/fokusApp.98e671cb.png"},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(21),s=a.n(n),r=a(5),o=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(r.a,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},d=a(11),u=a(3),v=a.n(u),p=a(17),b=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(d.a)(a,2),s=n[0],r=n[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=s-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",E)),b())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",E))},h=Object(p.throttle)((function(){f(),b()}),30),E=Object(p.throttle)((function(){r(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),b()}),[s]),l.a.createElement(l.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var f=b,h=a(13),E=a(1),g=a.n(E),N=a(10),w=function(e){var t=e.className,a=e.src,n=e.width,s=e.height,r=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){f(b.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:n,height:s,alt:r,onLoad:function(){p(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,y=function(e){var t=e.className,i=Object(c.a)(e,["className"]),n=g()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:n}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(N.a,{to:"/"},l.a.createElement(O,{src:a(33),alt:"Open",width:64,height:64}))))},k=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,s=(e.hideSignin,e.bottomOuterDivider),r=e.bottomDivider,o=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return v&&h(),document.addEventListener("keydown",w),document.addEventListener("click",O),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",O),E()}}));var h=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},E=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},w=function(e){v&&27===e.keyCode&&E()},O=function(e){b.current&&v&&!b.current.contains(e.target)&&e.target!==f.current&&E()},k=g()("site-header",s&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},o,{className:k}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-header-inner",r&&"has-bottom-divider")},l.a.createElement(y,null),!n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:v?E:h},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:b,className:g()("header-nav",v&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:E},"How To Use"))),l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",style:{color:"#121212"},className:"button button-primary button-wide-mobile button-sm",onClick:E},"Contact Us")))))))))};k.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=k,j=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"https://github.com/pg07codes/fokus/"},"How to Use")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"https://github.com/pg07codes/fokus/"},"Contact Us")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/pg07codes/fokus/"},"Star on Github")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://fokus-prototype.netlify.com"},"Open App"))))},D=function(e){var t=e.className,a=e.topOuterDivider,i=(e.topDivider,Object(c.a)(e,["className","topOuterDivider","topDivider"])),n=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},i,{className:n}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-footer-inner")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(y,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(j,null),l.a.createElement("div",{className:"footer-copyright"},"Created by ",l.a.createElement("a",{href:"https://pg07codes.github.io"},"Pranav Gupta"),".")))))};D.defaultProps={topOuterDivider:!1,topDivider:!1};var C=D,F=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(C,null))},L=a(4),P={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},q={types:Object(L.a)({},P.types),defaults:Object(L.a)({},P.defaults)},A={types:Object(L.a)(Object(L.a)({},P.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(L.a)(Object(L.a)({},P.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},S={types:Object(L.a)(Object(L.a)({},P.types),{},{pushLeft:v.a.bool}),defaults:Object(L.a)(Object(L.a)({},P.defaults),{},{pushLeft:!1})},H=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:i}))},T=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,s=e.loading,r=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),n&&"button-".concat(n),s&&"is-loading",r&&"button-block",o&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};T.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var _=T,B=Object(L.a)({},q.defaults),z=function(e){var t=e.className,a=g()("hero section center-content",t),i=g()("hero-inner section-inner");return l.a.createElement("section",{className:a},l.a.createElement("div",{style:{height:50}}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:i},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-32 mb-32 reveal-from-bottom","data-reveal-delay":"200"},"Get tasks done with ",l.a.createElement("span",{className:"text-color-primary"},"Fokus")),l.a.createElement("div",{className:"container-s"},l.a.createElement("p",{className:"mt-32 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"To put it simply, Fokus is a ",l.a.createElement("b",null,"todolist on Steroids"),". It is ",l.a.createElement("b",null,"Free"),", ",l.a.createElement("b",null,"Opensource"),", Offline-first web application, and designed to respect users' privacy. Fokus helps the user to turn their long todo lists into tasks with pre-specified times, tracks users' progress and actually gets the work done with focus."),l.a.createElement("div",{style:{height:30}}),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(H,null,l.a.createElement(_,{style:{color:"#121212"},tag:"a",target:"_blank",rel:"noopener noreferrer",color:"primary",wideMobile:!0,href:"https://fokus-prototype.netlify.com"},"Get Fokus"),l.a.createElement(_,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"dark",wideMobile:!0,href:"https://github.com/pg07codes/fokus/"},"View on Github"))))))))};z.defaultProps=B;var M=z,R=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,s=Object(c.a)(e,["className","data","children","tag"]),r=g()("section-header",t),o=n;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},s,{className:r}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(o,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};R.defaultProps={children:null,tag:"h2"};var U=R,I=Object(L.a)({},S.defaults),G=function(e){var t=e.className,i=g()("features-tiles section",t),n=g()("features-tiles-inner section-inner pt-0"),s=g()("tiles-wrap center-content");return l.a.createElement("section",{className:i},l.a.createElement("div",{style:{height:70}}),l.a.createElement("div",{className:"container mt-32"},l.a.createElement("div",{className:n},l.a.createElement(U,{data:{title:"Packed with awesomeness",paragraph:"Fokus is filled with amazing features that helps the user boost their productivity. Fokus is all about getting tasks done on time with focus. "},className:"center-content"}),l.a.createElement("div",{className:s},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(34),alt:"Features tile icon 01",width:346,height:346}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Create Timed Tasks"),l.a.createElement("p",{className:"m-0 text-sm"},"You assign each ",l.a.createElement("b",null,"task with a time")," to complete it in. Now, when you need to pick a task, ",l.a.createElement("b",null,"fokus")," on it, start the ",l.a.createElement("b",null,"timer"),"and complete it before the timer goes off.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(35),alt:"Features tile icon 02",width:346,height:346}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Soundscapes"),l.a.createElement("p",{className:"m-0 text-sm"},"Play soothing soundscapes as you focus on a task to ",l.a.createElement("b",null,"improve concentration"),". Also, it keeps you on track to get task done and acts as a gentle reminder of the tasks in ",l.a.createElement("b",null,"fokus"),".")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(36),alt:"Features tile icon 03",width:346,height:346}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Track your progress"),l.a.createElement("p",{className:"m-0 text-sm"},"Fokus lets you ",l.a.createElement("b",null,"track your progress live")," w.r.t. the ",l.a.createElement("b",null,"time worked")," and also the ",l.a.createElement("b",null,"tasks completed"),". This way you know not only what is left, but exactly how much is left.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(37),alt:"Features tile icon 04",width:346,height:346}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Fokus Timer"),l.a.createElement("p",{className:"m-0 text-sm"},'Choose a task to "fokus" on. ',l.a.createElement("b",null,"Start timer")," and execute task. The countdown timer shows you the task under fokus, and the tasks' time left.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(38),alt:"Features tile icon 05",width:346,height:346}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Tasks' distribution"),l.a.createElement("p",{className:"m-0 text-sm"},"Assign ",l.a.createElement("b",null,"labels")," to your tasks and the ",l.a.createElement("b",null,"Pie chart")," beautifully visualizes the distribution. Also, we have a ",l.a.createElement("b",null,"daily quote")," to motivate you for the day.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(39),alt:"Features tile icon 06",width:346,height:346}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Dark Mode"),l.a.createElement("p",{className:"m-0 text-sm"},"How can we ignore this! Dark Mode is a must these days and Fokus brings in built Dark Mode for your users. It looks elegant and simply beautiful."))))))))};G.defaultProps=I;var W=G,K=Object(L.a)({},A.defaults),V=function(e){var t=e.className,i=Object(c.a)(e,["className"]),n=g()("features-split section",t),s=g()("features-split-inner section-inner"),r=g()("split-wrap");return l.a.createElement("section",Object.assign({},i,{className:n}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:s},l.a.createElement(U,{data:{title:"Simple. Intuitive. Useful.",paragraph:"Fokus is all about getting your tasks done. Helping you to stop postponing or just making another todolist. It helps in getting the task done without being overly complicated and pushy."},className:"center-content"}),l.a.createElement("div",{className:r},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(40),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(41),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(42),alt:"Features split 03",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(43),alt:"Features split 04",width:528,height:396})))))))};V.defaultProps=K;var J=V,Y=Object(L.a)({},S.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,r=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",o&&"invert-color",t),v=g()("testimonial-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(U,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};$.defaultProps=Y;var Q=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,s=Object(c.a)(e,["className","children","labelHidden","id"]),r=g()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},s,{className:r,htmlFor:n}),a)};Q.defaultProps={children:null,labelHidden:!1,id:null};var X=Q,Z=function(e){var t=e.children,a=e.className,i=e.status,n=Object(c.a)(e,["children","className","status"]),s=g()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},n,{className:s}),t)};Z.defaultProps={children:null,status:!1};var ee=Z,te=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,s=e.type,r=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,f=e.rows,h=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=g()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),O="textarea"===s?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(X,{labelHidden:n,id:E.id},i),l.a.createElement("div",{className:N},l.a.createElement(O,Object.assign({},E,{type:"textarea"!==s?s:null,className:w,name:r,disabled:m,value:d,placeholder:b,rows:"textarea"===s?f:null})),a),h&&l.a.createElement(ee,{status:o},h))};te.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ae=Object(L.a)(Object(L.a)({},q.defaults),{},{split:!1}),ie=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.split,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),v=g()("cta section center-content-mobile reveal-from-bottom",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t);g()("cta-inner section-inner",s&&"has-top-divider",r&&"has-bottom-divider",d&&"cta-split");return l.a.createElement("section",Object.assign({},u,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},l.a.createElement(O,{className:"has-shadow",src:a(44),alt:"Hero",width:896,height:504}))))};ie.defaultProps=ae;var le=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{className:"illustration-section-01"}),l.a.createElement(W,null),l.a.createElement(J,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}))};h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ne=function(){var e=Object(i.useRef)(),t=Object(r.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),l.a.createElement(f,{ref:e,children:function(){return l.a.createElement(r.c,null,l.a.createElement(m,{exact:!0,path:"/",component:le,layout:F}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);var se=Object(o.a)();s.a.render(l.a.createElement(r.b,{history:se},l.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.cf2e5a09.chunk.js.map