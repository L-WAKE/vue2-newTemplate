<template>
  <div class="child2">
    <div class="title">child2</div>
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
  background-color: blue;
  .title {
    font-size: 30px;
  }
}
</style>
