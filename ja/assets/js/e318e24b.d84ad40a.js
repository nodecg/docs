"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3819],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={description:"Extension documentation",id:"extensions",title:"Extensions",sidebar_label:"Extensions"},s=void 0,c={unversionedId:"extensions",id:"extensions",title:"Extensions",description:"Extension documentation",source:"@site/docs/extensions.md",sourceDirName:".",slug:"/extensions",permalink:"/ja/docs/extensions",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/extensions.md",tags:[],version:"current",lastUpdatedBy:"Coow",lastUpdatedAt:1695365358,formattedLastUpdatedAt:"2023\u5e749\u670822\u65e5",frontMatter:{description:"Extension documentation",id:"extensions",title:"Extensions",sidebar_label:"Extensions"},sidebar:"mainSidebar",previous:{title:"Node Dependencies",permalink:"/ja/docs/using-npm"},next:{title:"Bundle Configuration",permalink:"/ja/docs/bundle-configuration"}},p={},u=[{value:"What to use extensions for",id:"what-to-use-extensions-for",level:2},{value:"Extension entrypoint",id:"extension-entrypoint",level:2},{value:"Single file",id:"single-file",level:2},{value:"Using multiple files",id:"using-multiple-files",level:2},{value:"Utility script",id:"utility-script",level:3},{value:"Have each extension export a function to call",id:"have-each-extension-export-a-function-to-call",level:3},{value:"Extension specific API",id:"extension-specific-api",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extensions are server-side code that runs on the NodeCG server. They are vital for any NodeCG bundle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extensions are the first things that run in a bundle")," so it is the best place to setup replicants and other data that will be used throughout a bundle."),(0,r.kt)("h2",{id:"what-to-use-extensions-for"},"What to use extensions for"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up replicants"),(0,r.kt)("li",{parentName:"ul"},'Handling changes to replicants to keep dashboards as a "dumb terminal"'),(0,r.kt)("li",{parentName:"ul"},"Getting data from other websites/services"),(0,r.kt)("li",{parentName:"ul"},"Automating your bundle")),(0,r.kt)("h2",{id:"extension-entrypoint"},"Extension entrypoint"),(0,r.kt)("p",null,"NodeCG looks for 2 file locations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single file called ",(0,r.kt)("inlineCode",{parentName:"li"},"extension.js")," in the bundle's root directory."),(0,r.kt)("li",{parentName:"ul"},"A folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"extension")," with an ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," in the bundle's root directory.")),(0,r.kt)("p",null,"If both exist NodeCG will throw an error and not run any extensions from that bundle."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend the folder method unless your bundle is very basic and doesn't need much functionality.")),(0,r.kt)("h2",{id:"single-file"},"Single file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="extension.js"',title:'"extension.js"'},"module.exports = function (nodecg) {\n    nodecg.Replicant('test-replicant');\n}\n")),(0,r.kt)("h2",{id:"using-multiple-files"},"Using multiple files"),(0,r.kt)("p",null,"To make programming easier we split different functionality into different files. The problem is that NodeCG is only injected into the first file it touches. There are a few methods to deal with this:"),(0,r.kt)("h3",{id:"utility-script"},"Utility script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="nodecg-api-context.ts"',title:'"nodecg-api-context.ts"'},"import type NodeCG from '@nodecg/types';\n\nlet context: NodeCG.ServerAPI;\n\nexport function get(): NodeCG.ServerAPI {\n    return context;\n}\n\nexport function set(ctx: NodeCG.ServerAPI) {\n    context = ctx;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import type NodeCG from '@nodecg/types';\nimport * as nodecgApiContext from './nodecg-api-context';\n\nlet ncgConfig: NodeCG.ServerAPI<ConfigSchema>['bundleConfig'];\n\nmodule.exports = (nodecg: NodeCG.ServerAPI) => {\n    // Store a reference to this nodecg API context in a place where other libs can easily access it.\n    // This must be done before any other files are `require`d.\n    nodecgApiContext.set(nodecg);\n    ncgConfig = nodecg.bundleConfig;\n    init().then(() => {\n        nodecg.log.info('Initialization successful.');\n    }).catch(error => {\n        nodecg.log.error('Failed to initialize:', error);\n    });\n};\n\nasync function init() {\n    require('./example.ts');\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example.ts"',title:'"example.ts"'},"import * as nodecgApiContext from './nodecg-api-context';\n\nconst nodecg = nodecgApiContext.get();\n\n// Initializes a replicant\nnodecg.Replicant<string>('test-replicant');\n")),(0,r.kt)("h3",{id:"have-each-extension-export-a-function-to-call"},"Have each extension export a function to call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example.ts"',title:'"example.ts"'},"import type NodeCG from '@nodecg/types';\n\nexport const test = (nodecg: NodeCG) => {\n    nodecg.Replicant<string>('test-replicant');\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import type NodeCG from '@nodecg/types';\n\nimport { test } from \"./example\";\n\nexport default (nodecg: NodeCG) => {\n    test(nodecg);\n};\n")),(0,r.kt)("h2",{id:"extension-specific-api"},"Extension specific API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/classes/getSocketIOServer"},"getSocketIOServer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/classes/mount"},"mount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/classes/router"},"Router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/classes/nodecg#events-events"},"Events"))))}f.isMDXComponent=!0}}]);