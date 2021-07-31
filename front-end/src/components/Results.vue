<template>
  <div id="results">
    <div class="overview">18 documents contiennent "Bitcoin"</div>
    <div class="result-list">
        <ResultItem v-for="item in items" :key="item" :item="item"/>
    </div>
    <Pagination class="pages-block"/>
  </div>
</template>

<script>
import ResultItem from "./ResultItem.vue";
import Pagination from "./Pagination.vue";
export default {
  name: "Results",
  components: {
    ResultItem,
    Pagination
  },
  data(){
      return{
          items:4
      }
  }
};
</script>

<style>
#results {
  width: 80%;
  margin: auto;
  padding: 0.7em;
  margin-top: 0.8em;
}
.result-list{
    margin-top: 1.2em;
}
.overview {
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 0.5em;
}
.pages-block{
   width: 70%;
   margin: auto;
}
</style>