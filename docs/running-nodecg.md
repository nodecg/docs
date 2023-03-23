---
id: running-nodecg
title: Running NodeCG
sidebar_label: Running
---

## Usage {#usage}

- Install a bundle to the `bundles` folder.
- Start NodeCG (`node index.js` or `nodecg start` if you have [nodecg-cli](https://www.npmjs.com/package/nodecg-cli) installed).
- Open the dashboard (`http://localhost:9090` by default).
- Open a graphic from the "Graphics" menu.
- You can configure NodeCG by creating and editing [cfg/nodecg.json](/docs/nodecg-configuration).

When running NodeCG in production, [Docker](https://www.docker.com/) or [pm2](https://github.com/Unitech/pm2) are recommended.

### Configuration {#configuration}

`./cfg/nodecg.json` is an optional file that you can create to configure NodeCG.
See the [NodeCG Configuration tutorial](/docs/nodecg-configuration) for more information on configuring NodeCG.
