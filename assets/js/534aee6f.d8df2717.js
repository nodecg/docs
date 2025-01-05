"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6568],{2588:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return l}});var a=s(5893),n=s(1151);const i={id:"what-is-nodecg",title:"What is NodeCG?",sidebar_label:"NodeCG"},o=void 0,r={id:"what-is-nodecg",title:"What is NodeCG?",description:"NodeCG",source:"@site/docs/what-is-nodecg.md",sourceDirName:".",slug:"/what-is-nodecg",permalink:"/docs/what-is-nodecg",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/what-is-nodecg.md",tags:[],version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1736076603,formattedLastUpdatedAt:"Jan 5, 2025",frontMatter:{id:"what-is-nodecg",title:"What is NodeCG?",sidebar_label:"NodeCG"},sidebar:"mainSidebar",next:{title:"Installing",permalink:"/docs/installing"}},c={},l=[{value:"Goals",id:"goals",level:2},{value:"Make broadcast graphics more accessible",id:"goal-accessible",level:3},{value:"Remain as close to the web platform as possible",id:"goal-web",level:3},{value:"Support broadcasts of any size and ambition",id:"goal-size",level:3},{value:"Maintainers",id:"maintainers",level:2},{value:"Designers",id:"designers",level:2},{value:"Acknowledgements",id:"acknowledgement",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/",children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/nodecg/nodecg/master/media/splash.png",alt:"NodeCG"})})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://discord.com/invite/GJ4r8a8",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/discord/754749209722486814.svg?logo=discord",alt:"Discord"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/nodecg/nodecg/actions?query=workflow%3ACI",children:(0,a.jsx)(t.img,{src:"https://github.com/nodecg/nodecg/workflows/CI/badge.svg",alt:"Build Status"})}),"\n",(0,a.jsx)(t.a,{href:"https://codecov.io/gh/nodecg/nodecg",children:(0,a.jsx)(t.img,{src:"https://codecov.io/gh/nodecg/nodecg/branch/master/graph/badge.svg",alt:"Coverage Status"})}),"\n",(0,a.jsx)(t.a,{href:"https://ghcr.io/nodecg/nodecg",children:(0,a.jsx)(t.img,{src:"https://ghcr-badge.egpl.dev/nodecg/nodecg/latest_tag",alt:"Docker Build Status"})}),"\n",(0,a.jsx)(t.a,{href:"https://twitter.com/NodeCG",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40NodeCG",alt:"Twitter"})})]}),"\n",(0,a.jsx)(t.p,{children:"NodeCG is a broadcast graphics framework and application. It enables you to write complex, dynamic broadcast graphics using the web platform. NodeCG has no graphics or drawing primitives of its own. Instead, NodeCG provides a structure for your code and an API to facilitate moving data between the dashboard, the server, and your graphics. It makes few assumptions about how to best code a graphic, and gives you freedom to use whatever libraries, frameworks, tools, and methodologies you want. As such, NodeCG graphics can be rendered in any environment that can render HTML, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://obsproject.com/",children:"OBS Studio"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"http://www.vmix.com/",children:"vMix"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.xsplit.com/",children:"XSplit"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/CasparCG/server/releases",children:"CasparCG"})," (v2.2.0+)"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Don't see your preferred streaming software on this list? NodeCG graphics require a modern browser engine. If your streaming software's implementation of browser source uses a recent-ish browser engine, chances are that NodeCG graphics will work in it. You can check what version your streaming software uses for its browser sources by opening ",(0,a.jsx)(t.a,{href:"https://www.whatversion.net/browser/",children:"whatversion.net/chrome"})," as a browser source."]})}),"\n",(0,a.jsxs)(t.p,{children:["Have questions about NodeCG, or just want to say 'hi'? ",(0,a.jsx)(t.a,{href:"https://discord.com/invite/GJ4r8a8",children:"Join our Discord server"}),"!"]}),"\n",(0,a.jsx)(t.h2,{id:"goals",children:"Goals"}),"\n",(0,a.jsx)(t.p,{children:"The NodeCG project exists to accomplish the following goals:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Make broadcast graphics (also known as "character generation" or "CG") more accessible.'}),"\n",(0,a.jsx)(t.li,{children:"Remain as close to the web platform as possible."}),"\n",(0,a.jsx)(t.li,{children:"Support broadcasts of any size and ambition."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"goal-accessible",children:"Make broadcast graphics more accessible"}),"\n",(0,a.jsx)(t.p,{children:"Historically, broadcast graphics have been expensive. They either required expensive hardware, expensive software, or both. NodeCG was originally created to provide real-time broadcast graphics for Tip of the Hats, which is an all-volunteer charity fundraiser that had a budget of $0 for its first several years."}),"\n",(0,a.jsx)(t.p,{children:"Now, it is possible to create an ambitious broadcast using entirely free software and consumer hardware. The NodeCG project embraces this democratization of broadcast technology."}),"\n",(0,a.jsx)(t.h3,{id:"goal-web",children:"Remain as close to the web platform as possible"}),"\n",(0,a.jsx)(t.p,{children:"NodeCG graphics are just webpages. There is absolutely nothing special or unique about them. This is their greatest strength."}),"\n",(0,a.jsx)(t.p,{children:"By building on the web platform, and not building too many abstractions on top of it, people developing broadcast graphics with NodeCG have access to the raw potential of the web. New APIs and capabilities are continually being added to the web platform, and NodeCG developers should have access to the entirety of what the web can offer."}),"\n",(0,a.jsx)(t.h3,{id:"goal-size",children:"Support broadcasts of any size and ambition"}),"\n",(0,a.jsx)(t.p,{children:"NodeCG's roots are in small broadcasts with no budget. More recently, NodeCG has begun seeing use in increasingly elaborate productions. We believe that one set of tools can and should be able to scale up from the smallest show all the way to the biggest fathomable show. Whether you're using OBS for everything, or a hardware switcher with a traditional key/fill workflow, NodeCG can be a part of any broadcast graphics system."}),"\n",(0,a.jsx)(t.h2,{id:"maintainers",children:"Maintainers"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://alexvan.camp",children:'Alex "Lange" Van Camp'})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mattmcn.com/",children:'Matt "Bluee" McNamara'})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://hoish.in/",children:'Keiichiro "Hoishin" Amemiya'})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"designers",children:"Designers"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"http://www.chrishanel.com",children:"Chris Hanel"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"acknowledgement",children:"Acknowledgements"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/atmosfar",children:"Atmo"}),", original dashboard concept and code, the inspiration for toth-overlay"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"http://alexvan.camp",children:'Alex "Lange" Van Camp'}),", designer & developer of ",(0,a.jsx)(t.a,{href:"https://github.com/TipoftheHats/toth-overlay",children:"toth-overlay"}),", the base on which NodeCG was built"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return o}});var a=s(7294);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);