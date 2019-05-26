# Tab

tab 组件，支持多种自定义样式。[DEMO](/examples/tab.html)

## 示例

<device :site="'/carp-ui/examples/tab.html'"></device>

默认样式

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

x 轴滚动开关

```vue
<template>
  <carp-tab scroll-x></carp-tab>
</template>
```

设置 tabItem 宽度

```vue
// 如果传入小数按tab宽度百分比计算
<template>
  <carp-tab :width="100"></carp-tab>
  <carp-tab :width="1 / 2"></carp-tab>
</template>
```

设置 indicator 宽度

```vue
// 默认自适应tabItem宽度
<template>
  <carp-tab :indicator-width="20"></carp-tab>
</template>
```

显示 border

```vue
<template>
  <carp-tab border></carp-tab>
</template>
```

## Props

| 属性           |                说明                 |  类型   | 默认值 |
| :------------- | :---------------------------------: | :-----: | -----: |
| data           |       tab 名称(具体值见示例)        |  Array  |     [] |
| border         |             显示 border             | Boolean |  false |
| width          |   tabItem 宽度,默认自适应内容宽度   | Number  |   null |
| indicatorWidth | 指示器宽度，默认自适应 tab 选项宽度 | Number  |   null |
| scrollX        |              滚动开关               | Boolean |  false |
