# koa之response

### response

Koa Response 对象是在 node 的 vanilla 请求对象之上的抽象。

vanilla 请求对象的意思，可以理解为原始的 node http 请求对象。

response对象的属性，大都也支持读和写，这里记录一些常用的。

``` javascript
// 可读，可写
response.status         // 响应状态码
response.body           // 响应内容
response.type           // 获取响应 Content-Type 不含参数 "charset"
response.lastModified   // 设置或读取 Last-Modified 标头

// 只读
response.header

// 只写
response.etag           // 设置 Etag 响应
ctx.etag = crypto.createHash('md5').update(ctx.body).digest('hex');
```

方法
``` javascript
response.redirect(url)   // 执行 [302] 重定向到 url
response.attachment()    // 将 Content-Disposition 设置为 “附件” 以指示客户端提示下载
```