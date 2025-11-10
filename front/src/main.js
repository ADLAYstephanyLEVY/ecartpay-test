import "./assets/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import apiClient from "./api/axios";
import ToastService from "primevue/toastservice";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$api = apiClient;

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(ToastService);
app.use(router);

app.mount("#app");
