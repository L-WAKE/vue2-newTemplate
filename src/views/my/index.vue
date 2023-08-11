<template>
  <div class="my-center">
    <div class="title">我的个人中心</div>
    <button @click="$router.back()">返回</button>
    <div class="image-box">
      <div class="image-item" v-for="item in imageList" :key="item.key">
        <img v-lazy="item.src" class="image-img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageList: [
        { src: require("@/static/image/1.jpg"), key: "001" },
        { src: require("@/static/image/2.jpg"), key: "002" },
        { src: require("@/static/image/3.jpg"), key: "003" },
        { src: require("@/static/image/7.jpg"), key: "004" },
      ],
    };
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.my-center {
  color: rgb(255, 0, 157);
  height: 400px;
  background-color: #8080804d;
  width: 100%;
  .title {
    font-size: 30px;
  }
  .image-box {
    margin-top: 50px;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    .image-item {
      width: 100%;
      height: 100%;
      .image-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
