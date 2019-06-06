# node.js路由

### 基础回顾

1. MVC 模式下，路由规则通常是固定的。例如：`http://www.example.com/a/b`，`a` 代表 `controller`, `b` 代表 `action`。

2. 路由模块使用依赖注入的方式，其实在这里可以理解为传参吧。

3. 路由通常分为 GET 和 POST 请求，GET 的请求内容在 url 中， POST 的请求内容在请求体中。

### 路由定义

``` javascript
// router.js
function route(pathname, response) {
    console.log('About to route a request for ' + pathname);

    if (pathname === '/' || pathname === '/index') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello World');
        response.end();
    } else if (pathname === '/index/test'){
        response.write('index test page');
        response.end();
    } else {
        response.write('404');
        response.end();
    }
}
exports.route = route;

// server.js
const http = require('http');
const url = require('url');

function start(route) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname, response);        
    }

    http.createServer(onRequest).listen('8888');
}
exports.start = start;

// index.js
const server = require('./server');
const router = require('./router');
server.start(router.route);

// 运行
node index.js
```

### GET 与 POST

#### 获取 GET 请求内容

使用 url 模块解析参数， qs 模块也是可以的。
``` javascript
const url = require('url');

// request对象 是 createServer 中的 request
let params = url.parse(request.url, true).query;
```

#### 获取 POST 请求内容

等待请求体传输可能是一件耗时的工作。node.js 默认是不会解析请求体的，当需要的时候，需要手动来做

``` javascript
const http = require('http');
const querystring = require('querystring');
const util = require('util');
 
http.createServer(function(request, response){
    // 定义了一个post变量，用于暂存请求体的信息
    let post = '';     
 
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    request.on('data', function(chunk){    
        post += chunk;
    });
 
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    request.on('end', function(){    
        post = querystring.parse(post);
        response.end(util.inspect(post));
    });
}).listen(3000);
```


