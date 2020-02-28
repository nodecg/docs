const latestVersion = "1.6.0"

module.exports = {
  title: 'NodeCG',
  tagline: 'Create broadcast graphics using Node.js and a browser',
  url: 'https://nodecg.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nodecg', // Usually your GitHub org/user name.
  projectName: 'nodecg', // Usually your repo name.
  themeConfig: {
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
        {to: 'docs/1_what-is-nodecg', label: 'Docs', position: 'left'},
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
              to: 'docs/1_what-is-nodecg',
            },
            {
              label: 'Quick Start',
              to: 'docs/creating-bundles.md',
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
    image: 'img/splash.png'
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nodecg/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
