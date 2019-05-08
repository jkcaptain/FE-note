# express路由

### 概念与意义

路由是指如何定义应用的端点（URLs）以及如何响应客户端的请求。

说的通俗一点，就是响应浏览器在地址栏里访问的一串url

路由的命名最好通俗易懂

### 定义路由

路由方法源于 HTTP 请求方法，和 express 实例相关联。

标准的定义规则：`controller/action`

正规项目定义路由时，肯定是用正则匹配的。

注意定义路由时，如果已经 `send`，此时响应已经结束，是不会再触发 `next`的。
``` javascript
app.get('/index/test', (req, res, next) => {
    console.log('before');
    next();
}, (req, res, next) => {
    res.send('Hello indexTest get');      // 已经 send 了
    next();
}, (req, res) => {
    console.log('这里不会执行了');
});
```

其他 api
``` javascript
// 一个特殊的路由方法，对一个路径上的所有请求加载中间件
app.all()   // 

// 定义一个公用路由
app.route('/test')
    .get((req, res) => {})
    .post((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {})
```

#### 使用路由级中间件

参考第二章

#### 思考

问：为什么需要设置必经路由呢？

答：例如需要判断登录态，就需要设置必经路由了。或者每个请求接收/响应之前，需要额外判断的一些业务场景。

