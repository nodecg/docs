# NodeCG Docs

These docs are built using [Docusaurus 2](https://v2.docusaurus.io/).

The [Markdown lint tool](https://github.com/markdownlint/markdownlint) is used for linting.

Some markdown rules have been disabled:
| #                                                                                  | Rule                            | Why |
|----------------------------------------------------------------------------------- | ------------------------------- | --- |
| [MD013](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013) | Line length                     |     |
| [MD026](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md026) | Trailing punctuation in heading | Various headings in the NodeCG readme have valid question marks in the header |
| [MD033](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md033) | Inline HTML                     | Gfycat is used to demonstrate certain concepts and they requires iframes in order to show|

## Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
