---
id: sendMessage
title: sendMessage
sidebar_label: sendMessage
---

`sendMessage(messageName, *data, *cb)` _→ \{Promise\}_

Sends a message with optional data within the current bundle. Messages can be sent from client to server, server to client, or client to client.

Messages are namespaced by bundle. To send a message in another bundle's namespace, use [sendMessageToBundle](sendMessageToBundle).

When a sendMessage is used from a client context (i.e., graphic or dashboard panel), it returns a Promise called an "acknowledgement". Your server-side code (i.e., extension) can invoke this acknowledgement with whatever data (or error) it wants. Errors sent to acknowledgements from the server will be properly serialized and intact when received on the client.

Alternatively, if you do not wish to use a Promise, you can provide a standard error-first callback as the last argument to sendMessage.

If your server-side code has multiple listenFor handlers for your message, you must first check if the acknowledgement has already been handled before attempting to call it. You may so do by checking the .handled boolean property of the ack function passed to your listenFor handler.

See [Socket.IO's docs](http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29) for more information on how acknowledgements work under the hood.

### Returns

:::important Browser Only
This can only be used in code which runs in Dashboards and Graphics.
:::

A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement.

### Parameters

| Name | Type     | Attributes    | Description                                                                                     |
| ---- | -------- | ------------- | ----------------------------------------------------------------------------------------------- |
| name | string   |               | The name of the message.                                                                        |
| data | mixed    | &lt;optional> | The data to send.                                                                               |
| cb   | function | &lt;optional> | _Browser only_ The error-first callback to handle the server's acknowledgement message, if any. |

### Example

Sending a normal message:

```js
nodecg.sendMessage('printMessage', 'dope.');
```

Sending a message and replying with an acknowledgement:

```js
// bundles/my-bundle/extension.js
module.exports = function (nodecg) {
    nodecg.listenFor('multiplyByTwo', (value, ack) => {
        if (value === 4) {
            ack(new Error('I don\'t like multiplying the number 4!');
            return;
        }

        // acknowledgements should always be error-first callbacks.
        // If you do not wish to send an error, use a falsey value
        // like "null" instead.
        if (ack && !ack.handled) {
            ack(null, value * 2);
        }
    });
}

// bundles/my-bundle/graphics/script.js
// Both of these examples are functionally identical.

// Promise acknowledgement
nodecg.sendMessage('multiplyByTwo', 2)
    .then(result => {
        console.log(result); // Will eventually print '4'
    }).catch(error => {
        console.error(error);
    });

// Error-first callback acknowledgement
nodecg.sendMessage('multiplyByTwo', 2, (error, result) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(result); // Will eventually print '4'
});
```
