<template>
  <div class="container">
    <nav class="nav">
      <div class="content">nav</div>
    </nav>
    <aside class="aside">aside</aside>
    <main class="main">
      main
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.container {
  width: 1288px;
  margin: 0 auto;
  /* padding: 0 0 0 220px; */
}
.main {
  background-color: aqua;
  height: 300vh;
  /* width: calc(100% - 220px); */
  /* display: inline-block; */
  margin-left: 220px;
}

.aside {
  position: fixed;
  /* top: 50px; */
  width: 220px;
  height: 100%;
  display: inline-block;
  background-color: brown;
}
.nav {
  height: 50px;
}

.nav .content {
  height: 50px;
  position: fixed;
  background-color: gold;
  width: 1288px;
  /* display: block; */
}
</style>
