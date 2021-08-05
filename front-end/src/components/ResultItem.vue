<template>
  <div id="result-item">
    <div class="item-title">
      <h3>{{ getBlogTitle() }}</h3>
      <span class="date"> {{ getBlogDate() }}</span>
    </div>
    <div class="item-content">
      <p v-html="getBlogDescription()" />
      <a class="read-more" :href="getUrl()" target="blank"> Lire plus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultItem",
  props: ["blog"],
  methods: {
    getUrl() {
      return this.blog["_source"]["url"];
    },
    getBlogTitle() {
      return this.blog["_source"]["title"];
    },
    getBlogDate() {
      return this.blog["_source"]["publication-date"];
    },
    getBlogDescription() {
      let description = "";
      if (this.blog["highlight"]) {
        for (let text of this.blog["highlight"]["content_plain"]) {
          description += text + " ";
        }
        description = description.substring(0, 120);
      } else {
        description = this.blog["_source"]["content_plain"].substring(0, 120);
      }
      return description;
    },
  },
};
</script>

<style>
#result-item {
  background: rgba(255, 255, 255, 0.7);
  padding: 0.7em;
  margin-top: 1.2em;
  font-size: 0.9em;
}
.item-title h3 {
  padding: 0;
  margin: 0;
  font-size: 1em;
}
.read-more {
  background: #3e30ff;
  padding: 0.2em;
  color: #fff;
  text-decoration: none;
}
.item-title .date {
  color: #797979;
}
.item-title {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 768px) {
  #result-item {
    font-size: 1em;
    padding: 1em;
  }
  .item-title h3 {
    font-size: 1em;
  }
}
</style>