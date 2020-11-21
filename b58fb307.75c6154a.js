(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(142)),i={id:"migrating-0.7-to-0.8",title:"Migrating from 0.7 to 0.8",sidebar_label:"0.7 \u2192 0.8"},l={unversionedId:"migrating/migrating-0.7-to-0.8",id:"migrating/migrating-0.7-to-0.8",isDocsHomePage:!1,title:"Migrating from 0.7 to 0.8",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.7-to-0.8.md",slug:"/migrating/migrating-0.7-to-0.8",permalink:"/docs/migrating/migrating-0.7-to-0.8",editUrl:"https://github.com/nodecg/docs/edit/master/docs/migrating/migrating-0.7-to-0.8.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1605959274,sidebar_label:"0.7 \u2192 0.8",sidebar:"mainSidebar",previous:{title:"Using p5.js",permalink:"/docs/frameworks/using-p5js"},next:{title:"Migrating from 0.8 to 0.9",permalink:"/docs/migrating/migrating-0.8-to-0.9"}},s=[{value:"Breaking Changes",id:"breaking-changes",children:[{value:"Replicant Change Event",id:"replicant-change-event",children:[]},{value:"Panel Routes",id:"panel-routes",children:[]},{value:"Assets &amp; Asset Categories",id:"assets--asset-categories",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#replicant-change-event"}),"The order of arguments to the Replicant ",Object(o.b)("inlineCode",{parentName:"a"},"change")," event handler has been swapped")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#panel-routes"}),"Dashboard panels are now served from ",Object(o.b)("inlineCode",{parentName:"a"},"/panel/:bundleName/:panelFile")," routes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#assets-and-categories"}),"Uploads have been renamed to Assets, now have Categories"))),Object(o.b)("h3",{id:"replicant-change-event"},"Replicant Change Event"),Object(o.b)("p",null,"Prior to NodeCG v0.8, the Replicant change handler had the following signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// NodeCG v0.7 and earlier\nmyRep.on('change', function (oldVal, newVal, changes) {});\n")),Object(o.b)("p",null,"In v0.8, ",Object(o.b)("inlineCode",{parentName:"p"},"newVal")," and ",Object(o.b)("inlineCode",{parentName:"p"},"oldVal")," have been swapped, as ",Object(o.b)("inlineCode",{parentName:"p"},"newVal")," is frequently used whereas ",Object(o.b)("inlineCode",{parentName:"p"},"oldVal")," is less frequently used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// NodeCG v0.8 and later\nmyRep.on('change', function(newVal, oldVal, operations) {});\n")),Object(o.b)("h3",{id:"panel-routes"},"Panel Routes"),Object(o.b)("p",null,"Dashboard panels are now served from ",Object(o.b)("inlineCode",{parentName:"p"},"/panel/:bundleName/:panelFile")," routes. Prior to v0.8, they were served from the\n",Object(o.b)("inlineCode",{parentName:"p"},"/panel/:bundleName/:panelName")," route."),Object(o.b)("p",null,"This means that for a panel with the following declaration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test",\n  "title": "Test Panel",\n  "width": 2,\n  "file": "panel.html"\n}\n')),Object(o.b)("p",null,"... the route to access this panel is now ",Object(o.b)("inlineCode",{parentName:"p"},"/panel/test-bundle/panel.html")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"/panel/test-bundle/test"),"."),Object(o.b)("p",null,"This also affects panels served from subfolders. Previously, the following panel:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test-dialog",\n  "title": "Test Dialog",\n  "width": 2,\n  "file": "dialogs/test-dialog.html"\n}\n')),Object(o.b)("p",null,"... would have been served from ",Object(o.b)("inlineCode",{parentName:"p"},"/panel/test-bundle/test-dialog"),". It is now served from ",Object(o.b)("inlineCode",{parentName:"p"},"/panel/test-bundle/dialogs/test-dialog.html"),"."),Object(o.b)("p",null,"If your panel or dialog is in a subfolder, you will need to update any relative links in your panel's HTML, CSS, and JS accordingly.\nFor example, if ",Object(o.b)("inlineCode",{parentName:"p"},"test-dialog")," were importing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://elements.polymer-project.org/elements/paper-button?view=demo:demo/index.html"}),Object(o.b)("inlineCode",{parentName:"a"},"<paper-button>")),",\nthe URL it uses would have to change:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Won\'t work anymore. --\x3e\n<link rel="import" href="components/paper-button/paper-button.html" />\n\n\x3c!-- Works with the new panel routes. --\x3e\n<link rel="import" href="../components/paper-button/paper-button.html" />\n')),Object(o.b)("h3",{id:"assets--asset-categories"},"Assets & Asset Categories"),Object(o.b)("p",null,'NodeCG v0.7.2 introduced the Uploads system. NodeCG v0.8 has renamed this system to "Assets", and introduces\nthe concept of categories. See the ',"[Assets tutorial]","tutorial assets for more information on how to configure Assets for your bundle."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);