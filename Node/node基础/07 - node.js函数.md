# node.js函数

### 函数的概念

1. 在 JavaScript 中，一个函数可以作为另一个函数的参数。

2. 我们可以定义一个函数再传递，也可以在传递参数的地方直接定义函数。

3. node.js 中函数的使用规则 和 JavaScript 类似。

### 匿名函数

1. 我们可以把一个函数作为变量传递。

2. 不一定 “先定义，再传递”，可以直接在另一个函数的括号中定义和传递这个函数。

### http服务器端的函数传递

不使用匿名函数
``` javascript
const http = require('http');

function onRequest(req, res) {
    // 定义 http 头
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 发送响应数据
    res.end('<p>Hello world</p>');
}

http.createServer(onRequest).listen('8888');
```

建议：如果函数功能不需要考虑复用，则使用匿名函数即可。