---
id: migrating-1.x-to-2.x
title: Migrating from 1.x to 2.x
sidebar_label: 1.x → 2.x
---

:::warning
If you use `nodecg-cli`, be sure to update to the latest version before upgrading to NodeCG v2.x (`npm i -g nodecg-cli@latest`).
:::

## Breaking Changes {#breaking-changes}

- [All authentication keys will be revoked and replaced with new ones](#all-authentication-keys-will-be-revoked-and-replaced-with-new-ones)
- [NodeCG no longer commits build outputs to the repository](#nodecg-no-longer-commits-build-outputs-to-the-repository)
- [Rewrote the entire core in TypeScript](#rewrote-the-entire-core-in-typescript)
- [Removed undocumented `rawManifest` property from bundle objects](#removed-undocumented-rawmanifest-property-from-bundle-objects)
- [Updated the Sentry SDK and removed `publicDsn` from the config](#updated-the-sentry-sdk-and-removed-publicdsn-from-the-config)
- [Rewrote the login system, advanced integrations with it may no longer work](#rewrote-the-login-system-advanced-integrations-with-it-may-no-longer-work)
- [Socket.IO messages (i.e. sendMessage) now use the `broadcast` flag](#socketio-messages-ie-sendmessage-now-use-the-broadcast-flag)
- [To enable "trace" logging, set the log level to "verbose"](#to-enable-trace-logging-set-the-log-level-to-verbose)
- [Support for JSON5 in config files has been removed](#support-for-json5-in-config-files-has-been-removed)
- [Supported Node.js versions are now 16 and 18](#supported-nodejs-versions-are-now-16-and-18)
- [Minimum supported TypeScript version is now 4.7](#minimum-supported-typescript-version-is-now-47)
- [All config and replicant schemas may now be authored in JSON Schema Draft 04, Draft 07, Draft 2019-09, or Draft 2020-12](#all-config-and-replicant-schemas-may-now-be-authored-in-json-schema-draft-04-draft-07-draft-2019-09-or-draft-2020-12)
- [Fullbleed workspace labels now use the panel title instead of the panel name](#fullbleed-workspace-labels-now-use-the-panel-title-instead-of-the-panel-name)
- [Fixed Replicant assignment sometimes being applied out-of-order](#fixed-replicant-assignment-sometimes-being-applied-out-of-order)
- [Removed support for `pkg`](#removed-support-for-pkg)
- [Replicants now properly parse falsey values](#replicants-now-properly-parse-falsey-values)
- [NodeCG will now only exit with code 0 if there isn't already an exit code](#nodecg-will-now-only-exit-with-code-0-if-there-isnt-already-an-exit-code)
- [Replicant logging is now configured separately for Console and File outputs](#replicant-logging-is-now-configured-separately-for-console-and-file-outputs)

## Features {#features}
- All configs may now be written in JSON, CommonJS, or YAML.
- [Worker clients are now supported.](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [All config and replicant schemas may now be authored in JSON Schema Draft 04, Draft 07, Draft 2019-09, or Draft 2020-12](#all-config-and-replicant-schemas-may-now-be-authored-in-json-schema-draft-04-draft-07-draft-2019-09-or-draft-2020-12)


### All authentication keys will be revoked and replaced with new ones
Since the entire login system has been rewritten, none of the prior authenticaon keys are valid. As such, new ones will be generated for all users, and any `?key=xxx` URLs in use will need to be updated.

### NodeCG no longer commits build outputs to the repository {#nodecg-no-longer-commits-build-outputs-to-the-repository}

To help make the repository cleaner, we no longer commit a built version of NodeCG to it. However, pre-built distributions are available from [npm](https://www.npmjs.com/package/nodecg) and [GitHub releases](https://github.com/nodecg/nodecg/releases). These pre-builds can be easily installed via [nodecg-cli](https://github.com/nodecg/nodecg-cli).

### Rewrote the entire core in TypeScript {#rewrote-the-entire-core-in-typescript}

NodeCG has been completely rewritten in TypeScript! We've kept the breaking changes to a minimum and most bundles should need very few code changes, but given the sheer scope of this change it is possible that we haven't accounted for every single breaking change. If you run across a breaking change not mentioned in this document, please [open an issue](https://github.com/nodecg/docs/issues). Please note that this does *not* mean that all bundles must now be written in TypeScript. Plain JavaScript is and always will be supported.

### Removed undocumented `rawManifest` property from bundle objects  {#removed-undocumented-rawmanifest-property-from-bundle-objects}

Previously, NodeCG had an undocumented `rawManifest` property exposed on bundle objects. This property contained an unmodified copy of that bundle's `package.json`, and has been removed.

### Updated the Sentry SDK and removed `publicDsn` from the config {#updated-the-sentry-sdk-and-removed-publicdsn-from-the-config}

For [Sentry](https://sentry.io/) users, the SDK has been updated and `publicDsn` is no longer used. Now, there's just one `dsn`.

### Rewrote the login system, advanced integrations with it may no longer work {#rewrote-the-login-system-advanced-integrations-with-it-may-no-longer-work}

The login system has been rewritten to be backed by a real database with users and roles, to pave the way for future improvements to security and account handling, with per-user permissions. However, at this time, it still functions mostly the same way it did in 1.x. That said, given the massive changes to this system, any bundles which built additional functionality on top of the login system may break. If your use case is no longer supported, please [open an issue](https://github.com/nodecg/nodecg/issues).

If your bundle relied on the `accessToken` and `refreshToken` properties available from the old login lib, use these alternatives instead:

```ts
import type NodeCG from '@nodecg/types';

export = (nodecg: NodeCG.ServerAPI) => {
	nodecg.on('login', (user) => {
		console.log(user.id, user.name);
	});
	
	nodecg.on('logout', (user) => {
		console.log(user.id, user.name);
	});

	nodecg.mount((req, _res, _next) => {
		if (req.user) {
			const ident = req.user.identities[0];
			switch (ident.provider_type) {
				case 'discord':
				case 'twitch':
					console.log(ident.provider_access_token, ident.provider_refresh_token);
			}
		}
	});
};
```

### Socket.IO messages (i.e. sendMessage) now use the `broadcast` flag {#socketio-messages-ie-sendmessage-now-use-the-broadcast-flag}

Previously, NodeCG naively did not use Socket.IO's `broadcast` flag to emit messages to all clients. This caused some issues such as messages sometimes being received by the context that sent them. This bug should be fixed, but it is considered a breaking change because it is possible that some bundles relied on this bug.

### To enable "trace" logging, set the log level to "verbose" {#to-enable-trace-logging-set-the-log-level-to-verbose}

The logging system has changed slightly, and to view `log.trace` output, you must now set `logging.console.level` and/or `logging.file.level` to `verbose` in your NodeCG config.

### Support for JSON5 in config files has been removed {#support-for-json5-in-config-files-has-been-removed}

The config loader system has been rewritten and the new library unfortunately no longer supports JSON5. However, it does support YAML and CommonJS, both of which support comments. This means that instead of needing to write `cfg/nodecg.json`, you could instead write `cfg/nodecg.yaml` or `cfg/nodecg.js` (with a `module.exports = {}` statement). The same goes for bundle configs.

### Supported Node.js versions are now 16 and 18 {#supported-nodejs-versions-are-now-16-and-18}

To keep up with the rapid pace of Node.js development, the supported Node.js versions are now 16 and 18, both of which are LTS.

### Minimum supported TypeScript version is now 4.7 {#minimum-supported-typescript-version-is-now-47}

If your bundle uses TypeScript, it needs to use version 4.7 or greater to have compatibility with NodeCG v2.x.

### All config and replicant schemas may now be authored in JSON Schema Draft 04, Draft 07, Draft 2019-09, or Draft 2020-12 {#all-config-and-replicant-schemas-may-now-be-authored-in-json-schema-draft-04-draft-07-draft-2019-09-or-draft-2020-12}

Previously, only Draft 04 was supported.

### Fullbleed workspace labels now use the panel title instead of the panel name {#fullbleed-workspace-labels-now-use-the-panel-title-instead-of-the-panel-name}

Previously, there was a bug where workspace labels used the wrong data for their user-facing labels.

### Fixed Replicant assignment sometimes being applied out-of-order {#fixed-replicant-assignment-sometimes-being-applied-out-of-order}

There was an obscure bug that could cause assignment operations on Replicants to be applied _before_ preceeding change events. This is no longer the case. It is technically a breaking change, but is is unlikely that many bundles relied on this broken behavior.

### Removed support for `pkg` {#removed-support-for-pkg}

[`pkg`](https://github.com/vercel/pkg) is a tool for packaging Node.js projects into an executable that NodeCG used to have undocumented support for. This support has been removed. Instead, follow the instructions on the [Portable NodeCG](../portable-nodecg) page.

### Replicants now properly parse falsey values {#replicants-now-properly-parse-falsey-values}

If you have a Replicant that tries to save values like `0` or `undefined`, it will now properly do so.

### NodeCG will now only exit with code 0 if there isn't already an exit code {#nodecg-will-now-only-exit-with-code-0-if-there-isnt-already-an-exit-code}

NodeCG used to clobber previously-set exit codes at times. This is no longer the case.

### Replicant logging is now configured separately for Console and File outputs {#replicant-logging-is-now-configured-separately-for-console-and-file-outputs}

Previously, Replicant logging was a direct child of the `logging` property, and it was one setting that controlled logging Replicant debug into to both Console *and* File outputs. Now, these two things can be configured separately as `logging.console.replicants` and/or `logging.file.replicants`.
