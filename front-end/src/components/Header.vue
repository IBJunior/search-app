<template>
  <header class="app-header">
    <h1>SearchApp</h1>
    <div class="search-input-group">
      <span class="search-icon"
        ><img src="../assets/search_icon.png" alt=""
      /></span>
      <input type="text" name="" id="search-input" />
      <button>search</button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.app-header {
  color: #3e30ff;
  text-align: center;
  font-size: 1em;
  opacity: 1.2;
  width: 100%;
}
.app-header h1 {
  font-size: 1.4em;
  padding-top: 1em;
}
.search-input-group input,
.search-input-group button {
  border: none;
  outline: none;
}
.search-input-group {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
}
.search-icon img {
  width: 18px;
  margin-left: 0.8em;
  margin-top: 0.6em;
}
.search-icon {
  display: block;
  background: rgba(255, 255, 255, 0.7);
  margin: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
input {
  height: 35px;
  width: 56%;
  padding-left: 0.5em;
  background: rgba(255, 255, 255, 0.7);
  color: #797979;
}
button {
  height: 37px;
  padding: 0.5em;
  width: 70px;
  border-radius: 25px;
  margin-left: -1.2em;
  color: #fff;
  background: #3e30ff;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style>