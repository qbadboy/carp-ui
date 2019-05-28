# Input

Input 组件，支持 v-model[DEMO](/examples/input.html)

## 示例

<device :site="'/carp-ui/examples/input.html'"></device>

- 默认样式

```vue
<carp-input />
```

- 底部线条

```vue
<carp-input line />
```

- 大号 input

```vue
<carp-input large />
```

- 双向绑定

```vue
<template>
  <carp-input v-model="value" />
</template>

<script>
export default {
  data() {
    return { value: 0 };
  }
};
</script>
```

- input type -
  `类型与原生 input 保持一致: text、number、email、phone...`

```vue
<carp-input v-model="value" type="text" />
```

- placeholder

```vue
<carp-input v-model="value" type="text" placeholder="xxxx" />
```

- 自定义右侧按钮

```vue
// 自定义文字
<carp-input action-text="清除" />

// 带icon自定义文字
<carp-input>
  <template slot="action">
    <carp-iconfont name="search"/> 搜索
  </template>
</carp-input>
```

-

## Props

| 属性        |      说明      |  类型   | 默认值 |
| :---------- | :------------: | :-----: | -----: |
| line        |    底部线条    | Boolean |  false |
| large       |     大字号     | Boolean |  false |
| action      |    右侧按钮    | Boolean |  false |
| type        |   input type   | String  |   text |
| actionText  | 自定义按钮名称 | String  |   null |
| placeholder |  placeholder   | String  |   null |

## Event

| 事件名称     |      说明      | 参数类型 |
| :----------- | :------------: | -------: |
| click:action | 点击自定义按钮 |        - |
| focus        |   input 聚焦   |        - |
| blur         |   input 失焦   |        - |
