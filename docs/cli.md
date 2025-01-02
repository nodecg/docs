---
id: cli
title: CLI
sidebar_label: CLI
---

You can install `nodecg` globally or in a project to use it as a CLI tool.

## Installation

### Global

```bash
npm install -g nodecg
```

### In project

```bash
npm install -D nodecg
```

## Usage

- `nodecg setup [version] [--update]`, install a new instance of NodeCG. `version` is a semver range.
  If `version` is not supplied, the latest release will be installed.
  Enable `--update` flag to install over an existing copy of NodeCG.
- `nodecg start`, start the NodeCG instance in this directory path
- `nodecg install [repo] [--dev]`, install a bundle by cloning a git repo.
  Can be a GitHub owner/repo pair (`supportclass/lfg-sublistener`) or https git url (`https://github.com/SupportClass/lfg-sublistener.git`).
  If run in a bundle directory with no arguments, installs that bundle's dependencies.
  Enable `--dev` flag to install the bundle's `devDependencies`.
- `nodecg uninstall <bundle>`, uninstall a bundle
- `nodecg defaultconfig`, If a bundle has a `configschema.json` present in its root, this command will create a default
  config file at `nodecg/cfg/:bundleName.json` with defaults based on that schema.
- `nodecg schema-types [dir]`, Generate d.ts TypeScript typedef files from Replicant schemas and configschema.json (if present)
