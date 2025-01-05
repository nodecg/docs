"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3669],{2314:function(e,n,o){o.r(n),o.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return d}});var t=o(5893),i=o(1151);const s={id:"docker",title:"Docker",sidebar_label:"Docker"},r=void 0,a={id:"docker",title:"Docker",description:"Introduction",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/docs/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/docker.md",tags:[],version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1736076603,formattedLastUpdatedAt:"Jan 5, 2025",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker"},sidebar:"mainSidebar",previous:{title:"Sentry.io",permalink:"/docs/sentry"},next:{title:"Manually editing the database",permalink:"/docs/editing-the-database"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Simple Deployment &amp; Testing",id:"deployment",level:2},{value:"Advanced Deployment",id:"advanced-deployment",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is."}),"\n",(0,t.jsx)(n.p,{children:"Containerization is increasingly popular because containers are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Flexible: Even the most complex applications can be containerized."}),"\n",(0,t.jsx)(n.li,{children:"Lightweight: Containers leverage and share the host kernel."}),"\n",(0,t.jsx)(n.li,{children:"Interchangeable: You can deploy updates and upgrades on-the-fly."}),"\n",(0,t.jsx)(n.li,{children:"Portable: You can build locally, deploy to the cloud, and run anywhere."}),"\n",(0,t.jsx)(n.li,{children:"Scalable: You can increase and automatically distribute container replicas."}),"\n",(0,t.jsx)(n.li,{children:"Stackable: You can stack services vertically and on-the-fly."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Source ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-started/",children:"Get Started - docs.docker.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Docker provides a lot of useful features for NodeCG:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No need to care about dependencies; they are all bundled with the Docker image."}),"\n",(0,t.jsx)(n.li,{children:"Run it everywhere."}),"\n",(0,t.jsx)(n.li,{children:"Easy upgrades."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"Docker"})," (modern versions of Docker Desktop come with the ",(0,t.jsx)(n.code,{children:"docker compose"})," command and it no longer needs to be separately installed)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deployment",children:"Simple Deployment & Testing"}),"\n",(0,t.jsx)(n.p,{children:"If you want to use containerized NodeCG in the simplest possible deployment, all you have to do is run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# If on Windows: run this command in Git Bash, not Command Prompt or PowerShell.\ndocker run \\\n -p 9090:9090/tcp \\\n -v "/$PWD/cfg:/opt/nodecg/cfg" \\\n -v "/$PWD/bundles:/opt/nodecg/bundles" \\\n -v "/$PWD/logs:/opt/nodecg/logs" \\\n -v "/$PWD/db:/opt/nodecg/db" \\\n -v "/$PWD/assets:/opt/nodecg/assets" \\\n -it ghcr.io/nodecg/nodecg:latest\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This command will bind the ",(0,t.jsx)(n.code,{children:"cfg"}),", ",(0,t.jsx)(n.code,{children:"bundles"}),", ",(0,t.jsx)(n.code,{children:"logs"}),", ",(0,t.jsx)(n.code,{children:"db"}),", and ",(0,t.jsx)(n.code,{children:"assets"})," folders from the current working directory into the NodeCG Docker container, making them available to NodeCG at runtime. This is one way to get bundles into a containerized instance of NodeCG. Likewise, NodeCG can write the database, logs, and assets back into these directories on the host filesystem, allowing for persistence."]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-deployment",children:"Advanced Deployment"}),"\n",(0,t.jsx)(n.p,{children:"For more advanced deployments, you may also build your own Docker image to hold all your bundles and configuration."}),"\n",(0,t.jsx)(n.p,{children:"Example Dockerfile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-docker",children:"# Specifies the base image to build on top of.\n# It also creates a nodecg user with appropriate permissions.\nFROM ghcr.io/nodecg/nodecg:latest\n\n# This is one way to install a bundle and generate a config for it.\n# You may need to take a different approach depending on your use case.\n# Be sure to replace [bundle-repo] and [bundle-name] with actual values and remove the brackets ([]).\nRUN nodecg install [bundle-repo] && nodecg defaultconfig [bundle-name]\n\n# This copies your NodeCG config into the container, which is a tradeoff.\n# The benefit is that you don't need to worry about copying the config file around between deployments.\n# The drawbacks are that you cannot easily change this config once it is in the container and that anyone with access to the docker image will have access to the secrets in the configuration files.\n# If you don't want to put your configuration inside the image, then use the volume mounting approach outlined in the Simple Deployment section above.\n# If you use a *.yaml or *.js config file, be sure to edit this command to reflect that.\nCOPY ./cfg/nodecg.json /opt/nodecg/cfg/nodecg.json\n\n# The principles outlined above apply to any file that is part of your NodeCG deployment: you can either put it in the container or you can mount it from a volume. The base nodecg/nodecg Docker image already defines volume mount points for the cfg, bundles, logs, db, and assets directories. It is recommended that you mount logs, db, and assets as volumes so that NodeCG can persist data in those folders to the host filesystem, meaning that they will be carried over when you update your Docker image and redeploy. For the cfg and bundles directories, it is up to you whether you want to bake them into your image or if you want to mount them as volumes.\n\n# This is how you'd copy a specific bundle from the build directory into your image:\nCOPY ./bundles/example-bundle /opt/nodecg/bundles/example-bundle\n\n# This is how you'd copy all bundles from the build directory into your image:\nCOPY ./bundles /opt/nodecg/bundles\n\n# This is how you'd copy all config files fmr the build directory into your image:\n# Again, be warned that anyone with access to this image will be able to read the secrets from these files.\nCOPY ./cfg /opt/nodecg/cfg\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now use Docker to build your image from the Dockerfile you just created:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Be sure to replace [your-image-name]  with an actual name and remove the brackets ([]).\n# Do not omit the "." at the end of the command.\ndocker build -t [your-image-name] .\n'})}),"\n",(0,t.jsx)(n.p,{children:"And run it with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# If on Windows: run this command in Git Bash, not Command Prompt or PowerShell.\ndocker run \\\n -p 9090:9090/tcp \\\n -v "/$PWD/logs:/opt/nodecg/logs" \\\n -v "/$PWD/db:/opt/nodecg/db" \\\n -v "/$PWD/assets:/opt/nodecg/assets" \\\n -it [your-image-name]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or create a docker-compose.yml like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"services:\n  nodecg:\n    image: '[your-image-name]'\n    ports:\n      - '9090:9090'\n    volumes:\n      - '[absolute path to logs dir on host filesystem]:/opt/nodecg/logs'\n      - '[absolute path to db dir on host filesystem]:/opt/nodecg/db'\n      - '[absolute path to assets dir on host filesystem]:/opt/nodecg/assets'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To pin NodeCG to a specific version, replace ",(0,t.jsx)(n.code,{children:"FROM ghcr.io/nodecg/nodecg:latest"})," with ",(0,t.jsx)(n.code,{children:"FROM ghcr.io/nodecg/nodecg:release:[specific version]"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"If you want to host your NodeCG instance on the internet (instead of just on a secure LAN), it is highly recommended to encrypt and secure NodeCG."}),(0,t.jsxs)(n.p,{children:["To encrypt the traffic, you can use a ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/TLS_termination_proxy",children:"TLS/SSL termination proxy"})," like:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/containous/traefik",children:"Traefik"})," - Really neat if you host a lot of services in Docker."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://proxy.dockerflow.com/",children:"Docker Flow Proxy"})," - Similar to Traefik."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://caddyserver.com",children:"Caddy"})," - Be aware of the licensing of the binaries. It should be ok if you build it yourself e.g. in a Docker image. No guarantee."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/nginx-proxy/nginx-proxy#ssl-support-using-letsencrypt",children:"nginx-proxy w/ letsencrypt"})," - Useful if you're already familiar with nginx or have existing site configurations you'd like to port over."]}),"\n",(0,t.jsx)(n.li,{children:"Others - There are a lot of other solutions. Choose what fits you best."}),"\n"]}),(0,t.jsxs)(n.p,{children:["To secure NodeCG, follow the ",(0,t.jsx)(n.a,{href:"security",children:"Security & Authentication"})," guide."]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return r}});var t=o(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);