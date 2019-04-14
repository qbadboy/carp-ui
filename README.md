# CARP UI

[![Build Status](https://travis-ci.com/qbadboy/carp-ui.svg?branch=master)](https://travis-ci.com/qbadboy/carp-ui)

## 使用

安装 carp-ui

```bash
// 通过npm安装
npm install carp-ui -D

// 通过yarn安装
yarn add carp-ui -D
```

全局引入 carp-ui

```javascript
import Vue from 'vue'
import Carp from 'carp-ui'

// 实例化vue之前引入
Vue.use(Carp)

new Vue({ ... })
```

按需引入

```javascript
import Vue from 'vue'
import { Button, ... } from 'carp-ui'

// 实例化vue之前引入
Vue.use(Button)

new Vue({ ... })

```
