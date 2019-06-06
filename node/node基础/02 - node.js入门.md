# node.js 入门

### 包管理器 npm

1. 允许用户从 npm 服务器下载别人编写的第三方包到本地使用。

2. 允许用户从 npm 服务器下载并安装别人编写的命令行程序到本地使用。

3. 允许用户将自己编写的包或命令行程序上传到 npm 服务器供别人使用。

### node 创建一个 http 服务
``` javascript
const http = require('http');

http.createServer(function (req, res){
    // 定义 http 头
    res.writeHead(200, { 'Content-Type': 'text/html'});

    // 发送响应数据
    res.end('<p>Hello world</p>');
}).listen('8888');
```