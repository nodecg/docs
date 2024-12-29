"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71],{1466:function(n,e,t){t.r(e),t.d(e,{assets:function(){return a},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return r}});var i=t(5893),l=t(1151);const s={id:"installing",title:"Installing NodeCG",sidebar_label:"Installing"},d=void 0,c={id:"installing",title:"Installing NodeCG",description:"Install",source:"@site/docs/installing.md",sourceDirName:".",slug:"/installing",permalink:"/ja/docs/installing",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/installing.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1735511705,formattedLastUpdatedAt:"2024\u5e7412\u670829\u65e5",frontMatter:{id:"installing",title:"Installing NodeCG",sidebar_label:"Installing"},sidebar:"mainSidebar",previous:{title:"NodeCG",permalink:"/ja/docs/what-is-nodecg"},next:{title:"Creating Bundles",permalink:"/ja/docs/creating-bundles"}},a={},r=[{value:"Install",id:"install",level:2},{value:"Start",id:"start",level:2},{value:"Installing bundles",id:"installing-bundles",level:2},{value:"GitHub",id:"installing-bundles-github",level:3},{value:"BitBucket",id:"installing-bundles-bitbucket",level:3},{value:"Other Providers",id:"installing-bundles-other",level:3}];function o(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(e.p,{children:["There are two methods to install NodeCG: cloning from GitHub or using the ",(0,i.jsx)(e.a,{href:"https://github.com/nodecg/nodecg-cli",children:"nodecg-cli"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Install ",(0,i.jsx)(e.a,{href:"http://nodejs.org/",children:"Node.js (version 22)"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Using ",(0,i.jsx)(e.a,{href:"https://github.com/nodecg/nodecg-cli",children:"nodecg-cli"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"npm install --global nodecg-cli@latest\nmkdir nodecg\ncd nodecg\nnodecg setup\n"})}),"\n",(0,i.jsx)(e.p,{children:"Cloning from GitHub:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Be sure to clone a specific release's tag name.\ngit clone --depth 1 --branch v2.1.0 https://github.com/nodecg/nodecg.git\ncd nodecg\nnpm install\nnpm run build\n"})}),"\n",(0,i.jsx)(e.h2,{id:"start",children:"Start"}),"\n",(0,i.jsxs)(e.p,{children:["Run ",(0,i.jsx)(e.code,{children:"node index.js"})," or ",(0,i.jsx)(e.code,{children:"nodecg start"})," in the root nodecg folder."]}),"\n",(0,i.jsxs)(e.p,{children:["Open the dashboard (",(0,i.jsx)(e.code,{children:"http://localhost:9090"})," by default)."]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["When running NodeCG in production, ",(0,i.jsx)(e.a,{href:"docker",children:"Docker"})," or ",(0,i.jsx)(e.a,{href:"https://github.com/Unitech/pm2",children:"pm2"})," are recommended."]})}),"\n",(0,i.jsx)(e.h2,{id:"installing-bundles",children:"Installing bundles"}),"\n",(0,i.jsxs)(e.p,{children:["NodeCG's individual graphics packages are called ",(0,i.jsx)(e.em,{children:"bundles"}),". They can be installed either from the command-line\n(via ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/nodecg-cli",children:(0,i.jsx)(e.em,{children:"nodecg-cli"})}),"), or by simply placing the folder into the ",(0,i.jsx)(e.code,{children:"./bundles"})," directory."]}),"\n",(0,i.jsxs)(e.p,{children:["The easiest way to install bundles is via the command-line using ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/nodecg-cli",children:"nodecg-cli"}),".\nYou will need to install ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/nodecg-cli",children:"nodecg-cli"})," before you can use the ",(0,i.jsx)(e.code,{children:"nodecg"}),"\nterminal commands."]}),"\n",(0,i.jsx)(e.h3,{id:"installing-bundles-github",children:"GitHub"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"nodecg install username/repo-name\n"})}),"\n",(0,i.jsx)(e.h3,{id:"installing-bundles-bitbucket",children:"BitBucket"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"nodecg install bitbucket:username/repo-name\n"})}),"\n",(0,i.jsx)(e.h3,{id:"installing-bundles-other",children:"Other Providers"}),"\n",(0,i.jsx)(e.p,{children:"Enter the git URL."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"nodecg install https://gitlab.com/username/repo-name.git\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Bundles are just directories inside the ",(0,i.jsx)(e.code,{children:"./bundles"})," folder.\nThey can always be added and removed by simply moving them into or out of that folder.\nAvoid installing or uninstalling bundles while NodeCG is running."]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},1151:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return d}});var i=t(7294);const l={},s=i.createContext(l);function d(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);