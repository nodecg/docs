"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[652],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"migrating-1.x-to-2.x",title:"Migrating from 1.x to 2.x",sidebar_label:"1.x \u2192 2.x"},s=void 0,d={unversionedId:"migrating/migrating-1.x-to-2.x",id:"migrating/migrating-1.x-to-2.x",title:"Migrating from 1.x to 2.x",description:"If you use nodecg-cli, be sure to update to the latest version before upgrading to NodeCG v2.x (npm i -g nodecg-cli@latest).",source:"@site/docs/migrating/migrating-1.x-to-2.x.md",sourceDirName:"migrating",slug:"/migrating/migrating-1.x-to-2.x",permalink:"/docs/migrating/migrating-1.x-to-2.x",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/migrating/migrating-1.x-to-2.x.md",tags:[],version:"current",lastUpdatedBy:"Simon Fischer",lastUpdatedAt:1689855196,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id:"migrating-1.x-to-2.x",title:"Migrating from 1.x to 2.x",sidebar_label:"1.x \u2192 2.x"},sidebar:"mainSidebar",previous:{title:"0.9 \u2192 1.0",permalink:"/docs/migrating/migrating-0.9-to-1.0"},next:{title:"NodeCG",permalink:"/docs/classes/nodecg"}},p={},u=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Features",id:"features",level:2},{value:"All authentication keys will be revoked and replaced with new ones",id:"all-authentication-keys-will-be-revoked-and-replaced-with-new-ones",level:3},{value:"NodeCG no longer commits build outputs to the repository",id:"nodecg-no-longer-commits-build-outputs-to-the-repository",level:3},{value:"Rewrote the entire core in TypeScript",id:"rewrote-the-entire-core-in-typescript",level:3},{value:"Removed undocumented <code>rawManifest</code> property from bundle objects",id:"removed-undocumented-rawmanifest-property-from-bundle-objects",level:3},{value:"Updated the Sentry SDK and removed <code>publicDsn</code> from the config",id:"updated-the-sentry-sdk-and-removed-publicdsn-from-the-config",level:3},{value:"Rewrote the login system, advanced integrations with it may no longer work",id:"rewrote-the-login-system-advanced-integrations-with-it-may-no-longer-work",level:3},{value:"Socket.IO messages (i.e. sendMessage) now use the <code>broadcast</code> flag",id:"socketio-messages-ie-sendmessage-now-use-the-broadcast-flag",level:3},{value:"To enable &quot;trace&quot; logging, set the log level to &quot;verbose&quot;",id:"to-enable-trace-logging-set-the-log-level-to-verbose",level:3},{value:"Support for JSON5 in config files has been removed",id:"support-for-json5-in-config-files-has-been-removed",level:3},{value:"Supported Node.js versions are now 16 and 18",id:"supported-nodejs-versions-are-now-16-and-18",level:3},{value:"Minimum supported TypeScript version is now 4.7",id:"minimum-supported-typescript-version-is-now-47",level:3},{value:"All config and replicant schemas may now be authored in JSON Schema Draft 04, Draft 07, Draft 2019-09, or Draft 2020-12",id:"all-config-and-replicant-schemas-may-now-be-authored-in-json-schema-draft-04-draft-07-draft-2019-09-or-draft-2020-12",level:3},{value:"Fullbleed workspace labels now use the panel title instead of the panel name",id:"fullbleed-workspace-labels-now-use-the-panel-title-instead-of-the-panel-name",level:3},{value:"Fixed Replicant assignment sometimes being applied out-of-order",id:"fixed-replicant-assignment-sometimes-being-applied-out-of-order",level:3},{value:"Removed support for <code>pkg</code>",id:"removed-support-for-pkg",level:3},{value:"Replicants now properly parse falsey values",id:"replicants-now-properly-parse-falsey-values",level:3},{value:"NodeCG will now only exit with code 0 if there isn&#39;t already an exit code",id:"nodecg-will-now-only-exit-with-code-0-if-there-isnt-already-an-exit-code",level:3},{value:"Replicant logging is now configured separately for Console and File outputs",id:"replicant-logging-is-now-configured-separately-for-console-and-file-outputs",level:3}],c={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"nodecg-cli"),", be sure to update to the latest version before upgrading to NodeCG v2.x (",(0,r.kt)("inlineCode",{parentName:"p"},"npm i -g nodecg-cli@latest"),").")),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#all-authentication-keys-will-be-revoked-and-replaced-with-new-ones"},"All authentication keys will be revoked and replaced with new ones")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nodecg-no-longer-commits-build-outputs-to-the-repository"},"NodeCG no longer commits build outputs to the repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rewrote-the-entire-core-in-typescript"},"Rewrote the entire core in TypeScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#removed-undocumented-rawmanifest-property-from-bundle-objects"},"Removed undocumented ",(0,r.kt)("inlineCode",{parentName:"a"},"rawManifest")," property from bundle objects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updated-the-sentry-sdk-and-removed-publicdsn-from-the-config"},"Updated the Sentry SDK and removed ",(0,r.kt)("inlineCode",{parentName:"a"},"publicDsn")," from the config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rewrote-the-login-system-advanced-integrations-with-it-may-no-longer-work"},"Rewrote the login system, advanced integrations with it may no longer work")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#socketio-messages-ie-sendmessage-now-use-the-broadcast-flag"},"Socket.IO messages (i.e. sendMessage) now use the ",(0,r.kt)("inlineCode",{parentName:"a"},"broadcast")," flag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#to-enable-trace-logging-set-the-log-level-to-verbose"},'To enable "trace" logging, set the log level to "verbose"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#support-for-json5-in-config-files-has-been-removed"},"Support for JSON5 in config files has been removed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#supported-nodejs-versions-are-now-16-and-18"},"Supported Node.js versions are now 16 and 18")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#minimum-supported-typescript-version-is-now-47"},"Minimum supported TypeScript version is now 4.7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#all-config-and-replicant-schemas-may-now-be-authored-in-json-schema-draft-04-draft-07-draft-2019-09-or-draft-2020-12"},"All config and replicant schemas may now be authored in JSON Schema Draft 04, Draft 07, Draft 2019-09, or Draft 2020-12")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fullbleed-workspace-labels-now-use-the-panel-title-instead-of-the-panel-name"},"Fullbleed workspace labels now use the panel title instead of the panel name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fixed-replicant-assignment-sometimes-being-applied-out-of-order"},"Fixed Replicant assignment sometimes being applied out-of-order")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#removed-support-for-pkg"},"Removed support for ",(0,r.kt)("inlineCode",{parentName:"a"},"pkg"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replicants-now-properly-parse-falsey-values"},"Replicants now properly parse falsey values")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nodecg-will-now-only-exit-with-code-0-if-there-isnt-already-an-exit-code"},"NodeCG will now only exit with code 0 if there isn't already an exit code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replicant-logging-is-now-configured-separately-for-console-and-file-outputs"},"Replicant logging is now configured separately for Console and File outputs"))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All configs may now be written in JSON, CommonJS, or YAML."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"Worker clients are now supported.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#all-config-and-replicant-schemas-may-now-be-authored-in-json-schema-draft-04-draft-07-draft-2019-09-or-draft-2020-12"},"All config and replicant schemas may now be authored in JSON Schema Draft 04, Draft 07, Draft 2019-09, or Draft 2020-12"))),(0,r.kt)("h3",{id:"all-authentication-keys-will-be-revoked-and-replaced-with-new-ones"},"All authentication keys will be revoked and replaced with new ones"),(0,r.kt)("p",null,"Since the entire login system has been rewritten, none of the prior authenticaon keys are valid. As such, new ones will be generated for all users, and any ",(0,r.kt)("inlineCode",{parentName:"p"},"?key=xxx")," URLs in use will need to be updated."),(0,r.kt)("h3",{id:"nodecg-no-longer-commits-build-outputs-to-the-repository"},"NodeCG no longer commits build outputs to the repository"),(0,r.kt)("p",null,"To help make the repository cleaner, we no longer commit a built version of NodeCG to it. However, pre-built distributions are available from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodecg"},"npm")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg/releases"},"GitHub releases"),". These pre-builds can be easily installed via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg-cli"},"nodecg-cli"),"."),(0,r.kt)("h3",{id:"rewrote-the-entire-core-in-typescript"},"Rewrote the entire core in TypeScript"),(0,r.kt)("p",null,"NodeCG has been completely rewritten in TypeScript! We've kept the breaking changes to a minimum and most bundles should need very few code changes, but given the sheer scope of this change it is possible that we haven't accounted for every single breaking change. If you run across a breaking change not mentioned in this document, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodecg/docs/issues"},"open an issue"),". Please note that this does ",(0,r.kt)("em",{parentName:"p"},"not")," mean that all bundles must now be written in TypeScript. Plain JavaScript is and always will be supported."),(0,r.kt)("h3",{id:"removed-undocumented-rawmanifest-property-from-bundle-objects"},"Removed undocumented ",(0,r.kt)("inlineCode",{parentName:"h3"},"rawManifest")," property from bundle objects"),(0,r.kt)("p",null,"Previously, NodeCG had an undocumented ",(0,r.kt)("inlineCode",{parentName:"p"},"rawManifest")," property exposed on bundle objects. This property contained an unmodified copy of that bundle's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", and has been removed."),(0,r.kt)("h3",{id:"updated-the-sentry-sdk-and-removed-publicdsn-from-the-config"},"Updated the Sentry SDK and removed ",(0,r.kt)("inlineCode",{parentName:"h3"},"publicDsn")," from the config"),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry")," users, the SDK has been updated and ",(0,r.kt)("inlineCode",{parentName:"p"},"publicDsn")," is no longer used. Now, there's just one ",(0,r.kt)("inlineCode",{parentName:"p"},"dsn"),"."),(0,r.kt)("h3",{id:"rewrote-the-login-system-advanced-integrations-with-it-may-no-longer-work"},"Rewrote the login system, advanced integrations with it may no longer work"),(0,r.kt)("p",null,"The login system has been rewritten to be backed by a real database with users and roles, to pave the way for future improvements to security and account handling, with per-user permissions. However, at this time, it still functions mostly the same way it did in 1.x. That said, given the massive changes to this system, any bundles which built additional functionality on top of the login system may break. If your use case is no longer supported, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg/issues"},"open an issue"),"."),(0,r.kt)("p",null,"If your bundle relied on the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"refreshToken")," properties available from the old login lib, use these alternatives instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type NodeCG from '@nodecg/types';\n\nexport = (nodecg: NodeCG.ServerAPI) => {\n    nodecg.on('login', (user) => {\n        console.log(user.id, user.name);\n    });\n\n    nodecg.on('logout', (user) => {\n        console.log(user.id, user.name);\n    });\n\n    nodecg.mount((req, _res, _next) => {\n        if (req.user) {\n            const ident = req.user.identities[0];\n            switch (ident.provider_type) {\n                case 'discord':\n                case 'twitch':\n                    console.log(ident.provider_access_token, ident.provider_refresh_token);\n            }\n        }\n    });\n};\n")),(0,r.kt)("h3",{id:"socketio-messages-ie-sendmessage-now-use-the-broadcast-flag"},"Socket.IO messages (i.e. sendMessage) now use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"broadcast")," flag"),(0,r.kt)("p",null,"Previously, NodeCG naively did not use Socket.IO's ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")," flag to emit messages to all clients. This caused some issues such as messages sometimes being received by the context that sent them. This bug should be fixed, but it is considered a breaking change because it is possible that some bundles relied on this bug."),(0,r.kt)("h3",{id:"to-enable-trace-logging-set-the-log-level-to-verbose"},'To enable "trace" logging, set the log level to "verbose"'),(0,r.kt)("p",null,"The logging system has changed slightly, and to view ",(0,r.kt)("inlineCode",{parentName:"p"},"log.trace")," output, you must now set ",(0,r.kt)("inlineCode",{parentName:"p"},"logging.console.level")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"logging.file.level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose")," in your NodeCG config."),(0,r.kt)("h3",{id:"support-for-json5-in-config-files-has-been-removed"},"Support for JSON5 in config files has been removed"),(0,r.kt)("p",null,"The config loader system has been rewritten and the new library unfortunately no longer supports JSON5. However, it does support YAML and CommonJS, both of which support comments. This means that instead of needing to write ",(0,r.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.json"),", you could instead write ",(0,r.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.yaml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.js")," (with a ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports = {}")," statement). The same goes for bundle configs."),(0,r.kt)("h3",{id:"supported-nodejs-versions-are-now-16-and-18"},"Supported Node.js versions are now 16 and 18"),(0,r.kt)("p",null,"To keep up with the rapid pace of Node.js development, the supported Node.js versions are now 16 and 18, both of which are LTS."),(0,r.kt)("h3",{id:"minimum-supported-typescript-version-is-now-47"},"Minimum supported TypeScript version is now 4.7"),(0,r.kt)("p",null,"If your bundle uses TypeScript, it needs to use version 4.7 or greater to have compatibility with NodeCG v2.x."),(0,r.kt)("h3",{id:"all-config-and-replicant-schemas-may-now-be-authored-in-json-schema-draft-04-draft-07-draft-2019-09-or-draft-2020-12"},"All config and replicant schemas may now be authored in JSON Schema Draft 04, Draft 07, Draft 2019-09, or Draft 2020-12"),(0,r.kt)("p",null,"Previously, only Draft 04 was supported."),(0,r.kt)("h3",{id:"fullbleed-workspace-labels-now-use-the-panel-title-instead-of-the-panel-name"},"Fullbleed workspace labels now use the panel title instead of the panel name"),(0,r.kt)("p",null,"Previously, there was a bug where workspace labels used the wrong data for their user-facing labels."),(0,r.kt)("h3",{id:"fixed-replicant-assignment-sometimes-being-applied-out-of-order"},"Fixed Replicant assignment sometimes being applied out-of-order"),(0,r.kt)("p",null,"There was an obscure bug that could cause assignment operations on Replicants to be applied ",(0,r.kt)("em",{parentName:"p"},"before")," preceeding change events. This is no longer the case. It is technically a breaking change, but is is unlikely that many bundles relied on this broken behavior."),(0,r.kt)("h3",{id:"removed-support-for-pkg"},"Removed support for ",(0,r.kt)("inlineCode",{parentName:"h3"},"pkg")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/pkg"},(0,r.kt)("inlineCode",{parentName:"a"},"pkg"))," is a tool for packaging Node.js projects into an executable that NodeCG used to have undocumented support for. This support has been removed. Instead, follow the instructions on the ",(0,r.kt)("a",{parentName:"p",href:"../portable-nodecg"},"Portable NodeCG")," page."),(0,r.kt)("h3",{id:"replicants-now-properly-parse-falsey-values"},"Replicants now properly parse falsey values"),(0,r.kt)("p",null,"If you have a Replicant that tries to save values like ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", it will now properly do so."),(0,r.kt)("h3",{id:"nodecg-will-now-only-exit-with-code-0-if-there-isnt-already-an-exit-code"},"NodeCG will now only exit with code 0 if there isn't already an exit code"),(0,r.kt)("p",null,"NodeCG used to clobber previously-set exit codes at times. This is no longer the case."),(0,r.kt)("h3",{id:"replicant-logging-is-now-configured-separately-for-console-and-file-outputs"},"Replicant logging is now configured separately for Console and File outputs"),(0,r.kt)("p",null,"Previously, Replicant logging was a direct child of the ",(0,r.kt)("inlineCode",{parentName:"p"},"logging")," property, and it was one setting that controlled logging Replicant debug into to both Console ",(0,r.kt)("em",{parentName:"p"},"and")," File outputs. Now, these two things can be configured separately as ",(0,r.kt)("inlineCode",{parentName:"p"},"logging.console.replicants")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"logging.file.replicants"),"."))}g.isMDXComponent=!0}}]);