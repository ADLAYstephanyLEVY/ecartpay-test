import "./assets/main.css";
import "./styles.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import apiClient from "./api/axios";
import ToastService from "primevue/toastservice";
import { Toast } from "primevue";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$api = apiClient;

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "theme, base, primevue",
      },
    },
  },
});
app.use(ToastService);
app.use(router);

app.component("Toast", Toast);

app.mount("#app");
