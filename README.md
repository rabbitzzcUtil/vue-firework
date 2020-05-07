## vue-firework

> To use the firework component developed by vue, click on the component.
> 
Vue 版的点击页面出现火花效果，可以全局也用，也可以在单个元素中使用。


### demo

[https://vue-firework.now.sh/](https://vue-firework.now.sh/)

### install

```sh
# npm 
npm install vue-firework --save
# yarn
yarn add vue-firework
```

### import and use

Import for global usage
```js
import Vue from 'vue'
import VueFirework from 'vue-firework'

Vue.use(VueFirework)
```
Or on a single component
```js
import VueFirework from 'vue-firework'...
components: { VueFirework }
...
```

### config
* el. The element that needs to bind firework effects.
* fireCanvasStyle. Configuration of firework left and top properties.

### todo
- Custom color
### MIT

[MIT](./LICENSE)