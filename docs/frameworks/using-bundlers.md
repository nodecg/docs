---
id: using-bundlers
title: Bundlers & Developer Setup
sidebar_label: Bundlers & Dev Environments
---

:::note December 2022 Update

Bundlers are one option for serving dev servers & are a wonderful tool for releasing code into production. However, there are now many alternatives that are helpful for speedy local development. Speed comparisons vary depending on what metrics are being used, and like any other framework, there are tradeoffs across any tooling choices.

Vite is currently the leading project for an unbundled development environment. Vite provides a [comparison writeup](https://vitejs.dev/guide/why.html) that may be worth checking out when starting a new NodeCG project. The Vue Mastery team also provides a [comparison between Vite and Webpack](https://www.vuemastery.com/blog/vite-vs-webpack/) that may be helpful in making your bundling / module choices. 

NodeCG usage is currently not limited to any of these options! Make your choice(s) as you will for what you are comfortable with.

:::

## Bundlers

Webpack, the most used bundler, has some good documentation for [why to use Webpack](https://webpack.js.org/concepts/why-webpack).

There are several JavaScript bundlers.

- [webpack](https://github.com/webpack/webpack)
  - By far the most used bundler with a lot of community made extensions.
- [rollup](https://github.com/rollup/rollup)
  - Primarily used by libraries like React, Vue - utilizes ES Modules for splitting code
- [parcel](https://github.com/parcel-bundler/parcel)
  - Bundler famous for zero-config and super fast building process
- [esbuild](https://esbuild.github.io/)
  - Extremely fast bundler written in Go, however currently the maintainers state that it is [unstable for production usage](https://esbuild.github.io/faq/#production-readiness). 

These bundlers allows you to

- write modular, organised source code
- treat CSS, images, or any sort of files like JavaScript module
- use npm packages for front-end (dashboard/graphics)
- use JSX/TSX, Vue single file component
- write in other languages like TypeScript
- and many more

## Tutorial: Using Parcel

:::caution

The below tutorial focuses **solely** on bundler tooling with NodeCG and was last updated in **November 2020**; functionality may be limited due to updates in underlying tools, particularly Parcel. If you run into issues, feel free to put in a pull request.

:::

### Directory Structure

Basically you will have parcel to output the whole `dashboard` and `graphics`
directory. Your project would look like this

```folders
foo-layouts
|- extension
|- schemas
|- src
|- package.json
```

When you run parcel, it will make `dashboard` and `graphics` directory and
output bundle result into them.

(After running parcel)

```folders
foo-layouts
|- extension
|- schemas
|- src
|- package.json
|- dashboard (built)
  |- index.html
  |- styles.8jx17sx.css
  |- main.7x2hdjs.js
|- graphics (built)
  |- ds1.html
  |- sd1.html
  |- styles.03nsh2s.css
  |- ds1.rssiahs.js
  |- sd1.4jc71nx.js
  |- background.d8frsis.png
```

The random string for each generated files are automatically generated to
refresh cache when the files change.

### Setup

As I said, parcel is (literally) zero-configuration required. It even installs
missing packages for you if there is any.

#### Add parcel to your bundle

##### Locally

```sh
npm install --save-dev parcel-bundler
# or
yarn add -D parcel-bundler
```

The `parcel` command will be available locally. You can run it either adding
npm scripts, or `npx parcel`/`yarn parcel`.

##### Globally

```sh
npm install -g parcel-bundler
# or
yarn global add parcel-bundler
```

With this, `parcel` command should be available globally. Just run `parcel` to
run the bundler.

#### Make an entrypoint

When building front-end, HTML file is usually used as entrypoint. You can just
use your HTML file with your scripts and stylesheets imported.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="./styles.css">
  </head>

  <body>
    <div id="tech"></div>
    <!-- Or a lot of pre-defined elements -->
    <script src="./index.js"></script>
  </body>
</html>
```

The entrypoint HTML file will also be compiled in the bundler. So you can have many
kind of files in the `script` tag. Parcel will automatically detect file format
and use an appropriate library/compiler to bundle the file.

```html
<script src="./main.coffee"></script>
```

```html
<script src="./app.tsx"></script>
```

Or the entrypoint doesn't even have to be an HTML file. For example, you can use
[Pug](https://pugjs.org/api/getting-started.html) to have common parts of HTML file into one file.

```pug
doctype html
html
  head
    title graphics-ds
    include lib/common.pug
  body
    div(id="ds")
    script(src="./views/ds.ts")
```

#### Run the command

For development, with file change detection and hot-reloading:

```sh
parcel watch src/dashboard/index.html --out-dir dashboard --public-url ./
```

For production build, with optimized output:

```sh
parcel build src/dashboard/index.html --out-dir dashboard --public-url ./
```

(Replace `src/dashboard/index.html` with your entrypoint files.)

You can use a glob pattern to use multiple entrypoints, if you have multiple pages
to compile

```sh
parcel build src/dashboard/*.html --out-dir dashboard --public-url ./
```

A detailed reference can be found in [the Parcel CLI reference documentation](https://parceljs.org/features/cli).

#### Recommended Configuration

Even though it already works for most cases (!), a bit of configuration might be
recommended/required.

##### browserslist

Parcel uses [babel](https://babeljs.io/) out of box, and the default supported
browsers are `>0.25%` which includes old browsers like IE.

Considering how NodeCG is used, it's the best to target only modern browsers or
just Chrome. To do so, add `browserslist` property to `package.json`.

For example,

```json
{
  // ...
  "browserslist": "last 2 chrome versions",
  "nodecg": //...
}
```

Refer to [this page](https://github.com/browserslist/browserslist#full-list) for
detailed `browserslist` syntax.

#### Going further

Due to the huge amount of features parcel offers out of box, at this point you
already have a lot more options for your front-end development. For example:

- React development with JSX/TSX
- Vue single file component
- TypeScript or other alternative languages

Also, if your project becomes too advanced for parcel to handle, you can switch
to webpack - there are tools that can do this configuration conversion, to either Webpack or other tools like Vite, WMR, or Turbopack.
