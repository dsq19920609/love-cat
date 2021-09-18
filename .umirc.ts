import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'love-cat',
  favicon:
    'https://avatars.githubusercontent.com/u/22748789?s=400&u=223f5ca2a5ca1a087bbc87b08d19b23ea5004e8e&v=4',
  logo: 'https://avatars.githubusercontent.com/u/22748789?s=400&u=223f5ca2a5ca1a087bbc87b08d19b23ea5004e8e&v=4',
  outputPath: 'doc-site',
  mode: 'site',
  menus: {},
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/dsq19920609',
    },
  ],
  alias: {},
  chainWebpack() {},
  dynamicImport: {},
  exportStatic: {},
});
