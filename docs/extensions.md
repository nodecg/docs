---
description: Extension documentation
id: extensions
title: Extensions
sidebar_label: Extensions
---

Extensions are server-side code that runs on the NodeCG server. They are vital for any NodeCG bundle.

**Extensions are the first things that run in a bundle** so it is the best place to setup replicants and other data that will be used throughout a bundle.

## What to use extensions for

- Setting up replicants
- Handling changes to replicants to keep dashboards as a "dumb terminal"
- Getting data from other websites/services
- Automating your bundle

## Extension entrypoint

NodeCG looks for 2 file locations.

- A single file called `extension.js` in the bundle's root directory.
- A folder called `extension` with an `index.js` in the bundle's root directory.

If both exist NodeCG will throw an error and not run any extensions from that bundle.

:::tip
We recommend the folder method unless your bundle is very basic and doesn't need much functionality.
:::

## Single file

```javascript title="extension.js"
module.exports = function (nodecg) {
    nodecg.Replicant('test-replicant');
}
```

## Using multiple files

To make programming easier we split different functionality into different files. The problem is that NodeCG is only injected into the first file it touches. There are a few methods to deal with this:

### Utility script

```typescript title="nodecg-api-context.ts"
import type NodeCG from 'nodecg/types';

let context: NodeCG.ServerAPI;

export function get(): NodeCG.ServerAPI {
    return context;
}

export function set(ctx: NodeCG.ServerAPI) {
    context = ctx;
}
```

```typescript title="index.ts"
import type NodeCG from 'nodecg/types';
import * as nodecgApiContext from './nodecg-api-context';

let ncgConfig: NodeCG.ServerAPI<ConfigSchema>['bundleConfig'];

module.exports = (nodecg: NodeCG.ServerAPI) => {
    // Store a reference to this nodecg API context in a place where other libs can easily access it.
    // This must be done before any other files are `require`d.
    nodecgApiContext.set(nodecg);
    ncgConfig = nodecg.bundleConfig;
    init().then(() => {
        nodecg.log.info('Initialization successful.');
    }).catch(error => {
        nodecg.log.error('Failed to initialize:', error);
    });
};

async function init() {
    require('./example.ts');
}
```

```typescript title="example.ts"
import * as nodecgApiContext from './nodecg-api-context';

const nodecg = nodecgApiContext.get();

// Initializes a replicant
nodecg.Replicant<string>('test-replicant');
```

### Have each extension export a function to call

```typescript title="example.ts"
import type NodeCG from 'nodecg/types';

export const test = (nodecg: NodeCG) => {
    nodecg.Replicant<string>('test-replicant');
}
```

```typescript title="index.ts"
import type NodeCG from 'nodecg/types';

import { test } from "./example";

export default (nodecg: NodeCG) => {
    test(nodecg);
};
```

## Extension specific API

- [getSocketIOServer](./classes/getSocketIOServer.md)
- [mount](./classes/mount.md)
- [Router](./classes/router.md)
- [Events](./classes/nodecg.md#events-events)
