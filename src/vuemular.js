import VuemularMixin from "./vuemularMixin";
import VField from "./components/VField.vue";
import VSubset from "./components/VSubset.vue";

export default {
  install(Vue) {
    Vue.mixin(VuemularMixin);
    Vue.component('v-field', VField);
    Vue.component('v-subset', VSubset);
  }
};