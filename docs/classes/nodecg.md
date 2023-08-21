---
id: nodecg
title: NodeCG
sidebar_label: NodeCG
---

`new NodeCG(bundle, socket)`

Creates a new NodeCG API instance. It should never be necessary to use this constructor in a bundle, as NodeCG automatically injects a pre-made API instance.

|  Name  |  Type  |                   Description                      |
| ------ | ------ | -------------------------------------------------- |
| bundle | object | The bundle object to build an API instance from.   |
| socket | object | The Socket.IO socket instance to communicate with. |

## Members {#members}

### _(static)_ declaredReplicants {#declared-replicants}

An object containing references to all Replicants that have been declared in this `window`, sorted by bundle. E.g., `NodeCG.declaredReplicants.myBundle.myRep`

### bundleConfig {#bundle-config}

An object containing the parsed content of cfg/&lt;bundle-name>.json, the contents of which are read once when NodeCG starts up. Used to quickly access per-bundle configuration properties.

### _(readonly)_ bundleGit {#bundle-git}

Provides information about the current git status of this bundle, if found.

#### Properties {#properties}

|    Name   |  Type  |  Attributes   |                  Description                    |
| --------- | ------ | ------------- | ----------------------------------------------- |
| branch    | String |               | What branch this bundle is on.                  |
| hash      | String |               | The full hash of the commit this bundle is on.  |
| shortHash | String |               | The short hash of the commit this bundle is on. |
| date      | Date   | &lt;optional> | The date of the commit this bundle is on.       |
| message   | String | &lt;optional> | The message of the commit this bundle is on.    |

### bundleName {#bundle-name}

The name of the bundle which this NodeCG API instance is for.

### bundleVersion {#bundle-version}

The version (from package.json) of the bundle which this NodeCG API instance is for.

### extensions {#extensions}

:::important Extension Only
This can only be used in code which runs on the server.
:::

Object containing references to all other loaded extensions. To access another bundle's extension, it must be declared as a bundleDependency in your bundle's manifest.

```js title="bundles/my-bundle/package.json"
{
    "name": "my-bundle"
    ...
    "bundleDependencies": {
        "other-bundle": "^1.0.0"
    }
}
```

```js title="bundles/my-bundle/extension.js"
module.exports = function(nodecg) {
    const otherBundle = nodecg.extensions['other-bundle'];
    // Now I can use `otherBundle`!
}
```

### Logger {#logger}

_Object_

Provides easy access to the Logger class. Useful in cases where you want to create your own custom logger.

### Events {#events}

:::important Extension Only
This can only be used in code which runs on the server.
:::

In your extension code, there are several events emitted on the `nodecg` object that are available to listen to:

```ts
module.exports = function(nodecg) {
    nodecg.on('extensionsLoaded', () => {
        // all bundle extensions have finished loading
        // this event is probably not that necessary because serverStarted is emitted shortly after
    })

    nodecg.on('serverStarted', () => {
        // the web and socket.io servers have started and will accept connections
    })

    nodecg.on('serverStopping', () => {
        // the server is shutting down and you can perform cleanup operations here
    })

    nodecg.on('login', (user) => {
        // a user has logged in
        // use Intellisense (autocomplete) to explore the other properties available on the `user` object
        console.log(user.id, user.name);
    });

    nodecg.on('logout', (user) => {
        // a user has logged out
        // use Intellisense (autocomplete) to explore the other properties available on the `user` object
        console.log(user.id, user.name);
    });
}
```
