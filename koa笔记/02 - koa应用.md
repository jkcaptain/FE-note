# koa 应用

### 基础回顾

koa 在语法方面，和 express 还是很像的。

`ctx(context)` 对象非常重要，它贯穿了整个请求和响应的流程。

其实，我们使用中间件处理请求和响应时，可以理解为都是在处理 `ctx` 这个上下文对象。

`koa`注册中间件的时候，有一个区别：`express`的参数有`req`和`res`，而 `koa` 就只有一个 `ctx`，它上面代理了 `koa`的`request`和`response`对象的api，也就是使用了别名，使得代码更简洁。

``` javascript
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';   // ctx.body 其实就是 ctx.response.body
});

app.listen(3000);
```

### app

Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。

``` javascript
app.use()

app.on('error', (err, ctx) => {});

app.context       // 当前上下文对象
app.context.db    // 可以自由地往 context 上挂载对象

app.env           // 默认是 NODE_ENV 或 "development"
app.proxy 
```
