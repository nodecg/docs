---
id: docker
title: Docker
sidebar_label: Docker
---

## Introduction {#introduction}
>
> Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is.
>
> Containerization is increasingly popular because containers are:
>
> - Flexible: Even the most complex applications can be containerized.
> - Lightweight: Containers leverage and share the host kernel.
> - Interchangeable: You can deploy updates and upgrades on-the-fly.
> - Portable: You can build locally, deploy to the cloud, and run anywhere.
> - Scalable: You can increase and automatically distribute container replicas.
> - Stackable: You can stack services vertically and on-the-fly.
>
> Source [Get Started - docs.docker.com](https://docs.docker.com/get-started/)

Docker provides a lot of useful features for NodeCG:

- No need to care about dependencies; they are all bundled with the Docker image.
- Run it everywhere.
- Easy upgrades.

## Prerequisites {#prerequisites}

- [Docker](https://docs.docker.com/install/) (modern versions of Docker Desktop come with the `docker compose` command and it no longer needs to be separately installed)

## Simple Deployment & Testing {#deployment}

If you want to use containerized NodeCG in the simplest possible deployment, all you have to do is run:

```bash
# If on Windows: run this command in Git Bash, not Command Prompt or PowerShell.
docker run \
 -p 9090:9090/tcp \
 -v "/$PWD/cfg:/opt/nodecg/cfg" \
 -v "/$PWD/bundles:/opt/nodecg/bundles" \
 -v "/$PWD/logs:/opt/nodecg/logs" \
 -v "/$PWD/db:/opt/nodecg/db" \
 -v "/$PWD/assets:/opt/nodecg/assets" \
 -it ghcr.io/nodecg/nodecg:latest
```

This command will bind the `cfg`, `bundles`, `logs`, `db`, and `assets` folders from the current working directory into the NodeCG Docker container, making them available to NodeCG at runtime. This is one way to get bundles into a containerized instance of NodeCG. Likewise, NodeCG can write the database, logs, and assets back into these directories on the host filesystem, allowing for persistence.

## Advanced Deployment {#advanced-deployment}

For more advanced deployments, you may also build your own Docker image to hold all your bundles and configuration.

Example Dockerfile:

```docker
# Specifies the base image to build on top of.
# This base image includes nodecg-cli, so you don't need to install it separately.
# It also creates a nodecg user with appropriate permissions.
FROM ghcr.io/nodecg/nodecg:latest

# Switches to the nodecg user created by the base image.
USER nodecg

# This is one way to install a bundle and generate a config for it.
# You may need to take a different approach depending on your use case.
# Be sure to replace [bundle-repo] and [bundle-name] with actual values and remove the brackets ([]).
RUN nodecg install [bundle-repo] && nodecg defaultconfig [bundle-name]

# This copies your NodeCG config into the container, which is a tradeoff.
# The benefit is that you don't need to worry about copying the config file around between deployments.
# The drawbacks are that you cannot easily change this config once it is in the container and that anyone with access to the docker image will have access to the secrets in the configuration files.
# If you don't want to put your configuration inside the image, then use the volume mounting approach outlined in the Simple Deployment section above.
# If you use a *.yaml or *.js config file, be sure to edit this command to reflect that.
COPY --chown=nodecg:nodecg ./cfg/nodecg.json /opt/nodecg/cfg/nodecg.json

# The principles outlined above apply to any file that is part of your NodeCG deployment: you can either put it in the container or you can mount it from a volume. The base nodecg/nodecg Docker image already defines volume mount points for the cfg, bundles, logs, db, and assets directories. It is recommended that you mount logs, db, and assets as volumes so that NodeCG can persist data in those folders to the host filesystem, meaning that they will be carried over when you update your Docker image and redeploy. For the cfg and bundles directories, it is up to you whether you want to bake them into your image or if you want to mount them as volumes.

# This is how you'd copy a specific bundle from the build directory into your image:
COPY --chown=nodecg:nodecg ./bundles/example-bundle /opt/nodecg/bundles/example-bundle

# This is how you'd copy all bundles from the build directory into your image:
COPY --chown=nodecg:nodecg ./bundles /opt/nodecg/bundles

# This is how you'd copy all config files fmr the build directory into your image:
# Again, be warned that anyone with access to this image will be able to read the secrets from these files.
COPY --chown=nodecg:nodecg ./cfg /opt/nodecg/cfg

```

Now use Docker to build your image from the Dockerfile you just created:

```bash
# Be sure to replace [your-image-name]  with an actual name and remove the brackets ([]).
# Do not omit the "." at the end of the command.
docker build -t [your-image-name] .
```

And run it with:

```bash
# If on Windows: run this command in Git Bash, not Command Prompt or PowerShell.
docker run \
 -p 9090:9090/tcp \
 -v "/$PWD/logs:/opt/nodecg/logs" \
 -v "/$PWD/db:/opt/nodecg/db" \
 -v "/$PWD/assets:/opt/nodecg/assets" \
 -it [your-image-name]
```

Or create a docker-compose.yml like this:

```yaml
services:
  nodecg:
    image: '[your-image-name]'
    ports:
      - '9090:9090'
    volumes:
      - '[absolute path to logs dir on host filesystem]:/opt/nodecg/logs'
      - '[absolute path to db dir on host filesystem]:/opt/nodecg/db'
      - '[absolute path to assets dir on host filesystem]:/opt/nodecg/assets'
```

To pin NodeCG to a specific version, replace `FROM ghcr.io/nodecg/nodecg:latest` with `FROM ghcr.io/nodecg/nodecg:release:[specific version]`

:::warning
If you want to host your NodeCG instance on the internet (instead of just on a secure LAN), it is highly recommended to encrypt and secure NodeCG.

To encrypt the traffic, you can use a [TLS/SSL termination proxy](https://en.wikipedia.org/wiki/TLS_termination_proxy) like:

- [Traefik](https://github.com/containous/traefik) - Really neat if you host a lot of services in Docker.
- [Docker Flow Proxy](https://proxy.dockerflow.com/) - Similar to Traefik.
- [Caddy](https://caddyserver.com) - Be aware of the licensing of the binaries. It should be ok if you build it yourself e.g. in a Docker image. No guarantee.
- [nginx-proxy w/ letsencrypt](https://github.com/nginx-proxy/nginx-proxy#ssl-support-using-letsencrypt) - Useful if you're already familiar with nginx or have existing site configurations you'd like to port over.
- Others - There are a lot of other solutions. Choose what fits you best.

To secure NodeCG, follow the [Security & Authentication](security) guide.
:::
