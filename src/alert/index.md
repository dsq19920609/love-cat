---
title: 'Alert警告提示'
nav:
  title: 组件
  path: /components
  order: 2
group:
  title: 组件
  order: 2
---

## Alert 警告提示

警告提示，展现需要关注的信息。

#### 基本用法

<code src="./demo/basic.tsx"></code>

|   参数   |            说明            |                                         类型                                         | 默认值 |
| :------: | :------------------------: | :----------------------------------------------------------------------------------: | :----: |
|   kind   |        Alert 的类型        | <font color='#c41d7f'>`info` &#124; `success` &#124; `error` &#124; `warning`</font> |  info  |
| closable |     默认不显示关闭按钮     |                         <font color='#c41d7f'>boolean</font>                         | false  |
| onClose  |  点击关闭按钮时的处理函数  |                <font color='#c41d7f'>(e: MouseEvent) => void </font>                 |   -    |
|  styles  | 文字是否显示为普通正文样式 |                         <font color='#c41d7f'>boolean</font>                         | false  |
|  style   |       alert 样式对象       |                      <font color='#c41d7f'>CSSProperties</font>                      |   -    |
