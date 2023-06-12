"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[639],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9519:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],l={id:"making-dialogs",title:"Making Dashboard Dialogs",sidebar_label:"Making Dashboard Dialogs"},d=void 0,s={unversionedId:"making-dialogs",id:"making-dialogs",title:"Making Dashboard Dialogs",description:"Starting with NodeCG 0.7, all dashboard panels are iframes. This was done to provide full code and style encapsulation,",source:"@site/docs/making-dialogs.md",sourceDirName:".",slug:"/making-dialogs",permalink:"/ja/docs/making-dialogs",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/making-dialogs.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1686573367,formattedLastUpdatedAt:"2023\u5e746\u670812\u65e5",frontMatter:{id:"making-dialogs",title:"Making Dashboard Dialogs",sidebar_label:"Making Dashboard Dialogs"},sidebar:"mainSidebar",previous:{title:"Replicant Validation",permalink:"/ja/docs/replicant-schemas"},next:{title:"Portable NodeCG",permalink:"/ja/docs/portable-nodecg"}},p={},c=[{value:"Opening dialogs",id:"opening",level:2},{value:"Closing dialogs",id:"closing",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starting with NodeCG 0.7, all dashboard panels are iframes. This was done to provide full code and style encapsulation,\neliminating the need for bundle authors to worry about what they are putting into the global scope with their panel.\nHowever, because every panel is an iframe, it is not possible for a panel to draw anything outside of its bounding box.\nThis limitation made having dialogs and modals impossible, among other things. To address this, we created a dedicated\nsystem for displaying dialogs."),(0,i.kt)("p",null,"A dialog is defined the same as any other dashboard panel would be in ",(0,i.kt)("a",{parentName:"p",href:"/docs/manifest"},"package.json"),", with an\nadditional ",(0,i.kt)("inlineCode",{parentName:"p"},"dialog: true")," property."),(0,i.kt)("h2",{id:"opening"},"Opening dialogs"),(0,i.kt)("p",null,"To open a dialog, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"nodecg-dialog")," attribute to any clickable element on one of your panels. For example, this\n",(0,i.kt)("a",{parentName:"p",href:"https://elements.polymer-project.org/elements/paper-button"},(0,i.kt)("inlineCode",{parentName:"a"},"<paper-button>"))," element will open the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit-total")," dialog when clicked:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<paper-button id="edit" class="nodecg-configure" nodecg-dialog="edit-total">Edit...</paper-button>\n')),(0,i.kt)("p",null,"When a dialog is opened, NodeCG will emit a ",(0,i.kt)("inlineCode",{parentName:"p"},"dialog-opened")," event on your dialog's ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- bundles/my-bundle/dashboard/my-dialog.html --\x3e\n<script>\n  document.addEventListener('dialog-opened', function() {\n    // The user opened the dialog.\n  });\n<\/script>\n")),(0,i.kt)("h2",{id:"closing"},"Closing dialogs"),(0,i.kt)("p",null,"By default, a dialog can only be closed by clicking outside of it. Optional confirmation and dismissal buttons can be\nadded via ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/manifest"},"package.json tutorial")," for information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"dialogButtons"),"\nproperty."),(0,i.kt)("p",null,"When a ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dismiss")," button is pressed, NodeCG will emit a ",(0,i.kt)("inlineCode",{parentName:"p"},"dialog-confirmed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dialog-dismissed")," event\non your dialog's ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- bundles/my-bundle/dashboard/my-dialog.html --\x3e\n<script>\n  document.addEventListener('dialog-confirmed', function() {\n    // The user pressed the confirm button.\n  });\n\n  document.addEventListener('dialog-dismissed', function() {\n    // The user pressed the dismiss button.\n  });\n<\/script>\n")))}m.isMDXComponent=!0}}]);