"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6315],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"readReplicant",title:"readReplicant",sidebar_label:"readReplicant"},c=void 0,p={unversionedId:"classes/readReplicant",id:"classes/readReplicant",title:"readReplicant",description:"readReplicant(name, *bundle, cb)",source:"@site/docs/classes/readReplicant.md",sourceDirName:"classes",slug:"/classes/readReplicant",permalink:"/fr/docs/classes/readReplicant",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/readReplicant.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1686573367,formattedLastUpdatedAt:"12 juin 2023",frontMatter:{id:"readReplicant",title:"readReplicant",sidebar_label:"readReplicant"},sidebar:"mainSidebar",previous:{title:"Replicant",permalink:"/fr/docs/classes/replicant"},next:{title:"waitForReplicants",permalink:"/fr/docs/classes/waitForReplicants"}},s={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readReplicant(name, *bundle, cb)")),(0,l.kt)("p",null,"Reads the value of a replicant once, and doesn't create a subscription to it. Also available as a static method."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the replicant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bundle"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,l.kt)("td",{parentName:"tr",align:null},"CURR_BNDL"),(0,l.kt)("td",{parentName:"tr",align:null},"The bundle namespace to in which to look for this replicant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cb"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Browser only")," The callback that handles the server's response which contains the value.")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"From an extension:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Extensions have immediate access to the database of Replicants.\n// For this reason, they can use readReplicant synchronously, without a callback.\nmodule.exports = function(nodecg) {\n    var myVal = nodecg.readReplicant('myVar', 'some-bundle');\n};\n")),(0,l.kt)("p",null,"From a graphic or dashboard panel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Graphics and dashboard panels must query the server to retrieve the value,\n// and therefore must provide a callback.\nnodecg.readReplicant('myRep', 'some-bundle', value => {\n    // I can use 'value' now!\n    console.log('myRep has the value ' + value + '!');\n});\n")))}m.isMDXComponent=!0}}]);