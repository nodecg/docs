---
id: getDialogDocument
title: getDialogDocument
sidebar_label: getDialogDocument
---

:::important Browser Only
This can only be used in code which runs in Dashboards and Graphics.
:::

`getDialogDocument(name, *bundle)` → _\{object\}_

Returns the specified dialog's iframe document.

### Parameters {#parameters}

| Name   | Type   | Attributes    | Default        | Description                                 |
| ------ | ------ | ------------- | -------------- | ------------------------------------------- |
| name   | string |               |                | The desired dialog's name.                  |
| bundle | string | &lt;optional> | Current bundle | The bundle from which to select the dialog. |
