"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6653],{6564:function(e,n,s){s.r(n),s.d(n,{assets:function(){return a},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var t=s(5893),o=s(1151);const i={id:"security",title:"Security & Authentication",sidebar_label:"Security & Authentication"},r=void 0,l={id:"security",title:"Security & Authentication",description:"Is NodeCG secure by default?",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/docs/security",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/security.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1735511705,formattedLastUpdatedAt:"Dec 29, 2024",frontMatter:{id:"security",title:"Security & Authentication",sidebar_label:"Security & Authentication"},sidebar:"mainSidebar",previous:{title:"Mount folders as endpoints",permalink:"/docs/mounts"},next:{title:"Testing Graphics",permalink:"/docs/screenshot-testing"}},a={},c=[{value:"Is NodeCG secure by default?",id:"security",level:2},{value:"What levels of authorization does NodeCG have?",id:"authorization",level:2},{value:"How are users authorized?",id:"authorization-method",level:2},{value:"What do I do if one of my keys got leaked?",id:"leak",level:2},{value:"How do I enable login security?",id:"enable",level:2},{value:"Local Auth",id:"local-auth",level:3},{value:"Twitch Auth",id:"twitch-auth",level:3},{value:"Discord Auth",id:"discord-auth",level:3},{value:"By user",id:"discord-user",level:4},{value:"By Server (Guild)",id:"discord-server",level:4},{value:"Steam Auth",id:"steam-auth",level:3},{value:"How do I enable HTTPS/SSL encryption?",id:"ssl",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"security",children:"Is NodeCG secure by default?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"No."})," By default, NodeCG has no authorization or authentication of any kind. To enable basic authentication, see the ",(0,t.jsx)(n.a,{href:"#enable",children:"How do I enable login security?"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Do not"})," put an unsecured NodeCG instance on the internet or a public network. Unsecured instances should only be used for local development and on trusted LANs."]}),"\n",(0,t.jsx)(n.h2,{id:"authorization",children:"What levels of authorization does NodeCG have?"}),"\n",(0,t.jsx)(n.p,{children:"NodeCG has a fairly naive permissions model. There are only two permission levels:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Completely unauthorized, with no access to anything"}),"\n",(0,t.jsx)(n.li,{children:"Completely authorized, with full access to everything"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is something we want to improve in the future, but right now this is how things are in NodeCG."}),"\n",(0,t.jsx)(n.p,{children:'"Full access to everything" includes:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Read/write access to every Replicant in every bundle"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Read/write access to every message in every bundle"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Read access to the full config of every bundle"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Your bundle configs may include sensitive API keys and passwords. Every user of your NodeCG deployment will have full access to these config values."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Therefore, untrusted users must never be given any degree of authorization in your NodeCG instance. They must never be allowed to successfully authenticate with the socket server. If they do, they will have full control over your entire NodeCG instance."}),"\n",(0,t.jsx)(n.h2,{id:"authorization-method",children:"How are users authorized?"}),"\n",(0,t.jsx)(n.p,{children:"NodeCG has two ways of authorizing a user:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Reading the value of their ",(0,t.jsx)(n.code,{children:"socketToken"})," cookie."]}),"\n",(0,t.jsxs)(n.li,{children:["Reading the value of their ",(0,t.jsx)(n.code,{children:"key"})," URL query parameter.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['This is why the "COPY URL" buttons on the "Graphics" tab of the dashboard include a ',(0,t.jsx)(n.code,{children:"?key=YOUR_KEY"})," at the end of them. It is necessary for the pages to load successfully in OBS."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Anyone who gets sent a link which includes a ",(0,t.jsx)(n.code,{children:"key"})," will have full authorization and access to your NodeCG instance. Treat these links with the same secrecy as you would a password, because that's essentially what they are."]}),"\n",(0,t.jsx)(n.h2,{id:"leak",children:"What do I do if one of my keys got leaked?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Have the owner of the leaked key navigate to the "Settings" tab on the Dashboard.'}),"\n",(0,t.jsx)(n.li,{children:'Click "RESET KEY", and accept the confirmation dialog.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you are unable to reach the owner of the leaked key:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Shut down your NodeCG instance."})}),"\n",(0,t.jsxs)(n.li,{children:["Locate the ",(0,t.jsx)(n.code,{children:"nodecg/db/nodecg.sqlite3"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Open this file using any tool that can open an edit SQLite3 databases, such as ",(0,t.jsx)(n.a,{href:"https://sqlitebrowser.org/",children:"DB Browser"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.code,{children:"api_key"})," table and delete the row which contains the leaked key."]}),"\n",(0,t.jsx)(n.li,{children:"Restart your NodeCG instance."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In an emergency, you may want to completely delete your database file. The consequences of doing this are that all users will need to log in again and all persisted Replicant values will be lost."}),"\n",(0,t.jsx)(n.h2,{id:"enable",children:"How do I enable login security?"}),"\n",(0,t.jsx)(n.p,{children:"NodeCG has support for four authentication providers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#local-auth",children:"Local Username/Password Auth"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#twitch-auth",children:"Twitch Auth"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#discord-auth",children:"Discord Auth"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#steam-auth",children:"Steam Auth"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You may have multiple authentication providers enabled simultaneously."}),"\n",(0,t.jsx)(n.h3,{id:"local-auth",children:"Local Auth"}),"\n",(0,t.jsxs)(n.p,{children:["Configure your ",(0,t.jsx)(n.code,{children:"nodecg/cfg/nodecg.json"})," as such:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "login": {\n        "enabled": true,\n        "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n        "local": {\n            "enabled": true,\n            "allowedUsers": [\n                {\n                    "username": "example1",\n                    "password": "password_example"\n                },\n                {\n                    "username": "example2",\n                    "password": "anotherExample-password1234"\n                }\n            ]\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Local authentication also support password hashing by using HMAC. In order to use a password hash, fill the ",(0,t.jsx)(n.code,{children:"password"})," property with the format ",(0,t.jsx)(n.code,{children:"<type>:<hash>"})," where ",(0,t.jsx)(n.code,{children:"<type>"})," is the type (SHA-256, RIPEMD, Whirlpool, ...) and ",(0,t.jsx)(n.code,{children:"<hash>"})," a valid password hash."]}),"\n",(0,t.jsxs)(n.p,{children:["For generating a valid password hash, you must use ",(0,t.jsx)(n.code,{children:"sessionSecret"})," as secret key.\nIf you're looking for a HMAC hash generator, you can use tools like ",(0,t.jsx)(n.a,{href:"https://wtools.io/generate-hmac-hash",children:"wtools.io"})," for example."]}),"\n",(0,t.jsx)(n.p,{children:"Currently, only native Node.js algorithms are supported."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "login": {\n        "enabled": true,\n        "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n        "local": {\n            "enabled": true,\n            "allowedUsers": [\n                {\n                    "username": "admin",\n                    "password": "sha256:ac679e332d4eee340b74eb0581225686f2736d58df7ea30c87a0d2cd5bfd1329"\n                },\n                {\n                    "username": "other_admin",\n                    "password": "ripemd:6f00f0c4c18fb563921b689876e98b61"\n                }\n            ]\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"twitch-auth",children:"Twitch Auth"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://glass.twitch.tv/console/apps/create",children:"Create a new application on your Twitch Developer Dashboard"})}),"\n",(0,t.jsx)(n.li,{children:"Give it whatever values you want for Name, Category, and Other Details"}),"\n",(0,t.jsxs)(n.li,{children:["Set the OAuth Redirect URL to ",(0,t.jsx)(n.code,{children:"https://YOUR_DEPLOYMENT_URL/login/auth/twitch"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you're testing locally, use ",(0,t.jsx)(n.code,{children:"http://localhost:9090/login/auth/twitch"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Save your Client ID for the next step"}),"\n",(0,t.jsx)(n.li,{children:'Click "New Secret", and save your client secret for the next step'}),"\n",(0,t.jsxs)(n.li,{children:["Configure your ",(0,t.jsx)(n.code,{children:"nodecg/cfg/nodecg.json"})," as such:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"https://dev.twitch.tv/docs/authentication/#scopes",children:"Twitch Dev docs for the list of available scopes"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "login": {\n        "enabled": true,\n        "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n        "twitch": {\n            "enabled": true,\n            "clientID": "YOUR_TWITCH_APP_CLIENT_ID",\n            "clientSecret": "YOUR_TWITCH_APP_CLIENT_SECRET",\n            "scope": "user:read:email",\n            "allowedUsernames": [\n                "your_twitch_username",\n                "other_twitch_username",\n                "can_have_as_many_as_you_want"\n            ],\n            "allowedIds": [\n                "your_twitch_id",\n                "other_twitch_id",\n                "can_have_as_many_as_you_want"\n            ]\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"discord-auth",children:"Discord Auth"}),"\n",(0,t.jsx)(n.p,{children:"You can use two different kinds of authentication, by user or by server.\nYou can use one of them or both (in which case matching one of them will grant access)."}),"\n",(0,t.jsx)(n.h4,{id:"discord-user",children:"By user"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://discord.com/developers/applications",children:"Create a new application on your Discord Developer Dashboard"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Give it whatever value you want for the Name"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on OAuth2 on the left and Set the OAuth Redirect URL to ",(0,t.jsx)(n.code,{children:"https://YOUR_DEPLOYMENT_URL/login/auth/discord"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you're testing locally, use ",(0,t.jsx)(n.code,{children:"http://localhost:9090/login/auth/discord"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the Client ID and Client Secret from general information for your configuration"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure your ",(0,t.jsx)(n.code,{children:"nodecg/cfg/nodecg.json"})," like below"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes",children:"Discord docs for the list of available scopes"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To get a Discord user ID, enable Discord developer mode and then right click on a user to copy it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "login": {\n        "enabled": true,\n        "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n        "discord": {\n            "enabled": true,\n            "clientID": "YOUR_DISCORD_APP_CLIENT_ID",\n            "clientSecret": "YOUR_DISCORD_APP_CLIENT_SECRET",\n            "scope": "identify",\n            "allowedUserIDs": [\n                "paste discord user ids you want to allow here",\n                "they look like this",\n                "159600065017675778",\n                "54561421005950976"\n            ]\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"discord-server",children:"By Server (Guild)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://discord.com/developers/applications",children:"Create a new application on your Discord Developer Dashboard"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Give it whatever value you want for the Name"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the Client ID and Client Secret from general information for your configuration"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on OAuth2 on the left and Set the OAuth Redirect URL to ",(0,t.jsx)(n.code,{children:"https://YOUR_DEPLOYMENT_URL/login/auth/discord"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you're testing locally, use ",(0,t.jsx)(n.code,{children:"http://localhost:9090/login/auth/discord"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure your ",(0,t.jsx)(n.code,{children:"nodecg/cfg/nodecg.json"})," like below"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes",children:"Discord docs for the list of available scopes"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Any user in the server will be allowed to use nodecg."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to check for roles and not just server membership, you also need to do the following:\n5. Click on Bot on the left, add a bot, then use the token for your configuration\n6. Go to ",(0,t.jsx)(n.code,{children:"https://discord.com/oauth2/authorize?client_id={YOUR_CLIENT_ID_HERE}&scope=bot&permissions=0"})," (insert your Client ID)\nand invite the Bot to servers that you want to use for authentication (the bot will always display as offline, this is normal)"]}),"\n",(0,t.jsx)(n.p,{children:"To get a Discord server ID, enable Discord developer mode and then right click on a server to copy it.\nTo get a Discord role ID, enable Discord developer mode and then right click on a role to copy it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "discord": {\n      "enabled": true,\n      "clientID": "YOUR_DISCORD_APP_CLIENT_ID",\n      "clientSecret": "YOUR_DISCORD_APP_CLIENT_SECRET",\n      "scope": "identify guilds",\n      "allowedGuilds": [\n        // Use this to allow all members to log in\n        {\n          "guildID": "paste a server id here to allow all members to log in"\n        },\n        // Use this to restrict log in for certain roles\n        {\n          "guildID": "paste a server id here to allow members with one of the roles to log in",\n          "allowedRoleIDs": [\n            "paste role ids you want to allow here",\n            "754751725457637546",\n            "755012946400378910"\n          ],\n          "guildBotToken": "paste your Discord BOT token here"\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"steam-auth",children:"Steam Auth"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://steamcommunity.com/dev/apikey",children:"Create/copy your Steam Web API Key"})}),"\n",(0,t.jsxs)(n.li,{children:["Obtain the SteamID64 string for each of the accounts you wish to allow.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://steamid.io/",children:"steamid.io"})," is one tool for looking these up."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Configure your ",(0,t.jsx)(n.code,{children:"nodecg/cfg/nodecg.json"})," as such:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "login": {\n        "enabled": true,\n        "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n        "steam": {\n            "enabled": true,\n            "apiKey": "YOUR_STEAM_WEB_API_KEY",\n            "allowedIds": [\n                "paste the SteamId64s you want to allow here",\n                "they look like this",\n                "76561197974943998"\n            ]\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ssl",children:"How do I enable HTTPS/SSL encryption?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an SSL certificate if you don't already have one."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating an SSL cert is out of the scope of this tutorial. You may need to do some Googling if you are unfamiliar with this process."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure your ",(0,t.jsx)(n.code,{children:"nodecg/cfg/nodecg.json"})," as such (passphrase is only required if you created your key with one):"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart NodeCG, and confirm that your instance is accessible via HTTPS."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "ssl": {\n        "enabled": true,\n        "keyPath": "C:\\\\example\\\\path\\\\your-cert-key.key",\n        "certificatePath": "C:\\\\example\\\\path\\\\your-cert.crt",\n        "passphrase": "this is my example passphrase"\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(7294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);