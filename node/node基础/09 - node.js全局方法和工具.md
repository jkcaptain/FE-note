# node.js全局方法和工具

### 基础回顾

1. 在浏览器中，通常 window 是全局对象。而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

2. node 也像是一个服务，是一个特殊的应用程序。

### 全局属性和方法

#### 常见全局属性和方法

``` javascript
__filename  // 当前模块文件的绝对路径

__dirname   // 当前模块文件的目录

// 以下方法的使用 和 浏览器环境一致
setTimeout
clearTimeout
setInterval
clearInterval
console.xxx()

// 很重要
process
```

#### process

process 用于描述当前 Node.js 进程状态的对象，提供了一个与操作系统的简单接口。

``` javascript
// process 事件
exit
beforeExit
uncaughtException
Signal

// process 常用属性
argv         // 第一个参数是 node，第二个参数是 脚本文件名，之后便是命令行输入的参数
env          // 返回 当前 shell 的环境变量
execPath     // 当前执行当前文件的 node 服务的 绝对路径
platform     // 平台信息
```

### 常用工具

util 原生模块

``` javascript
util.inherits         // 实现对象间原型继承
util.inspect          // 将任意对象转换 为字符串
util.promisify        // 返回一个返回值是一个 promise 版本的函数
util.isError
```

### 参考链接

[Node.js v10.15.3 文档](http://nodejs.cn/api/util.html)

[Node.js 全局对象 - 菜鸟教程](https://www.runoob.com/nodejs/nodejs-global-object.html)

