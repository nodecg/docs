"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,f=s["".concat(u,".").concat(h)]||s[h]||m[h]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"v1.6.0",author:"Ewan Lyon",author_url:"https://github.com/EwanLyon",author_image_url:"https://avatars2.githubusercontent.com/u/19513845?s=460&v=4",tags:["update","v1.6.0"]},u=void 0,p={permalink:"/blog/2020/02/25/v1.6.0",source:"@site/blog/2020-02-25-v1.6.0.md",title:"v1.6.0",description:"Minor version bump.",date:"2020-02-25T00:00:00.000Z",formattedDate:"February 25, 2020",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"v1.6.0",permalink:"/blog/tags/v-1-6-0"}],readingTime:.41,hasTruncateMarker:!0,authors:[{name:"Ewan Lyon",url:"https://github.com/EwanLyon",imageURL:"https://avatars2.githubusercontent.com/u/19513845?s=460&v=4"}],frontMatter:{title:"v1.6.0",author:"Ewan Lyon",author_url:"https://github.com/EwanLyon",author_image_url:"https://avatars2.githubusercontent.com/u/19513845?s=460&v=4",tags:["update","v1.6.0"]},prevItem:{title:"New Docs!",permalink:"/blog/2020/02/26/New-Docs"}},c={authorsImageUrls:[void 0]},s=[{value:"New",id:"new",level:2},{value:"Update",id:"update",level:2},{value:"Fix",id:"fix",level:2},{value:"Thanks to",id:"thanks",level:2}],m={toc:s},h="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Minor version bump."),(0,o.kt)("h2",{id:"new"},"New"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docs now get automatically built ",(0,o.kt)("em",{parentName:"li"},"(old jsdocs)")),(0,o.kt)("li",{parentName:"ul"},"Flexible mounts"),(0,o.kt)("li",{parentName:"ul"},"Expose NodeCG router"),(0,o.kt)("li",{parentName:"ul"},"p5.js Tutorial")),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docket now on Node 10")),(0,o.kt)("h2",{id:"fix"},"Fix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check if bundle package.json has version"),(0,o.kt)("li",{parentName:"ul"},"Typo in replicants description ",(0,o.kt)("em",{parentName:"li"},"(objcts \u2192 objects)")),(0,o.kt)("li",{parentName:"ul"},"Clone replicant default value")),(0,o.kt)("h2",{id:"thanks"},"Thanks to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seldszar"},"Seldszar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Dan-Shields"},"Dan-Shields")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/VodBox"},"VodBox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EwanLyon"},"Ewan Lyon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Hoishin"},"Hoishin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Lange"},"Lange"))),(0,o.kt)("p",null,"for making this update happen!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Version comparison ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/nodecg/nodecg/compare/v1.5.0...v1.6.0"},"here"))))}f.isMDXComponent=!0}}]);