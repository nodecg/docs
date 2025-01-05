"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2116],{4121:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return l}});var i=t(5893),o=t(1151);const s={id:"migrating-0.9-to-1.0",title:"Migrating from 0.9 to 1.0",sidebar_label:"0.9 \u2192 1.0"},d=void 0,r={id:"migrating/migrating-0.9-to-1.0",title:"Migrating from 0.9 to 1.0",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.9-to-1.0.md",sourceDirName:"migrating",slug:"/migrating/migrating-0.9-to-1.0",permalink:"/ja/docs/migrating/migrating-0.9-to-1.0",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/migrating/migrating-0.9-to-1.0.md",tags:[],version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1736076603,formattedLastUpdatedAt:"2025\u5e741\u67085\u65e5",frontMatter:{id:"migrating-0.9-to-1.0",title:"Migrating from 0.9 to 1.0",sidebar_label:"0.9 \u2192 1.0"},sidebar:"mainSidebar",previous:{title:"0.8 \u2192 0.9",permalink:"/ja/docs/migrating/migrating-0.8-to-0.9"},next:{title:"1.x \u2192 2.x",permalink:"/ja/docs/migrating/migrating-1.x-to-2.x"}},a={},l=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Undocumented <code>[dialog-confirm]</code> and <code>[dialog-dismiss]</code> attribute click handlers have been removed",id:"undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed",level:3},{value:"Undocumented (and broken) <code>panelClick</code> event has been removed",id:"undocumented-and-broken-panelclick-event-has-been-removed",level:3},{value:"Undocumented customCues system has been removed",id:"undocumented-customcues-system-has-been-removed",level:3},{value:"Multiple listenFor handlers for a given message",id:"multiple-listenfor-handlers-for-a-given-message",level:3},{value:"sendMessage can now trigger listenFor handlers in the same context",id:"sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context",level:3},{value:"Twitch auth now uses the &quot;New Twitch API&quot;, instead of the deprecated &quot;v5&quot; API",id:"twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#breaking-changes",children:"Breaking Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"#undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed",children:["Undocumented ",(0,i.jsx)(n.code,{children:"[dialog-confirm]"})," and ",(0,i.jsx)(n.code,{children:"[dialog-dismiss]"})," attribute click handlers have been removed"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"#undocumented-and-broken-panelclick-event-has-been-removed",children:["Undocumented (and broken) ",(0,i.jsx)(n.code,{children:"panelClick"})," event has been removed"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#undocumented-customcues-system-has-been-removed",children:"Undocumented customCues system has been removed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#multiple-listenfor-handlers-for-a-given-message",children:"Multiple listenFor handlers for a given message"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context",children:"sendMessage can now trigger listenFor handlers in the same context"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api",children:'Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed",children:["Undocumented ",(0,i.jsx)(n.code,{children:"[dialog-confirm]"})," and ",(0,i.jsx)(n.code,{children:"[dialog-dismiss]"})," attribute click handlers have been removed"]}),"\n",(0,i.jsxs)(n.p,{children:["Previously, NodeCG had an undocumented feature where ",(0,i.jsx)(n.em,{children:"any"})," element in a Dialog with a ",(0,i.jsx)(n.code,{children:"[dialog-confirm]"})," or ",(0,i.jsx)(n.code,{children:"[dialog-dismiss]"})," attribute would close the panel (with an appropriate ",(0,i.jsx)(n.code,{children:"confirmed"})," or ",(0,i.jsx)(n.code,{children:"dismissed"})," event) when clicked."]}),"\n",(0,i.jsx)(n.p,{children:"This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."}),"\n",(0,i.jsxs)(n.h3,{id:"undocumented-and-broken-panelclick-event-has-been-removed",children:["Undocumented (and broken) ",(0,i.jsx)(n.code,{children:"panelClick"})," event has been removed"]}),"\n",(0,i.jsxs)(n.p,{children:["Previously, NodeCG had an undocumented feature where any click event on any panel (or dialog) would emit a ",(0,i.jsx)(n.code,{children:"panelClick"})," event on that panel's ",(0,i.jsx)(n.code,{children:"document"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This undocumented feature has been removed, and never really worked properly to begin with. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."}),"\n",(0,i.jsx)(n.h3,{id:"undocumented-customcues-system-has-been-removed",children:"Undocumented customCues system has been removed"}),"\n",(0,i.jsx)(n.p,{children:"Previously, NodeCG had an undocumented and extremely complex feature for defining and editing Sound Cues during runtime."}),"\n",(0,i.jsx)(n.p,{children:"This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."}),"\n",(0,i.jsx)(n.h3,{id:"multiple-listenfor-handlers-for-a-given-message",children:"Multiple listenFor handlers for a given message"}),"\n",(0,i.jsxs)(n.p,{children:["Previously, NodeCG only allowed your bundle to specify one ",(0,i.jsx)(n.code,{children:"listenFor"})," handler, per message, per context."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, NodeCG lets you define as many ",(0,i.jsx)(n.code,{children:"listenFor"})," handlers as you want, for any message, in any location."]}),"\n",(0,i.jsxs)(n.p,{children:["However, server-side ",(0,i.jsx)(n.code,{children:"listenFor"})," handlers must be careful to not call an ",(0,i.jsx)(n.code,{children:"acknowledgement"})," more than once:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// nodecg/bundles/your-bundle\nmodule.exports = function(nodecg) {\n    nodecg.listenFor('example', (data, ack) => {\n        if (ack && !ack.handled) {\n            ack('foo');\n        }\n    });\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"\x3c!-- nodecg/bundles/your-bundle/graphics/example.html --\x3e\n<script>\n    nodecg.sendMessage('example', 'hello', (error, response) => {\n        console.log(response); // => Will log \"foo\".\n    });\n<\/script>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Calling an ",(0,i.jsx)(n.code,{children:"acknowledgement"})," more than once will throw an error."]}),"\n",(0,i.jsxs)(n.p,{children:["In short: ",(0,i.jsx)(n.strong,{children:"most bundles won't need to change any of their code"})," to be compatible with this change, but you should give everything a once-over to make sure things aren't behaving unexpectedly due to this new behavior."]}),"\n",(0,i.jsx)(n.h3,{id:"sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context",children:"sendMessage can now trigger listenFor handlers in the same context"}),"\n",(0,i.jsxs)(n.p,{children:["Previously, NodeCG messages were inter-context only. That meant that they were ",(0,i.jsx)(n.em,{children:"only"})," sent out over the network, and were not sent to other listeners in the same process context (extension, graphic, panel, etc)."]}),"\n",(0,i.jsx)(n.p,{children:"Now, NodeCG sends messages to every listener, regardless of location. This means that code like the following will now work as expected:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// nodecg/bundles/your-bundle/extension.js\nmodule.exports = function(nodecg) {\n    nodecg.sendMessage('hello', 'Hi there!');\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// nodecg/bundles/my-bundle/extension.js\nmodule.exports = function(nodecg) {\n    nodecg.listenFor('hello', 'your-bundle', data => {\n        console.log(data); // => Will print \"Hi there!\"\n    });\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A side-effect of this change is that it is no longer guaranteed that a server-side ",(0,i.jsx)(n.code,{children:"listenFor"})," handler will receive an ",(0,i.jsx)(n.code,{children:"acknowledgement"})," callback as its second argument. You should always check for the presence of an ",(0,i.jsx)(n.code,{children:"acknowledgement"})," before attempting to call it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// nodecg/bundles/your-bundle\nmodule.exports = function(nodecg) {\n    nodecg.listenFor('example', (data, ack) => {\n        if (ack && !ack.handled) {\n            ack('foo');\n        }\n    });\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api",children:'Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API'}),"\n",(0,i.jsx)(n.p,{children:'Previously, NodeCG used the deprecated "v5" Twitch API.'}),"\n",(0,i.jsxs)(n.p,{children:['Now, NodeCG uses the "New Twitch API". The only tangible result of this change for NodeCG is that the format of the ',(0,i.jsx)(n.code,{children:"login.twitch.scope"})," config parameter has changed. Please see ",(0,i.jsx)(n.a,{href:"https://dev.twitch.tv/docs/authentication/#scopes",children:"https://dev.twitch.tv/docs/authentication/#scopes"})," for documentation on this new format."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var i=t(7294);const o={},s=i.createContext(o);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);