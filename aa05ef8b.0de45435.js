(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(142)),l={id:"readReplicant",title:"readReplicant",sidebar_label:"readReplicant"},i={unversionedId:"classes/readReplicant",id:"classes/readReplicant",isDocsHomePage:!1,title:"readReplicant",description:"readReplicant(name, *bundle, cb)",source:"@site/docs/classes/readReplicant.md",slug:"/classes/readReplicant",permalink:"/docs/classes/readReplicant",editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/readReplicant.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1605959274,sidebar_label:"readReplicant",sidebar:"mainSidebar",previous:{title:"Replicant",permalink:"/docs/classes/replicant"},next:{title:"waitForReplicants",permalink:"/docs/classes/waitForReplicants"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"readReplicant(name, *bundle, cb)")),Object(c.b)("p",null,"Reads the value of a replicant once, and doesn't create a subscription to it. Also available as a static method."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attributes"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the replicant.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bundle"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CURR_BNDL"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bundle namespace to in which to look for this replicant.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cb"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"Browser only")," The callback that handles the server's response which contains the value.")))),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"From an extension:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Extensions have immediate access to the database of Replicants.\n// For this reason, they can use readReplicant synchronously, without a callback.\nmodule.exports = function(nodecg) {\n    var myVal = nodecg.readReplicant('myVar', 'some-bundle');\n};\n")),Object(c.b)("p",null,"From a graphic or dashboard panel:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Graphics and dashboard panels must query the server to retrieve the value,\n// and therefore must provide a callback.\nnodecg.readReplicant('myRep', 'some-bundle', value => {\n    // I can use 'value' now!\n    console.log('myRep has the value ' + value + '!');\n});\n")))}p.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||c;return a?r.a.createElement(m,i(i({ref:t},b),{},{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);