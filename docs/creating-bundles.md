---
id: creating-bundles
title: Creating Bundles
sidebar_label: Creating Bundles
---

## Examples

Before continuing, you may find it helpful to look over our [collection of simple example bundles](https://github.com/nodecg/nodecg-simple-examples).

## Using Yeoman

1. Use Yeoman and generator-nodecg to generate the beginnings of your new bundle:

   ```bash
   npm install --global yo generator-nodecg
   cd bundles
   mkdir my-first-bundle
   cd my-first-bundle
   yo nodecg
   ```

   Answer the prompts one-by-one as they come up.

2. Once your template bundle has been generated, start NodeCG:

   ```bash
   cd ../..
   nodecg start
   ```

  :::note
  When running NodeCG in production, [pm2](https://github.com/Unitech/pm2) is recommended.
  :::

3. Open the NodeCG Dashboard, which will be located at [http://localhost:9090](http://localhost:9090) by default. You should see a page like this:

   ![Dashboard Screenshot](/img/quickstart_dashboard.png)

4. That's it! You can click the "Graphics" button in the top right to see a list of graphics in your installed bundles.

If you have more questions, want further guidance, or would just like to hang out with other NodeCG devs, [join our Discord server](https://discord.gg/NNmVz4x)!
