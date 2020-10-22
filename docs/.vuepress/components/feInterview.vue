<template>
  <div class="fe-interview" v-if="show">
    <template v-if="response">
      <h2>今日试题-{{ response.dToday }}</h2>
      <ul class="today-interview">
        <li v-for="item in response.today">
          <span class="label">[{{ item.label }}]</span>
          {{ item.title }}
          <p v-if="item.body">{{ item.body }}</p>

          <a
            target="_blank"
            :href="
              `https://github.com/haizlin/fe-interview/issues/${item.issuesId}`
            "
            >前往原文</a
          >
          <a @click="copy(item)">点击复制</a>
        </li>
      </ul>
      <textarea v-model="copyData" ref="input" id="copyInput" />
      <div class="custom-block tip" v-show="copySuccess">
        <p>复制成功</p>
      </div>
    </template>
    <div v-show="loading" class="loading">
      <span class="loadingText">今日试题加载中</span>
      <div class="loadingio-spinner-spinner-35nyy476mna">
        <div class="ldio-lif3ggh2pur">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyData: '',
      path: '',
      response: null,
      loading: false,
      show: false,
      copySuccess: false,
    };
  },
  methods: {
    copy(item) {
      console.log(item);
      let ret = `
::: center

## ${item.title}

${item.body ? item.body : ''}
:::

<a target="_blank" href="https://github.com/haizlin/fe-interview/issues/${
        item.issuesId
      }">前往原文</a>
      `;
      new Promise(resolve => {
        this.copyData = ret;
        resolve(this.copyData);
      })
        .then(res => {
          return this.$refs.input.select();
        })
        .then(res => {
          if (document.execCommand('Copy', 'false', null)) {
            this.copySuccess = true;
            setTimeout(() => {
              this.copySuccess = false;
            }, 4 * 1000);
          }
        });
    },
    requestToday() {
      this.loading = true;
      fetch(this.path)
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => {
          if (data.result) {
            this.response = data.result;
            this.loading = false;
          }
        });
    },
  },
  created() {
    if (process.env.NODE_ENV === 'development') {
      this.show = true;
      this.path =
        'http://api.h-camel.com/api?mod=interview&ctr=issues&act=today';
      this.requestToday();
    }
  },
};
</script>

<style scoped>
#copyInput {
  position: relative;
  top: -10000px;
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
}
.label {
  font-weight: bold;
}
.fe-interview {
  font-size: 18px;
}
.fe-interview a {
  cursor: pointer;
}
</style>

<style type="text/css">
@keyframes ldio-lif3ggh2pur {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.ldio-lif3ggh2pur div {
  left: 46.5px;
  top: 20px;
  position: absolute;
  animation: ldio-lif3ggh2pur linear 1.1627906976744184s infinite;
  background: #11a8cd;
  width: 7px;
  height: 12px;
  border-radius: 3.5px / 4.5600000000000005px;
  transform-origin: 3.5px 30px;
}
.ldio-lif3ggh2pur div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.073345259391771s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(2) {
  transform: rotate(27.692307692307693deg);
  animation-delay: -0.9838998211091233s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(3) {
  transform: rotate(55.38461538461539deg);
  animation-delay: -0.8944543828264757s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(4) {
  transform: rotate(83.07692307692308deg);
  animation-delay: -0.8050089445438282s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(5) {
  transform: rotate(110.76923076923077deg);
  animation-delay: -0.7155635062611806s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(6) {
  transform: rotate(138.46153846153845deg);
  animation-delay: -0.626118067978533s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(7) {
  transform: rotate(166.15384615384616deg);
  animation-delay: -0.5366726296958855s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(8) {
  transform: rotate(193.84615384615384deg);
  animation-delay: -0.44722719141323786s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(9) {
  transform: rotate(221.53846153846155deg);
  animation-delay: -0.3577817531305903s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(10) {
  transform: rotate(249.23076923076923deg);
  animation-delay: -0.26833631484794274s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(11) {
  transform: rotate(276.9230769230769deg);
  animation-delay: -0.17889087656529515s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(12) {
  transform: rotate(304.61538461538464deg);
  animation-delay: -0.08944543828264757s;
  background: #11a8cd;
}
.ldio-lif3ggh2pur div:nth-child(13) {
  transform: rotate(332.3076923076923deg);
  animation-delay: 0s;
  background: #11a8cd;
}
.loadingio-spinner-spinner-35nyy476mna {
  width: 31px;
  height: 31px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-lif3ggh2pur {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.31);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-lif3ggh2pur div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>
