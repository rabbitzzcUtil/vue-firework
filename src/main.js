import VueFirework from './firework.vue';


// 存储组件列表
const components = [
  VueFirework,
];

const install = (Vue) => {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueFirework,
};
