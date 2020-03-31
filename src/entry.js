import SimpleAlert from "./components/SimpleAlert.vue";
import SimpleAlert2 from "./components/SimpleAlert2.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("SimpleAlert", SimpleAlert);
  Vue.component("SimpleAlert2", SimpleAlert2);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

SimpleAlert.install = install;
SimpleAlert2.install = install;

export default { SimpleAlert, SimpleAlert2 };
