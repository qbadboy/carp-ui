# Button

按钮组件提供默认、线框、圆角、loading 等样式。[DEMO](/examples/button.html)

## 示例

<device :site="'/carp-ui/examples/button.html'"></device>

默认样式

```vue
<carp-button>Defalut</carp-button>
```

线框样式

```vue
<carp-button outline>Outline</carp-button>
```

小尺寸按钮

```vue
<carp-button small>Small</carp-button>
```

## Props

| 属性     |    说明    |  类型   | 默认值 |
| :------- | :--------: | :-----: | -----: |
| radius   |  圆角样式  | Boolean |  false |
| outline  |  线框样式  | Boolean |  false |
| small    | 小尺寸按钮 | Boolean |  false |
| inline   |  行内元素  | Boolean |  false |
| loading  |  正在加载  | Boolean |  false |
| disabled |  按钮禁用  | Boolean |  false |
