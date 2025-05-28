import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UAlg Cafeteria App',
  tagline: 'Feeding the future, one student at a time.',
  url: 'http://localhost', // Or your custom domain
  baseUrl: '/',            // Keep this as '/' if serving at root
  organizationName: 'ualg', // Optional — can be any string
  projectName: 'cafeteria-site', // Optional — doesn't affect local builds


  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'UAlg Cafeteria App',
      logo: {
        alt: 'UAlg Logo',
        src: 'img/unnamed.jpg', // Make sure this is placed in static/img/
      },
      items: [
        { to: '/docs/intro', label: 'How It Works', position: 'left' },
        { to: '/docs/manager', label: 'Manager Features', position: 'left' },
        { to: '/docs/user', label: 'User Guide', position: 'left' },
        { to: '/docs/schedule-example', label: 'Schedule Example', position: 'left' },
        {
          href: 'https://github.com/Nitram-MMO/your-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            { 
              label: 'Cafeteria App',
              to: '/docs/intro',
            },
            {
              label: 'Schedule Example',
              to: '/docs/schedule-example',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Universidade do Algarve',
              href: 'https://www.ualg.pt/',
            },
            {
              label: 'Inspiration: UAlg Cafeteria',
              href: 'https://www.ualg.pt/ementas',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Universidade do Algarve`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;