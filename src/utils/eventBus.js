/* 创建一个中央事件总线类
    首先我们都了解vue的数据相应是依赖于“观察-订阅”模式，那on、on、on、emit也不例外; 
    $on用来收集所有的事件依赖，他会将传入的参数event和fn作为key和value的形式存到vm._events这个事件集合里，就像这样vm._events[event]=[fn]; 
    而$emit是用来触发事件的，他会根据传入的event在vm_events中找到对应的事件并执行invokeWithErrorHandling(cbs[i], vm, args, vm, info) 
*/
class Bus {
  constructor() {
    this.callbacks = {}; // 存放事件的名字
  }
  // 注册事件依赖
  $on(eventName, callback) {
    if (!this.callbacks[eventName]) {
      this.callbacks[eventName] = [];
    }
    this.callbacks[eventName].push(callback);
  }
  // 触发事件依赖
  $emit(eventName, data) {
    const callbacks = this.callbacks[eventName];
    if (callbacks) {
      callbacks.forEach((callback) => {
        callback(data);
      });
    }
  }
  // 销毁事件依赖
  $off(eventName, callback) {
    const callbacks = this.callbacks[eventName];
    if (callbacks) {
      this.callbacks[eventName] = callbacks.filter((cb) => cb !== callback);
    }
  }
}
export default Bus;
