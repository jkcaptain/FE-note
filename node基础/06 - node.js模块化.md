# node.js模块化

### 模块化的概念与意义

1. 为了让 node.js 的文件可以相互调用，node.js 提供了一个简单的模块系统。

2. 模块是 node.js 应用程序的基本组成部分。

### node.js 中的模块

1. 文件和模块是一一对应的，一个 node.js 文件就是一个模块。

2. 这个文件可能是 JavaScript 代码、 JSON 或者编译过的 C/C++ 扩展。

3. node.js 中存在 4 类模块（原生模块和 3 种文件模块）。

### node.js 的模块加载流程

注意 原生模块 和 文件模块 的区分：
![](https://www.runoob.com/wp-content/uploads/2014/03/nodejs-require.jpg)

从上图，我们可以得知，node.js 的模块加载方式有三个步骤：

1. 从文件模块缓存区中加载

2. 从原生模块加载

3. 查找文件并加载

我们使用 require 方法加载模块，require 方法接收以下几种参数的传递：

1. http、fs、path 等，原生模块

2. ./mod 或 ../mod，相对路径的文件模块

3. /pathmodule/mod，绝对路径的文件模块

4. mod，非原生模块的文件模块，这种查找方式略复杂，会从最近的 node_modules 目录中去查找。

### 模块化代码示例

``` javascript
// hello.js
class Hello {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
    sayHello() {
        console.log(`hello ${this.name}`);
    }
}

module.exports = Hello;

// index.js
const Hello = require('./hello');

let instance = new Hello('jk');
instance.sayName();
instance.sayHello();

```

### 参考链接

[node.js官方文档](http://nodejs.cn/api/modules.html#modules_all_together)

[node.js模块系统 - 菜鸟教程](https://www.runoob.com/nodejs/nodejs-module-system.html)