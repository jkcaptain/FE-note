# node.js事件驱动机制

### 事件驱动模型

非阻塞式，事件驱动IO模型
![](https://www.runoob.com/wp-content/uploads/2015/09/event_loop.jpg)

事件循环后期需要重点学习。

### 事件与事件绑定

代码流程：

1. 引入 `events` 对象，创建 `eventEmitter` 对象

2. 绑定事件处理程序

3. 触发事件

``` javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('heihei', () => {
    console.log('触发事件');
});
myEmitter.emit('heihei');

console.log('程序执行完毕');
```
