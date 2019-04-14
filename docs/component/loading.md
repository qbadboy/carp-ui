# Loading

loading 组件，提供自定义颜色, 绝对定位并水平垂直居中[DEMO](/examples/loading.html)

## 示例

<device :site="'/carp-ui/examples/loading.html'"></device>

默认样式

```vue
<carp-loading />
```

自定义颜色

```vue
// red
<carp-loading :color="'red'" />

// blue
<carp-loading :color="'blue'" />
```

## Props

| 属性  |   说明   |  类型  | 默认值 |
| :---- | :------: | :----: | -----: |
| color | 颜色配置 | String |   #FFF |
