---
id: migrating-0.9-to-1.0
title: Migrating from 0.9 to 1.0
sidebar_label: 0.9 → 1.0
---

## Breaking Changes {#breaking-changes}

- [Breaking Changes {#breaking-changes}](#breaking-changes-breaking-changes)
  - [Undocumented `[dialog-confirm]` and `[dialog-dismiss]` attribute click handlers have been removed {#undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed}](#undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed-undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed)
  - [Undocumented (and broken) `panelClick` event has been removed {#undocumented-and-broken-panelclick-event-has-been-removed}](#undocumented-and-broken-panelclick-event-has-been-removed-undocumented-and-broken-panelclick-event-has-been-removed)
  - [Undocumented customCues system has been removed {#undocumented-customcues-system-has-been-removed}](#undocumented-customcues-system-has-been-removed-undocumented-customcues-system-has-been-removed)
  - [Multiple listenFor handlers for a given message {#multiple-listenfor-handlers-for-a-given-message}](#multiple-listenfor-handlers-for-a-given-message-multiple-listenfor-handlers-for-a-given-message)
  - [sendMessage can now trigger listenFor handlers in the same context {#sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context}](#sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context-sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context)
  - [Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API {#twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api}](#twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api-twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api)

### Undocumented `[dialog-confirm]` and `[dialog-dismiss]` attribute click handlers have been removed {#undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed}

Previously, NodeCG had an undocumented feature where _any_ element in a Dialog with a `[dialog-confirm]` or `[dialog-dismiss]` attribute would close the panel (with an appropriate `confirmed` or `dismissed` event) when clicked.

This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code.

### Undocumented (and broken) `panelClick` event has been removed {#undocumented-and-broken-panelclick-event-has-been-removed}

Previously, NodeCG had an undocumented feature where any click event on any panel (or dialog) would emit a `panelClick` event on that panel's `document`.

This undocumented feature has been removed, and never really worked properly to begin with. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code.

### Undocumented customCues system has been removed {#undocumented-customcues-system-has-been-removed}

Previously, NodeCG had an undocumented and extremely complex feature for defining and editing Sound Cues during runtime.

This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code.

### Multiple listenFor handlers for a given message {#multiple-listenfor-handlers-for-a-given-message}

Previously, NodeCG only allowed your bundle to specify one `listenFor` handler, per message, per context.

Now, NodeCG lets you define as many `listenFor` handlers as you want, for any message, in any location.

However, server-side `listenFor` handlers must be careful to not call an `acknowledgement` more than once:

```js
// nodecg/bundles/your-bundle
module.exports = function(nodecg) {
    nodecg.listenFor('example', (data, ack) => {
        if (ack && !ack.handled) {
            ack('foo');
        }
    });
};
```

```html
<!-- nodecg/bundles/your-bundle/graphics/example.html -->
<script>
    nodecg.sendMessage('example', 'hello', (error, response) => {
        console.log(response); // => Will log "foo".
    });
</script>
```

Calling an `acknowledgement` more than once will throw an error.

In short: **most bundles won't need to change any of their code** to be compatible with this change, but you should give everything a once-over to make sure things aren't behaving unexpectedly due to this new behavior.

### sendMessage can now trigger listenFor handlers in the same context {#sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context}

Previously, NodeCG messages were inter-context only. That meant that they were _only_ sent out over the network, and were not sent to other listeners in the same process context (extension, graphic, panel, etc).

Now, NodeCG sends messages to every listener, regardless of location. This means that code like the following will now work as expected:

```js
// nodecg/bundles/your-bundle/extension.js
module.exports = function(nodecg) {
    nodecg.sendMessage('hello', 'Hi there!');
};
```

```js
// nodecg/bundles/my-bundle/extension.js
module.exports = function(nodecg) {
    nodecg.listenFor('hello', 'your-bundle', data => {
        console.log(data); // => Will print "Hi there!"
    });
};
```

A side-effect of this change is that it is no longer guaranteed that a server-side `listenFor` handler will receive an `acknowledgement` callback as its second argument. You should always check for the presence of an `acknowledgement` before attempting to call it:

```js
// nodecg/bundles/your-bundle
module.exports = function(nodecg) {
    nodecg.listenFor('example', (data, ack) => {
        if (ack && !ack.handled) {
            ack('foo');
        }
    });
};
```

### Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API {#twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api}

Previously, NodeCG used the deprecated "v5" Twitch API.

Now, NodeCG uses the "New Twitch API". The only tangible result of this change for NodeCG is that the format of the `login.twitch.scope` config parameter has changed. Please see [https://dev.twitch.tv/docs/authentication/#scopes](https://dev.twitch.tv/docs/authentication/#scopes) for documentation on this new format.
