<template>
  <div class="demo-container" @mousemove="handle">
    {{ count }}
  </div>
</template>
<script>
import debounce2 from './test';
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handle: debounce2(function () {
      console.log(this);
      this.count++;
    }, 500),
  },
};
</script>
<style>
.demo-container {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 60px;
  background: #7b8c7c;
}
</style>