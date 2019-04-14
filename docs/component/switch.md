# Switch

开关组件，状态可双向绑定。[DEMO](/examples/switch.html)

## 示例

<device :site="'/carp-ui/examples/switch.html'"></device>

开关状态双向绑定

```vue
<template>
  <carp-switch v-model="status" />
</template>

<script>
export default {
  data() {
    return {
      status: false
    };
  }
};
</script>
```

开关禁用

```vue
<carp-switch v-model="status" disabled />
```

## Props

| 属性     |   说明   |  类型   | 默认值 |
| :------- | :------: | :-----: | -----: |
| checked  | 开关状态 | Boolean |  false |
| disabled | 开关禁用 | Boolean |  false |

## Event

| 事件名称      | 接收参数类型 |
| :------------ | -----------: |
| change:switch |      Boolean |
