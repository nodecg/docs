import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const latestVersion = "2.6.0";

const config: Config = {
  title: 'NodeCG',
  tagline: 'Create broadcast graphics using Node.js and a browser',
  url: 'https://nodecg.dev/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nodecg',
  projectName: 'docs',
  themeConfig: {
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
        { to: 'docs/what-is-nodecg', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
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
              label: 'Discord (Stats loading...)',
              href: 'https://discord.com/invite/GJ4r8a8',
              id: 'footer-discord-link'
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
      copyright: 'Copyright (c) 2023 Alex Van Camp, Matthew McNamara, and contributors',
    },
    image: 'img/splash.png'
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nodecg/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [require.resolve('./force-theme.js'), require.resolve('docusaurus-lunr-search')],
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
  },
  clientModules: [require.resolve("./clientModule.js")]
};

export default config;
