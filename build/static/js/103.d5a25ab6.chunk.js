(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{2281:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(905),i=t(906),l=t(449),c=t(2);a.default=function(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement(l.a,{title:r.a.createElement(c.a,{id:"sidebar.customViews.plainListView"}),match:a}),r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},i.a.map(function(e,a){return r.a.createElement(s.a,{key:a,data:e,styleName:"card-simple"})})))}},449:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(453),i=t(454),l=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),r.a.createElement(s.a,{className:"mb-0",tag:"nav"},n.map(function(e,a){return r.a.createElement(i.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:l(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))})))}},453:function(e,a,t){"use strict";var n=t(14),r=t(32),s=t(0),i=t.n(s),l=t(1),c=t.n(l),o=t(60),m=t.n(o),d=t(23),u={tag:d.p,listTag:d.p,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,l=e.children,c=e.tag,o=e.listTag,u=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(d.l)(m()(a),s),h=Object(d.l)(m()("breadcrumb",t),s);return i.a.createElement(c,Object(n.a)({},p,{className:g,"aria-label":u}),i.a.createElement(o,{className:h},l))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},454:function(e,a,t){"use strict";var n=t(14),r=t(32),s=t(0),i=t.n(s),l=t(1),c=t.n(l),o=t(60),m=t.n(o),d=t(23),u={tag:d.p,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.active,l=e.tag,c=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(d.l)(m()(a,!!s&&"active","breadcrumb-item"),t);return i.a.createElement(l,Object(n.a)({},c,{className:o,"aria-current":s?"page":void 0}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p},905:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(274),i=t(420),l=t(2);a.a=function(e){var a=e.styleName,t=e.data,n=t.image,c=t.name,o=t.designation,m=t.description;return r.a.createElement("div",{className:"user-list d-flex flex-row  ".concat(a)},r.a.createElement(s.a,{alt:"...",src:n,className:"user-avatar avatar-shadow"}),r.a.createElement("div",{className:"description"},r.a.createElement("h5",null,c),r.a.createElement("h6",null,o),r.a.createElement("p",{className:"text-muted"},m),r.a.createElement("ul",{className:"list-inline d-sm-flex flex-sm-row jr-mbtn-list"},r.a.createElement("li",null,r.a.createElement(i.a,{color:"primary"},r.a.createElement(l.a,{id:"button.modify"}))),r.a.createElement("li",null,r.a.createElement(i.a,{color:"secondary"},r.a.createElement(l.a,{id:"button.delete"}))))))}},906:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n=[{name:"Domnic Harris",designation:"Android Developer",image:t(61),description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"},{name:"Garry Sobars",designation:"React Developer",image:t(117),description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."},{name:"Stella Johnson",designation:"Designer",image:t(51),description:"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."},{name:"John Smith",designation:"BDM",image:t(45),description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."},{name:"Alex Dolgove",designation:"Actor",image:t(38),description:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' "},{name:"Domnic Brown",designation:"Singer",image:t(52),description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}]}}]);
//# sourceMappingURL=103.d5a25ab6.chunk.js.map