<template>
  <HomePageCSS />
  <router-view></router-view>
</template>

<script>
import HomePageCSS from "./components/HomePageCSS.css";
export default {
  name: "App",
  components: {
    HomePageCSS,
  },
};
</script>
