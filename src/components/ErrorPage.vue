<template>
  <div className="nav-bar">
    <p className="kurus-counter-app">My Counter App</p>
    <router-link to="/">Home</router-link>
    <router-link to="/CounterPage">Counter</router-link>
    <router-link to="/ErrorPage">Error Page</router-link>
  </div>
  This is an error page
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>
