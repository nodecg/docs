(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(142)),i={id:"mounts",title:"Mount folders as endpoints",sidebar_label:"Mount folders as endpoints"},c={unversionedId:"mounts",id:"mounts",isDocsHomePage:!1,title:"Mount folders as endpoints",description:"As of v0.9.9, NodeCG supports a nodecg.mount array in your bundle's package.json. These mount declarations are simple objects with two keys: directory and endpoint.",source:"@site/docs/mounts.md",slug:"/mounts",permalink:"/docs/mounts",editUrl:"https://github.com/nodecg/docs/edit/master/docs/mounts.md",version:"current",lastUpdatedBy:"zoton2",lastUpdatedAt:1629486827,sidebar_label:"Mount folders as endpoints",sidebar:"mainSidebar",previous:{title:"Portable NodeCG",permalink:"/docs/portable-nodecg"},next:{title:"Security & Authentication",permalink:"/docs/security"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As of v0.9.9, NodeCG supports a ",Object(a.b)("inlineCode",{parentName:"p"},"nodecg.mount")," array in your bundle's ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),". These ",Object(a.b)("inlineCode",{parentName:"p"},"mount")," declarations are simple objects with two keys: ",Object(a.b)("inlineCode",{parentName:"p"},"directory")," and ",Object(a.b)("inlineCode",{parentName:"p"},"endpoint"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"directory")," is a relative path from the root of your bundle which tells NodeCG which folder you'd like to mount as a custom endpoint."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"endpoint")," is a URL relative to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:9090/bundles/${bundle.name}/")," which tells NodeCG what URL you'd like to serve your ",Object(a.b)("inlineCode",{parentName:"p"},"directory")," from (Of course, substitute ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," and ",Object(a.b)("inlineCode",{parentName:"p"},"9090")," with whatever ",Object(a.b)("inlineCode",{parentName:"p"},"host")," and ",Object(a.b)("inlineCode",{parentName:"p"},"port")," your NodeCG instance is configured to use)."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test-bundle",\n  "nodecg": {\n    "mount": [\n      {\n        "directory": "custom-dir",\n        "endpoint": "my-mount-endpoint"\n      }\n    ]\n  }\n}\n')),Object(a.b)("p",null,"The above example will make the contents of ",Object(a.b)("inlineCode",{parentName:"p"},"nodecg/bundles/test-bundle/custom-dir")," accessible via ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:9090/bundles/test-bundle/my-mount-endpoint"),". These endpoints behave similarly to how ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://expressjs.com/en/starter/static-files.html"}),"Express' ",Object(a.b)("inlineCode",{parentName:"a"},"static")," method")," serves static files from folders."),Object(a.b)("p",null,"For example, if ",Object(a.b)("inlineCode",{parentName:"p"},"custom-dir")," contains a file called ",Object(a.b)("inlineCode",{parentName:"p"},"hello-world.html"),", that file can be accessed via the URL ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:9090/bundles/test-bundle/my-mount-endpoint/hello-world.html"),"."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);