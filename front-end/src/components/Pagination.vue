<template>
  <div class="pages">
    <span class="prev" :class="{ disable: currentPage === 1 }" @click="prevPage"
      ><img src="../assets/page-navigation.png" alt="previous-page-icon"
    /></span>
    <span class="page-num">{{ currentPage }}</span>
    <span class="page-num"> sur </span>
    <span class="page-num">{{ nbPage }}</span>
    <span
      class="next"
      :class="{ disable: currentPage >= nbPage }"
      @click="nextPage"
      ><img src="../assets/page-navigation.png" alt="next-page-icon"
    /></span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["nbPage"],
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    getPage(page) {
      this.$emit("get_new_page", page);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.getPage(this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage < this.nbPage) {
        this.currentPage += 1;
        this.getPage(this.currentPage);
      }
    },
  },
};
</script>

<style scoped>
.pages {
  margin-top: 1.2em;
  display: flex;
  justify-content: center;
  color: #797979;
}

.pages span {
  display: block;
  width: 25px;
  background: rgba(255, 255, 255, 0.7);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  padding: 0.5em;
  text-align: center;
}
.pages img {
  width: 15px;
}
.pages .prev,
.pages .next {
  width: 40px !important;
  cursor: pointer;
  background: rgba(121, 121, 121, 0.3);
}
.pages .prev {
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  border-right: 1px solid #fff;
}
.prev img {
  transform: rotateY(180deg);
}
.pages .next {
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.pages span.disable {
  cursor: text;
}
</style>