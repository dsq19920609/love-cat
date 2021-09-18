---
nav:
  title: 快速上手
  order: 1
---

## 快速上手

安装依赖

```bash
$ yarn
```

本地启动

```bash
$ yarn start
```

通过`father-build`打包输出`es`、`cjs`、`umd`格式

```bash
$ yarn build
```

## 使用

#### 按需引入：

```js
import { Alert } from 'love-cat';
```

安装 `babel-plugin-import`

```js
yarn add babel-plugin-import --dev
```

配置.babelrc 或 babel-loader

```js
[
  'babel-plugin-import',
  {
    // 配置love-cat的按需引入
    libraryName: 'love-cat',
    libraryDirectory: 'es',
    style: true,
  },
],
```

#### 手动引入

```js
import Alert from 'love-cat/es/alert'; // 手动按需加载 js
import 'love-cat/es/alert/style'; // 手动按需加载css
```

### 全局引入样式

```js
import 'love-cat/es/index.css';

或;

import 'love-cat/dist/index.css';
```
