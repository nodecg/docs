---
id: router
title: Router
sidebar_label: Router
---

:::important Extension Only
This can only be used in code which runs on the server.
:::

`Router`

Creates a new express router.

See the [express docs](http://expressjs.com/en/api.html#express.router) for full usage details.

### Example {#example}

Defining a simple GET route:

```js
module.exports = function(nodecg) {
    const app = nodecg.Router();
    app.get('/my-bundle/example', (req, res) => {
        res.send('custom route confirmed');
    });
    nodecg.mount(app);
}
```
