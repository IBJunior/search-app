<template>
  <div id="app">
    <main id="app-content">
      <Header />
      <Results/>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Header,
    Results
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/malgun-gothic-boot");
#app {
  background: linear-gradient(to left top, #21e6c1, #278ea5);
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 2em;
  font-family: "Malgun Gothic Boot", sans-serif;
}
#app-content {
  background: #fff;
  width: 80%;
  min-height: 90vh;
  margin: auto;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 25px;
}
</style>
