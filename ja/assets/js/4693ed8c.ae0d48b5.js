"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5204],{8803:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=t(5893),o=t(1151);const s={id:"sentry",title:"Error Reporting with Sentry.io",sidebar_label:"Sentry.io"},i=void 0,c={id:"sentry",title:"Error Reporting with Sentry.io",description:"NodeCG v0.9 adds support for Sentry.io, a service for tracking errors.",source:"@site/docs/sentry.md",sourceDirName:".",slug:"/sentry",permalink:"/ja/docs/sentry",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/sentry.md",tags:[],version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1736076603,formattedLastUpdatedAt:"2025\u5e741\u67085\u65e5",frontMatter:{id:"sentry",title:"Error Reporting with Sentry.io",sidebar_label:"Sentry.io"},sidebar:"mainSidebar",previous:{title:"Custom Routes",permalink:"/ja/docs/custom-routes"},next:{title:"Docker",permalink:"/ja/docs/docker"}},a={},d=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["NodeCG v0.9 adds support for ",(0,r.jsx)(n.a,{href:"https://sentry.io/",children:"Sentry.io"}),", a service for tracking errors.\nSentry is especially useful for developers whom manage multiple NodeCG instances and need to be informed\nof both server-side and client-side errors as they happen."]}),"\n",(0,r.jsxs)(n.p,{children:["To add Sentry to your NodeCG instance, you'll first need to create a Sentry account and a Sentry project.\nThen, add the following to your instance's ",(0,r.jsx)(n.a,{href:"nodecg-configuration",children:"NodeCG config"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "sentry": {\n        "enabled": true,\n        "dsn": "your project\'s DSN, used as an API key to report errors"\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Once Sentry is configured, any uncaught exceptions or unhandled promise rejections either on the server or on the client will be reported automatically."}),"\n",(0,r.jsxs)(n.p,{children:["In addition, any use of ",(0,r.jsx)(n.code,{children:"nodecg.log.error"})," will also be reported to Sentry."]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);