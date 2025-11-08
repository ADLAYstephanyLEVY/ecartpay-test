<script setup>
import { Menubar } from "primevue";
import { ref } from "vue";
import AuthService from "@/services/auth.service";
import Button from "primevue/button";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Products",
    icon: "pi pi-home",
  },
  {
    label: "Transactions",
    icon: "pi pi-star",
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
