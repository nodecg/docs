(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(142)),l={id:"nodecg-configuration",title:"NodeCG Configuration",sidebar_label:"Configuration"},o={unversionedId:"nodecg-configuration",id:"nodecg-configuration",isDocsHomePage:!1,title:"NodeCG Configuration",description:"NodeCG is configured via a cfg/nodecg.json file with the following schema:",source:"@site/docs/nodecg-configuration.md",slug:"/nodecg-configuration",permalink:"/docs/nodecg-configuration",editUrl:"https://github.com/nodecg/docs/edit/master/docs/nodecg-configuration.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1605959274,sidebar_label:"Configuration",sidebar:"mainSidebar",previous:{title:"package.json Manifest",permalink:"/docs/manifest"},next:{title:"Using npm Dependencies",permalink:"/docs/using-npm"}},b=[{value:"Schema",id:"schema",children:[]},{value:"Example Config",id:"example-config",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"NodeCG is configured via a ",Object(r.b)("inlineCode",{parentName:"p"},"cfg/nodecg.json")," file with the following schema:"),Object(r.b)("h3",{id:"schema"},"Schema"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"host")," ",Object(r.b)("em",{parentName:"li"},"String")," The IP address or hostname that NodeCG should bind to."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"port")," ",Object(r.b)("em",{parentName:"li"},"Integer")," The port that NodeCG should listen on."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"baseURL")," ",Object(r.b)("em",{parentName:"li"},"String")," The URL of this instance. Used for things like cookies. Defaults to HOST:PORT. If you use a reverse proxy, you\\'ll likely need to set this value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"developer")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable features that speed up development. Not suitable for production."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"exitOnUncaught")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether or not to exit on uncaught exceptions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"logging")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains other configuration properties.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"replicants")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable logging of the Replicants subsystem. Very spammy."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"console")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains properties for console logging.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable console logging."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"level")," ",Object(r.b)("em",{parentName:"li"},"String")," Lowest importance of messages which should be logged. Must be ",Object(r.b)("inlineCode",{parentName:"li"},'"trace"'),", ",Object(r.b)("inlineCode",{parentName:"li"},'"debug"'),", ",Object(r.b)("inlineCode",{parentName:"li"},'"info"'),", ",Object(r.b)("inlineCode",{parentName:"li"},'"warn"')," or ",Object(r.b)("inlineCode",{parentName:"li"},'"error"')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"file")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains properties for file logging.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable file logging."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path")," ",Object(r.b)("em",{parentName:"li"},"String")," The filepath to log to."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"level")," ",Object(r.b)("em",{parentName:"li"},"String")," Lowest importance of messages which should be logged. Must be ",Object(r.b)("inlineCode",{parentName:"li"},'"trace"'),", ",Object(r.b)("inlineCode",{parentName:"li"},'"debug"'),", ",Object(r.b)("inlineCode",{parentName:"li"},'"info"'),", ",Object(r.b)("inlineCode",{parentName:"li"},'"warn"')," or ",Object(r.b)("inlineCode",{parentName:"li"},'"error"')))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bundles")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains configuration for bundles.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Array of strings")," A whitelist array of bundle names that will be the only ones loaded at startup. Cannot be used with ",Object(r.b)("inlineCode",{parentName:"li"},"bundles.disabled"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disabled")," ",Object(r.b)("em",{parentName:"li"},"Array of strings")," A blacklist array of bundle names that will not be loaded at startup. Cannot be used with ",Object(r.b)("inlineCode",{parentName:"li"},"bundles.enabled"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paths")," ",Object(r.b)("em",{parentName:"li"},"Array of strings")," An array of additional paths where bundles are located."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"login")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains other configuration properties.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable login security."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sessionSecret")," ",Object(r.b)("em",{parentName:"li"},"String")," The secret used to salt sessions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"forceHttpsReturn")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," orces Steam & Twitch login return URLs to use HTTPS instead of HTTP. Useful in reverse proxy setups."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"local")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains local username & password login configuration properties.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable Local authentication."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allowedUsers")," ",Object(r.b)("em",{parentName:"li"},"Array of objects")," Which usernames and passwords to allow. Example: ",Object(r.b)("inlineCode",{parentName:"li"},'{"username": "admin", "password": "foo123"}')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"steam")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains steam login configuration properties.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable Steam authentication."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apiKey")," ",Object(r.b)("em",{parentName:"li"},"String")," A Steam API Key. Obtained from ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://steamcommunity.com/dev/apikey"}),"http://steamcommunity.com/dev/apikey")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allowedIds")," ",Object(r.b)("em",{parentName:"li"},"Array of strings")," Which 64 bit Steam IDs to allow. Can be obtained from ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://steamid.io/"}),"https://steamid.io/")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"twitch")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains twitch login configuration properties.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable Twitch authentication."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clientID")," ",Object(r.b)("em",{parentName:"li"},"String")," A Twitch application ClientID ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://twitch.tv/kraken/oauth2/clients/new"}),"http://twitch.tv/kraken/oauth2/clients/new")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clientSecret")," ",Object(r.b)("em",{parentName:"li"},"String")," A Twitch application ClientSecret ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://twitch.tv/kraken/oauth2/clients/new"}),"http://twitch.tv/kraken/oauth2/clients/new")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Note:")," Configure your Twitch OAuth credentials with a Redirect URI to ",Object(r.b)("inlineCode",{parentName:"li"},"{baseURL}/login/auth/twitch")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scope")," ",Object(r.b)("em",{parentName:"li"},"String")," A space-separated string of Twitch application ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev.twitch.tv/docs/authentication/#scopes"}),"permissions"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allowedUsernames")," ",Object(r.b)("em",{parentName:"li"},"Array of strings")," Which Twitch usernames to allow."))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ssl")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains HTTPS/SSL configuration properties.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable SSL/HTTPS encryption."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allowHTTP")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to allow insecure HTTP connections while SSL is active."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keyPath")," ",Object(r.b)("em",{parentName:"li"},"String")," The path to an SSL key file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"certificatePath")," ",Object(r.b)("em",{parentName:"li"},"String")," The path to an SSL certificate file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passphrase")," ",Object(r.b)("em",{parentName:"li"},"String")," The passphrase for the provided key file."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sentry")," ",Object(r.b)("em",{parentName:"li"},"Object")," Contains ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://sentry.io/support-class/"}),"Sentry")," configuration properties. - ",Object(r.b)("inlineCode",{parentName:"li"},"enabled")," ",Object(r.b)("em",{parentName:"li"},"Boolean")," Whether to enable Sentry error reporting. - ",Object(r.b)("inlineCode",{parentName:"li"},"dsn")," ",Object(r.b)("em",{parentName:"li"},"String")," Your private DSN, for server-side error reporting. - ",Object(r.b)("inlineCode",{parentName:"li"},"publicDsn")," ",Object(r.b)("em",{parentName:"li"},"String")," Your public sentry DSN, for browser error reporting.")),Object(r.b)("h3",{id:"example-config"},"Example Config"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "host": "0.0.0.0",\n    "port": 9090,\n    "developer": false,\n    "bundles": {\n        "enabled": ["bundle-name"],\n        "paths": ["C:\\\\nodecg\\\\experimental-bundles"]\n    },\n    "login": {\n        "enabled": true,\n        "sessionSecret": "supersecret",\n        "steam": {\n            "enabled": true,\n            "apiKey": "YYYYY",\n            "allowedIds": ["11111111111111111", "22222222222222222"]\n        },\n        "twitch": {\n            "enabled": true,\n            "clientID": "your_app_id",\n            "clientSecret": "your_app_key",\n            "scope": "user_read",\n            "allowedUsernames": ["some_username"]\n        }\n    },\n    "logging": {\n        "replicants": false,\n        "console": {\n            "enabled": true,\n            "level": "trace"\n        },\n        "file": {\n            "enabled": true,\n            "path": "logs/server.log",\n            "level": "info"\n        }\n    },\n    "ssl": {\n        "enabled": false,\n        "keyPath": "",\n        "certificatePath": ""\n    },\n    "sentry": {\n        "enabled": true,\n        "dsn": "https://xxx:yyy@sentry.io/zzz",\n        "publicDsn": "https://xxx@sentry.io/zzz"\n    }\n}\n')))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(l,".").concat(d)]||m[d]||s[d]||r;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);