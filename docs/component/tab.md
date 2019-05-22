# Tab

tab 组件，支持双向绑定，支持 flex、block 布局。[DEMO](/examples/tab.html)

## 示例

<device :site="'/carp-ui/examples/tab.html'"></device>

flex 布局

```vue
<template>
  <carp-tab display="flex"></carp-tab>
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
  <carp-tab v-model="index" :is-animation="true" />
</template>
```

TabItem 自定义样式

```vue
<template>
  <carp-tab
    v-model="index"
    :color="'#F60'"
    :font-size="16"
    :font-weight="400"
    :active-font-weight="500"
    :active-font-size="18"
    :active-color="'#F60'"
  />
</template>
```

指示器自定义样式

```vue
<template>
  <!-- 点 -->
  <carp-tab indicator-type="point" />
  <!-- 下划线 -->
  <carp-tab indicator-type="bar" />
  <!-- 下划线自定义 -->
  <carp-tab
    indicator-type="bar"
    :indicator-width="10"
    :indicator-height="10"
    :indicator-color="'#F60"
  />
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

| 属性             |                说明                 |  类型   | 默认值 |
| :--------------- | :---------------------------------: | :-----: | -----: |
| display          |          flex、block 布局           | String  |  block |
| tabs             |       tab 名称(具体值见示例)        |  Array  |     [] |
| color            |            tab 选项颜色             | String  |     '' |
| fontSize         |            tab 选项字号             | Number  |     20 |
| fontWeight       |            tab 选项字重             | Number  |    400 |
| lineHeight       |            tab 选项行高             | Number  |    2.8 |
| activeColor      |            tab 选中颜色             | String  |   null |
| activeFontSize   |            tab 选中字号             | Number  |   null |
| activeFontWeight |            tab 选中字重             | Number  |   null |
| indicatorType    |      指示器样式类型 point, bar      | String  |  point |
| indicatorWidth   | 指示器宽度，默认自适应 tab 选项宽度 | Number  |   null |
| indicatorHeight  |             指示器高度              | Number  |   null |
| indicatorColor   |             指示器颜色              | String  |   null |
| duration         |          动画时间，单位 ms          | Number  |    800 |
| isAnimation      |              动画开关               | Boolean |  false |
