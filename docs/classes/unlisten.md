---
id: unlisten
title: unlisten
sidebar_label: unlisten
---

`unlisten(messageName, *bundleName, handlerFunc)` _→ \{boolean\}_

Removes a listener for a message.

Messages are namespaced by bundle. To remove a listener to a message in another bundle's namespace, provide it as the second argument.

### Parameters

| Name        | Type     | Attributes    | Default   | Description                                                                                          |
| ----------- | -------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| messageName | string   |               |           | The name of the message.                                                                             |
| bundleName  | string   | &lt;optional> | CURR_BNDL | The bundle namespace to in which to listen for this message                                          |
| handlerFunc | function |               |           | A reference to a handler function added as a listener to this message via [listenFor](listenFor.md). |

### Example

```js
nodecg.unlisten('printMessage', someFunctionName);
```

Removing a listener from a message in another bundle's namespace:

```js
nodecg.unlisten('printMessage', 'another-bundle', someFunctionName);
```
