---
id: custom-routes
title: Custom Routes
sidebar_label: Custom Routes
---

NodeCG uses [express](http://expressjs.com/) for its routing, and exposes a helper for creating routes easily:

```js title="bundles/my-bundle/extension.js"
module.exports = function(nodecg) {
    const router = nodecg.Router();

    router.get('/customroute', (req, res) => {
        res.send('OK!');
    });

    nodecg.mount('/my-bundle', router); // The route '/my-bundle/customroute` is now available
};
```

NodeCG has a Login Security Middleware that is by default not enabled. To enable it, you need to add it.
This won't work unless [Security & Authentication](https://www.nodecg.dev/docs/security) is enabled.

```js title="bundles/my-bundle/extension.js"
module.exports = function(nodecg) {
    const router = nodecg.Router();

    router.use(nodecg.util.authCheck); // All routes using "router" will need a `?key=` in it's URL to be avaliable 

    router.get('/customroute', (req, res) => {
        res.send('OK!');
    });

    nodecg.mount('/my-bundle', router); // The route '/my-bundle/customroute` is now available
};
```
