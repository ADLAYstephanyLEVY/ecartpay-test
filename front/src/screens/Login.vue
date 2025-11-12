<script setup>
import Button from "primevue/button";
import Password from "primevue/password";
import { ref } from "vue";
import AuthService from "@/services/auth.service";
import { useRouter } from "vue-router";
const router = useRouter();

import { useToast } from "primevue/usetoast";
const toast = useToast();

const publicKey = ref("");
const privateKey = ref("");
const errorMessage = ref("");

const handleLogin = async () => {
  errorMessage.value = "";

  if (!publicKey || !privateKey) {
    errorMessage.value = "Please enter both credentials";
    return;
  }

  try {
    await AuthService.login(publicKey.value, privateKey.value);
    console.log("auth success");
    router.push("/dashboard");
  } catch (err) {
    console.log("Error authenticating:", err);

    const msg =
      err.response?.data?.message || "Connection error or bad credentials";

    errorMessage.value = msg;

    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Connection error or Bad credentials. Try again",
      life: 3000,
    });
  }
};
</script>

<template>
  <Toast />
  <div class="form-box">
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.svg"
      width="125"
      height="125"
    />
    <h1 class="green">Welcome</h1>
    <h3>Login to get started</h3>

    <div class="input-text">
      <label for="username">Username</label>
      <Password v-model="publicKey" toggleMask :feedback="false" fluid />
    </div>

    <div class="input-text">
      <label for="password">Password</label>
      <Password v-model="privateKey" toggleMask :feedback="false" fluid />
    </div>
    <div v-if="errorMessage" class="error-msg">
      {{ errorMessage }}
    </div>
    <div class="btn-login">
      <Button label="Login" fluid @click="handleLogin" />
    </div>
  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
h3 {
  font-size: 1.2rem;
}
.form-box {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.input-text {
  min-width: 30%;
  display: flex;
  flex-direction: column;
}
.btn-login {
  width: 30%;
  background-color: aqua;
}
.error-msg {
  color: red;
  font-weight: 400;
  font-size: 13px;
}
</style>
