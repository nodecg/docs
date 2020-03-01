---
id: sendMessageToBundle
title: sendMessageToBundle
sidebar_label: sendMessageToBundle
---

`sendMessageToBundle(messageName, bundleName, *data, *cb)` _→ \{Promise|undefined\}_

Sends a message to a specific bundle. Also available as a static method. See [sendMessage](sendMessage) for usage details.

### Returns

:::important Browser Only
This can only be used in code which runs in Dashboards and Graphics.
:::

A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement. But, if a callback was provided, this return value will be undefined, and there will be no Promise.

### Parameters

| Name       | Type     | Attributes    | Description                                                                                                                                                               |
| ---------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | string   |               | The name of the message.                                                                                                                                                  |
| bundleName | string   |               | The name of the target bundle.                                                                                                                                            |
| data       | mixed    | &lt;optional> | The data to send.                                                                                                                                                         |
| cb         | function | &lt;optional> | _Browser only_ The error-first callback to handle the server's [acknowledgement](http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29) message, if any. |
