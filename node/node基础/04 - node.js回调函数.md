# node.js回调函数

### 什么是回调

1. 函数调用方式分为三种：同步调用、回调、异步调用。

2. 回调是一种双向调用模式。

3. 可以通过回调函数来实现回调。

### 阻塞与非阻塞

1. 阻塞和非阻塞，关注的是程序在等待调用结果（消息、返回值）时的状态。

2. 阻塞就是做不完不准回来。

3. 非阻塞就是你先做，我先看看有木有其他事情，你做完了告诉我一声。

### node.js 的回调函数
阻塞式代码：
``` javascript
let data = fs.readFileSync('data.txt');
console.log(data.toString());
// hello world;
```

回调函数，非阻塞式代码
``` javascript
fs.readFile('data.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
console.log('程序执行完毕');
// 程序执行完毕
// hello world;
```