import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import CounterPage from "@/components/CounterPage.vue";
import ErrorPage from "@/components/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/CounterPage",
      name: "CounterPage",
      component: CounterPage,
    },
    {
      path: "/ErrorPage",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

createApp(App).use(router).mount("#app");
