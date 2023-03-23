"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3724],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6945:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"NodeCG v2!",authors:[{name:"Ewan Lyon",url:"https://github.com/EwanLyon",image_url:"https://github.com/EwanLyon.png"}],tags:["update","docs"]},s=void 0,u={permalink:"/blog/2023/03/23/v2.0.0",source:"@site/blog/2023-03-23-v2.0.0.md",title:"NodeCG v2!",description:"This has been in the making for a while now but the final checks are complete and NodeCG v2 has been released!",date:"2023-03-23T00:00:00.000Z",formattedDate:"March 23, 2023",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"docs",permalink:"/blog/tags/docs"}],readingTime:2.195,hasTruncateMarker:!0,authors:[{name:"Ewan Lyon",url:"https://github.com/EwanLyon",image_url:"https://github.com/EwanLyon.png",imageURL:"https://github.com/EwanLyon.png"}],frontMatter:{title:"NodeCG v2!",authors:[{name:"Ewan Lyon",url:"https://github.com/EwanLyon",image_url:"https://github.com/EwanLyon.png",imageURL:"https://github.com/EwanLyon.png"}],tags:["update","docs"]},nextItem:{title:"New Docs!",permalink:"/blog/2020/02/26/New-Docs"}},p={authorsImageUrls:[void 0]},c=[{value:"What&#39;s changed?",id:"changed",level:2},{value:"TypeScript rewrite",id:"typescript",level:2},{value:"NodeCG repository now contains only source code",id:"build",level:2},{value:"Running into issues?",id:"issues",level:2},{value:"Future",id:"future",level:2},{value:"Thanks to",id:"thanks",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This has been in the making for a while now but the final checks are complete and NodeCG v2 has been released!"),(0,o.kt)("h2",{id:"changed"},"What's changed?"),(0,o.kt)("p",null,"For bundle developers? Nothing really... but in a good way. This means that bundles can be migrated over to v2 with little to no changes required. This update is more about making it easier for NodeCG core developers to develop new features that you can use in the future."),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrating/migrating-1.x-to-2.x"},"migration docs")," for more information and if you need any help please don't hesitate to reach out to the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/GJ4r8a8"},"Discord"),"!"),(0,o.kt)("h2",{id:"typescript"},"TypeScript rewrite"),(0,o.kt)("p",null,"The biggest and most important change for NodeCG is that it is now written in TypeScript. This will greatly benefit developers of NodeCG core and also allow bundle developers to more easily use types through the ",(0,o.kt)("inlineCode",{parentName:"p"},"@nodecg/types")," package."),(0,o.kt)("h2",{id:"build"},"NodeCG repository now contains only source code"),(0,o.kt)("p",null,"NodeCG used to contain its build outputs in the repository. This was helpful at the time, since all that was needed was to install the dependencies and you were off to the races. However, in v2 this has changed. If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"nodecg-cli"),", make sure to download the latest version in order for v2 to install correctly (",(0,o.kt)("inlineCode",{parentName:"p"},"npm i -g nodecg-cli@latest"),"). Developers who would clone manually must now install all dependencies (",(0,o.kt)("inlineCode",{parentName:"p"},"npm i"),") and run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," themselves."),(0,o.kt)("h2",{id:"issues"},"Running into issues?"),(0,o.kt)("p",null,"If you are having any issues at all with version 2, please post an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg/issues"},"issue on our GitHub")," or reach out to our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/GJ4r8a8"},"Discord"),"."),(0,o.kt)("h2",{id:"future"},"Future"),(0,o.kt)("p",null,"NodeCG waiting to be rewritten in TypeScript was a major blocker for new developments to the project. It was also a massive undertaking, which is why it took so long to develop."),(0,o.kt)("p",null,"Now that it's written in TypeScript we can start developing new features that have been long requested such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Per-user permissions"),(0,o.kt)("li",{parentName:"ul"},"Reworked project structure"),(0,o.kt)("li",{parentName:"ul"},"Better bundle management"),(0,o.kt)("li",{parentName:"ul"},"Internationalization"),(0,o.kt)("li",{parentName:"ul"},"Updating the dashboard UI to React (will not affect bundles, just the internal code of the dashboard. You will never be forced to write your bundles in any specific framework.)"),(0,o.kt)("li",{parentName:"ul"},"and more!")),(0,o.kt)("h2",{id:"thanks"},"Thanks to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alvancamp"},"Lange")," for lead development of v2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Hoishin"},"Keiichiro Amemiya")," for assisting in direction and development of v2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zoton2"},"zoton2")," for testing & feedback"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EwanLyon"},"Ewan Lyon")," for testing & feedback"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/daniel0611"},"Daniel")," for testing & feedback"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Dan-Shields"},"Dan Shields")," for fixes & feedback"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/faultyserver"},"Jon Egeland")," for major contributions to the architecture of the code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/DomHynes"},"Dom Hynes")," for fixes & feedback"),(0,o.kt)("li",{parentName:"ul"},"The NodeCG community for their patience and support during this time")))}h.isMDXComponent=!0}}]);