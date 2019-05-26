# Nav

nav 导航组件，支出多种自定义样式。[DEMO](/examples/nav.html)

## 示例

<device :site="'/carp-ui/examples/nav.html'"></device>

```vue
<template>
  <carp-tab :data="data" v-model="index">
</template>

<script>
export default {
  data() {
    return {
      data: [{name: '标签1'}, {name: '标签2'}]
      index: 0
    };
  }
};
</script>
```

关闭动画

```vue
<template>
  <carp-tab :data="data" v-model="index" :animation="false">
</template>
```

## Props

| 属性      |          说明          |  类型   | 默认值 |
| :-------- | :--------------------: | :-----: | -----: |
| data      | tab 名称(具体值见示例) |  Array  |     [] |
| animation |     指示器过渡动画     | Boolean |   true |
