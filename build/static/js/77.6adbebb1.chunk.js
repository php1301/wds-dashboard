(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1348:function(e,a,t){"use strict";var n=t(5),r=t.n(n),l=t(8),c=t.n(l),o=t(18),i=t.n(o),s=t(0),m=t.n(s),u=(t(1),t(9)),d=t(12),p=t(150),f=t(258),h=t(37),v=m.a.forwardRef(function(e,a){var t=e.action,n=e.classes,l=e.className,o=e.message,i=c()(e,["action","classes","className","message"]);return m.a.createElement(p.a,r()({component:f.a,variant:"body2",variantMapping:{body1:"div",body2:"div"},role:"alertdialog",square:!0,elevation:6,className:Object(u.a)(n.root,l),ref:a},i),m.a.createElement("div",{className:n.message},o),t?m.a.createElement("div",{className:n.action},t):null)});a.a=Object(d.a)(function(e){var a="light"===e.palette.type?.8:.98,t=Object(h.b)(e.palette.background.default,a);return{root:i()({color:e.palette.getContrastText(t),backgroundColor:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}},{name:"MuiSnackbarContent"})(v)},1901:function(e,a,t){"use strict";var n=t(34),r=t.n(n),l=t(8),c=t.n(l),o=t(18),i=t.n(o),s=t(5),m=t.n(s),u=t(0),d=t.n(u),p=(t(1),t(9)),f=t(12),h=t(55),v=t(20),E=t.n(v),g=t(49),b=t(22);function C(e){return e.substring(2).toLowerCase()}var k=function(e){var a=e.children,t=e.mouseEvent,n=void 0===t?"onClick":t,r=e.touchEvent,l=void 0===r?"onTouchEnd":r,c=e.onClickAway,o=function(){var e=d.a.useRef(!1);return d.a.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e}(),i=d.a.useRef(!1),s=d.a.useRef(null),m=d.a.useCallback(function(e){s.current=E.a.findDOMNode(e)},[]),u=Object(b.c)(a.ref,m),p=d.a.useCallback(function(e){if(!e.defaultPrevented&&o.current)if(i.current)i.current=!1;else{var a=s.current;if(a){var t=Object(g.a)(a);t.documentElement&&t.documentElement.contains(e.target)&&!a.contains(e.target)&&c(e)}}},[o,c]),f=d.a.useCallback(function(){i.current=!0},[]);return d.a.useEffect(function(){if(!1!==l){var e=C(l);return document.addEventListener(e,p),document.addEventListener("touchmove",f),function(){document.removeEventListener(e,p),document.removeEventListener("touchmove",f)}}},[p,f,l]),d.a.useEffect(function(){if(!1!==n){var e=C(n);return document.addEventListener(e,p),function(){document.removeEventListener(e,p)}}},[p,n]),d.a.createElement(d.a.Fragment,null,d.a.cloneElement(a,{ref:u}))},y=t(21),N=t(385),O=t(1348),j=d.a.forwardRef(function(e,a){var t=e.action,n=e.anchorOrigin,l=n.vertical,o=n.horizontal,i=e.autoHideDuration,s=e.children,u=e.classes,f=e.className,h=e.ClickAwayListenerProps,v=e.ContentProps,E=e.disableWindowBlurListener,g=e.message,b=e.onClose,C=e.onEnter,N=e.onEntered,j=e.onEntering,w=e.onExit,x=e.onExited,z=e.onExiting,I=e.onMouseEnter,L=e.onMouseLeave,T=e.open,R=e.resumeHideDuration,S=e.TransitionComponent,M=e.transitionDuration,P=e.TransitionProps,A=c()(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),B=d.a.useRef(),D=d.a.useState(!T),q=r()(D,2),H=q[0],W=q[1],U=d.a.useCallback(function(e){var a=null!=e?e:i;b&&null!=a&&(clearTimeout(B.current),B.current=setTimeout(function(){b&&null!=(null!=e?e:i)&&b(null,"timeout")},a))},[i,b]);d.a.useEffect(function(){return T&&U(),function(){clearTimeout(B.current)}},[T,U]);var _=function(){clearTimeout(B.current)},F=d.a.useCallback(function(){if(null!=i){if(null!=R)return void U(R);U(.5*i)}},[i,R,U]);return d.a.useEffect(function(){if(!E)return window.addEventListener("focus",F),window.addEventListener("blur",_),function(){window.removeEventListener("focus",F),window.removeEventListener("blur",_)}},[E,F]),!T&&H?null:d.a.createElement(k,m()({onClickAway:function(e){b&&b(e,"clickaway")}},h),d.a.createElement("div",m()({className:Object(p.a)(u.root,u["anchorOrigin".concat(Object(y.a)(l)).concat(Object(y.a)(o))],f),onMouseEnter:function(e){I&&I(e),_()},onMouseLeave:function(e){L&&L(e),F()},ref:a},A),d.a.createElement(S,m()({appear:!0,in:T,onEnter:Object(y.b)(function(){W(!1)},C),onEntered:N,onEntering:j,onExit:w,onExited:Object(y.b)(function(){W(!0)},x),onExiting:z,timeout:M,direction:"top"===l?"down":"up"},P),s||d.a.createElement(O.a,m()({message:g,action:t},v)))))});j.defaultProps={anchorOrigin:{vertical:"bottom",horizontal:"center"},disableWindowBlurListener:!1,TransitionComponent:N.a,transitionDuration:{enter:h.b.enteringScreen,exit:h.b.leavingScreen}};a.a=Object(f.a)(function(e){var a={top:8},t={bottom:8},n={justifyContent:"flex-end"},r={justifyContent:"flex-start"},l={top:24},c={bottom:24},o={right:24},s={left:24},u={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:m()({},a,i()({},e.breakpoints.up("sm"),m()({},l,u))),anchorOriginBottomCenter:m()({},t,i()({},e.breakpoints.up("sm"),m()({},c,u))),anchorOriginTopRight:m()({},a,n,i()({},e.breakpoints.up("sm"),m()({left:"auto"},l,o))),anchorOriginBottomRight:m()({},t,n,i()({},e.breakpoints.up("sm"),m()({left:"auto"},c,o))),anchorOriginTopLeft:m()({},a,r,i()({},e.breakpoints.up("sm"),m()({right:"auto"},l,s))),anchorOriginBottomLeft:m()({},t,r,i()({},e.breakpoints.up("sm"),m()({right:"auto"},c,s)))}},{flip:!1,name:"MuiSnackbar"})(j)},2331:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t(27),o=t(30),i=t(28),s=t(29),m=t(420),u=t(1901),d=t(255),p=t(568),f=t.n(p),h=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,message:null},t.handleClick=function(){t.setState({open:!0})},t.handleRequestClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick},this.props.children),r.a.createElement(u.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Note archived"),action:[r.a.createElement(m.a,{key:"undo",color:"secondary",size:"small",onClick:this.handleRequestClose},"UNDO"),r.a.createElement(d.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleRequestClose},r.a.createElement(f.a,null))]}))}}]),a}(n.Component),v=t(7),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,vertical:null,horizontal:null},t.handleClick=function(e){return function(){t.setState(Object(v.a)({open:!0},e))}},t.handleRequestClose=function(){t.setState({open:!1})},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.vertical,t=e.horizontal,n=e.open;return r.a.createElement("div",{className:"manage-margin"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"top",horizontal:"center"})},r.a.createElement("span",null,"Top-Center")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"top",horizontal:"right"})},r.a.createElement("span",null,"Top-Right")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"bottom",horizontal:"right"})},r.a.createElement("span",null,"Bottom-Right")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"bottom",horizontal:"center"})},r.a.createElement("span",null,"Bottom-Center")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"bottom",horizontal:"left"})},r.a.createElement("span",null,"Bottom-Left")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"top",horizontal:"left"})},r.a.createElement("span",null,"Top-Left")),r.a.createElement(u.a,{anchorOrigin:{vertical:a,horizontal:t},open:n,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),a}(n.Component),g=t(387);function b(e){return r.a.createElement(g.a,Object.assign({},e,{direction:"left"}))}function C(e){return r.a.createElement(g.a,Object.assign({},e,{direction:"up"}))}function k(e){return r.a.createElement(g.a,Object.assign({},e,{direction:"right"}))}function y(e){return r.a.createElement(g.a,Object.assign({},e,{direction:"down"}))}var N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,Transition:null},t.handleClick=function(e){return function(){t.setState({open:!0,Transition:e})}},t.handleClose=function(){t.setState({open:!1})},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",className:"mb-1 mr-3",color:"primary",onClick:this.handleClick(b)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-right zmdi-hc-fw "}),r.a.createElement("span",null,"Right")),r.a.createElement(m.a,{variant:"contained",className:"mb-1 mr-3",color:"primary",onClick:this.handleClick(C)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-up zmdi-hc-fw "}),r.a.createElement("span",null,"Up")),r.a.createElement(m.a,{variant:"contained",className:"mb-1 mr-3",color:"primary",onClick:this.handleClick(k)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-left zmdi-hc-fw "}),r.a.createElement("span",null,"Left")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick(y)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-down zmdi-hc-fw "}),r.a.createElement("span",null,"Down")),r.a.createElement(u.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:this.state.Transition,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),a}(r.a.Component),O=t(257),j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1},t.handleClick=function(){t.setState({open:!0})},t.handleRequestClose=function(){t.setState({open:!1})},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick},r.a.createElement("span",null,"Fade")),r.a.createElement(u.a,{open:this.state.open,onClose:this.handleRequestClose,TransitionComponent:O.a,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),a}(n.Component),w=t(450),x=t(449),z=t(1348),I=t(2),L=r.a.createElement(m.a,{variant:"contained",color:"secondary",size:"small"},"Click"),T=r.a.createElement(d.a,{color:"secondary"},r.a.createElement("i",{className:"zmdi zmdi-alarm-snooze"}));a.default=function(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement(x.a,{title:r.a.createElement(I.a,{id:"sidebar.components.snackbars"}),match:a}),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",childrenStyle:"d-flex justify-content-center",heading:r.a.createElement(I.a,{id:"component.snackbars.simple"})},r.a.createElement("div",{className:"d-flex flex-row manage-margin"},r.a.createElement(h,null,r.a.createElement("span",null,"Slide")),r.a.createElement(j,null))),r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",childrenStyle:"d-flex justify-content-center",heading:r.a.createElement(I.a,{id:"component.snackbars.transition"})},r.a.createElement(N,null))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-12",heading:r.a.createElement(I.a,{id:"component.snackbars.positioned"})},r.a.createElement(E,null))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.onlyMessage"})},r.a.createElement(z.a,{className:"mb-2",message:"Various versions have evolved over the years."})),r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.messageWithButton"})},r.a.createElement(z.a,{className:"mb-2",message:"All the Lorem Ipsum generators.",action:L}))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.withIconButton"})},r.a.createElement(z.a,{className:"mb-2",message:"All the Lorem Ipsum generators.",action:T})),r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.multilineText"})},r.a.createElement(z.a,{className:"mb-2",message:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary generator on the Internet."}))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.colors"})},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-primary",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-secondary",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-warning",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-light text-black",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-info",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-danger",message:"I love candy. I love cookies. I love cupcakes."}))))))}},260:function(e,a,t){"use strict";t.r(a);var n=t(181);t.d(a,"default",function(){return n.a})},449:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(453),c=t(454),o=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),r.a.createElement(l.a,{className:"mb-0",tag:"nav"},n.map(function(e,a){return r.a.createElement(c.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:o(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))})))}},450:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=function(e){var a=e.heading,t=e.children,n=e.styleName,l=e.cardStyle,c=e.childrenStyle,o=e.headerOutside,i=e.headingStyle;return r.a.createElement("div",{className:"".concat(n)},o&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&r.a.createElement("div",{className:"entry-description"},t[0])),r.a.createElement("div",{className:"jr-card ".concat(l)},!o&&a&&r.a.createElement("div",{className:"jr-card-header ".concat(i)},r.a.createElement("h3",{className:"card-heading"},a),t.length>1&&r.a.createElement("div",{className:"sub-heading"},t[0])),r.a.createElement("div",{className:"jr-card-body ".concat(c)},t.length>1?t[1]:t)))};a.a=l,l.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},451:function(e,a,t){"use strict";var n=t(58);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=l.default.memo(l.default.forwardRef(function(a,t){return l.default.createElement(c.default,(0,r.default)({},a,{ref:t}),e)}));0;return t.muiName=c.default.muiName,t};var r=n(t(5)),l=n(t(0)),c=n(t(260))},453:function(e,a,t){"use strict";var n=t(14),r=t(32),l=t(0),c=t.n(l),o=t(1),i=t.n(o),s=t(60),m=t.n(s),u=t(23),d={tag:u.p,listTag:u.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,o=e.children,i=e.tag,s=e.listTag,d=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(u.l)(m()(a),l),h=Object(u.l)(m()("breadcrumb",t),l);return c.a.createElement(i,Object(n.a)({},p,{className:f,"aria-label":d}),c.a.createElement(s,{className:h},o))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},454:function(e,a,t){"use strict";var n=t(14),r=t(32),l=t(0),c=t.n(l),o=t(1),i=t.n(o),s=t(60),m=t.n(s),u=t(23),d={tag:u.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.active,o=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),s=Object(u.l)(m()(a,!!l&&"active","breadcrumb-item"),t);return c.a.createElement(o,Object(n.a)({},i,{className:s,"aria-current":l?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},568:function(e,a,t){"use strict";var n=t(58);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=(0,n(t(451)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");a.default=l}}]);
//# sourceMappingURL=77.6adbebb1.chunk.js.map