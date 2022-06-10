"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{14513:function(e,t,n){n.d(t,{w:function(){return p}});var r=n(44925),i=(n(67294),n(94184)),a=n.n(i),o=n(92657),c=n(85893),l=function(e){var t=e.lang,n=e.children;return(0,c.jsx)(o.Z,{language:t,children:n,PreTag:"div",customStyle:{background:"node",whiteSpace:"pre-wrap"}})},u=function(e){var t=e.children;return(0,c.jsx)("code",{className:"content__code_inline",children:t})},s=function(e){var t=e.lang,n=e.children,r="content__code-panel_lang_".concat(t),i=a()("content__code-panel_top",r),o=a()("content__code-panel_bottom",r);return(0,c.jsxs)("div",{className:"content__code",children:[(0,c.jsx)("div",{className:i,children:(0,c.jsx)("span",{className:"content_code-label_lang",children:t})}),(0,c.jsx)("pre",{className:"content__pre",children:n}),(0,c.jsx)("div",{className:o})]})},d=n(55246),f=function(e){var t=e.src,n=e.alt;return(0,c.jsx)(d.Z,{preview:!1,src:t,alt:n,height:"200",width:"100%"})},h=n(11163),v=function(e){var t=e.href,n=e.children,r=(0,h.useRouter)();return(0,c.jsx)("a",{className:"content__link",href:t,onClick:function(){r.push(t)},children:n})},m=["children"],g=["inline","className","children"],p={pre:function(e){var t=e.children,n=((0,r.Z)(e,m),t[0].props.className.replace("language-",""));return(0,c.jsx)(s,{lang:n,children:t})},code:function(e){var t=e.inline,n=e.className,i=e.children,a=((0,r.Z)(e,g),String(i).replace(/\n$/,""));if(t)return(0,c.jsx)(u,{children:a});var o=n.replace("language-","");return(0,c.jsx)(l,{children:a,lang:o})},img:function(e){return(0,c.jsx)(f,{src:e.src,alt:e.alt})},paragraph:function(e){var t=e.node;if("image"===t.children[0].type){var n=t.children[0];return(0,c.jsx)(f,{src:n.url,alt:n.alt})}return(0,c.jsx)("p",{children:e.children})},a:function(e){var t=e.href,n=e.children;return(0,c.jsx)(v,{href:t,children:n})}}},45976:function(e,t,n){n.d(t,{C:function(){return d}});n(67294);var r=n(41664),i=n(94184),a=n.n(i),o=n(84503),c=n(52766),l=n(82545),u=n(77348),s=n(85893),d=(0,c.Pi)((function(e){var t,n=e.className,i=(0,l.o)(),c=(0,u.ex)(),d=a()("layer","driver-content-nav",n),f=function(e){var t=window.getComputedStyle(document.body).getPropertyValue("--breakpoint_sm");document.documentElement.clientWidth<parseFloat(t)&&setTimeout((function(){c.appDriverToggle.close()}),600),console.log("CHANGE_PAGE_POSITION")},h=null===(t=i.tree.children)||void 0===t?void 0:t.map((function(e){var t=e.path,n=e.title,i=e.key;return(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(r.default,{href:"#".concat(t),scroll:!1,children:(0,s.jsx)("a",{onClick:f,children:n})})},i)}));return(0,s.jsx)("div",{className:d,children:(0,s.jsx)(o.Z,{className:"driver-content-nav__menu",mode:"inline",defaultOpenKeys:["content-nav"],selectedKeys:i.activeKeys,children:(0,s.jsx)(o.Z.SubMenu,{title:"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435",children:h},"content-nav")})})}))},55645:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(67294),i=n(17066),a=n(18222),o=n(98453),c=n(33178),l=n(85893),u=function(e){var t=e.githubFileInfo,n=(0,r.useMemo)((function(){return new Date(t.lastUpdate).toLocaleDateString()}),c.L),u=(0,r.useMemo)((function(){return{color:"#fff",backgroundColor:"#1890ff"}}),c.L),s=t.contributorAll.map((function(e,t){var n=e.name,r=e.avatar,c=e.githubUrl;return(0,l.jsx)(i.Z,{title:n,placement:"top",children:(0,l.jsx)(a.Z,{className:"github-file-info-bar__avatar-btn",shape:"circle",href:c,target:"_blank",children:(0,l.jsx)(o.C,{src:r})})},t)}));return(0,l.jsxs)("div",{className:"github-file-info-bar",children:[(0,l.jsxs)("div",{className:"github-file-info-bar__section github-file-info-bar__section_contributors",children:[(0,l.jsx)("span",{className:"github-file-info-bar__label",children:"\u041a\u043e\u043d\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u0435\u0440\u044b"}),(0,l.jsx)(o.C.Group,{maxCount:5,maxStyle:u,children:s})]}),(0,l.jsxs)("div",{className:"github-file-info-bar__section github-file-info-bar__section_update-info",children:[(0,l.jsx)("span",{className:"github-file-info-bar__label",children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e"}),(0,l.jsx)("span",{className:"github-file-info-bar__label_date",children:n})]})]})}},61101:function(e,t,n){n.d(t,{mJ:function(){return l},Bk:function(){return u},w4:function(){return f},mh:function(){return h}});n(67294);var r=n(94184),i=n.n(r),a=n(77348),o=n(52766),c=n(85893),l=function(e){var t=e.children;return(0,c.jsx)("div",{className:"slide-layer__driver",children:(0,c.jsx)("div",{className:"slide-layer__fixed-driver",children:t})})},u=function(e){var t=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"slide-layer__first-empty"}),(0,c.jsx)("div",{className:"slide-layer__content",children:t}),(0,c.jsx)("div",{className:"slide-layer__last-empty"})]})},s=function(e){var t=e.children;return(0,c.jsx)("div",{className:"slide-layer__content_fill-layer",children:t})},d=function(e){var t=e.children;return(0,c.jsx)("div",{className:"slide-layer__content_centred-layer",children:t})},f=(0,o.Pi)((function(e){var t=e.className,n=e.children,r=(0,a.ex)(),o=i()("layer","slide-layer",t);return(0,c.jsx)("div",{className:o,toggle:r.appDriverToggle.isToggle.toString(),children:n})})),h=function(e){var t=e.className,n=e.children,r=i()("layer",t);return(0,c.jsx)("div",{className:r,children:(0,c.jsx)(s,{children:(0,c.jsx)(d,{children:n})})})}},23907:function(e,t,n){n.d(t,{H_:function(){return r},D3:function(){return i},r2:function(){return a}});var r="top",i="bottom",a="inside"},82545:function(e,t,n){n.d(t,{F:function(){return i},o:function(){return a}});var r=n(67294),i=(0,r.createContext)({}),a=function(){return(0,r.useContext)(i)}},16491:function(e,t,n){n.d(t,{u:function(){return o}});var r=n(67294),i=n(11163),a=n(52119);function o(){var e=(0,i.useRouter)();(0,r.useEffect)((function(){function t(){if(0===window.scrollX)return window.removeEventListener("scroll",t),void setTimeout((function(){scrollX>0&&(document.scrollingElement.scrollLeft=0)}));document.scrollingElement.scrollLeft=0}function n(){var e=location.hash.slice(1);(0,a._)(e),window.addEventListener("scroll",t)}return window.addEventListener("scroll",t),e.events.on("hashChangeStart",n),function(){e.events.off("hashChangeStart",n),window.removeEventListener("scroll",t)}}),[])}},30954:function(e,t,n){n.d(t,{P:function(){return c}});var r=n(98052),i=function(e){e.data||(e.data={}),e.data.hProperties||(e.data.hProperties={}),e.data.hProperties.className||(e.data.hProperties.className=[]);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];n.forEach((function(t){return e.data.hProperties.className.push(t)}))},a=[{validator:function(e){return"list"===e.type},action:function(e){return i(e,"content__list")}},{validator:function(e){return"heading"===e.type},action:function(e){return i(e,"content__heading")}}],o=function(e){return a.some((function(t){return t.validator(e)}))},c=function(){return function(e){try{(0,r.Vn)(e,o,(function(e){!function(e){a.find((function(t){return t.validator(e)})).action(e)}(e)}))}catch(t){console.error(t)}finally{return e}return e}}},93963:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(93433),i=n(15671),a=n(43144),o=n(4942),c=n(23907),l=n(68949),u=n(52119),s=function(){function e(t){var n=this;(0,i.Z)(this,e),(0,o.Z)(this,"contentNavMetadataAll",void 0),(0,o.Z)(this,"elementIdByKeyMap",void 0),(0,o.Z)(this,"prevIds",void 0),(0,o.Z)(this,"nextIds",void 0),(0,o.Z)(this,"contentNavTreeNode",void 0),(0,o.Z)(this,"update",(function(t){n.contentNavTreeNode=t,n.contentNavMetadataAll=e.createContentNavMetadataAll(n.contentNavTreeNode),n.elementIdByKeyMap=e.createElementIdByKeyMap(n.contentNavMetadataAll),n.prevIds=e.createPrevIds(n.contentNavMetadataAll),n.nextIds=e.createNextIds(n.contentNavMetadataAll)})),(0,o.Z)(this,"isStartContent",(function(e){return e===c.H_})),(0,o.Z)(this,"isEndContent",(function(e){return e===c.D3})),(0,o.Z)(this,"getFirstMetadata",(function(){return n.contentNavMetadataAll[0]})),(0,o.Z)(this,"getLastMetadata",(function(){return n.contentNavMetadataAll[n.contentNavMetadataAll.length-1]})),(0,o.Z)(this,"goToAnchor",(function(e){(0,u._)(e)})),(0,o.Z)(this,"getPrevAnchor",(function(e){var t;if(n.isEndContent(e))t=n.getLastMetadata();else{var r=n.contentNavMetadataAll.find((function(t){return t.path===e}));t=n.contentNavMetadataAll[r.index-1]}if(!t)throw new Error('Prev metadata for elementId "'.concat(e,'" not exists.'));return t.path})),(0,o.Z)(this,"getNextAnchor",(function(e){var t;if(n.isStartContent(e))t=n.getFirstMetadata();else{var r=n.contentNavMetadataAll.find((function(t){return t.path===e}));t=n.contentNavMetadataAll[r.index+1]}if(!t)throw new Error('Prev metadata for elementId "'.concat(e,'" not exists.'));return t.path})),(0,o.Z)(this,"getActiveKeyByElementId",(function(e){return n.elementIdByKeyMap.get(e)})),(0,o.Z)(this,"isPrev",(function(e){return n.prevIds.has(e)||n.isEndContent(e)})),(0,o.Z)(this,"isNext",(function(e){return n.nextIds.has(e)||n.isStartContent(e)})),(0,o.Z)(this,"goPrev",(function(e){n.goToAnchor(n.getPrevAnchor(e))})),(0,o.Z)(this,"goNext",(function(e){n.goToAnchor(n.getNextAnchor(e))})),this.update(t),(0,l.rC)(this,{contentNavTreeNode:l.LO,update:l.aD})}return(0,a.Z)(e,[{key:"tree",get:function(){return this.contentNavTreeNode}}]),e}();(0,o.Z)(s,"createContentNavMetadataAll",(function(e){var t=function(e){var t=e.elementId,n=e.path;return{index:e.contentIndex,elementId:t,path:n,key:e.key}};return function(e){var n,r=[t(e)];"children"in e&&(null===(n=e.children)||void 0===n||n.forEach((function(e){return r.push(t(e))})));return r}(e)})),(0,o.Z)(s,"createPrevIds",(function(e){return new Set((0,r.Z)(e).splice(1).map((function(e){return e.path})))})),(0,o.Z)(s,"createNextIds",(function(e){return new Set((0,r.Z)(e).splice(0,e.length-1).map((function(e,t,n){return e.path})))})),(0,o.Z)(s,"createElementIdByKeyMap",(function(e){return e.reduce((function(e,t){var n=t.path,r=t.key;return e.set(n,r)}),new Map)}))},79981:function(e,t,n){n.d(t,{$:function(){return f}});var r=n(52766),i=n(67294),a=n(11163),o=n(15671),c=n(43144),l=n(4942),u=function(){function e(t,n){var r=this;(0,o.Z)(this,e),this.selector=t,this.offset=n,(0,l.Z)(this,"clientRectAll",void 0),(0,l.Z)(this,"clientRectToElementIdMap",void 0),(0,l.Z)(this,"currentPageOffsetY",void 0),(0,l.Z)(this,"scrollHeight",0),(0,l.Z)(this,"update",(function(){var t=e.getElementBySelectorAll(r.selector);r.clientRectToElementIdMap=t.reduce((function(e,t){return e.set(t.getBoundingClientRect(),t.id)}),new Map),r.clientRectAll=Array.from(r.clientRectToElementIdMap.keys()),r.currentPageOffsetY=window.pageYOffset,r.scrollHeight=document.documentElement.scrollHeight})),(0,l.Z)(this,"getElementIdByY",(function(){var e;r.isChangeHeight&&r.update();var t=r.clientRectAll.find((function(e){return e.top+r.currentPageOffsetY-window.pageYOffset<r.offset.y&&e.bottom+r.currentPageOffsetY-window.pageYOffset>=r.offset.y}));return t&&null!==(e=r.clientRectToElementIdMap.get(t))&&void 0!==e?e:null})),this.update()}return(0,c.Z)(e,[{key:"isChangeHeight",get:function(){return this.scrollHeight!==document.documentElement.scrollHeight}}]),e}();(0,l.Z)(u,"createOffset",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{x:e,y:t}})),(0,l.Z)(u,"getElementBySelectorAll",(function(e){return Array.from(document.querySelectorAll(e))}));var s=n(23907),d=function e(){(0,o.Z)(this,e)};(0,l.Z)(d,"PAGE_CONTENT_ELEMENT_SELECTOR","#content"),(0,l.Z)(d,"getIdByClientRect",(function(){var e=document.querySelector(d.PAGE_CONTENT_ELEMENT_SELECTOR).getBoundingClientRect();return e.top>0?s.H_:e.bottom<document.documentElement.clientHeight?s.D3:s.r2}));function f(e){var t=function(){var e=(0,a.useRouter)(),t=(0,r.fv)((function(){return{activeId:null,elementId:null,setElementId:function(e){var n=e;n||(n=d.getIdByClientRect()),t.elementId=n}}}));return(0,i.useLayoutEffect)((function(){var e,n,r=(null!==(e=parseFloat(window.getComputedStyle(document.body).getPropertyValue("--app-offset_top")))&&void 0!==e?e:0)+(null!==(n=parseFloat(window.getComputedStyle(document.body).getPropertyValue("--app-header_height")))&&void 0!==n?n:0),i=new u("main section",u.createOffset(0,r));function a(){t.setElementId(i.getElementIdByY())}function o(){a()}function c(){a()}return a(),window.addEventListener("resize",o),window.addEventListener("scroll",c),function(){window.removeEventListener("resize",o),window.removeEventListener("scroll",c)}}),[e.query.chapterId]),t}(),n=(0,r.fv)((function(){return{get tree(){return e.tree},get activeKeys(){return n.activeElementId?[e.getActiveKeyByElementId(n.activeElementId)]:[]},get isPrev(){return!!n.activeElementId&&e.isPrev(n.activeElementId)},get isNext(){return!!n.activeElementId&&e.isNext(n.activeElementId)},get activeElementId(){return t.elementId},goPrev:function(){n.activeElementId&&e.goPrev(n.activeElementId)},goNext:function(){n.activeElementId&&e.goNext(n.activeElementId)},goCurrentAnchor:function(){}}}));return n}},33178:function(e,t,n){n.d(t,{L:function(){return r}});var r=[]},52119:function(e,t,n){function r(e){window.addEventListener("scroll",(function e(t){window.removeEventListener("scroll",e),window.scrollTo({left:0})}));var t=decodeURIComponent(e),n=document.getElementById("".concat(t)).getBoundingClientRect();window.scrollTo({top:window.pageYOffset+n.top,left:0})}n.d(t,{_:function(){return r}})}}]);