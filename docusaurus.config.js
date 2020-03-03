const latestVersion = "1.6.0"

module.exports = {
  title: 'NodeCG',
  tagline: 'Create broadcast graphics using Node.js and a browser',
  url: 'https://nodecg.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nodecg',
  projectName: 'nodecg',
  themeConfig: {
    prism: {
      theme: require('./src/css/nodecg-light'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: 'NodeCG',
      logo: {
        alt: 'NodeCG Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          href: 'https://github.com/nodecg/nodecg/releases',
          label: `v${latestVersion}`,
          position: 'left',
          style: {
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem 0.2rem 0.25rem',
            fontSize: 'calc(0.8 * var(--ifm-font-size-base))',
          },
        },
        {to: 'docs/what-is-nodecg', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nodecg/nodecg',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'What is NodeCG',
              to: 'docs/what-is-nodecg',
            },
            {
              label: 'Quick Start',
              to: 'docs/creating-bundles',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/NNmVz4x',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nodecg/nodecg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nodecg',
            },
          ],
        },
      ],
      copyright: ``,
    },
    image: 'img/splash.png',
    algolia: {
      apiKey: '21171da7394be9a61a0174dd81b75b70',
      indexName: 'nodecg',
      algoliaOptions: {}
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nodecg/docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [ require.resolve('./force-theme.js')]
};
