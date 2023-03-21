---
id: socket
title: socket
sidebar_label: socket
---

:::important Browser Only
This can only be used in code which runs in Dashboards and Graphics.
:::

`socket`

Provides a reference to the Socket.IO client socket instances.

See the [Socket.IO docs](https://socket.io/docs/v4/client-api) for full usage details.

### Example

Listening for socket disconnect events:

```js
nodecg.socket.on("disconnect", () => {
  console.log("Socket disconnected!");
});
```
