import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Đổi "your-username" thành username GitHub của bạn trước khi deploy.
// Nếu repo của bạn là "<username>.github.io" thì bỏ dòng "base" đi.
export default defineConfig({
  site: 'https://its-tan.github.io',
  base: '/running-blog/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
