---
id: docker
title: Docker
sidebar_label: Docker
---

# Introduction
> Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is.
> 
> Containerization is increasingly popular because containers are:
> 
>   - Flexible: Even the most complex applications can be containerized.
>   - Lightweight: Containers leverage and share the host kernel.
>   - Interchangeable: You can deploy updates and upgrades on-the-fly.
>   - Portable: You can build locally, deploy to the cloud, and run anywhere.
>   - Scalable: You can increase and automatically distribute container replicas.
>   - Stackable: You can stack services vertically and on-the-fly.
>
> Source [Get Started - docs.docker.com](https://docs.docker.com/get-started/) (It's highly recommend to read into it if you didn't already)

Docker provides a lot of useful features for NodeCG:
 - No need to care about dependencies. They are all bundled with the docker image
 - Run it everywhere.
 - Easy upgrades.

# Prerequisites
- [Docker](https://docs.docker.com/install/)
- [Docker-Compose](https://docs.docker.com/compose/install/) (`1.13.0+`) (optional)

# Bundle development
If you want to use NodeCG in development, you can easily deploy a NodeCG instance with Docker. All you have to do is run:

```sh
docker run -it -u root -p 9090:9090 -rm nodecg/nodecg
```
:::note
The argument `-u root` is needed to ensure that the NodeCG process runnning inside the container has the rights to read the mounted volumes.
:::

To include the bundle you're working on in this Docker Container. You can mount it like this:

```sh
docker run -it -u root -p 9090:9090 -rm -v [bundle-dir]:/opt/nodecg/bundles/[bundle-name] -v [config-file]:/opt/nodecg/cfg/[bundle].json nodecg/nodecg
```

Mounting the volumes and running as `root` will ensure that the changes are in the container, without a docker image rebuild.

# Production
If you want to use NodeCG in production, it is recommended to build a own Docker Image to hold all your bundles and configuration.

Example Dockerfile:
```dockerfile
FROM nodecg/nodecg:v1.5.0

USER root

# Install dependencies like bower

USER nodecg

RUN nodecg install [bundle-repo] && nodecg defaultconfig [bundle-name] && \
    ... 
    
COPY --chown=nodecg:nodecg [nodecg-config-file] /opt/nodecg/cfg/nodecg.json
```

:::tip Optional Tip
You could add the configuration files to your image to avoid problems with the file permissions. (**If you decide to do so, be careful with the secrets in these files as everyone who has access to the docker image has access to the secrets in the configuration files**)

```dockerfile
COPY --chown=nodecg:nodecg [bundle-config-file] /opt/nodecg/cfg/[bundle].json
```

Instead of the seperate `COPY` directives you could use only one:
 
```dockerfile
COPY --chown=nodecg:nodecg [config-dir]/* /opt/nodecg/cfg/
```

This will create only one layer. But requires you to organize all your configuration files in the same directory.
[More Information](https://docs.docker.com/engine/reference/builder/#copy)
:::

1. `FROM nodecg/nodecg:v1.5.0` Defines the parent image that should be used to build your Docker Image. We use `nodecg/nodecg` with the latest version tag `v1.5.0`. The parent image already include [NodeCG](https://nodecg.com) and [nodecg-cli](https://github.com/nodecg/nodecg-cli).

2. `# Install dependencies like bower` If you use bundles that require bower or any other external dependencies install them here. It will make the next build faster if these external dependencies dont change. To install bower use `RUN npm install -g bower`.

2. `RUN nodecg install ... && nodecg defaultconfig ...` Installs your bundles and generates the default configs for them. (if you include the configuration later, you dont need to generate the default configuration)

    > nodecg install (more information at [nodecg-cli](https://github.com/nodecg/nodecg-cli))
    > 
    > To install a bundle from Github, enter the owner and repository name:
    >
    > `nodecg install lange/lange-notify`
    >
    > ... to install a bundle from Bitbucket, enter the owner and repository name prefixed with bitbucket:
    >
    > `nodecg install bitbucket:username/repo-name`
    >
    > ... to install a bundle from any other git provider, enter the git URL:
    >
    > `nodecg install https://gitlab.com/username/repo-name.git`

3. `COPY --chown=nodecg:nodecg [nodecg-config-file] /usr/src/app/cfg/nodecg.json` Copies the config file from your filesystem into the Docker Image and can be accessed from the container. (`--chown` is needed because the NodeCG process is run by the user `nodecg`)

Now use Docker to build your image from the Dockerfile you just created:

```sh
docker build -v [configuration dir]:/opt/nodecg/cfg -t [your-image-name] .
```

And run it with:
```sh
docker run -p 9090:9090 [your-image-name]
```

Or create a docker-compose.yml like this:

```yaml
version: '3'
services:
  nodecg:
    image: '[your-image-name]'
    ports:
      - '9090:9090'
    volumes:
      - '[configuration dir]:/opt/nodecg/cfg'
```

> Be sure that your configuration dir is accessable by `nodecg:nodecg` (uid: `101`, gid: `102`)

Build a new docker image for your deployment has the advantage, that it is safer (because it is run as a non-root user), more consistent (because the container wont keep changes, except your explicitly tell it to).

To upgrade NodeCG just build a new image with the new parent.
Replace `FROM nodecg/nodecg:1.5.0` with `FROM nodecg/nodecg:[newer version]`

:::warning
If you want to host your NodeCG instance on the internet (instead of just on a secure LAN), it is highly recommended to encrypt and secure NodeCG.

To encrypt the traffic, you can use a [TLS/SSL termination proxy](https://en.wikipedia.org/wiki/TLS_termination_proxy) like:
- [Traefik](https://github.com/containous/traefik) - Really neat if you host a lot of services in docker.
- [Docker Flow Proxy](https://proxy.dockerflow.com/) - Similar to Traefik.
- [Caddy](https://caddyserver.com) - Be aware of the licensing of the binaries. It should be ok if you build it yourself e.g. in a Docker Image. No garantee.
- [nginx-proxy w/ letsencrypt](https://github.com/nginx-proxy/nginx-proxy#ssl-support-using-letsencrypt) - Useful if you're already familiar with nginx or have existing site configurations you'd like to port over.
- Others - There are a lot of other solutions. Choose what fits you best.

To secure NodeCG, follow the [Security & Authentication](security) guide.
:::
