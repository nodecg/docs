"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6315],{3040:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return i}});var a=t(5893),s=t(1151);const r={id:"readReplicant",title:"readReplicant",sidebar_label:"readReplicant"},c=void 0,l={id:"classes/readReplicant",title:"readReplicant",description:"readReplicant(name, *bundle, cb)",source:"@site/docs/classes/readReplicant.md",sourceDirName:"classes",slug:"/classes/readReplicant",permalink:"/ja/docs/classes/readReplicant",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/readReplicant.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1735511705,formattedLastUpdatedAt:"2024\u5e7412\u670829\u65e5",frontMatter:{id:"readReplicant",title:"readReplicant",sidebar_label:"readReplicant"},sidebar:"mainSidebar",previous:{title:"Replicant",permalink:"/ja/docs/classes/replicant"},next:{title:"waitForReplicants",permalink:"/ja/docs/classes/waitForReplicants"}},d={},i=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function o(e){const n={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"readReplicant(name, *bundle, cb)"})}),"\n",(0,a.jsx)(n.p,{children:"Reads the value of a replicant once, and doesn't create a subscription to it. Also available as a static method."}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Attributes"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"name"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"The name of the replicant."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"bundle"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"<optional>"}),(0,a.jsx)(n.td,{children:"Current bundle"}),(0,a.jsx)(n.td,{children:"The bundle namespace to in which to look for this replicant."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"cb"}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.em,{children:"Browser only"})," The callback that handles the server's response which contains the value."]})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"From an extension:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Extensions have immediate access to the database of Replicants.\n// For this reason, they can use readReplicant synchronously, without a callback.\nmodule.exports = function(nodecg) {\n    const myVal = nodecg.readReplicant('myVar', 'some-bundle');\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"From a graphic or dashboard panel:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Graphics and dashboard panels must query the server to retrieve the value,\n// and therefore must provide a callback.\nnodecg.readReplicant('myRep', 'some-bundle', value => {\n    // I can use 'value' now!\n    console.log('myRep has the value ' + value + '!');\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var a=t(7294);const s={},r=a.createContext(s);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);