---
id: cli
title: CLI
sidebar_label: CLI
---

## Installation {#installation}

### Global {#installation-global}

```bash
npm install -g nodecg
```

### In project {#installation-local}

```bash
npm install -D nodecg
```

## Commands {#commands}

### `nodecg setup [version]` {#nodecg-setup}

```sh
mkdir nodecg
cd nodecg
nodecg setup
```

#### Options {#nodecg-setup-options}

| Name                       | Description                                                          |
| -------------------------- | -------------------------------------------------------------------- |
| `version`                  | The semver version to install. If none then latest will be installed |
| `--update` `-u`            | Install over an existing copy of NodeCG                              |
| `--skip-dependencies` `-k` | Skip installing dependencies                                         |
  
### `nodecg start` {#nodecg-start}

Start the NodeCG instance in this directory path.

#### Options {#nodecg-start-options}

| Name                          | Description                |
| ----------------------------- | -------------------------- |
| `--disable-source-maps` `-d`  | Disable source map support |

### `nodecg install [repo]` {#nodecg-install}

Install a bundle by cloning a git repo and installing its production dependencies.
If run in a bundle directory with no arguments, installs that bundle's dependencies.

```sh
nodecg install username/repository
```

#### Options {#nodecg-install-options}

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| `repo`       | A GitHub owner/repo pair or https git url |
| `--dev` `-d` | Install the bundle's `devDependencies`    |

### `nodecg uninstall [bundle]` {#nodecg-uninstall}

Uninstalls a bundle.

#### Options {#nodecg-uninstall-options}

| Name           | Description       |
| -------------- | ----------------- |
| `bundle`       | The bundle's name |
| `--force` `-f` | Ignores warnings  |

### `nodecg defaultconfig` {#nodecg-defaultconfig}

If a bundle has a [`configschema.json`](./bundle-configuration#json-schema) present in its root, this command will create a default config file at `nodecg/cfg/<bundleName>.json` with defaults based on that schema.

### `nodecg schema-types [dir]` {#nodecg-schema-types}

Generate d.ts TypeScript typedef files from [Replicant schemas](./replicant-schemas.md) and [configschema.json](./bundle-configuration#json-schema) (if present)

#### Options {#nodecg-schema-options}

| Name                       | Default | Description                                                          |
| -------------------------- | ------- | -------------------------------------------------------------------- |
| `dir`                  | `schemas`         | The directory where the replicant schemas are located   |
| `--out-dir [path]` `-o`            | `src/types/schemas`        | Where to put the generated d.ts files                              |
| `--no-config-schema` |         | Don't generate a typedef from configschema.json                                         |
