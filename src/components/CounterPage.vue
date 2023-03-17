<template>
  <div className="nav-bar">
    <p className="kurus-counter-app">My Counter App</p>
    <router-link to="/" style="text-decoration: none; color: white" id="home"
      >Home</router-link
    >
    <router-link
      to="/CounterPage"
      style="text-decoration: none; color: white"
      id="counter"
      >Counter</router-link
    >
    <router-link
      to="/ErrorPage"
      style="text-decoration: none; color: white"
      id="error"
      >Error Page</router-link
    >
  </div>
  <section className="counter-section">
    <div id="counterapp">My Counter App</div>

    <p className="valuepoint">{{ count }}</p>

    <div className="buttons">
      <button @click="($event) => count++" id="increment">+ INCREMENT</button>
      <button @click="($event) => (count = 0)" id="reset">↶ RESET</button>
      <button @click="($event) => count--" id="decrement">- DECREMENT</button>
    </div>

    <div className="setvalue">
      <p id="dash">____________________</p>
      <button id="sv">SET VALUE</button>
    </div>
  </section>
  <router-link to="/"></router-link>
</template>

<script>
export default {
  name: "CounterPage",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
