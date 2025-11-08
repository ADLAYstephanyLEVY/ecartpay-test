import "./assets/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import apiClient from "./api/axios";

const app = createApp(App);

app.config.globalProperties.$api = apiClient

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");
