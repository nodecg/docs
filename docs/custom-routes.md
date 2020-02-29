---
id: custom-routes
title: Custom Routes
sidebar_label: Custom Routes
---

NodeCG uses [express](http://expressjs.com/) for its routing, and exposes a helper for creating routes easily:

```javascript
// bundles/my-bundle/extension.js

module.exports = function (nodecg) {
    const router = nodecg.Router();

    router.get('/customroute', (req, res) => {
        res.send('OK!');
    });

    nodecg.mount('/my-bundle', router); // The route '/my-bundle/customroute` is now available
};
```
