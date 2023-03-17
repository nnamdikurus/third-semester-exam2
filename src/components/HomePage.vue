<template>
  <div className="nav-bar">
    <p className="kurus-counter-app">My Counter App</p>
    <router-link className="components" to="/" style="color: white"
      >Home</router-link
    >
    <router-link className="components" to="/CounterPage" style="color: white"
      >Counter</router-link
    >
    <router-link className="components" to="/ErrorPage" style="color: white"
      >Error Page</router-link
    >
  </div>

  <section>
    <div className="main">
      <p><b>Hello Viewer!!!</b></p>

      <p id="write-up">
        This is a simple counter App that has the features of
        <i>incrementation</i>, <i>decrementation</i>, <i>resetting</i> and you
        can also set a value for the counter.
      </p>

      <p id="goto">
        <router-link
          to="/CounterPage"
          style="color: white; text-decoration: none"
          >Go to Counter</router-link
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
};
</script>
