"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3669],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"docker",title:"Docker",sidebar_label:"Docker"},s=void 0,c={unversionedId:"docker",id:"docker",title:"Docker",description:"Introduction",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/docs/docker",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/docker.md",tags:[],version:"current",lastUpdatedBy:"Coow",lastUpdatedAt:1695365358,formattedLastUpdatedAt:"Sep 22, 2023",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker"},sidebar:"mainSidebar",previous:{title:"Sentry.io",permalink:"/docs/sentry"},next:{title:"Manually editing the database",permalink:"/docs/editing-the-database"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Simple Deployment &amp; Testing",id:"deployment",level:2},{value:"Advanced Deployment",id:"advanced-deployment",level:2}],p={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is."),(0,r.kt)("p",{parentName:"blockquote"},"Containerization is increasingly popular because containers are:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Flexible: Even the most complex applications can be containerized."),(0,r.kt)("li",{parentName:"ul"},"Lightweight: Containers leverage and share the host kernel."),(0,r.kt)("li",{parentName:"ul"},"Interchangeable: You can deploy updates and upgrades on-the-fly."),(0,r.kt)("li",{parentName:"ul"},"Portable: You can build locally, deploy to the cloud, and run anywhere."),(0,r.kt)("li",{parentName:"ul"},"Scalable: You can increase and automatically distribute container replicas."),(0,r.kt)("li",{parentName:"ul"},"Stackable: You can stack services vertically and on-the-fly.")),(0,r.kt)("p",{parentName:"blockquote"},"Source ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"Get Started - docs.docker.com"))),(0,r.kt)("p",null,"Docker provides a lot of useful features for NodeCG:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No need to care about dependencies; they are all bundled with the Docker image."),(0,r.kt)("li",{parentName:"ul"},"Run it everywhere."),(0,r.kt)("li",{parentName:"ul"},"Easy upgrades.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"Docker")," (modern versions of Docker Desktop come with the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker compose")," command and it no longer needs to be separately installed)")),(0,r.kt)("h2",{id:"deployment"},"Simple Deployment & Testing"),(0,r.kt)("p",null,"If you want to use containerized NodeCG in the simplest possible deployment, all you have to do is run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# If on Windows: run this command in Git Bash, not Command Prompt or PowerShell.\ndocker run \\\n -p 9090:9090/tcp \\\n -v "/$PWD/cfg:/opt/nodecg/cfg" \\\n -v "/$PWD/bundles:/opt/nodecg/bundles" \\\n -v "/$PWD/logs:/opt/nodecg/logs" \\\n -v "/$PWD/db:/opt/nodecg/db" \\\n -v "/$PWD/assets:/opt/nodecg/assets" \\\n -it ghcr.io/nodecg/nodecg:latest\n')),(0,r.kt)("p",null,"This command will bind the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bundles"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"logs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," folders from the current working directory into the NodeCG Docker container, making them available to NodeCG at runtime. This is one way to get bundles into a containerized instance of NodeCG. Likewise, NodeCG can write the database, logs, and assets back into these directories on the host filesystem, allowing for persistence."),(0,r.kt)("h2",{id:"advanced-deployment"},"Advanced Deployment"),(0,r.kt)("p",null,"For more advanced deployments, you may also build your own Docker image to hold all your bundles and configuration."),(0,r.kt)("p",null,"Example Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"# Specifies the base image to build on top of.\n# This base image includes nodecg-cli, so you don't need to install it separately.\n# It also creates a nodecg user with appropriate permissions.\nFROM ghcr.io/nodecg/nodecg:latest\n\n# Switches to the nodecg user created by the base image.\nUSER nodecg\n\n# This is one way to install a bundle and generate a config for it.\n# You may need to take a different approach depending on your use case.\n# Be sure to replace [bundle-repo] and [bundle-name] with actual values and remove the brackets ([]).\nRUN nodecg install [bundle-repo] && nodecg defaultconfig [bundle-name]\n\n# This copies your NodeCG config into the container, which is a tradeoff.\n# The benefit is that you don't need to worry about copying the config file around between deployments.\n# The drawbacks are that you cannot easily change this config once it is in the container and that anyone with access to the docker image will have access to the secrets in the configuration files.\n# If you don't want to put your configuration inside the image, then use the volume mounting approach outlined in the Simple Deployment section above.\n# If you use a *.yaml or *.js config file, be sure to edit this command to reflect that.\nCOPY --chown=nodecg:nodecg ./cfg/nodecg.json /opt/nodecg/cfg/nodecg.json\n\n# The principles outlined above apply to any file that is part of your NodeCG deployment: you can either put it in the container or you can mount it from a volume. The base nodecg/nodecg Docker image already defines volume mount points for the cfg, bundles, logs, db, and assets directories. It is recommended that you mount logs, db, and assets as volumes so that NodeCG can persist data in those folders to the host filesystem, meaning that they will be carried over when you update your Docker image and redeploy. For the cfg and bundles directories, it is up to you whether you want to bake them into your image or if you want to mount them as volumes.\n\n# This is how you'd copy a specific bundle from the build directory into your image:\nCOPY --chown=nodecg:nodecg ./bundles/example-bundle /opt/nodecg/bundles/example-bundle\n\n# This is how you'd copy all bundles from the build directory into your image:\nCOPY --chown=nodecg:nodecg ./bundles /opt/nodecg/bundles\n\n# This is how you'd copy all config files fmr the build directory into your image:\n# Again, be warned that anyone with access to this image will be able to read the secrets from these files.\nCOPY --chown=nodecg:nodecg ./cfg /opt/nodecg/cfg\n\n")),(0,r.kt)("p",null,"Now use Docker to build your image from the Dockerfile you just created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Be sure to replace [your-image-name]  with an actual name and remove the brackets ([]).\n# Do not omit the "." at the end of the command.\ndocker build -t [your-image-name] .\n')),(0,r.kt)("p",null,"And run it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# If on Windows: run this command in Git Bash, not Command Prompt or PowerShell.\ndocker run \\\n -p 9090:9090/tcp \\\n -v "/$PWD/logs:/opt/nodecg/logs" \\\n -v "/$PWD/db:/opt/nodecg/db" \\\n -v "/$PWD/assets:/opt/nodecg/assets" \\\n -it [your-image-name]\n')),(0,r.kt)("p",null,"Or create a docker-compose.yml like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  nodecg:\n    image: '[your-image-name]'\n    ports:\n      - '9090:9090'\n    volumes:\n      - '[absolute path to logs dir on host filesystem]:/opt/nodecg/logs'\n      - '[absolute path to db dir on host filesystem]:/opt/nodecg/db'\n      - '[absolute path to assets dir on host filesystem]:/opt/nodecg/assets'\n")),(0,r.kt)("p",null,"To pin NodeCG to a specific version, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM ghcr.io/nodecg/nodecg:latest")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM ghcr.io/nodecg/nodecg:release:[specific version]")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you want to host your NodeCG instance on the internet (instead of just on a secure LAN), it is highly recommended to encrypt and secure NodeCG."),(0,r.kt)("p",{parentName:"admonition"},"To encrypt the traffic, you can use a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TLS_termination_proxy"},"TLS/SSL termination proxy")," like:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/containous/traefik"},"Traefik")," - Really neat if you host a lot of services in Docker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://proxy.dockerflow.com/"},"Docker Flow Proxy")," - Similar to Traefik."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://caddyserver.com"},"Caddy")," - Be aware of the licensing of the binaries. It should be ok if you build it yourself e.g. in a Docker image. No guarantee."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nginx-proxy/nginx-proxy#ssl-support-using-letsencrypt"},"nginx-proxy w/ letsencrypt")," - Useful if you're already familiar with nginx or have existing site configurations you'd like to port over."),(0,r.kt)("li",{parentName:"ul"},"Others - There are a lot of other solutions. Choose what fits you best.")),(0,r.kt)("p",{parentName:"admonition"},"To secure NodeCG, follow the ",(0,r.kt)("a",{parentName:"p",href:"security"},"Security & Authentication")," guide.")))}h.isMDXComponent=!0}}]);