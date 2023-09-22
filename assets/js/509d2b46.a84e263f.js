"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4579],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=l,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1527:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={id:"replicant",title:"Replicant",sidebar_label:"Replicant"},p=void 0,s={unversionedId:"classes/replicant",id:"classes/replicant",title:"Replicant",description:"Replicant(name, namespace, opts)",source:"@site/docs/classes/replicant.md",sourceDirName:"classes",slug:"/classes/replicant",permalink:"/docs/classes/replicant",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/replicant.md",tags:[],version:"current",lastUpdatedBy:"Coow",lastUpdatedAt:1695365358,formattedLastUpdatedAt:"Sep 22, 2023",frontMatter:{id:"replicant",title:"Replicant",sidebar_label:"Replicant"},sidebar:"mainSidebar",previous:{title:"NodeCG",permalink:"/docs/classes/nodecg"},next:{title:"readReplicant",permalink:"/docs/classes/readReplicant"}},c={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Opts",id:"opts",level:4},{value:"Example",id:"example",level:3}],d={toc:u},m="wrapper";function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Replicant(name, *namespace, *opts)")),(0,r.kt)("p",null,"Replicants are objects which monitor changes to a variable's value. The changes are replicated across all extensions, graphics, and dashboard panels. When a Replicant changes in one of those places it is quickly updated in the rest, and a change event is emitted allowing bundles to react to the changes in the data."),(0,r.kt)("p",null,"If a Replicant with a given name in a given bundle namespace has already been declared, the Replicant will automatically be assigned the existing value."),(0,r.kt)("p",null,"Replicants must be declared in each context that wishes to use them. For instance, declaring a replicant in an extension does not automatically make it available in a graphic. The graphic must also declare it."),(0,r.kt)("p",null,"By default Replicants will be saved to disk, meaning they will automatically be restored when NodeCG is restarted, such as after an unexpected crash. If you need to opt-out of this behaviour simply set ",(0,r.kt)("inlineCode",{parentName:"p"},"persistent: false")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"opts")," argument."),(0,r.kt)("p",null,"As of NodeCG 0.8.4, Replicants can also be automatically validated against a JSON Schema that you provide. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/replicant-schemas"},"Replicant Validation")," for more information."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the replicant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,r.kt)("td",{parentName:"tr",align:null},"The namespace to in which to look for this replicant. Defaults to the name of the current bundle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opts"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,r.kt)("td",{parentName:"tr",align:null},"The options for this replicant.")))),(0,r.kt)("h4",{id:"opts"},"Opts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The default value to instantiate this Replicant with. The default value is only applied if this Replicant has not previously been declared and if it has no persisted value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"persistent"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to persist the Replicant's value to disk on every change. Persisted values are re-loaded on startup.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"persistenceInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval between each persistence, in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schemaPath"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The filepath at which to look for a JSON Schema for this Replicant. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"nodecg/bundles/${bundleName}/schemas/${replicantName}.json"),". Please note that this default path will be URIEncoded to ensure that it results in a valid filename.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const myRep = nodecg.Replicant('myRep', {\n    defaultValue: 123\n});\n\nmyRep.on('change', (newValue, oldValue) => {\n    console.log(`myRep changed from ${oldValue} to ${newValue}`);\n});\n\nmyRep.value = 'Hello!';\nmyRep.value = {\n    objects: 'work too!'\n};\nmyRep.value = {\n    objects: {\n        can: {\n            be: 'nested!'\n        }\n    }\n};\nmyRep.value = ['Even', 'arrays', 'work!'];\n")))}h.isMDXComponent=!0}}]);