<template>
<<<<<<< HEAD
  <div class="demo-container" @mousemove="handle">
=======
  <div class=" second" ref="second" @mousemove="handle">
>>>>>>> origin/work-pc
    {{ count }}
  </div>
</template>
<script>
<<<<<<< HEAD
import debounce2 from './test';
=======
import { throttle } from './codeSnippets/js/防抖和节流';
>>>>>>> origin/work-pc
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
<<<<<<< HEAD
    handle: debounce2(function () {
      console.log(this);
      this.count++;
    }, 500),
  },
};
</script>
<style>
.demo-container {
=======
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
>>>>>>> origin/work-pc
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 60px;
  background: #7b8c7c;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> origin/work-pc
