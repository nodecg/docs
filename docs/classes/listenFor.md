---
id: listenFor
title: listenFor
sidebar_label: listenFor
---

`listenFor(messageName, *bundleName, handlerFunc)`

Listens for a message, and invokes the provided callback each time the message is received. If any data was sent with the message, it will be passed to the callback.

Messages are namespaced by bundle. To listen to a message in another bundle's namespace, provide it as the second argument.

You may define multiple listenFor handlers for a given message. They will be called in the order they were registered.

### Parameters {#parameters}

| Name        | Type     | Attributes    | Default   | Description                                                  |
| ----------- | -------- | ------------- | --------- | ------------------------------------------------------------ |
| messageName | string   |               |           | The name of the message.                                     |
| bundleName  | string   | &lt;optional> | CURR_BNDL | The bundle namespace to in which to listen for this message. |
| handlerFunc | function |               |           | The callback fired when this message is received.            |
