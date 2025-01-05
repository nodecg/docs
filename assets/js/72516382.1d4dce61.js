"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7131],{2829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return a}});var o=n(5893),s=n(1151);const r={id:"custom-routes",title:"Custom Routes",sidebar_label:"Custom Routes"},u=void 0,i={id:"custom-routes",title:"Custom Routes",description:"NodeCG uses express for its routing, and exposes a helper for creating routes easily:",source:"@site/docs/custom-routes.md",sourceDirName:".",slug:"/custom-routes",permalink:"/docs/custom-routes",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/custom-routes.md",tags:[],version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1736076603,formattedLastUpdatedAt:"Jan 5, 2025",frontMatter:{id:"custom-routes",title:"Custom Routes",sidebar_label:"Custom Routes"},sidebar:"mainSidebar",previous:{title:"Testing Graphics",permalink:"/docs/screenshot-testing"},next:{title:"Sentry.io",permalink:"/docs/sentry"}},c={},a=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["NodeCG uses ",(0,o.jsx)(t.a,{href:"http://expressjs.com/",children:"express"})," for its routing, and exposes a helper for creating routes easily:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="bundles/my-bundle/extension.js"',children:"module.exports = function(nodecg) {\n    const router = nodecg.Router();\n\n    router.get('/customroute', (req, res) => {\n        res.send('OK!');\n    });\n\n    nodecg.mount('/my-bundle', router); // The route '/my-bundle/customroute` is now available\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["NodeCG has a Login Security Middleware that is by default not enabled. To enable it, you need to add it.\nThis won't work unless ",(0,o.jsx)(t.a,{href:"https://www.nodecg.dev/docs/security",children:"Security & Authentication"})," is enabled."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="bundles/my-bundle/extension.js"',children:"module.exports = function(nodecg) {\n    const router = nodecg.Router();\n\n    router.use(nodecg.util.authCheck); // All routes using \"router\" will need a `?key=` in it's URL to be avaliable \n\n    router.get('/customroute', (req, res) => {\n        res.send('OK!');\n    });\n\n    nodecg.mount('/my-bundle', router); // The route '/my-bundle/customroute` is now available\n};\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return u}});var o=n(7294);const s={},r=o.createContext(s);function u(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);