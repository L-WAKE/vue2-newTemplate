import Vue from "vue";

// 1.表单防止重复提交

Vue.directive("throttle", {
  bind: (el, binding) => {
    let throttleTime = binding.value; // 节流时间
    if (!throttleTime) {
      // 用户若不设置节流时间，则默认2s
      throttleTime = 2000;
    }
    let cbFun;
    el.addEventListener(
      "click",
      (event) => {
        if (!cbFun) {
          // 第一次执行
          cbFun = setTimeout(() => {
            cbFun = null;
          }, throttleTime);
        } else {
          event && event.stopImmediatePropagation();
        }
      },
      true
    );
  },
});
