"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2173],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6653:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),o=["components"],r={id:"concepts-and-terminology",title:"Concepts and Terminology",sidebar_label:"Concepts and Terminology"},s=void 0,d={unversionedId:"concepts-and-terminology",id:"concepts-and-terminology",title:"Concepts and Terminology",description:"NodeCG has a few main concepts to understand in order to get the most out of it and understand what a bundle is doing.",source:"@site/docs/concepts-and-terminology.md",sourceDirName:".",slug:"/concepts-and-terminology",permalink:"/docs/concepts-and-terminology",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/concepts-and-terminology.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1686573367,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"concepts-and-terminology",title:"Concepts and Terminology",sidebar_label:"Concepts and Terminology"},sidebar:"mainSidebar",previous:{title:"Creating Bundles",permalink:"/docs/creating-bundles"},next:{title:"Manifest",permalink:"/docs/manifest"}},p={},u=[{value:"Manifest",id:"manifest",level:2},{value:"Related Docs",id:"manifest-related-docs",level:3},{value:"Graphics",id:"graphics",level:2},{value:"Related Docs",id:"graphics-manifest",level:3},{value:"Dashboard",id:"dashboard",level:2},{value:"Related Docs",id:"dashboard-manifest",level:3},{value:"Extensions",id:"extensions",level:2},{value:"Related Docs",id:"extensions-manifest",level:3},{value:"Messages",id:"messages",level:2},{value:"Related Docs",id:"messages-manifest",level:3},{value:"Replicants",id:"replicants",level:2},{value:"Related Docs",id:"replicants-manifest",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NodeCG has a few main concepts to understand in order to get the most out of it and understand what a bundle is doing."),(0,l.kt)("h2",{id:"manifest"},"Manifest"),(0,l.kt)("p",null,"Every bundle needs a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},(0,l.kt)("inlineCode",{parentName:"a"},"package.json"))," manifest file in its root directory. In addition to the required fields like ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"version"),", NodeCG bundles must also have a ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg")," object in their ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," with some additional properties that tell NodeCG how to load your bundle."),(0,l.kt)("h3",{id:"manifest-related-docs"},"Related Docs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/manifest"},"package.json Manifest"))),(0,l.kt)("h2",{id:"graphics"},"Graphics"),(0,l.kt)("p",null,"Graphics are the end result that your viewers will see. NodeCG itself doesn't provide any libraries for drawing pixels, it instead lets the user decide how they want to create their graphics in the open framework of HTML5, CSS3, and JS (with ES6 being fully supported). NodeCG will also helpfully inject an API instance into the global scope of your graphics, accessible as ",(0,l.kt)("inlineCode",{parentName:"p"},"window.nodecg")," (or just ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg"),") from your graphic's code."),(0,l.kt)("p",null,"Graphics are defined in your bundle's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file, in the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg.graphics")," section, with a few simple properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file"),", the relative path (from your bundle's root directory) to the HTML file to be served as a graphic.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Your graphics should all live in the ",(0,l.kt)("inlineCode",{parentName:"li"},"nodecg/your-bundle/graphics/")," folder."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"height"),", which defines the dimensions of your graphic.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Note that your graphic doesn't have to strictly adhere to these values, they're mostly for documentation of your bundle. NodeCG doesn't enforce these values."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"singleInstance"),", an optional property, that only allows your graphic to be open in one place at a time.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This is useful in scenarios where your graphic has fragile or highly stateful logic."),(0,l.kt)("li",{parentName:"ul"},"Ideally, you'd never need to use ",(0,l.kt)("inlineCode",{parentName:"li"},"singleInstance"),". However, it is sometimes hard to avoid, and can be the fastest route to shipping a complex graphic.")))),(0,l.kt)("h3",{id:"graphics-manifest"},"Related Docs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/manifest"},"package.json Manifest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/using-npm"},"Using npm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/screenshot-testing"},"Screenshot Testing"))),(0,l.kt)("h2",{id:"dashboard"},"Dashboard"),(0,l.kt)("p",null,"The dashboard is where all your controls for your graphics end up. Each panel is it's own self-contained webpage (displayed as an ",(0,l.kt)("inlineCode",{parentName:"p"},"<iframe>"),"), and has full access to the NodeCG API. Panels are defined in your bundle's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg.dashboardPanels")," section with a few properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),", the internal name of your panel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title"),", the title displayed on the NodeCG workspace."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file"),", the relative path (from your bundle's root directory) to the HTML file to be served as a dashboard panel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"width"),", an optional property, the amount of space the bundle takes up on the page.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Valid values are ",(0,l.kt)("inlineCode",{parentName:"li"},"1-8"),"."),(0,l.kt)("li",{parentName:"ul"},"Width scaling is arbitrary and is subject to change, play around with it."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headerColor"),", an optional property, that will change the color of the panel's header to a provided hexadecimal color value.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Your ",(0,l.kt)("inlineCode",{parentName:"li"},"headerColor")," must start with a ",(0,l.kt)("inlineCode",{parentName:"li"},"#")," character. For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"#f47425"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"workspace"),", an optional property, that when set will place the panel into a new workspace with the name provided. These workspaces can be shared between bundles."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fullbleed"),", an optional property, that when set to true will place the panel in it's own workplace at the maximum possible width and height with no margins.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Each ",(0,l.kt)("inlineCode",{parentName:"li"},"fullbleed")," panel gets its own dedicated workspace."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dialog"),", an optional property, that will turn the panel into a dialog that other panels are able to open."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dialogButtons"),", an optional property, that will show buttons for ",(0,l.kt)("inlineCode",{parentName:"li"},"confirm"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"dismiss"),", or both on the dialog.")),(0,l.kt)("h3",{id:"dashboard-manifest"},"Related Docs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/manifest"},"package.json Manifest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/making-dialogs"},"Making dialogs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/using-npm"},"Using npm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/sounds"},"Sounds")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/assets"},"Assets"))),(0,l.kt)("h2",{id:"extensions"},"Extensions"),(0,l.kt)("p",null,"Extensions are the back-end portion of your graphics and dashboard panels, typically handling all the potential messy logic that your bundle may need to handle, such as donations or schedule handling. NodeCG will try and ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," your bundle's ",(0,l.kt)("inlineCode",{parentName:"p"},"extensions")," folder, so if used an index.js file is needed. Each extension must export a function that accepts a NodeCG API instance as its first and only argument."),(0,l.kt)("p",null,"Not all bundles might require an extension to back them up, but you should consider one if your bundle might be handling any API work."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// nodecg/bundles/your-bundle/extension.js\nmodule.exports = nodecg => {\n  nodecg.listenFor('foo', () => {\n    console.log('bar');\n  });\n};\n")),(0,l.kt)("p",null,"NodeCG automatically attempts to load the following files as extensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nodecg/bundles/your-bundle/extension.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nodecg/bundles/your-bundle/extension/index.js"))),(0,l.kt)("p",null,"Your bundle may have one of, but not both of the above files. If your extension is simple enough to fit in one file,\nuse the former approach. If your extension is broken up into multiple files, you may want to use the latter structure\nand keep all those files in a single ",(0,l.kt)("inlineCode",{parentName:"p"},"extension")," folder. If using an ",(0,l.kt)("inlineCode",{parentName:"p"},"extension")," folder, ",(0,l.kt)("strong",{parentName:"p"},"NodeCG will only load ",(0,l.kt)("inlineCode",{parentName:"strong"},"your-bundle/extension/index.js")),". It is up to you to load any other files that your extension needs via ",(0,l.kt)("inlineCode",{parentName:"p"},"require"),"."),(0,l.kt)("h3",{id:"extensions-manifest"},"Related Docs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"classes/nodecg#extensions"},"Extensions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/manifest"},"package.json Manifest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/using-npm"},"Using npm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/custom-routes"},"Custom routes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/bundle-configuration"},"Bundle configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/mounts"},"Mounts"))),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("p",null,"Messages are the way NodeCG lets extensions, dashboard panels, and the graphics communicate with each other seamlessly. A message can be anything, from an array to an object to a string, as long as it can be represented in Javascript, you can send it. All you have to do is call ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg.sendMessage")," on one end and ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg.listenFor")," on another!"),(0,l.kt)("h3",{id:"messages-manifest"},"Related Docs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"classes/sendMessage"},"sendMessage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"classes/sendMessageToBundle"},"sendMessageToBundle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"classes/listenFor"},"listenFor"))),(0,l.kt)("h2",{id:"replicants"},"Replicants"),(0,l.kt)("p",null,"Replicants are how NodeCG stores and replicates data between extensions, dashboard panels, and graphics. Rather than being events like ",(0,l.kt)("a",{parentName:"p",href:"#messages"},"messages")," are, Replicants are (optionally) persistent."),(0,l.kt)("p",null,"Replicants on server-side extensions are able to be read synchronously, as NodeCG has immediate access to the database of replicants, but in dashboard panels and graphics you should read Replicants asynchronously by listening for the ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," event."),(0,l.kt)("h3",{id:"replicants-manifest"},"Related Docs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"classes/replicant"},"Replicant")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/replicant-schemas"},"Replicant Validation"))))}m.isMDXComponent=!0}}]);