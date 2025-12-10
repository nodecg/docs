---
id: manifest
title: package.json Manifest
sidebar_label: Manifest
---

Every bundle must have a [`package.json`](https://docs.npmjs.com/files/package.json). In addition to the required fields
like `name` and `version` outlined in that link, NodeCG bundles must also have a `nodecg` object in their `package.json`
with some additional properties that tell NodeCG about the bundle and how to load it.

The `nodecg` object in a bundle's `package.json` must follow this structure:

```json
{
    "name": "example-bundle",
    ...
    "nodecg": {
        "compatibleRange": "~0.7.0",
        "bundleDependencies": {
            "other-bundle": "^1.2.1"
        },
        "dashboardPanels": [
            {
                "name": "sample-panel",
                "title": "Sample Panel",
                "width": 2,
                "headerColor": "#2d4e8a",
                "file": "sample-panel.html"
            },
            {
                "name": "sample-dialog",
                "title": "Sample Dialog",
                "width": 2,
                "dialog": true,
                "dialogButtons": [
                    {
                        "name": "save",
                        "type": "confirm"
                    },
                    {
                        "name": "cancel",
                        "type": "dismiss"
                    }
                ],
                "file": "sample-dialog.html"
            },
            {
                "name": "custom-workspace",
                "title": "Custom Workspace Panel",
                "width": 4,
                "file": "custom-workspace.html",
                "workspace": "My Workspace"
            },
            {
                "name": "fullbleed-panel",
                "title": "Fullbleed Panel",
                "fullbleed": true
            }
        ],
        "graphics": [
            {
                "file": "index.html",
                "width": 1280,
                "height": 720,
                "singleInstance": false
            }
        ]
    }
    ...
}
```

## nodecg.compatibleRange {#compatible-range}

A [semver](http://semver.org/) range that defines which version(s) of NodeCG this bundle is compatible with.
This bundle will not load in NodeCG versions outside the specified range.

This field is required.

## nodecg.bundleDependencies {#bundle-dependencies}

Formatted identically to npm's `dependencies` field, but behaves differently.
Bundles declared as `bundleDependencies` are not automatically installed.
This field's only job is to ensure that dependant bundles are loaded first.
In the above example, `other-bundle` would be loaded before `example-bundle`, and if `other-bundle` fails to load
then so will `example-bundle`.

This field is only required if your bundle makes use of the [`nodecg.extensions`](/docs/classes/nodecg#extensions) API.

## nodecg.dashboardPanels {#dashboard-panels}

An array of objects, each object describing an individual dashboard panel or dialog.
Every panel and dialog must have a `name`, `title`, and `file`. `file` is relative to the bundle's `dashboard` folder.
`width` is optional, and defaults to `2`. The width scale is arbitrary and may change,
so you'll want to play around with this number to get the desired width.

Panels also have an optional `headerColor` property that accepts a hex color string.

You can split your panels up into multiple `workspace`s. By default all panels are added to the same workspace.
If you'd like to specify a different workspace, simply provide a workspace name as the `workspace` property.
Workspaces work across bundles. If `my-bundle` and `your-bundle` both declare a panel in the `Shared Workspace`
workspace, then both of our panels will show up together.

If you have a really big panel that simply needs to be in its own workspace and have maximized screenspace, give it
the `fullbleed` property. Fullbleed panels are put into their own workspace and have no margins around them. This is
good for when you have a large, complex UI that you need more fine-grained control over.

<video style={{width: '100%'}} controls preload><source src='/vid/Fullbleed.mp4' type='video/mp4' /></video>

To mark a panel as a dialog, it must have the `dialog` property set to `true`. Dialogs don't immediately display on the
dashboard, and must be manually invoked. See [Making Dashboard Dialogs](/docs/making-dialogs) for more info.
([Screenshot of an open dialog](http://i.imgur.com/xA4mDvF.png))

Dialogs have special buttons for confirmation and dismissal, which are defined in the `dialogButtons` property.
There are only two types of dialogButton: `confirm` and `dismiss`. When one of these buttons is pressed, a
`dialog-confirmed` or `dialog-dismissed` event is emitted on the dialog's `document` to allow for easy handling with
less boilerplate.

This field is only required if your bundle has dashboard panels.

### Config {#dashboard-panel-config}

| Name           | Type    | Attributes | Default | Description                                                                                                                                             |
| -------------- | ------- | ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | string  |            |         | Internal name of the dashboard panel.                                                                                                                   |
| title          | string  |            |         | Title of the dashboard panel as it appears in the NodeCG workspace.                                                                                     |
| file           | string  |            |         | The location of the dashboard panel relative to "/dashboard".                                                                                           |
| width          | number  | optional   | 2       | The width of the panel on the dashboard. Valid values are 1-8.                                                                                          |
| headerColor    | string  | optional   |         | A hexadecimal color value that will change the color of the panel's header.                                                                             |
| workspace      | string  | optional   |         | The name of the workspace the panel should be placed in. (Workspaces are shared between bundles).                                                       |
| workspaceOrder | number  | optional   |         | A number which sets the order of the workspace as it appears in the tab list.                                                                           |
| fullbleed      | boolean | optional   | false   | Whether or not the panel should be fullbleed in its own workspace.                                                                                      |
| dialog         | boolean | optional   | false   | Whether or not the panel is a dialog.                                                                                                                   |
| dialogButtons  | array   | optional   |         | An array of buttons to show on the dialog. Each button is an object with a `name` and `type` property. The `type` can be either `confirm` or `dismiss`. |

### Example {#dashboard-panels-example}

```json
"dashboardPanels": [
    {
        "name": "sample-panel",
        "title": "Sample Panel",
        "file": "sample-panel.html",
        "width": 2,
        "headerColor": "#2d4e8a",
        "workspace": "My Workspace",
        "workspaceOrder": 1
    },
]
```

## nodecg.graphics {#graphics}

An array of objects, each object describing a graphic.

This field is only required if your bundle has graphics.

### Config {#graphics-config}

| Name           | Type    | Attributes | Default | Description                                                                        |
| -------------- | ------- | ---------- | ------- | ---------------------------------------------------------------------------------- |
| file           | string  |            |         | The location of the graphic relative to "/graphics".                               |
| width          | number  |            |         | The designed width of the graphic.                                                 |
| height         | number  |            |         | The designed height of the graphic.                                                |
| name           | string  | optional   |         | A custom display name for the graphic.                                             |
| description    | string  | optional   |         | Text that displays below the graphic in the dashboard.                             |
| group          | string  | optional   |         | What sub-group the graphic should be in. (Graphics are already grouped by bundle). |
| order          | number  | optional   |         | A number which determines where the graphic should be in the list.                 |
| singleInstance | boolean | optional   | false   | Whether or not the graphic can be opened in multiple places at once.               |

### Example {#graphics-example}

```json
"graphics": [
    {
        "file": "main.html",
        "width": 1920,
        "height": 1080,
        "name": "Main Graphic",
        "description": "This is the main graphic.",
        "group": "Overlays",
        "order": 1,
    }
]
```

![Graphics page example](/img/graphics-page.png)
