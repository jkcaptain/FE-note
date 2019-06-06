# koa之request

### request

Koa Request 对象是在 node 的 vanilla 请求对象之上的抽象。

vanilla 请求对象的意思，可以理解为原始的 node http 请求对象。

request对象的属性，大都支持读和写，这里记录一些常用的。
``` javascript
// 可读可写
request.header       // 请求头
request.path         // 请求路径名
request.query        // 查询字符串, 对象格式

// 只读
request.type         // 获取请求 Content-Type
request.fresh        // 涉及到 If-None-Match / ETag 协商缓存，具体可查看文档
```

方法
``` javascript
request.is()         // 检查传入请求是否包含 Content-Type 头字段。如果匹配成功，返回匹配的 content-type，否则返回 false
request.accepts()    // 检查给定的 type(s) 是否可以接受
```