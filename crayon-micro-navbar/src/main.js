import "ant-design-vue/lib/style/index.less"; // antd core styles
import "./global.scss";
import Vue from "vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";
import { Menu } from "ant-design-vue";
import Router from "vue-router";

import App from "./App.vue";
Vue.use(Menu);
Vue.use(Router);
Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        render(h) {
            return h(App, {
                props: {
                    // single-spa props are available on the "this" object. Forward them to your component as needed.
                    // https://single-spa.js.org/docs/building-applications#lifecyle-props
                    // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
                    /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
                },
            });
        },
        router,
    },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
