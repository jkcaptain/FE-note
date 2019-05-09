# koa 之 context

### context

Koa Context 将 node 的 request 和 response 对象封装到单个对象中，为编写 Web 应用程序和 API 提供了许多有用的方法

这里记录一些常用的api。
``` javascript
app.use(async ctx => {
  ctx; // 这是 Context
  ctx.request; // 这是 koa Request
  ctx.response; // 这是 koa Response
});
```

``` javascript
ctx.req           // Node 的 request 对象
ctx.res           // Node 的 response 对象
ctx.request       // koa 的 Request 对象
ctx.response      // koa 的 Response 对象

ctx.cookies       

ctx.set           // ctx.response.set

ctx.throw()       // 用于抛出状态码级别的错误，例如 404， 500 之类
```