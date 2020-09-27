<template>
  <div class="fe-interview"></div>
</template>

<script>
export default {
  data() {
    return {
      path: 'http://api.h-camel.com/api?mod=interview&ctr=issues&act=today',
      response: null,
    };
  },
  methods: {
    requestToday() {
      fetch(this.path)
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => {
          if (data.result) {
            this.response = data.result;
          }
        });
    },
  },
  created() {
    this.requestToday();
  },
};
</script>

<style scoped lang="scss"></style>
