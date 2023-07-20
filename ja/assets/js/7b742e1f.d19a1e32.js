"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4320],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5536:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"NodeCG v2.1.0",authors:["ewanlyon"],tags:["update"]},u=void 0,c={permalink:"/ja/blog/2023/03/26/v2.1.0",source:"@site/blog/2023-03-26-v2.1.0.md",title:"NodeCG v2.1.0",description:"Updates covering between 2.0.1 and 2.1.0",date:"2023-03-26T00:00:00.000Z",formattedDate:"2023\u5e743\u670826\u65e5",tags:[{label:"update",permalink:"/ja/blog/tags/update"}],readingTime:.425,hasTruncateMarker:!0,authors:[{name:"Ewan Lyon",url:"https://github.com/EwanLyon",email:"ewan@ewanlyon.com",imageURL:"https://github.com/EwanLyon.png",key:"ewanlyon"}],frontMatter:{title:"NodeCG v2.1.0",authors:["ewanlyon"],tags:["update"]},nextItem:{title:"NodeCG v2!",permalink:"/ja/blog/2023/03/23/v2.0.0"}},p={authorsImageUrls:[void 0]},s=[{value:"Features",id:"features",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Thanks to",id:"thanks-to",level:2}],m={toc:s},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Updates covering between 2.0.1 and 2.1.0"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Smaller docker image ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/631"},"#631"))),(0,o.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"v2.0.1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Remove package-lock.json from dependency files ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/620"},"#620")),(0,o.kt)("li",{parentName:"ul"},"Fix docker file ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/617"},"#617")))),(0,o.kt)("li",{parentName:"ul"},"v2.0.2",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Include templates in server build output ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/625"},"#625")),(0,o.kt)("li",{parentName:"ul"},"Make node-fetch-commonjs a production dependency ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/623"},"#623")))),(0,o.kt)("li",{parentName:"ul"},"v2.0.3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Make @sentry/browser, @sentry/node, socket.io-client and tslib production dependencies ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/627"},"#627")))),(0,o.kt)("li",{parentName:"ul"},"v2.0.4",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fix authenticated URLs ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/629"},"#629")))),(0,o.kt)("li",{parentName:"ul"},"v2.1.0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Allow socket authentication with a token ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg/issues/635"},"#635"))))),(0,o.kt)("h2",{id:"thanks-to"},"Thanks to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alvancamp"},"Lange")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Hoishin"},"Keiichiro Amemiya"))))}f.isMDXComponent=!0}}]);