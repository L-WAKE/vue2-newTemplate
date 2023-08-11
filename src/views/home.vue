<template>
  <div class="home">
    <div class="title">基于webpack5构建的vue2项目</div>
    <router-link to="/login">登录</router-link>
    <router-link to="/my">我的</router-link>

    <br />
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>
<script>
import Child1 from "./components/child1.vue";
import Child2 from "./components/child2.vue";
export default {
  components: {
    Child1,
    Child2,
  },
  data() {
    return {};
  },
  mounted() {
    // debugger;
    console.log("2222", process.env.NODE_ENV);
  },
};
</script>
<style scoped lang="scss">
.home {
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  background-color: #ffc0cb59;
  .title {
    font-size: 30px;
  }
}
</style>
