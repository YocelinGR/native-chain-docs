const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Native Chain',
  tagline: 'Native Chain Documentation',
  url: 'https://github.com/YocelinGR/native-chain-docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YocelinGR', 
  projectName: 'native-chain-docs', 
  themeConfig: {
    navbar: {
      title: 'Chain',
      logo: {
        alt: 'Chain Logo',
        src: 'img/chain-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/YocelinGR/NativeChain',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'How SAD makes you the SAT',
              href: 'https://www.chain.inc/quiz'
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/chainapp/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/chain_hq/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Help Blog',
              href: 'https://help.chain.inc/es/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/YocelinGR/NativeChain',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        redirects: [
          {
            to: '/docs/deliverables/docs',
            from: '/docs/business-docs',
          },
          {
            to: '/docs/deliverables/docs',
            from: '/docs/app-design',
          },
        ],
      },
    ]
  ]
};
