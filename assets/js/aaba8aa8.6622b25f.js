"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4215],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<s;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4339:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),l=["components"],o={id:"sendMessage",title:"sendMessage",sidebar_label:"sendMessage"},i=void 0,d={unversionedId:"classes/sendMessage",id:"classes/sendMessage",title:"sendMessage",description:"sendMessage(messageName, data, cb) \u2192 \\{Promise\\}",source:"@site/docs/classes/sendMessage.md",sourceDirName:"classes",slug:"/classes/sendMessage",permalink:"/docs/classes/sendMessage",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/sendMessage.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1686573367,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"sendMessage",title:"sendMessage",sidebar_label:"sendMessage"},sidebar:"mainSidebar",previous:{title:"waitForReplicants",permalink:"/docs/classes/waitForReplicants"},next:{title:"sendMessageToBundle",permalink:"/docs/classes/sendMessageToBundle"}},c={},u=[{value:"Returns",id:"returns",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sendMessage(messageName, *data, *cb)")," ",(0,s.kt)("em",{parentName:"p"},"\u2192 ","{","Promise","}")),(0,s.kt)("p",null,"Sends a message with optional data within the current bundle. Messages can be sent from client to server, server to client, or client to client."),(0,s.kt)("p",null,"Messages are namespaced by bundle. To send a message in another bundle's namespace, use ",(0,s.kt)("a",{parentName:"p",href:"sendMessageToBundle"},"sendMessageToBundle"),"."),(0,s.kt)("p",null,'When a sendMessage is used from a client context (i.e., graphic or dashboard panel), it returns a Promise called an "acknowledgement". Your server-side code (i.e., extension) can invoke this acknowledgement with whatever data (or error) it wants. Errors sent to acknowledgements from the server will be properly serialized and intact when received on the client.'),(0,s.kt)("p",null,"Alternatively, if you do not wish to use a Promise, you can provide a standard error-first callback as the last argument to sendMessage."),(0,s.kt)("p",null,"If your server-side code has multiple listenFor handlers for your message, you must first check if the acknowledgement has already been handled before attempting to call it. You may so do by checking the .handled boolean property of the ack function passed to your listenFor handler."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29"},"Socket.IO's docs")," for more information on how acknowledgements work under the hood."),(0,s.kt)("h3",{id:"returns"},"Returns"),(0,s.kt)("admonition",{title:"Browser Only",type:"important"},(0,s.kt)("p",{parentName:"admonition"},"This can only be used in code which runs in Dashboards and Graphics.")),(0,s.kt)("p",null,"A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement."),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"name"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"data"),(0,s.kt)("td",{parentName:"tr",align:null},"mixed"),(0,s.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,s.kt)("td",{parentName:"tr",align:null},"The data to send.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"cb"),(0,s.kt)("td",{parentName:"tr",align:null},"function"),(0,s.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("em",{parentName:"td"},"Browser only")," The error-first callback to handle the server's acknowledgement message, if any.")))),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Sending a normal message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"nodecg.sendMessage('printMessage', 'dope.');\n")),(0,s.kt)("p",null,"Sending a message and replying with an acknowledgement:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// bundles/my-bundle/extension.js\nmodule.exports = function (nodecg) {\n    nodecg.listenFor('multiplyByTwo', (value, ack) => {\n        if (value === 4) {\n            ack(new Error('I don\\'t like multiplying the number 4!'));\n            return;\n        }\n\n        // acknowledgements should always be error-first callbacks.\n        // If you do not wish to send an error, use a falsey value\n        // like \"null\" instead.\n        if (ack && !ack.handled) {\n            ack(null, value * 2);\n        }\n    });\n}\n\n// bundles/my-bundle/graphics/script.js\n// Both of these examples are functionally identical.\n\n// Promise acknowledgement\nnodecg.sendMessage('multiplyByTwo', 2)\n    .then(result => {\n        console.log(result); // Will eventually print '4'\n    }).catch(error => {\n        console.error(error);\n    });\n\n// Error-first callback acknowledgement\nnodecg.sendMessage('multiplyByTwo', 2, (error, result) => {\n    if (error) {\n        console.error(error);\n        return;\n    }\n\n    console.log(result); // Will eventually print '4'\n});\n")))}m.isMDXComponent=!0}}]);