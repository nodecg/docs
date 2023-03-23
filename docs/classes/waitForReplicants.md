---
id: waitForReplicants
title: waitForReplicants
sidebar_label: waitForReplicants
---

_(static)_ `waitForReplicants(replicants)` _→ \{Promise.&lt;any>\}_

Lets you easily wait for a group of Replicants to finish declaring.

Returns a promise which is resolved once all provided Replicants have emitted a change event, which is indicates that they must have finished declaring.

This method is only useful in client-side code. Server-side code never has to wait for Replicants.

### Parameters {#parameters}

|    Name    |    Type   | Description |
| ---------- | --------- | ----------- |
| replicants | Replicant |             |

### Example {#example}

From a graphic or dashboard panel:

```js
const rep1 = nodecg.Replicant('rep1');
const rep2 = nodecg.Replicant('rep2');

// You can provide as many Replicant arguments as you want,
// this example just uses two Replicants.
NodeCG.waitForReplicants(rep1, rep2).then(() => {
	console.log('rep1 and rep2 are fully declared and ready to use!');
});
```
