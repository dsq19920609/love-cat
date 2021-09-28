---
title: Devider分割线
nav:
  title: 组件
  path: '/components'
  order: 2
group:
  title: 组件
  order: 1
---

## Devider 分割线

区隔内容的分割线。

### 何时使用

- 对不同章节的文本段落进行分割。

- 对行内文字/链接进行分割，例如表格的操作列。

### 水平实虚线

<code src='./demo/base.tsx'>

#### 垂直分割线

<code src='./demo/vertical.tsx'>

#### 文本

<code src='./demo/text.tsx'>

<br/>
<br/>

|    参数     |            说明            |                                类型                                |   默认值   |
| :---------: | :------------------------: | :----------------------------------------------------------------: | :--------: |
|  className  |        分割线样式类        |                <font color='#c41d7f'>string</font>                 |     -      |
|   dashed    |          是否虚线          |                <font color='#c41d7f'>boolean</font>                |   false    |
| orientation |      分割线标题的位置      | <font color='#c41d7f'>`left` &#124; `right` &#124; `center`</font> |   center   |
|    plain    | 文字是否显示为普通正文样式 |                <font color='#c41d7f'>boolean</font>                |   false    |
|    style    |       分割线样式对象       |             <font color='#c41d7f'>CSSProperties</font>             |     -      |
|    type     |      水平还是垂直类型      |    <font color='#c41d7f'>`horizontal` &#124; `vertical`</font>     | horizontal |
