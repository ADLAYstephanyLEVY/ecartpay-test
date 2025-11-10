import { createRouter, createWebHistory } from "vue-router";
import Login from "@/screens/Login.vue";
import Dashboard from "@/screens/Dashboard.vue";
import Transactions from "@/screens/Transactions.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    name: "Root",
    component: Login,
    meta: { requiresAuth: false },
  },
  // Catch all
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isToken = localStorage.getItem("accessToken");
  if (to.path === "/") {
    if (isToken) {
      next("/dashboard");
    } else {
      next("/login");
    }
  } else if (to.meta.requiresAuth && !isToken) {
    next("/login");
  } else if (to.path === "/login" && isToken) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
