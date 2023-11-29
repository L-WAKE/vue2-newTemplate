<template>
  <div class="child1">
    <div class="title">child1</div>
    <button @click="$bus.$emit('child1To2', 'params')">发出事件</button>
    <br />
    <button v-if="showBtn" @click="testClick()">发出事件002</button>
    <button v-else>发出事件002</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBtn: true,
    };
  },
  mounted() {},
  methods: {
    testClick() {
      console.log("输出88888");
    },
  },
};
</script>
<style scoped lang="scss">
.child1 {
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  background-color: gray;
  .title {
    font-size: 30px;
  }
}
</style>
