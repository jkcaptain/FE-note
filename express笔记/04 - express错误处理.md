# express错误处理

### 概念和意义

### 用法以及注意事项

1. 错误处理中间件和其他中间件是一样的，唯独一个区别就是，错误处理中间件需要4个参数，其他中间件是3个参数。它的第一个参数是 `err`，如下。

``` javascript
app.use((err, req, res, next) => {});
```

2. 错误处理中间件，要定义在其他 `app.use()` 和 路由调用之后。`next`是可以带参数的，方便把当前错误信息，传递到下一个中间件。

``` javascript
app.use(bodyParser.json())
app.use('/', (req, res) => {})
/* ... */
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}
```

3. 自定义错误处理的常用流程

捕获 `4xx` --->  捕获 `5xx` ---> 记录错误日志

### 优秀的日志工具

[log4j](https://github.com/log4js-node/log4js-node)

