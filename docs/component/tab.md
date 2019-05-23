# Tab

tab 组件，支持双向绑定、flex 布局。[DEMO](/examples/tab.html)

## 示例

<device :site="'/carp-ui/examples/tab.html'"></device>

flex 布局

```vue
<template>
  <carp-tab flex></carp-tab>
</template>
```

双向绑定

```vue
<template>
  <carp-tab v-model="index" />
</template>

<script>
export default {
  data() {
    return {
      index: 0
    };
  }
};
</script>
```

tab 选项禁用

```vue
<template>
  <carp-tab :tabs="tabs"></carp-tab>
</template>

<script>
export default {
  data() {
    return {
      tabs: [{ name: '选项一' }, { name: '选项二', disabled: true }]
    };
  }
};
</script>
```

动画

```vue
<template>
  <carp-tab v-model="index" animation />
</template>
```

TabItem 自定义样式

```vue
<template>
  <carp-tab v-model="index" color="#F60" :font-size="16" />
</template>
```

指示器自定义样式

```vue
<template>
  <!-- 点 -->
  <carp-tab point />
  <!-- 下划线 -->
  <carp-tab />
  <!-- 下划线自定义 -->
  <carp-tab :indicator-width="10" indicator-color="#F60" />
</template>
```

插槽

```vue
<template>
  <carp-tab :tabs="tabs" v-model="index">
    <div v-show="index === 0">tab1 content</div>
    <div v-show="index === 1">tab1 content</div>
  </carp-tab>
</template>

<script>
export default {
  data() {
    return {
      tabs:[{name: '选项一'},{name: '选项二'}]
      index: 0
    };
  }
};
</script>
```

## Props

| 属性           |                说明                 |  类型   | 默认值 |
| :------------- | :---------------------------------: | :-----: | -----: |
| point          |     指示器点状样式，默认为条状      | Boolean |  false |
| flex           |            flex 布局开关            | Boolean |  false |
| tabs           |       tab 名称(具体值见示例)        |  Array  |     [] |
| color          |            tab 选项颜色             | String  |   null |
| fontSize       |            tab 选项字号             | Number  |     20 |
| lineHeight     |            tab 选项行高             | Number  |    2.8 |
| indicatorWidth | 指示器宽度，默认自适应 tab 选项宽度 | Number  |   null |
| indicatorColor |             指示器颜色              | String  |   null |
| duration       |          动画时间，单位 ms          | Number  |    800 |
| animation      |              动画开关               | Boolean |  false |
| scroll         |              滚动开关               | Boolean |  false |
