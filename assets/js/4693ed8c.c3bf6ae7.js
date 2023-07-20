"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5204],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},207:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"sentry",title:"Error Reporting with Sentry.io",sidebar_label:"Sentry.io"},s=void 0,u={unversionedId:"sentry",id:"sentry",title:"Error Reporting with Sentry.io",description:"NodeCG v0.9 adds support for Sentry.io, a service for tracking errors.",source:"@site/docs/sentry.md",sourceDirName:".",slug:"/sentry",permalink:"/docs/sentry",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/sentry.md",tags:[],version:"current",lastUpdatedBy:"Simon Fischer",lastUpdatedAt:1689855196,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id:"sentry",title:"Error Reporting with Sentry.io",sidebar_label:"Sentry.io"},sidebar:"mainSidebar",previous:{title:"Custom Routes",permalink:"/docs/custom-routes"},next:{title:"Docker",permalink:"/docs/docker"}},l={},p=[],d={toc:p},f="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NodeCG v0.9 adds support for ",(0,a.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry.io"),", a service for tracking errors.\nSentry is especially useful for developers whom manage multiple NodeCG instances and need to be informed\nof both server-side and client-side errors as they happen."),(0,a.kt)("p",null,"To add Sentry to your NodeCG instance, you'll first need to create a Sentry account and a Sentry project.\nThen, add the following to your instance's ",(0,a.kt)("a",{parentName:"p",href:"nodecg-configuration"},"NodeCG config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sentry": {\n        "enabled": true,\n        "dsn": "your project\'s DSN, used as an API key to report errors"\n    }\n}\n')),(0,a.kt)("p",null,"Once Sentry is configured, any uncaught exceptions or unhandled promise rejections either on the server or on the client will be reported automatically."),(0,a.kt)("p",null,"In addition, any use of ",(0,a.kt)("inlineCode",{parentName:"p"},"nodecg.log.error")," will also be reported to Sentry."))}y.isMDXComponent=!0}}]);