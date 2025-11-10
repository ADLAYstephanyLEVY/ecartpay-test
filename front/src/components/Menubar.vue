<script setup>
import { Menubar } from "primevue";
import { ref } from "vue";
import AuthService from "@/services/auth.service";
import Button from "primevue/button";
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Products",
    icon: "pi pi-home",
    route: "/dashboard",
  },
  {
    label: "Transactions",
    icon: "pi pi-star",
    route: "/transactions",
  },
]);

const handleLogout = () => {
  AuthService.logout();
  router.push("/login");
};
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          :to="item.route"
          custom
          v-slot="{ href, navigate }"
        >
          <a
            :href="href"
            v-bind="props.action"
            @click="navigate"
            class="p-menuitem-link flex items-center"
          >
            <span :class="item.icon" class="p-menuitem-icon"></span>
            <span class="p-menuitem-text">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <Button
          icon="pi pi-sign-out"
          aria-label="Logout"
          @click="handleLogout"
        />
      </template>
    </Menubar>
  </div>
</template>
