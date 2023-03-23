---
id: playSound
title: playSound
sidebar_label: playSound
---

:::important Browser Only
This can only be used in code which runs in Dashboards and Graphics.
:::

`playSound(cueName, *opts)` _→ \{Object|undefined\} (SoundJS AbstractAudioInstance)_

Plays the sound cue of the provided `cueName` in the current bundle. Does nothing if the cue doesn't exist or if the cue has no assigned file to play.

### Parameters {#parameters}

| Name    | Type   | Attributes    | Description |
| ------- | ------ | ------------- | ----------- |
| cueName | String |               |             |
| opts    | Object | &lt;optional> |             |

#### Opts {#opts}

| Name         | Type    | Attributes    | Default | Description                                                                                                         |
| ------------ | ------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| updateVolume | boolean | &lt;optional> | true    | Whether or not to let NodeCG automatically update this instance's volume when the user changes it on the dashboard. |
