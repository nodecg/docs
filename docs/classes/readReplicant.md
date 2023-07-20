---
id: readReplicant
title: readReplicant
sidebar_label: readReplicant
---

`readReplicant(name, *bundle, cb)`

Reads the value of a replicant once, and doesn't create a subscription to it. Also available as a static method.

### Parameters {#parameters}

| Name   | Type     | Attributes    | Default   | Description                                                                              |
| ------ | -------- | ------------- | --------- | ---------------------------------------------------------------------------------------- |
| name   | string   |               |           | The name of the replicant.                                                               |
| bundle | string   | &lt;optional> | CURR_BNDL | The bundle namespace to in which to look for this replicant.                             |
| cb     | function |               |           | _Browser only_ The callback that handles the server's response which contains the value. |

### Example {#example}

From an extension:

```js
// Extensions have immediate access to the database of Replicants.
// For this reason, they can use readReplicant synchronously, without a callback.
module.exports = function(nodecg) {
    const myVal = nodecg.readReplicant('myVar', 'some-bundle');
};
```

From a graphic or dashboard panel:

```js
// Graphics and dashboard panels must query the server to retrieve the value,
// and therefore must provide a callback.
nodecg.readReplicant('myRep', 'some-bundle', value => {
    // I can use 'value' now!
    console.log('myRep has the value ' + value + '!');
});
```
