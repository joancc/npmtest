import SimpleIcon from "./components/SimpleIcon.vue";
import SimpleButton from "./components/SimpleButton.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  // Vue.component("SimpleIcon", SimpleIcon);
  Vue.component("SimpleButton", SimpleButton);
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

export default {
  install,
  SimpleButton,
  SimpleIcon
};
