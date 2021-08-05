<template>
  <div id="results" v-if="resultReady">
    <div class="overview">
      {{ getSize }} articles parlent de "{{ searchInput }}"
    </div>
    <div class="result-list">
      <ResultItem v-for="blog in blogsResult" :key="blog['_id']" :blog="blog" />
    </div>
    <Pagination
      class="pages-block"
      :nbPage="nbPage"
      v-if="nbPage > 1"
      @get_new_page="getNewPage"
    />
  </div>
</template>

<script>
import ResultItem from "./ResultItem.vue";
import Pagination from "./Pagination.vue";
const NOMBRE_RESULTAT_PAR_PAGE = 5;
export default {
  name: "Results",
  props: ["result", "searchInput"],
  components: {
    ResultItem,
    Pagination,
  },
  methods: {
    getNewPage(page) {
      this.$emit("get_new_page", page);
    },
  },
  computed: {
    blogsResult() {
      return this.result !== undefined ? this.result.hits.hits : undefined;
    },
    resultReady() {
      return this.result !== undefined;
    },
    getSize() {
      return this.result.hits.total.value;
    },
    nbPage() {
      return Math.ceil(this.result.hits.total.value / NOMBRE_RESULTAT_PAR_PAGE);
    },
  },
  watch: {
    resultReady(newResultReady) {
      this.$emit("resultReady", newResultReady);
    },
  },
};
</script>

<style>
#results {
  width: 80%;
  margin: auto;
  padding: 0.5em;
  margin-top: 0.8em;
}
.overview {
  font-size: 0.9em;
  padding: 0.5em;
  margin-bottom: 1.2em;
}
.result-list {
  margin-top: 1.2em;
}
.overview {
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 0.5em;
}
.pages-block {
  width: 70%;
  margin: auto;
}
@media (min-width: 768px) {
  #results {
    width: 450px;
    margin-top: 2em;
  }
  .overview {
    font-size: 1em;
  }
}
@media (min-width: 1024px) {
  #results {
    width: 600px;
  }
}
</style>