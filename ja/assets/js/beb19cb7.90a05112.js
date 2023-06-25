"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6876],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,b=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"editing-the-database",title:"Manually editing the database",sidebar_label:"Manually editing the database"},d=void 0,l={unversionedId:"editing-the-database",id:"editing-the-database",title:"Manually editing the database",description:"As of v2.0.0, NodeCG is backed by a local sqlite3 database. This was done for internal reasons that make NodeCG's code better and easier to maintain, but it does mean that simple inspection, editing, and deletion of *.rep files (persisted Replicant values) is no longer possible.",source:"@site/docs/editing-the-database.md",sourceDirName:".",slug:"/editing-the-database",permalink:"/ja/docs/editing-the-database",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/editing-the-database.md",tags:[],version:"current",lastUpdatedBy:"Simon Fischer",lastUpdatedAt:1687734972,formattedLastUpdatedAt:"2023\u5e746\u670825\u65e5",frontMatter:{id:"editing-the-database",title:"Manually editing the database",sidebar_label:"Manually editing the database"},sidebar:"mainSidebar",previous:{title:"Docker",permalink:"/ja/docs/docker"},next:{title:"Bundlers & Dev Environments",permalink:"/ja/docs/frameworks/using-bundlers"}},c={},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As of v2.0.0, NodeCG is backed by a local sqlite3 database. This was done for internal reasons that make NodeCG's code better and easier to maintain, but it does mean that simple inspection, editing, and deletion of ",(0,i.kt)("inlineCode",{parentName:"p"},"*.rep")," files (persisted Replicant values) is no longer possible."),(0,i.kt)("p",null,"Instead, deployment managers may use a tool such as ",(0,i.kt)("a",{parentName:"p",href:"https://sqlitebrowser.org/"},"DB Browser")," to open, inspect, and edit their NodeCG instance's database, including Replicant values. This should only be done when NodeCG isn't running."),(0,i.kt)("p",null,"To get started, simply use ",(0,i.kt)("a",{parentName:"p",href:"https://sqlitebrowser.org/"},"DB Browser")," to open ",(0,i.kt)("inlineCode",{parentName:"p"},"nodecg/db/nodecg.sqlite3"),". Make your changes and save the file, and that's it!"))}f.isMDXComponent=!0}}]);