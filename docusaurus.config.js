// @ts-check

const latestVersion = "2.1.0"

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'NodeCG',
  tagline: 'Create broadcast graphics using Node.js and a browser',
  url: 'https://nodecg.dev/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nodecg',
  projectName: 'docs',
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    prism: {
      theme: require('./src/css/nodecg-light'),
      darkTheme: require('./src/css/nodecg-dark'),
      additionalLanguages: ['docker'],
    },
    navbar: {
      title: 'NodeCG',
      logo: {
        alt: 'NodeCG Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
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
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
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
              href: 'https://discord.com/invite/GJ4r8a8',
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
      copyright: 'Copyright (c) 2022 Alex Van Camp, Matthew McNamara, and contributors',
    },
    image: 'img/splash.png'
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
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
  plugins: [ require.resolve('./force-theme.js'), require.resolve('docusaurus-lunr-search')],
  // TODO: disable this option
  onBrokenLinks: 'warn', 
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    }
  }
};
