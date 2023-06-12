"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7131],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||u;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,s=new Array(u);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var i=2;i<u;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6085:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var n=r(7462),o=r(3366),u=(r(7294),r(3905)),s=["components"],a={id:"custom-routes",title:"Custom Routes",sidebar_label:"Custom Routes"},c=void 0,i={unversionedId:"custom-routes",id:"custom-routes",title:"Custom Routes",description:"NodeCG uses express for its routing, and exposes a helper for creating routes easily:",source:"@site/docs/custom-routes.md",sourceDirName:".",slug:"/custom-routes",permalink:"/fr/docs/custom-routes",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/custom-routes.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1686573367,formattedLastUpdatedAt:"12 juin 2023",frontMatter:{id:"custom-routes",title:"Custom Routes",sidebar_label:"Custom Routes"},sidebar:"mainSidebar",previous:{title:"Testing Graphics",permalink:"/fr/docs/screenshot-testing"},next:{title:"Sentry.io",permalink:"/fr/docs/sentry"}},l={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,u.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"NodeCG uses ",(0,u.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"express")," for its routing, and exposes a helper for creating routes easily:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"// bundles/my-bundle/extension.js\n\nmodule.exports = function (nodecg) {\n    const router = nodecg.Router();\n\n    router.get('/customroute', (req, res) => {\n        res.send('OK!');\n    });\n\n    nodecg.mount('/my-bundle', router); // The route '/my-bundle/customroute` is now available\n};\n")))}m.isMDXComponent=!0}}]);