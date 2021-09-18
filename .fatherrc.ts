export default {
  // entry: ['src/alert/index.tsx', 'src/dialog/index.tsx'],
  entry: ['src/index.ts'], // 打包的入口文件
  target: 'browser',
  esm: {
    type: 'babel',
  },
  cjs: 'rollup',
  umd: {
    name: 'loveCat',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    minFile: true,
    sourcemap: true,
  },
  lessInBabelMode: true, // babel 模式下做 less 编译
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  extractCSS: true, // cjs或者umd中把所有的css文件单独提取出来可直接引入
  extraBabelPresets: [], // 额外的babel-presets
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        // 配置antd的按需引入
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ], // 额外的babel-plugins
  extraPostCSSPlugins: [], // 额外的postcss插件
  extraRollupPlugins: [], // 额外的rollup插件
  pkgs: [
    // 组件依赖构建顺序， 例如 a组件依赖于b组件，那么需要先编译 b,在编译a,则 这里可以控制组件编译顺序
  ],
};
