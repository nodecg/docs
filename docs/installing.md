---
id: installing
title: Installing NodeCG
sidebar_label: Installing
---

## Install {#install}

There are two methods to install NodeCG: cloning from GitHub or using the CLI.

Install [Node.js (version 22)](http://nodejs.org/).

Using the CLI:

```bash
npm install --global nodecg@latest
mkdir nodecg
cd nodecg
nodecg setup
```

Cloning from GitHub:

```bash
# Be sure to clone a specific release's tag name.
git clone --depth 1 --branch v2.1.0 https://github.com/nodecg/nodecg.git
cd nodecg
npm install
npm run build
```

## Start {#start}

Run `node index.js` or `nodecg start` in the root nodecg folder.

Open the dashboard (`http://localhost:9090` by default).

:::note
When running NodeCG in production, [Docker](docker) or [pm2](https://github.com/Unitech/pm2) are recommended.
:::

## Installing bundles {#installing-bundles}

NodeCG's individual graphics packages are called _bundles_. They can be installed either from the command-line (via CLI), or by simply placing the folder into the `./bundles` directory.

The easiest way to install bundles is via the command-line.

### GitHub {#installing-bundles-github}

```bash
nodecg install username/repo-name
```

### BitBucket {#installing-bundles-bitbucket}

```bash
nodecg install bitbucket:username/repo-name
```

### Other Providers {#installing-bundles-other}

Enter the git URL.

```bash
nodecg install https://gitlab.com/username/repo-name.git
```

Bundles are just directories inside the `./bundles` folder.
They can always be added and removed by simply moving them into or out of that folder.
Avoid installing or uninstalling bundles while NodeCG is running.
