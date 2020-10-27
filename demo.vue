<template>
  <div class=" second" ref="second" @mousemove="handle">
    {{ count }}
  </div>
</template>
<script>
import { throttle } from './codeSnippets/js/防抖和节流';
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handle: throttle(
      function() {
        this.count++;
      },
      1000,
      true
    ),
  },
  // mounted() {
  //   this.$refs.second.addEventListener('mousemove', debounce());
  // },
};
</script>
<style>
.second {
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
