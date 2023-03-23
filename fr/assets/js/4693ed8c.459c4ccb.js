"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5204],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},207:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"sentry",title:"Error Reporting with Sentry.io",sidebar_label:"Sentry.io"},s=void 0,u={unversionedId:"sentry",id:"sentry",title:"Error Reporting with Sentry.io",description:"NodeCG v0.9 adds support for Sentry.io, a service for tracking errors.",source:"@site/docs/sentry.md",sourceDirName:".",slug:"/sentry",permalink:"/fr/docs/sentry",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/sentry.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1679574535,formattedLastUpdatedAt:"23 mars 2023",frontMatter:{id:"sentry",title:"Error Reporting with Sentry.io",sidebar_label:"Sentry.io"},sidebar:"mainSidebar",previous:{title:"Custom Routes",permalink:"/fr/docs/custom-routes"},next:{title:"Docker",permalink:"/fr/docs/docker"}},l={},p=[],d={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NodeCG v0.9 adds support for ",(0,a.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry.io"),", a service for tracking errors.\nSentry is especially useful for developers whom manage multiple NodeCG instances and need to be informed\nof both server-side and client-side errors as they happen."),(0,a.kt)("p",null,"To add Sentry to your NodeCG instance, you'll first need to create a Sentry account and a Sentry project.\nThen, add the following to your instance's ",(0,a.kt)("a",{parentName:"p",href:"nodecg-configuration"},"NodeCG config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sentry": {\n    "enabled": true,\n    "dsn": "your project\'s DSN, used as an API key to report errors"\n  }\n}\n')),(0,a.kt)("p",null,"Once Sentry is configured, any uncaught exceptions or unhandled promise rejections either on the server or on the client will be reported automatically."),(0,a.kt)("p",null,"In addition, any use of ",(0,a.kt)("inlineCode",{parentName:"p"},"nodecg.log.error")," will also be reported to Sentry."))}f.isMDXComponent=!0}}]);