---
id: installing
title: Installing NodeCG
sidebar_label: Installing
---

## Install

There are two methods to install NodeCG: cloning from GitHub or using the [nodecg-cli](https://github.com/nodecg/nodecg-cli).

Install [Node.js (version 8.3 or greater) & npm (version 2 or greater)](http://nodejs.org/).  

Using [nodecg-cli](https://github.com/nodecg/nodecg-cli):

```bash
npm install --global nodecg-cli
mkdir nodecg
cd nodecg
nodecg setup
```

Cloning from GitHub:

```bash
git clone --branch legacy-1.x https://github.com/nodecg/nodecg.git
cd nodecg
npm install --production
```

:::caution
Ensure to specify a branch when cloning, as the master branch is in an unstable state while v2.0 is being developed.
:::

## Start

Run `node index.js` or `nodecg start` in the root nodecg folder.

Open the dashboard (`http://localhost:9090` by default).

:::note
When running NodeCG in production, [Docker](https://www.docker.com/) or [pm2](https://github.com/Unitech/pm2) are recommended.
:::

## Installing bundles

NodeCG's individual graphics packages are called _bundles_. They can be installed either from the command-line
(via [_nodecg-cli_](https://www.npmjs.com/package/nodecg-cli)), or by simply placing the folder into the `./bundles` directory.

The easiest way to install bundles is via the command-line using [nodecg-cli](https://www.npmjs.com/package/nodecg-cli).
You will need to install [nodecg-cli](https://www.npmjs.com/package/nodecg-cli) before you can use the `nodecg`
terminal commands.

### GitHub

```bash
nodecg install lange/lange-notify
```

### BitBucket

```bash
nodecg install bitbucket:username/repo-name
```

### Other Providers

Enter the git URL.

```bash
nodecg install https://gitlab.com/username/repo-name.git
```

Bundles are just directories inside the `./bundles` folder.
They can always be added and removed by simply moving them into or out of that folder.
Avoid installing or uninstalling bundles while NodeCG is running.
