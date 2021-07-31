<template>
  <div id="result-item">
    <div class="item-title">
      <h3>What is Bitcoin</h3>
      <span class="date"> 21 Janvier 2021</span>
    </div>
    <div class="item-content">
      <p>
        Lorem ipsum <strong>Bitcoin</strong> sit amet consectetur adipisicing elit. Consectetur
        aperiam inventore maiores.
      </p>
      <a class="read-more"> Lire plus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultItem",
  props: ["item"],
};
</script>

<style>
#result-item {
  background: rgba(255, 255, 255, 0.7);
  padding: 0.7em;
  margin-top: .8em;
}
.item-title h3{
    padding: 0;
    margin:0;
    font-size: 1em;
}
.read-more{
     background: #3e30ff;
     padding: .1em;
     color: #fff;
}
.item-title .date{
    color: #797979;
}
.item-title{
    display: flex;
    justify-content: space-between;
}
</style>