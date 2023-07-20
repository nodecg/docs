"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7705],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],l={id:"assets",title:"Assets",sidebar_label:"Assets"},i=void 0,c={unversionedId:"assets",id:"assets",title:"Assets",description:"The Asset system enables bundle authors to provide a means for end users to upload custom files from the dashboard",source:"@site/docs/assets.md",sourceDirName:".",slug:"/assets",permalink:"/ja/docs/assets",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/assets.md",tags:[],version:"current",lastUpdatedBy:"Simon Fischer",lastUpdatedAt:1689855196,formattedLastUpdatedAt:"2023\u5e747\u670820\u65e5",frontMatter:{id:"assets",title:"Assets",sidebar_label:"Assets"},sidebar:"mainSidebar",previous:{title:"Bundle Configuration",permalink:"/ja/docs/bundle-configuration"},next:{title:"Sounds",permalink:"/ja/docs/sounds"}},u={},p=[],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Asset system enables bundle authors to provide a means for end users to upload custom files from the dashboard\nfor use in the bundle. To enable the Asset system in a bundle, add code like the following to your bundle's ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "test-bundle",\n    "nodecg": {\n        "assetCategories": [\n            {\n                "name": "thumbnails",\n                "title": "Thumbnails",\n                "allowedTypes": [\n                    "jpg",\n                    "jpeg",\n                    "gif",\n                    "png"\n                ]\n            },\n            {\n                "name": "boxart",\n                "title": "Boxart",\n                "allowedTypes": [\n                    "jpg",\n                    "jpeg",\n                    "gif",\n                    "png"\n                ]\n            }\n        ]\n    }\n}\n')),(0,s.kt)("video",{style:{width:"100%"},controls:!0,preload:!0},(0,s.kt)("source",{src:"/vid/Assets.mp4",type:"video/mp4"})),(0,s.kt)("p",null,"NodeCG will automatically create a Replicant for each ",(0,s.kt)("inlineCode",{parentName:"p"},"assetCategory")," in a bundle. To access these asset Replicants,\ndeclare them as you would any other Replicant in your bundle. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const thumbnails = nodecg.Replicant('assets:thumbnails');\nconst boxart = nodecg.Replicant('assets:boxart');\n")),(0,s.kt)("p",null,"These Replicants are arrays. Each item in these arrays describes one of the uploaded files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "base": "square.png",\n    "namespace": "test-bundle",\n    "category": "thumbnails",\n    "ext": ".png",\n    "name": "square",\n    "sum": "3f5828ff83eb099fe11a938f25e57afe8745efdc",\n    "url": "/assets/test-bundle/thumbnails/square.png"\n}\n')))}m.isMDXComponent=!0}}]);