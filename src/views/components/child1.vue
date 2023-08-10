<template>
  <div class="child1">
    <div class="title">child1</div>
    <button @click="$bus.$emit('child1To2', 'params')">发出事件</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
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
