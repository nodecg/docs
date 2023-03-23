"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5542],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||s;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<s;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4636:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),l=["components"],o={id:"sendMessageToBundle",title:"sendMessageToBundle",sidebar_label:"sendMessageToBundle"},i=void 0,d={unversionedId:"classes/sendMessageToBundle",id:"classes/sendMessageToBundle",title:"sendMessageToBundle",description:"sendMessageToBundle(messageName, bundleName, data, cb) \u2192 \\{Promise|undefined\\}",source:"@site/docs/classes/sendMessageToBundle.md",sourceDirName:"classes",slug:"/classes/sendMessageToBundle",permalink:"/fr/docs/classes/sendMessageToBundle",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/sendMessageToBundle.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1679574535,formattedLastUpdatedAt:"23 mars 2023",frontMatter:{id:"sendMessageToBundle",title:"sendMessageToBundle",sidebar_label:"sendMessageToBundle"},sidebar:"mainSidebar",previous:{title:"sendMessage",permalink:"/fr/docs/classes/sendMessage"},next:{title:"listenFor",permalink:"/fr/docs/classes/listenFor"}},u={},c=[{value:"Returns",id:"returns",level:3},{value:"Parameters",id:"parameters",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sendMessageToBundle(messageName, bundleName, *data, *cb)")," ",(0,s.kt)("em",{parentName:"p"},"\u2192 ","{","Promise|undefined","}")),(0,s.kt)("p",null,"Sends a message to a specific bundle. Also available as a static method. See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/classes/sendMessage"},"sendMessage")," for usage details."),(0,s.kt)("h3",{id:"returns"},"Returns"),(0,s.kt)("admonition",{title:"Browser Only",type:"important"},(0,s.kt)("p",{parentName:"admonition"},"This can only be used in code which runs in Dashboards and Graphics.")),(0,s.kt)("p",null,"A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement. But, if a callback was provided, this return value will be undefined, and there will be no Promise."),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"name"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"bundleName"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the target bundle.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"data"),(0,s.kt)("td",{parentName:"tr",align:null},"mixed"),(0,s.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,s.kt)("td",{parentName:"tr",align:null},"The data to send.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"cb"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("em",{parentName:"td"},"Browser only")," The error-first callback to handle the server's ",(0,s.kt)("a",{parentName:"td",href:"http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29"},"acknowledgement")," message, if any.")))))}m.isMDXComponent=!0}}]);