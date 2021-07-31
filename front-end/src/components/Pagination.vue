<template>
  <div class="pages">
    <span class="prev"><img src="../assets/page-navigation.png" alt="" /></span>
    <span class="page-num" v-for="page in nbPages" :key="page" :class="[{active: (page === 1)}]">
      {{ page }}
    </span>
    <span class="next" ><img src="../assets/page-navigation.png" alt="" /></span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      nbPages: 5,
    };
  },
};
</script>

<style scoped>
.pages {
  margin-top: 1.2em;
  display: flex;
  color: #797979;
}
.pages span {
  display: block;
  width: 25px;
  background: rgba(255, 255, 255, 0.7);
  border-left: 1px solid #fff;
  border-right: 1px solid transparent;
  padding: .5em;
  cursor: pointer;
}
.active{
    background: rgba(121, 121, 121,.3);
}
.pages img{
    width: 15px;
}
.pages .prev, .pages .next{
    width: 40px !important
}
.pages .prev{
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
}
.prev img{
    transform: rotateY(180deg);
}
.pages .next{
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
}
</style>