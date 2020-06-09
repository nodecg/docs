---
id: replicant
title: Replicant
sidebar_label: Replicant
---

`Replicant(name, *namespace, *opts)`

Replicants are objcts which monitor changes to a variable's value. The changes are replicated across all extensions, graphics, and dashboard panels. When a Replicant changes in one of those places it is quickly updated in the rest, and a change event is emitted allowing bundles to react to the changes in the data.

If a Replicant with a given name in a given bundle namespace has already been declared, the Replicant will automatically be assigned the existing value.

Replicants must be declared in each context that wishes to use them. For instance, declaring a replicant in an extension does not automatically make it available in a graphic. The graphic must also declare it.

By default Replicants will be saved to disk, meaning they will automatically be restored when NodeCG is restarted, such as after an unexpected crash. If you need to opt-out of this behaviour simply set `persistent: false` in the `opts` argument.

As of NodeCG 0.8.4, Replicants can also be automatically validated against a JSON Schema that you provide. See [Replicant Validation](../replicant-schemas.md) for more information.

### Parameters

| Name      | Type   | Attributes    | Description                                                                                       |
| --------- | ------ | ------------- | ------------------------------------------------------------------------------------------------- |
| name      | string |               | The name of the replicant.                                                                        |
| namespace | string | &lt;optional> | The namespace to in which to look for this replicant. Defaults to the name of the current bundle. |
| opts      | object | &lt;optional> | The options for this replicant.                                                                   |

#### Opts

| Name                | Type    | Attributes    | Default                      | Description                                                                                                                                                                                                                                        |
| ------------------- | ------- | ------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultValue        | any     | &lt;optional> |                              | The default value to instantiate this Replicant with. The default value is only applied if this Replicant has not previously been declared and if it has no persisted value.                                                                       |
| persistent          | boolean | &lt;optional> | true                         | Whether to persist the Replicant's value to disk on every change. Persisted values are re-loaded on startup.                                                                                                                                       |
| persistenceInterval | number  | &lt;optional> | 100			       | Interval between each persistence, in milliseconds.                                                                                                                                                                                                |
| schemaPath          | string  | &lt;optional> |                              | The filepath at which to look for a JSON Schema for this Replicant. Defaults to `nodecg/bundles/${bundleName}/schemas/${replicantName}.json`. Please note that this default path will be URIEncoded to ensure that it results in a valid filename. |

### Example

```js
const myRep = nodecg.Replicant('myRep', { defaultValue: 123 });

myRep.on('change', (newValue, oldValue) => {
	console.log(`myRep changed from ${oldValue} to ${newValue}`);
});

myRep.value = 'Hello!';
myRep.value = { objects: 'work too!' };
myRep.value = { objects: { can: { be: 'nested!' } } };
myRep.value = ['Even', 'arrays', 'work!'];
```
