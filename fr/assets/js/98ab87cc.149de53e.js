"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2008],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(n),f=o,d=g["".concat(c,".").concat(f)]||g[f]||p[f]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return g}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={id:"log",title:"log()",sidebar_label:"log()"},c=void 0,s={unversionedId:"classes/log",id:"classes/log",title:"log()",description:"log()",source:"@site/docs/classes/log.md",sourceDirName:"classes",slug:"/classes/log",permalink:"/fr/docs/classes/log",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/log.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1689855821,formattedLastUpdatedAt:"20 juil. 2023",frontMatter:{id:"log",title:"log()",sidebar_label:"log()"},sidebar:"mainSidebar",previous:{title:"unlisten",permalink:"/fr/docs/classes/unlisten"},next:{title:"Router",permalink:"/fr/docs/classes/router"}},u={},g=[{value:"Example",id:"example",level:3}],p={toc:g},f="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log()")),(0,l.kt)("p",null,"An instance of NodeCG's Logger, with the following methods. The logging level is set in cfg/nodecg.json, NodeCG's global config file."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"nodecg.log.trace('trace level logging');\nnodecg.log.debug('debug level logging');\nnodecg.log.info('info level logging');\nnodecg.log.warn('warn level logging');\nnodecg.log.error('error level logging');\n")))}d.isMDXComponent=!0}}]);