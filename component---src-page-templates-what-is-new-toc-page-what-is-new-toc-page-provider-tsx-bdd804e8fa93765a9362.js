(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3Ynt":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("hGi/"),o=n("q1tI"),c=n.n(o),r=n("aSAQ"),i=(n("TSYQ"),n("9Aqu")),l=(n("Wbzz"),n("eW31")),u=n("KwDJ"),s=Object(l.a)((function(e){return Object(a.a)(e),c.a.createElement(r.a,null,c.a.createElement(u.a,null),c.a.createElement(i.a,null))}))},"3kc7":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),c=n("hGi/"),r=(n("ls38"),n("T3EJ")),i=n("3Ynt"),l=n("h59u"),u=n("DEsH"),s=n("bnLi"),m=n("Z+f3"),f=n("8qo5"),v=function(e){Object(c.a)(e);var t=Object(s.b)(m.a.WhatIsNewTocPageGui)[0];return o.a.createElement(f.a,null,o.a.createElement("div",{className:"content__win-toc-control-bar_wrapper"},o.a.createElement("span",{className:"win-toc-content-control-bar__label"},t.primaryContentBar.label)))},d=n("Wbzz"),p=n("KraK"),b=n("ouma"),_=n("4KgZ"),w=n("crWK"),E=n("pJAA"),h=n("heD2"),N=n("FYJp"),y=n("S8kh"),T=n("Qi+0"),k=n("ql8V"),g=function(){function e(){}return e.getInstance=function(t){return e.instance||(e.instance=e.create(t)),e.instance},e}();g.create=function(e){var t=e.winTocTree,n=e.location,a=new k.a(t,!1),o=Object(T.c)();return{router:y.a.create({location:n}),winTocCollapseStore:a,behaviorNotificationStore:o}};var j=Object(a.createContext)(null),O=function(){return Object(a.useContext)(j)},C=function(e){var t=e.winTocTreeNodeId,n=e.onCopyLinkToBuffer,a=Object(s.b)()[0].lang,c=O().winTocCollapseStore.getNodeById(t);if(!c)throw new Error("");var r=c.data,i=Object(N.a)(r),l=r.innovations.map((function(e,t){return o.a.createElement(L,{key:t,version:Object(N.b)(e.version).mmp,innovationName:e.innovationName,path:e.path,onCopyLinkToBuffer:n})}));return o.a.createElement("div",{className:"win-toc"},o.a.createElement("div",{className:"win-toc__first-level"},o.a.createElement(I,{releaseInfo:i,locale:a,onCopyLinkToBuffer:n})),o.a.createElement("div",{className:"win-toc__second-level"},l))},I=function(e){var t=Object(s.b)(m.a.WhatIsNewTocPageGui)[0],n=e.releaseInfo,a=e.locale,c=e.onCopyLinkToBuffer,r=Object(N.b)(n.version),i=w.a.whatIsNewRoutes.getWhatIsNewRoute({version:r.mmp});return o.a.createElement("div",{className:"win-toc__item win-toc__item_first-level"},o.a.createElement(d.Link,{className:"win-toc__gatsby-link win-toc__version",to:i},o.a.createElement("span",{className:"win-toc__version-phase"},r.version)),o.a.createElement("div",{className:"win-toc__control win-toc__control_first-level"},o.a.createElement(p.a,{className:"win-toc-control__copy-to-buffer-button",size:p.b.SM,onClick:function(){return c(i)}},o.a.createElement(b.p,{className:"copy-to-buffer-button__svg-icon"}),o.a.createElement(_.a,{className:"win-toc__tooltip_copy-to-buffer",position:_.b.BottomCenter},t.tocItem.copyLinkToBufferButton.tooltip))),o.a.createElement("div",{className:"win-toc__version-date"},o.a.createElement("span",null,E.a(n.dateRelease,a))))},L=function(e){var t=Object(s.b)(m.a.WhatIsNewTocPageGui)[0],n=e.version,a=e.innovationName,c=e.path,r=e.onCopyLinkToBuffer,i=w.a.whatIsNewRoutes.getWhatIsNewRoute({version:new h.Version(n).mmp,innovation:c});return o.a.createElement("div",{className:"win-toc__item win-toc__item_second-level"},o.a.createElement("div",{className:"win-toc__version_color-indicator"}),o.a.createElement("div",null,o.a.createElement(d.Link,{className:"win-toc__gatsby-link",to:i},a)),o.a.createElement("div",{className:"win-toc__control"},o.a.createElement(p.a,{className:"win-toc-control__copy-to-buffer-button win-toc-control__button_offset-for-center",size:p.b.SM,onClick:function(){return r(i)}},o.a.createElement(b.p,{className:"copy-to-buffer-button__svg-icon"}),o.a.createElement(_.a,{className:"win-toc__tooltip_copy-to-buffer",position:_.b.BottomCenter},t.tocItem.copyLinkToBufferButton.tooltip))))},B=n("LH4d"),S=n("e9vv"),W=function(e){Object(c.a)(e);Object(s.b)(m.a.WhatIsNewTocPageGui)[0];var t=O(),n=t.winTocCollapseStore,a=t.router,r=Object(S.a)(),i=function(e){var t=""+a.origin+e;B.a(t),r.copyLink()},l=n.tree.reverse().map((function(e){return o.a.createElement(C,{key:e.id,winTocTreeNodeId:e.id,onCopyLinkToBuffer:i})}));return o.a.createElement("main",{className:"content content-without-control win-toc-content"},l)},D=function(e){return Object(c.a)(e),o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{driver:o.a.createElement(i.a,null),content:o.a.createElement(u.a,{controlBar:o.a.createElement(v,null),content:o.a.createElement(W,null)})}),o.a.createElement(l.a,null))},Y=n("H8eV"),z=n("73Uz"),J=n("19Yi");t.default=function(e){var t=e.pageContext,n=e.location,a=t.localization,c=t.winTocTree,r=g.getInstance({location:n,winTocTree:c});return o.a.createElement(j.Provider,{value:r},o.a.createElement(J.a.Provider,{value:r.behaviorNotificationStore},o.a.createElement(y.b.Provider,{value:r.router},o.a.createElement(s.a.Provider,{value:a},o.a.createElement(z.a,null,o.a.createElement(Y.a,null),o.a.createElement(D,null))))))}},FYJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n("heD2"),o=function(e){return e.releaseHistory[0]},c=function(e){return new a.Version(e)}},LH4d:function(e,t,n){"use strict";function a(e){var t=document.createElement("input"),n=document.activeElement;t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),n.focus()}n.d(t,"a",(function(){return a}))},e9vv:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("bnLi"),o=n("q1tI"),c=n("Z+f3"),r=n("uRCh"),i=n("19Yi"),l=n("Qi+0"),u=function(){var e=Object(a.b)(c.a.BehaviorNotification)[0],t=Object(i.b)();return Object(o.useRef)({copyLink:function(){return t.send({type:l.b.CopyLinkDefaultNotice,id:Object(r.generateStringId)(),message:e.copyLink})}}).current}},h59u:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("hGi/"),o=n("q1tI"),c=n.n(o),r=n("TSYQ"),i=n.n(r),l=n("eW31"),u=n("Qi+0"),s=Object(l.a)((function(e){var t,n,a=e.model,r=e.children,l=i()("behavior-notice_default-notice_opacity-container",((t={})["behavior-notice_default-notice_opacity-container_hidden"]=a.phase===u.a.BeforeShow,t)),s=i()("behavior-notice_default-notice",((n={})["behavior-notice_default-notice_show"]=a.phase===u.a.Show,n["behavior-notice_default-notice_hide"]=a.phase===u.a.Hide,n));return function(e){return e.index.current+1===e.index.total}(a)||a.destroy(),Object(o.useLayoutEffect)((function(){window.setTimeout((function(){return a.show()}),0)}),[]),c.a.createElement("div",{className:l},c.a.createElement("div",{className:s,onTransitionEnd:function(e){a.phase===u.a.Show?a.hide():a.phase===u.a.Hide&&a.destroy()}},null!=r?r:a.message))})),m=n("ouma"),f=n("19Yi"),v=function(){};v.componentMap=new Map([[u.b.DefaultNotice,s],[u.b.CopyLinkDefaultNotice,function(e){var t=e.model;return c.a.createElement(s,{model:t},c.a.createElement("div",{className:"copy-link-default-behavior-notice"},c.a.createElement("div",{className:"copy-link-default-behavior-notice__icon_wrapper"},c.a.createElement(m.p,{className:"copy-link-default-behavior-notice__icon"})),c.a.createElement("span",{className:"copy-link-default-behavior-notice__label"},t.message)))}]]),v.getNoticeComponentByType=function(e){return v.componentMap.get(e)};var d=Object(l.a)((function(e){Object(a.a)(e);var t=Object(f.b)().noticeAll.map((function(e){var t=v.getNoticeComponentByType(e.type);if(t)return c.a.createElement(t,{key:e.id,model:e})}));return c.a.createElement("div",{className:"behavior-notification"},t)}))},ls38:function(e,t,n){},pJAA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=function(e,t,n){return void 0===n&&(n="ru"),new Date(e).toLocaleDateString(n,t)},o=function(e,t){void 0===t&&(t="ru");return a(e,{year:"numeric",month:"long",day:"numeric"},t)},c=function(e,t){void 0===t&&(t="ru");return a(e,{year:"numeric",month:"numeric",day:"numeric"},t)}}}]);
//# sourceMappingURL=component---src-page-templates-what-is-new-toc-page-what-is-new-toc-page-provider-tsx-bdd804e8fa93765a9362.js.map