"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5789],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),f=o,m=c["".concat(i,".").concat(f)]||c[f]||p[f]||r;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4475:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],s={id:"sounds",title:"Sounds",sidebar_label:"Sounds"},i=void 0,u={unversionedId:"sounds",id:"sounds",title:"Sounds",description:"NodeCG features a system for management and playback of sound cues. To add sound cues to your bundle,",source:"@site/docs/sounds.md",sourceDirName:".",slug:"/sounds",permalink:"/docs/sounds",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/sounds.md",tags:[],version:"current",lastUpdatedBy:"Coow",lastUpdatedAt:1695365358,formattedLastUpdatedAt:"Sep 22, 2023",frontMatter:{id:"sounds",title:"Sounds",sidebar_label:"Sounds"},sidebar:"mainSidebar",previous:{title:"Assets",permalink:"/docs/assets"},next:{title:"Replicant Validation",permalink:"/docs/replicant-schemas"}},d={},c=[],p={toc:c},f="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)(f,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"NodeCG features a system for management and playback of sound cues. To add sound cues to your bundle,\ncreate a ",(0,r.kt)("inlineCode",{parentName:"p"},"nodecg.soundCues")," array in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "test-bundle",\n    "nodecg": {\n        "soundCues": [\n            {\n                "name": "name-only"\n            },\n            {\n                "name": "default-volume",\n                "defaultVolume": 80\n            },\n            {\n                "name": "non-assignable",\n                "assignable": false,\n                "defaultFile": "sound/default-file.ogg"\n            },\n            {\n                "name": "default-file",\n                "defaultFile": "sound/default-file.ogg"\n            },\n            {\n                "name": "single-channel",\n                "channels": 1\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"Your bundle will now have a card on the Mixer page of the Dashboard."),(0,r.kt)("video",{style:{width:"100%"},controls:!0,preload:!0},(0,r.kt)("source",{src:"/vid/Sounds.mp4",type:"video/mp4"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defaultFile"),'s are audio files that you ship with your bundle. They will be available to that specific cue as a\n"Default" option in that cue\'s dropdown select on the Mixer.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"channels")," determines how many instances of a sound can be playing simultaneously. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),". If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),",\nonly one instance can play at a time, and a new instance cannot be started until the currently playing instance has completed."),(0,r.kt)("p",null,"If your bundle has at least one cue that is ",(0,r.kt)("inlineCode",{parentName:"p"},"assignable"),', it will gain a "Sounds" ',(0,r.kt)("a",{parentName:"p",href:"/docs/assets"},"Asset")," category.\nThis category accepts ",(0,r.kt)("inlineCode",{parentName:"p"},".ogg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".mp3")," files. Any audio files uploaded to this category will become available as options\nin all of your ",(0,r.kt)("inlineCode",{parentName:"p"},"assignable")," cues' dropdown boxes."),(0,r.kt)("p",null,"If your bundle has Sound Cues, the following API methods will be available to your graphic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"classes/playSound"},"playSound")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"classes/stopSound"},"stopSound")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"classes/stopAllSounds"},"stopAllSounds"))))}m.isMDXComponent=!0}}]);