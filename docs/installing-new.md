---
id: installing-new
title: Installing NodeCG (New, Experimental)
sidebar_label: Installing (New)
---

This guide is for the new experimental way of installing NodeCG.
In this new way, NodeCG is installed as a dependency of your project,
instead of including your project in the NodeCG's bundles directory.

This simplifies the process of creating and managing NodeCG projects
by directly managing NodeCG version as a npm dependency.

You can still use the old way of using NodeCG, but will be deprecated in the future.

## Install {#install}

```bash
npm install nodecg
```

## Start {#start}

Run `npx nodecg start`.

Open the dashboard (`http://localhost:9090` by default).

## Using multiple bundles {#multi-bundle}

You can use multiple bundles in your project by including it in `bundles` directory in your project root.

## Migration from legacy structure {#migration}

If you have an existing NodeCG projects that run inside NodeCG's bundles directory,
you can migrate to the new structure by following these steps:

1. If you run multiple bundles, choose one of them to be the main project.
1. Move the main bundle as a independent project root.
1. Install NodeCG as a dependency of the main project by running `npm install nodecg`.
1. Move the other bundles to the `bundles` directory in the main project root.
1. Move the following directories from the previous NodeCG root:
    - `cfg`
    - `db`
    - `logs`
    - `assets`
1. Start NodeCG by running `npx nodecg start` in the main project root.
