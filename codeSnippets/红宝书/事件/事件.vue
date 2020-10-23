<template>
  <div class="demo-container">
    <div class="wrap js-wrap" data-content="最外层的父元素">
      <div class="content js-content" data-content="父元素">
        <p class="p js-p" data-content="内容">内容</p>
      </div>
    </div>
    <div>
      <button @click="Capture">捕获</button>
      <button @click="useBubble">冒泡</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      useCapture: false,
      p: null,
      content: null,
      wrap: null,
    };
  },
  methods: {
    Capture() {
      this.useCapture = false;
      this.init();
    },
    useBubble() {
      this.useCapture = true;
      this.init();
    },
    destroy() {
      this.p.removeEventListener(
        'click',
        this.click.bind(this.p),
        !this.useCapture
      );
      this.content.removeEventListener(
        'click',
        this.click.bind(this.content),
        !this.useCapture
      );
      this.wrap.removeEventListener(
        'click',
        this.click.bind(this.wrap),
        !this.useCapture
      );
    },
    click() {
      console.log(this);
      alert(`点击了${this.getAttribute('data-content')}`);
    },
    init() {
      this.p = document.querySelector('.js-p');
      this.content = document.querySelector('.js-content');
      this.wrap = document.querySelector('.js-wrap');

      this.p.addEventListener(
        'click',
        this.click.bind(this.p),
        this.useCapture
      );
      this.p.addEventListener(
        'click',
        this.click.bind(this.content),
        this.useCapture
      );
      this.p.addEventListener(
        'click',
        this.click.bind(this.wrap),
        this.useCapture
      );
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style>
.wrap,
.content,
.p {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.wrap {
  width: 200px;
  height: 200px;
  background: green;
  position: relative;
}
.wrap::after {
  content: '最外层元素';
  position: absolute;
  top: 5px;
}
.content {
  width: 140px;
  height: 140px;
  background: blue;
  position: relative;
}
.content::after {
  content: '父元素';
  position: absolute;
  top: 5px;
}
.p {
  width: 80px;
  height: 80px;
  background: red;
}
</style>
