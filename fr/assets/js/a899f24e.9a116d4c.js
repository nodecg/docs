"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4915],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"working-on-nodecg-core",title:"Working on NodeCG Core",sidebar_label:"Working on NodeCG Core"},p=void 0,l={unversionedId:"working-on-nodecg-core",id:"working-on-nodecg-core",title:"Working on NodeCG Core",description:"NodeCG is an open-source project written by a core group of maintainers and a community of contributors. If you'd like to contribute to NodeCG itself, here's how to get started:",source:"@site/docs/working-on-nodecg-core.md",sourceDirName:".",slug:"/working-on-nodecg-core",permalink:"/fr/docs/working-on-nodecg-core",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/working-on-nodecg-core.md",tags:[],version:"current",lastUpdatedBy:"Simon Fischer",lastUpdatedAt:1689855196,formattedLastUpdatedAt:"20 juil. 2023",frontMatter:{id:"working-on-nodecg-core",title:"Working on NodeCG Core",sidebar_label:"Working on NodeCG Core"},sidebar:"mainSidebar",previous:{title:"Portable NodeCG",permalink:"/fr/docs/portable-nodecg"},next:{title:"Mount folders as endpoints",permalink:"/fr/docs/mounts"}},s={},u=[],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NodeCG is an open-source project written by a core group of maintainers and a community of contributors. If you'd like to contribute to NodeCG itself, here's how to get started:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js (18)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone NodeCG:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nodecg/nodecg.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open NodeCG in your editor of choice. Most of the devteam uses ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install NodeCG's dependencies:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run NodeCG's development script, which automatically recompiles the client and server code whenever the source files on disk change. It also automatically restarts the server. It does ",(0,a.kt)("strong",{parentName:"p"},"not")," automatically refresh open browser pages."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make your changes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If applicable, add tests for your changes by editing the appropriate file(s) in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg/tree/master/test"},(0,a.kt)("inlineCode",{parentName:"a"},"test"))," directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the test suite:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Be sure that you have re-built NodeCG before running the tests!\n# If you're not sure, run `npm run build` before `npm test`.\nnpm test\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once tests pass, push your changes and open a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg/pulls"},"pull request"),"!"))))}f.isMDXComponent=!0}}]);