---
id: log
title: log()
sidebar_label: log()
---

`log()`

An instance of NodeCG's Logger, with the following methods. The logging level is set in cfg/nodecg.json, NodeCG's global config file.

### Example {#example}

```js
nodecg.log.trace('trace level logging');
nodecg.log.debug('debug level logging');
nodecg.log.info('info level logging');
nodecg.log.warn('warn level logging');
nodecg.log.error('error level logging');
```
