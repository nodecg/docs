---
id: creating-bundles
title: Creating Bundles
sidebar_label: Creating Bundles
---

## Examples {#examples}

Before continuing, you may find it helpful to look over our [collection of simple example bundles](https://github.com/nodecg/nodecg-simple-examples).

## Using Yeoman {#yeoman}

1. Use Yeoman and [generator-nodecg](https://github.com/nodecg/generator-nodecg) to generate the beginnings of your new bundle:

   ```bash
   npm install --global yo generator-nodecg
   cd bundles
   mkdir my-first-bundle
   cd my-first-bundle
   yo nodecg
   ```

   Answer the prompts one-by-one as they come up. If you wish to access the TypeScript boilerplate, just answer yes to the TypeScript prompt. If you wish to access the React boilerplate, first answer yes to the TypeScript prompt and then also answer yes to the React prompt (we currently have a TypeScript+React template but not a plain JavaScript+React template).

2. If you generated your bundle with TypeScript, you can use the "dev" script to start NodeCG, automatically re-compile your code when it changes, and also automatically restart NodeCG when specifically server-side code changes (such as your extension):

   ```bash
   # From the root of your new bundle's folder
   npm run dev
   ```

   Else, you can start NodeCG the old-fashioned way with `nodecg-cli`:

   ```bash
   cd ../..
   nodecg start
   ```

  :::note
  When running NodeCG in production, [Docker](https://www.docker.com/) or [pm2](https://github.com/Unitech/pm2) are recommended.
  :::

3. Open the NodeCG Dashboard, which will be located at [http://localhost:9090](http://localhost:9090) by default. You should see a page like this:

   ![Dashboard Screenshot](/img/quickstart_dashboard.png)

4. That's it! You can click the "Graphics" button in the top right to see a list of graphics in your installed bundles.

If you have more questions, want further guidance, or would just like to hang out with other NodeCG devs, [join our Discord server](https://discord.com/invite/GJ4r8a8)!
