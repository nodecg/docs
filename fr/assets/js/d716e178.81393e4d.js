"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2116],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=r,h=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6046:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"migrating-0.9-to-1.0",title:"Migrating from 0.9 to 1.0",sidebar_label:"0.9 \u2192 1.0"},d=void 0,s={unversionedId:"migrating/migrating-0.9-to-1.0",id:"migrating/migrating-0.9-to-1.0",title:"Migrating from 0.9 to 1.0",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.9-to-1.0.md",sourceDirName:"migrating",slug:"/migrating/migrating-0.9-to-1.0",permalink:"/fr/docs/migrating/migrating-0.9-to-1.0",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/migrating/migrating-0.9-to-1.0.md",tags:[],version:"current",lastUpdatedBy:"Simon Fischer",lastUpdatedAt:1687734972,formattedLastUpdatedAt:"25 juin 2023",frontMatter:{id:"migrating-0.9-to-1.0",title:"Migrating from 0.9 to 1.0",sidebar_label:"0.9 \u2192 1.0"},sidebar:"mainSidebar",previous:{title:"0.8 \u2192 0.9",permalink:"/fr/docs/migrating/migrating-0.8-to-0.9"},next:{title:"1.x \u2192 2.x",permalink:"/fr/docs/migrating/migrating-1.x-to-2.x"}},c={},u=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Undocumented <code>[dialog-confirm]</code> and <code>[dialog-dismiss]</code> attribute click handlers have been removed",id:"undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed",level:3},{value:"Undocumented (and broken) <code>panelClick</code> event has been removed",id:"undocumented-and-broken-panelclick-event-has-been-removed",level:3},{value:"Undocumented customCues system has been removed",id:"undocumented-customcues-system-has-been-removed",level:3},{value:"Multiple listenFor handlers for a given message",id:"multiple-listenfor-handlers-for-a-given-message",level:3},{value:"sendMessage can now trigger listenFor handlers in the same context",id:"sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context",level:3},{value:"Twitch auth now uses the &quot;New Twitch API&quot;, instead of the deprecated &quot;v5&quot; API",id:"twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api",level:3}],m={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed"},"Undocumented ",(0,o.kt)("inlineCode",{parentName:"a"},"[dialog-confirm]")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"[dialog-dismiss]")," attribute click handlers have been removed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#undocumented-and-broken-panelclick-event-has-been-removed"},"Undocumented (and broken) ",(0,o.kt)("inlineCode",{parentName:"a"},"panelClick")," event has been removed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#undocumented-customcues-system-has-been-removed"},"Undocumented customCues system has been removed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-listenfor-handlers-for-a-given-message"},"Multiple listenFor handlers for a given message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context"},"sendMessage can now trigger listenFor handlers in the same context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api"},'Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API'))))),(0,o.kt)("h3",{id:"undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed"},"Undocumented ",(0,o.kt)("inlineCode",{parentName:"h3"},"[dialog-confirm]")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"[dialog-dismiss]")," attribute click handlers have been removed"),(0,o.kt)("p",null,"Previously, NodeCG had an undocumented feature where ",(0,o.kt)("em",{parentName:"p"},"any")," element in a Dialog with a ",(0,o.kt)("inlineCode",{parentName:"p"},"[dialog-confirm]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"[dialog-dismiss]")," attribute would close the panel (with an appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmed")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dismissed")," event) when clicked."),(0,o.kt)("p",null,"This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."),(0,o.kt)("h3",{id:"undocumented-and-broken-panelclick-event-has-been-removed"},"Undocumented (and broken) ",(0,o.kt)("inlineCode",{parentName:"h3"},"panelClick")," event has been removed"),(0,o.kt)("p",null,"Previously, NodeCG had an undocumented feature where any click event on any panel (or dialog) would emit a ",(0,o.kt)("inlineCode",{parentName:"p"},"panelClick")," event on that panel's ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,o.kt)("p",null,"This undocumented feature has been removed, and never really worked properly to begin with. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."),(0,o.kt)("h3",{id:"undocumented-customcues-system-has-been-removed"},"Undocumented customCues system has been removed"),(0,o.kt)("p",null,"Previously, NodeCG had an undocumented and extremely complex feature for defining and editing Sound Cues during runtime."),(0,o.kt)("p",null,"This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."),(0,o.kt)("h3",{id:"multiple-listenfor-handlers-for-a-given-message"},"Multiple listenFor handlers for a given message"),(0,o.kt)("p",null,"Previously, NodeCG only allowed your bundle to specify one ",(0,o.kt)("inlineCode",{parentName:"p"},"listenFor")," handler, per message, per context."),(0,o.kt)("p",null,"Now, NodeCG lets you define as many ",(0,o.kt)("inlineCode",{parentName:"p"},"listenFor")," handlers as you want, for any message, in any location."),(0,o.kt)("p",null,"However, server-side ",(0,o.kt)("inlineCode",{parentName:"p"},"listenFor")," handlers must be careful to not call an ",(0,o.kt)("inlineCode",{parentName:"p"},"acknowledgement")," more than once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// nodecg/bundles/your-bundle\nmodule.exports = function(nodecg) {\n  nodecg.listenFor('example', (data, ack) => {\n    if (ack && !ack.handled) {\n      ack('foo');\n    }\n  });\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- nodecg/bundles/your-bundle/graphics/example.html --\x3e\n<script>\n  nodecg.sendMessage('example', 'hello', (error, response) => {\n    console.log(response); // => Will log \"foo\".\n  });\n<\/script>\n")),(0,o.kt)("p",null,"Calling an ",(0,o.kt)("inlineCode",{parentName:"p"},"acknowledgement")," more than once will throw an error."),(0,o.kt)("p",null,"In short: ",(0,o.kt)("strong",{parentName:"p"},"most bundles won't need to change any of their code")," to be compatible with this change, but you should give everything a once-over to make sure things aren't behaving unexpectedly due to this new behavior."),(0,o.kt)("h3",{id:"sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context"},"sendMessage can now trigger listenFor handlers in the same context"),(0,o.kt)("p",null,"Previously, NodeCG messages were inter-context only. That meant that they were ",(0,o.kt)("em",{parentName:"p"},"only")," sent out over the network, and were not sent to other listeners in the same process context (extension, graphic, panel, etc)."),(0,o.kt)("p",null,"Now, NodeCG sends messages to every listener, regardless of location. This means that code like the following will now work as expected:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// nodecg/bundles/your-bundle/extension.js\nmodule.exports = function(nodecg) {\n  nodecg.sendMessage('hello', 'Hi there!');\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// nodecg/bundles/my-bundle/extension.js\nmodule.exports = function(nodecg) {\n  nodecg.listenFor('hello', 'your-bundle', data => {\n    console.log(data); // => Will print \"Hi there!\"\n  });\n};\n")),(0,o.kt)("p",null,"A side-effect of this change is that it is no longer guaranteed that a server-side ",(0,o.kt)("inlineCode",{parentName:"p"},"listenFor")," handler will receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"acknowledgement")," callback as its second argument. You should always check for the presence of an ",(0,o.kt)("inlineCode",{parentName:"p"},"acknowledgement")," before attempting to call it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// nodecg/bundles/your-bundle\nmodule.exports = function(nodecg) {\n  nodecg.listenFor('example', (data, ack) => {\n    if (ack && !ack.handled) {\n      ack('foo');\n    }\n  });\n};\n")),(0,o.kt)("h3",{id:"twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api"},'Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API'),(0,o.kt)("p",null,'Previously, NodeCG used the deprecated "v5" Twitch API.'),(0,o.kt)("p",null,'Now, NodeCG uses the "New Twitch API". The only tangible result of this change for NodeCG is that the format of the ',(0,o.kt)("inlineCode",{parentName:"p"},"login.twitch.scope")," config parameter has changed. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://dev.twitch.tv/docs/authentication/#scopes"},"https://dev.twitch.tv/docs/authentication/#scopes")," for documentation on this new format."))}p.isMDXComponent=!0}}]);