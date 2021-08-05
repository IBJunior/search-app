<template>
  <div id="app">
    <main id="app-content">
      <Header @perform_search="search" :resultReady="resultReady" />
      <Results
        :result="result"
        :searchInput="searchInput"
        @get_new_page="changePage"
        @resultReady="setResultReady"
      />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Results from "./components/Results.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Results,
  },
  data() {
    return {
      page: 1,
      result: undefined,
      searchInput: "",
      resultReady: false,
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    setResultReady(resultReady) {
      this.resultReady = resultReady;
    },
    search(searchInput) {
      this.searchInput = searchInput;
      this.get_result(this.page);
    },
    get_result(page) {
      let url = "http://localhost:3000/search/" + this.searchInput + "/" + page;
      axios
        .get(url)
        .then((response) => {
          this.result = response.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  watch: {
    page(newPage) {
      this.get_result(newPage);
    },
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/malgun-gothic-boot");
#app {
  background: linear-gradient(to left top, #21e6c1, #278ea5);
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 2em;
  padding-bottom: 2em;
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
  padding-bottom: 1.5em;
}
</style>
