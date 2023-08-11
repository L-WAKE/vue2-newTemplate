<template>
  <div class="child2">
    <div class="title">child2</div>
    <button @click="submitEvent" v-throttle="3000">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$bus.$on("child1To2", this.handle);
  },
  methods: {
    handle(e) {
      console.log("child2接收到的事件参数", e);
    },
    submitEvent() {
      console.log("提交表单");
    },
  },
  beforeDestroy() {
    this.$bus.$off("child1To2");
  },
};
</script>
<style scoped lang="scss">
.child2 {
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  background-color: #0000ff1f;
  .title {
    font-size: 30px;
  }
}
</style>
