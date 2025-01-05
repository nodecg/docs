"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5313],{1501:function(e,n,r){r.r(n),r.d(n,{assets:function(){return a},contentTitle:function(){return t},default:function(){return h},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var s=r(5893),l=r(1151);const i={id:"using-bundlers",title:"Bundlers & Developer Setup",sidebar_label:"Bundlers & Dev Environments"},t=void 0,o={id:"frameworks/using-bundlers",title:"Bundlers & Developer Setup",description:"Bundlers are one option for serving dev servers & are a wonderful tool for releasing code into production. However, there are now many alternatives that are helpful for speedy local development. Speed comparisons vary depending on what metrics are being used, and like any other framework, there are tradeoffs across any tooling choices.",source:"@site/docs/frameworks/using-bundlers.md",sourceDirName:"frameworks",slug:"/frameworks/using-bundlers",permalink:"/docs/frameworks/using-bundlers",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/frameworks/using-bundlers.md",tags:[],version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1736076603,formattedLastUpdatedAt:"Jan 5, 2025",frontMatter:{id:"using-bundlers",title:"Bundlers & Developer Setup",sidebar_label:"Bundlers & Dev Environments"},sidebar:"mainSidebar",previous:{title:"Manually editing the database",permalink:"/docs/editing-the-database"},next:{title:"TypeScript",permalink:"/docs/frameworks/typescript"}},a={},d=[{value:"Bundlers",id:"bundlers",level:2},{value:"Tutorial: Using Parcel",id:"parcel",level:2},{value:"Directory Structure",id:"parcel-structure",level:3},{value:"Setup",id:"parcel-setup",level:3},{value:"Add parcel to your bundle",id:"parcel-add",level:4},{value:"Locally",id:"parcel-add-local",level:5},{value:"Globally",id:"parcel-add-global",level:5},{value:"Make an entrypoint",id:"parcel-entrypoint",level:4},{value:"Run the command",id:"parcel-run",level:4},{value:"Recommended Configuration",id:"parcel-recommended",level:4},{value:"browserslist",id:"parcel-browserslist",level:5},{value:"Going further",id:"parcel-further",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"December 2022 Update",type:"note",children:[(0,s.jsx)(n.p,{children:"Bundlers are one option for serving dev servers & are a wonderful tool for releasing code into production. However, there are now many alternatives that are helpful for speedy local development. Speed comparisons vary depending on what metrics are being used, and like any other framework, there are tradeoffs across any tooling choices."}),(0,s.jsxs)(n.p,{children:["Vite is currently the leading project for an unbundled development environment. Vite provides a ",(0,s.jsx)(n.a,{href:"https://vitejs.dev/guide/why.html",children:"comparison writeup"})," that may be worth checking out when starting a new NodeCG project. The Vue Mastery team also provides a ",(0,s.jsx)(n.a,{href:"https://www.vuemastery.com/blog/vite-vs-webpack/",children:"comparison between Vite and Webpack"})," that may be helpful in making your bundling / module choices."]}),(0,s.jsx)(n.p,{children:"NodeCG usage is currently not limited to any of these options! Make your choice(s) as you will for what you are comfortable with."})]}),"\n",(0,s.jsx)(n.h2,{id:"bundlers",children:"Bundlers"}),"\n",(0,s.jsxs)(n.p,{children:["Webpack, the most used bundler, has some good documentation for ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/why-webpack",children:"why to use Webpack"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"There are several JavaScript bundlers."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/webpack/webpack",children:"webpack"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"By far the most used bundler with a lot of community made extensions."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/rollup/rollup",children:"rollup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Primarily used by libraries like React, Vue - utilizes ES Modules for splitting code"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/parcel-bundler/parcel",children:"parcel"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bundler famous for zero-config and super fast building process"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://esbuild.github.io/",children:"esbuild"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Extremely fast bundler written in Go, however currently the maintainers state that it is ",(0,s.jsx)(n.a,{href:"https://esbuild.github.io/faq/#production-readiness",children:"unstable for production usage"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These bundlers allows you to"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"write modular, organised source code"}),"\n",(0,s.jsx)(n.li,{children:"treat CSS, images, or any sort of files like JavaScript module"}),"\n",(0,s.jsx)(n.li,{children:"use npm packages for front-end (dashboard/graphics)"}),"\n",(0,s.jsx)(n.li,{children:"use JSX/TSX, Vue single file component"}),"\n",(0,s.jsx)(n.li,{children:"write in other languages like TypeScript"}),"\n",(0,s.jsx)(n.li,{children:"and many more"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"parcel",children:"Tutorial: Using Parcel"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The below tutorial focuses ",(0,s.jsx)(n.strong,{children:"solely"})," on bundler tooling with NodeCG and was last updated in ",(0,s.jsx)(n.strong,{children:"November 2020"}),"; functionality may be limited due to updates in underlying tools, particularly Parcel. If you run into issues, feel free to put in a pull request."]})}),"\n",(0,s.jsx)(n.h3,{id:"parcel-structure",children:"Directory Structure"}),"\n",(0,s.jsxs)(n.p,{children:["Basically you will have parcel to output the whole ",(0,s.jsx)(n.code,{children:"dashboard"})," and ",(0,s.jsx)(n.code,{children:"graphics"}),"\ndirectory. Your project would look like this"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-folders",children:"foo-layouts\n|- extension\n|- schemas\n|- src\n|- package.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you run parcel, it will make ",(0,s.jsx)(n.code,{children:"dashboard"})," and ",(0,s.jsx)(n.code,{children:"graphics"})," directory and\noutput bundle result into them."]}),"\n",(0,s.jsx)(n.p,{children:"(After running parcel)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-folders",children:"foo-layouts\n|- extension\n|- schemas\n|- src\n|- package.json\n|- dashboard (built)\n  |- index.html\n  |- styles.8jx17sx.css\n  |- main.7x2hdjs.js\n|- graphics (built)\n  |- ds1.html\n  |- sd1.html\n  |- styles.03nsh2s.css\n  |- ds1.rssiahs.js\n  |- sd1.4jc71nx.js\n  |- background.d8frsis.png\n"})}),"\n",(0,s.jsx)(n.p,{children:"The random string for each generated files are automatically generated to\nrefresh cache when the files change."}),"\n",(0,s.jsx)(n.h3,{id:"parcel-setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"As I said, parcel is (literally) zero-configuration required. It even installs\nmissing packages for you if there is any."}),"\n",(0,s.jsx)(n.h4,{id:"parcel-add",children:"Add parcel to your bundle"}),"\n",(0,s.jsx)(n.h5,{id:"parcel-add-local",children:"Locally"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev parcel-bundler\n# or\nyarn add -D parcel-bundler\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"parcel"})," command will be available locally. You can run it either adding\nnpm scripts, or ",(0,s.jsx)(n.code,{children:"npx parcel"}),"/",(0,s.jsx)(n.code,{children:"yarn parcel"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"parcel-add-global",children:"Globally"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -g parcel-bundler\n# or\nyarn global add parcel-bundler\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With this, ",(0,s.jsx)(n.code,{children:"parcel"})," command should be available globally. Just run ",(0,s.jsx)(n.code,{children:"parcel"})," to\nrun the bundler."]}),"\n",(0,s.jsx)(n.h4,{id:"parcel-entrypoint",children:"Make an entrypoint"}),"\n",(0,s.jsx)(n.p,{children:"When building front-end, HTML file is usually used as entrypoint. You can just\nuse your HTML file with your scripts and stylesheets imported."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8" />\n        <link rel="stylesheet" href="./styles.css">\n    </head>\n    <body>\n        <div id="tech"></div>\n        \x3c!-- Or a lot of pre-defined elements --\x3e\n        <script src="./index.js"><\/script>\n    </body>\n</html>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The entrypoint HTML file will also be compiled in the bundler. So you can have many\nkind of files in the ",(0,s.jsx)(n.code,{children:"script"})," tag. Parcel will automatically detect file format\nand use an appropriate library/compiler to bundle the file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script src="./main.coffee"><\/script>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script src="./app.tsx"><\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or the entrypoint doesn't even have to be an HTML file. For example, you can use\n",(0,s.jsx)(n.a,{href:"https://pugjs.org/api/getting-started.html",children:"Pug"})," to have common parts of HTML file into one file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pug",children:'doctype html\nhtml\n  head\n    title graphics-ds\n    include lib/common.pug\n  body\n    div(id="ds")\n    script(src="./views/ds.ts")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"parcel-run",children:"Run the command"}),"\n",(0,s.jsx)(n.p,{children:"For development, with file change detection and hot-reloading:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"parcel watch src/dashboard/index.html --out-dir dashboard --public-url ./\n"})}),"\n",(0,s.jsx)(n.p,{children:"For production build, with optimized output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"parcel build src/dashboard/index.html --out-dir dashboard --public-url ./\n"})}),"\n",(0,s.jsxs)(n.p,{children:["(Replace ",(0,s.jsx)(n.code,{children:"src/dashboard/index.html"})," with your entrypoint files.)"]}),"\n",(0,s.jsx)(n.p,{children:"You can use a glob pattern to use multiple entrypoints, if you have multiple pages\nto compile"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"parcel build src/dashboard/*.html --out-dir dashboard --public-url ./\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A detailed reference can be found in ",(0,s.jsx)(n.a,{href:"https://parceljs.org/features/cli",children:"the Parcel CLI reference documentation"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"parcel-recommended",children:"Recommended Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Even though it already works for most cases (!), a bit of configuration might be\nrecommended/required."}),"\n",(0,s.jsx)(n.h5,{id:"parcel-browserslist",children:"browserslist"}),"\n",(0,s.jsxs)(n.p,{children:["Parcel uses ",(0,s.jsx)(n.a,{href:"https://babeljs.io/",children:"babel"})," out of box, and the default supported\nbrowsers are ",(0,s.jsx)(n.code,{children:">0.25%"})," which includes old browsers like IE."]}),"\n",(0,s.jsxs)(n.p,{children:["Considering how NodeCG is used, it's the best to target only modern browsers or\njust Chrome. To do so, add ",(0,s.jsx)(n.code,{children:"browserslist"})," property to ",(0,s.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    // ...\n    "browserslist": "last 2 chrome versions",\n    "nodecg": //...\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"https://github.com/browserslist/browserslist#full-list",children:"this page"})," for\ndetailed ",(0,s.jsx)(n.code,{children:"browserslist"})," syntax."]}),"\n",(0,s.jsx)(n.h4,{id:"parcel-further",children:"Going further"}),"\n",(0,s.jsx)(n.p,{children:"Due to the huge amount of features parcel offers out of box, at this point you\nalready have a lot more options for your front-end development. For example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React development with JSX/TSX"}),"\n",(0,s.jsx)(n.li,{children:"Vue single file component"}),"\n",(0,s.jsx)(n.li,{children:"TypeScript or other alternative languages"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Also, if your project becomes too advanced for parcel to handle, you can switch\nto webpack - there are tools that can do this configuration conversion, to either Webpack or other tools like Vite, WMR, or Turbopack."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var s=r(7294);const l={},i=s.createContext(l);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);