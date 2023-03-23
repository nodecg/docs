"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3140],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3956:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"using-p5js",title:"Using p5.js",sidebar_label:"p5.js"},p=void 0,c={unversionedId:"frameworks/using-p5js",id:"frameworks/using-p5js",title:"Using p5.js",description:"p5.js is a library to make javascript more accessible to people.",source:"@site/docs/frameworks/using-p5js.md",sourceDirName:"frameworks",slug:"/frameworks/using-p5js",permalink:"/fr/docs/frameworks/using-p5js",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/frameworks/using-p5js.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1679574535,formattedLastUpdatedAt:"23 mars 2023",frontMatter:{id:"using-p5js",title:"Using p5.js",sidebar_label:"p5.js"},sidebar:"mainSidebar",previous:{title:"vue.js",permalink:"/fr/docs/frameworks/vue"},next:{title:"0.7 \u2192 0.8",permalink:"/fr/docs/migrating/migrating-0.7-to-0.8"}},l={},u=[],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://p5js.org/"},"p5.js")," is a library to make javascript more accessible to people."),(0,o.kt)("p",null,"It can easily be implemented into NodeCG simply by including both the standard p5.js file and the ",(0,o.kt)("a",{parentName:"p",href:"https://p5js.org/reference/#/libraries/p5.dom"},"p5.dom")," library in the ",(0,o.kt)("inlineCode",{parentName:"p"},"shared")," folder as this folder is always mounted."),(0,o.kt)("p",null,"p5.js can be used as normal and NodeCG calls are included when needed."),(0,o.kt)("p",null,"An example bundle containing a counter and a lower third is located in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg-simple-examples"},"NodeCG simple examples")," repo."))}f.isMDXComponent=!0}}]);