---
id: migrating-1.x-to-2.x
title: Migrating from 1.x to 2.x
sidebar_label: 1.x → 2.x
---

:::warning
If you use `nodecg-cli`, be sure to update to the latest version before upgrading to NodeCG v2.x.
:::

## Breaking Changes

- [Rewrote the entire core in TypeScript](#rewrote-the-entire-core-in-typescript)
- [Removed undocumented `rawManifest` property from bundle objects](#removed-undocumented-rawmanifest-property-from-bundle-objects)
- [Updated the Sentry SDK and removed publicDsn from the config](#updated-the-sentry-sdk-and-removed-publicdsn-from-the-config)
- [Rewrote the login system, advanced integrations with it may no longer work](#rewrote-the-login-system-advanced-integrations-with-it-may-no-longer-work)
- [Socket.IO messages (i.e. sendMessage) now use the `broadcast` flag](#socketio-messages-ie-sendmessage-now-use-the-broadcast-flag)
- [To enable "trace" logging, set the log level to "verbose"](#to-enable-trace-logging-set-the-log-level-to-verbose)
- [Support for JSON5 in config files has been removed](#support-for-json5-in-config-files-has-been-removed)
- [Minimum supported Node.js version is now 16](#minimum-supported-nodejs-version-is-now-16)
- [Minimum supported TypeScript version is now 4.7](#minimum-supported-typescript-version-is-now-47)
- [NodeCG core now uses `yarn` instead of `npm`](#nodecg-core-now-uses-yarn-instead-of-npm)

## Features
- All configs may now be written in JSON, CommonJS, or YAML.

### Rewrote the entire core in TypeScript

NodeCG has been completely rewritten in TypeScript! We've kept the breaking changes to a minimum and most bundles should need very few code changes, but given the sheer scope of this change it is possible that we haven't accounted for every single breaking change. If you run across a breaking change not mentioned in this document, please [open an issue](https://github.com/nodecg/docs/issues).

### Removed undocumented `rawManifest` property from bundle objects

Previously, NodeCG had an undocumented `rawManifest` property exposed on bundle objects. This property contained an unmodified copy of that bundle's `package.json`, and has been removed.

### Updated the Sentry SDK and removed `publicDsn` from the config

For [Sentry](https://sentry.io/) users, the SDK has been updated and `publicDsn` is no longer used. Now, there's just one `dsn`.

### Rewrote the login system, advanced integrations with it may no longer work

The login system has been rewritten to be backed by a real database with users and roles, to pave the way for future improvements to security and account handling, with per-user permissions. However, at this time, it still functions mostly the same way it did in 1.x. That said, given the massive changes to this system, any bundles which built additional functionality on top of the login system may break. If your use case is no longer supported, please [open an issue](https://github.com/nodecg/nodecg/issues).

### Socket.IO messages (i.e. sendMessage) now use the `broadcast` flag

Previously, NodeCG naively did not use Socket.IO's `broadcast` flag to emit messages to all clients. This caused some issues such as messages sometimes being received by the context that sent them. This bug should be fixed, but it is considered a breaking change because it is possible that some bundles relied on this bug.

### To enable "trace" logging, set the log level to "verbose"

The logging system has changed slightly, and to view `log.trace` output, you must now set `logging.console.level` and/or `logging.file.level` to `verbose` in your NodeCG config.

### Support for JSON5 in config files has been removed

The config loader system has been rewritten and the new library unfortunately no longer supports JSON5. However, it does support YAML and CommonJS, both of which support comments. This means that instead of needing to write `cfg/nodecg.json`, you could instead write `cfg/nodecg.yaml` or `cfg/nodecg.js` (with a `module.exports = {}` statement). The same goes for bundle configs.

### Minimum supported Node.js version is now 16

To keep up with the rapid pace of Node.js development, the minimum supported Node.js version is now 16. We are working on supporting Node.js 18, but at this time it causes crashes in NodeCG.

### Minimum supported TypeScript version is now 4.7

If your bundle uses TypeScript, it needs to use version 4.7 or greater to have compatibility with NodeCG v2.x.

### NodeCG core now uses `yarn` instead of `npm`

Due to issues with certain core dependencies when using `npm`, NodeCG core now uses [`yarn` (version 1.x)](https://classic.yarnpkg.com/en/docs/install) to install dependencies. 
