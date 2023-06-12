"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3648],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(t),s=o,g=f["".concat(u,".").concat(s)]||f[s]||p[s]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2568:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"running-nodecg",title:"Running NodeCG",sidebar_label:"Running"},u=void 0,l={unversionedId:"running-nodecg",id:"running-nodecg",title:"Running NodeCG",description:"Usage",source:"@site/docs/running-nodecg.md",sourceDirName:".",slug:"/running-nodecg",permalink:"/ja/docs/running-nodecg",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/running-nodecg.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1686573367,formattedLastUpdatedAt:"2023\u5e746\u670812\u65e5",frontMatter:{id:"running-nodecg",title:"Running NodeCG",sidebar_label:"Running"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:3}],f={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install a bundle to the ",(0,a.kt)("inlineCode",{parentName:"li"},"bundles")," folder."),(0,a.kt)("li",{parentName:"ul"},"Start NodeCG (",(0,a.kt)("inlineCode",{parentName:"li"},"node index.js")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"nodecg start")," if you have ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/nodecg-cli"},"nodecg-cli")," installed)."),(0,a.kt)("li",{parentName:"ul"},"Open the dashboard (",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:9090")," by default)."),(0,a.kt)("li",{parentName:"ul"},'Open a graphic from the "Graphics" menu.'),(0,a.kt)("li",{parentName:"ul"},"You can configure NodeCG by creating and editing ",(0,a.kt)("a",{parentName:"li",href:"/docs/nodecg-configuration"},"cfg/nodecg.json"),".")),(0,a.kt)("p",null,"When running NodeCG in production, ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"pm2")," are recommended."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"./cfg/nodecg.json")," is an optional file that you can create to configure NodeCG.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"/docs/nodecg-configuration"},"NodeCG Configuration tutorial")," for more information on configuring NodeCG."))}s.isMDXComponent=!0}}]);