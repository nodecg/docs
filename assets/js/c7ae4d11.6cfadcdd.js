"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7277],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"creating-bundles",title:"Creating Bundles",sidebar_label:"Creating Bundles"},c=void 0,p={unversionedId:"creating-bundles",id:"creating-bundles",title:"Creating Bundles",description:"Examples",source:"@site/docs/creating-bundles.md",sourceDirName:".",slug:"/creating-bundles",permalink:"/docs/creating-bundles",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/creating-bundles.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1686573367,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"creating-bundles",title:"Creating Bundles",sidebar_label:"Creating Bundles"},sidebar:"mainSidebar",previous:{title:"Installing",permalink:"/docs/installing"},next:{title:"Concepts and Terminology",permalink:"/docs/concepts-and-terminology"}},s={},u=[{value:"Examples",id:"examples",level:2},{value:"Using Yeoman",id:"yeoman",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Before continuing, you may find it helpful to look over our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg-simple-examples"},"collection of simple example bundles"),"."),(0,o.kt)("h2",{id:"yeoman"},"Using Yeoman"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use Yeoman and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodecg/generator-nodecg"},"generator-nodecg")," to generate the beginnings of your new bundle:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global yo generator-nodecg\ncd bundles\nmkdir my-first-bundle\ncd my-first-bundle\nyo nodecg\n")),(0,o.kt)("p",{parentName:"li"},"Answer the prompts one-by-one as they come up. If you wish to access the TypeScript boilerplate, just answer yes to the TypeScript prompt. If you wish to access the React boilerplate, first answer yes to the TypeScript prompt and then also answer yes to the React prompt (we currently have a TypeScript+React template but not a plain JavaScript+React template).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'If you generated your bundle with TypeScript, you can use the "dev" script to start NodeCG, automatically re-compile your code when it changes, and also automatically restart NodeCG when specifically server-side code changes (such as your extension):'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# From the root of your new bundle's folder\nnpm run dev\n")),(0,o.kt)("p",{parentName:"li"}," Else, you can start NodeCG the old-fashioned way with ",(0,o.kt)("inlineCode",{parentName:"p"},"nodecg-cli"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../..\nnodecg start\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When running NodeCG in production, ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"pm2")," are recommended."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the NodeCG Dashboard, which will be located at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090"},"http://localhost:9090")," by default. You should see a page like this:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Dashboard Screenshot",src:n(9908).Z,width:"641",height:"578"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'That\'s it! You can click the "Graphics" button in the top right to see a list of graphics in your installed bundles.'))),(0,o.kt)("p",null,"If you have more questions, want further guidance, or would just like to hang out with other NodeCG devs, ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/GJ4r8a8"},"join our Discord server"),"!"))}m.isMDXComponent=!0},9908:function(e,t,n){t.Z=n.p+"assets/images/quickstart_dashboard-5d9d13369b59a7a0d68c7b8c889f07a5.png"}}]);