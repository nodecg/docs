(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=d(n),p=a,m=s["".concat(b,".").concat(p)]||s[p]||u[p]||c;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(142)),b={id:"nodecg",title:"NodeCG",sidebar_label:"NodeCG"},l={unversionedId:"classes/nodecg",id:"classes/nodecg",isDocsHomePage:!1,title:"NodeCG",description:"new NodeCG(bundle, socket)",source:"@site/docs/classes/nodecg.md",slug:"/classes/nodecg",permalink:"/docs/classes/nodecg",editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/nodecg.md",version:"current",lastUpdatedBy:"zoton2",lastUpdatedAt:1629486827,sidebar_label:"NodeCG",sidebar:"mainSidebar",previous:{title:"Migrating from 0.9 to 1.0",permalink:"/docs/migrating/migrating-0.9-to-1.0"},next:{title:"Replicant",permalink:"/docs/classes/replicant"}},i=[{value:"Members",id:"members",children:[{value:"<em>(static)</em> declaredReplicants",id:"static-declaredreplicants",children:[]},{value:"bundleConfig",id:"bundleconfig",children:[]},{value:"<em>(readonly)</em> bundleGit",id:"readonly-bundlegit",children:[]},{value:"bundleName",id:"bundlename",children:[]},{value:"bundleVersion",id:"bundleversion",children:[]},{value:"extensions",id:"extensions",children:[]},{value:"Logger <em>:Object</em>",id:"logger-object",children:[]}]}],o={rightToc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"new NodeCG(bundle, socket)")),Object(c.b)("p",null,"Creates a new NodeCG API instance. It should never be necessary to use this constructor in a bundle, as NodeCG automatically injects a pre-made API instance."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bundle"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The bundle object to build an API instance from.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"socket"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The Socket.IO socket instance to communicate with.")))),Object(c.b)("h2",{id:"members"},"Members"),Object(c.b)("h3",{id:"static-declaredreplicants"},Object(c.b)("em",{parentName:"h3"},"(static)")," declaredReplicants"),Object(c.b)("p",null,"An object containing references to all Replicants that have been declared in this ",Object(c.b)("inlineCode",{parentName:"p"},"window"),", sorted by bundle. E.g., ",Object(c.b)("inlineCode",{parentName:"p"},"NodeCG.declaredReplicants.myBundle.myRep")),Object(c.b)("h3",{id:"bundleconfig"},"bundleConfig"),Object(c.b)("p",null,"An object containing the parsed content of cfg/","<","bundle-name>.json, the contents of which are read once when NodeCG starts up. Used to quickly access per-bundle configuration properties."),Object(c.b)("h3",{id:"readonly-bundlegit"},Object(c.b)("em",{parentName:"h3"},"(readonly)")," bundleGit"),Object(c.b)("p",null,"Provides information about the current git status of this bundle, if found."),Object(c.b)("h4",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribues"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"branch"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"What branch this bundle is on.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"hash"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The full hash of the commit this bundle is on.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"shortHash"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The short hash of the commit this bundle is on.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"date"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The date of the commit this bundle is on.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"message"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message of the commit this bundle is on.")))),Object(c.b)("h3",{id:"bundlename"},"bundleName"),Object(c.b)("p",null,"The name of the bundle which this NodeCG API instance is for."),Object(c.b)("h3",{id:"bundleversion"},"bundleVersion"),Object(c.b)("p",null,"The version (from package.json) of the bundle which this NodeCG API instance is for."),Object(c.b)("h3",{id:"extensions"},"extensions"),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Extension Only")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This can only be used in code which runs on the server."))),Object(c.b)("p",null,"Object containing references to all other loaded extensions. To access another bundle's extension, it must be declared as a bundleDependency in your bundle's manifest."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// bundles/my-bundle/package.json\n{\n    "name": "my-bundle"\n    ...\n    "bundleDependencies": {\n        "other-bundle": "^1.0.0"\n    }\n}\n\n// bundles/my-bundle/extension.js\nmodule.exports = function (nodecg) {\n    const otherBundle = nodecg.extensions[\'other-bundle\'];\n    // Now I can use `otherBundle`!\n}\n')),Object(c.b)("h3",{id:"logger-object"},"Logger ",Object(c.b)("em",{parentName:"h3"},":Object")),Object(c.b)("p",null,"Provides easy access to the Logger class. Useful in cases where you want to create your own custom logger."))}d.isMDXComponent=!0}}]);