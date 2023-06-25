# NodeCG Docs

These docs are built using [Docusaurus 2](https://v2.docusaurus.io/).

The [Markdown lint tool](https://github.com/markdownlint/markdownlint) is used for linting.

Some markdown rules have been disabled:
| #                                                                                  | Rule                            | Why |
|----------------------------------------------------------------------------------- | ------------------------------- | --- |
| [MD013](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013) | Line length                     |     |
| [MD026](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md026) | Trailing punctuation in heading | Various headings in the NodeCG readme have valid question marks in the header |
| [MD033](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md033) | Inline HTML                     | Video tags are used to demonstrate certain concepts |

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
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Internationalization / Translations

We currently are targeting Japanese and French for our translations but if you want to help out and translate it in your own language by all means please do so.

To run a local dev server on a specific translation, run:

```bash
npx docusaurus serve --locale <locale>

# Example for Japanese
npx docusaurus serve --locale ja
```

To edit the translations go into the `i18n` folder and then the language you wish to edit.

Files in the `code.json` file are strings used in React components. (For now some docusaurus elements and the homepage).

To edit documentation open the `docusaurus-plugin-content-docs` folder and copy paste the doc you wish to edit making sure to keep the same folder structure as the normal docs folder. Then just translate and edit the documentation.

**Note:** Do not edit the text in brackets next to headers i.e. the **{#title}** in `#Title {#title}`. These are "Explicit Heading IDs" and exist so that edits to links don't have to occur, [Source](https://docusaurus.io/docs/i18n/tutorial#translate-the-pages).
