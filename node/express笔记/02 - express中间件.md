# express中间件

### 中间件的概念与意义

个人理解：中间件的理念有点像 拦截器，例如 `js`的`Proxy`，`php`的魔术方法，`axios` 的请求拦截器等等。由此可见，这种处理问题的编程思想，是很早就有的。它的本质其实就是一个公共的、通用的函数或模块。

查看了下源码，`express` 和 `koa` 内部都是维护了一个中间件数组，每当 `app.use` 的时候，就将函数 `push` 进这个数组。

多个中间件运行时，它们遵循栈结构的处理流程，像是剥洋葱，也有点像 事件捕获和事件冒泡，所以中间件 `use` 的先后顺序也是需要注意的。

如果中间件内部没有调用next函数，那么执行权就不会传递下去。

``` javascript
const one = (req, res, next) => {
    console.log('>> one');
    next();
    console.log('<< one');
}

const two = (req, res, next) => {
    console.log('>> two');
    next();
    console.log('<< two');
}

const three = (req, res, next) => {
    console.log('>> three');
    next();
    console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

// 输出
>> one
>> two
>> three
<< three
<< two
<< one
```

### 应用级中间件

应用级中间件表示，所有请求都会经过此中间件。

``` javascript
// 没有挂载路径的中间件，应用中的每个请求都会执行该中间件
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next();
});

// 挂载至/user/:id的中间件，任何执行/user/:id的请求都会执行它
app.use('/use/:id',(req,res,next) => {
    console.log('Request Type',req.method);
    next();
})

// 路由和句柄函数（中间件系统），处理指向/user/:id的GET请求
app.get('/user/:id',(req,res,next)=>{
    console.log('USER');
})
```

### 路由级中间件

路由级中间件和应用级中间件类似，只不过是它绑定对象为express.Router()。

路由级中间件使用 router.use() 加载。

``` javascript
const router = express.router();  // router 中间件

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 处理/user/:id，渲染一个特殊页面
router.get('user/:id',(req,res,next)=>{
    console.log(req.params.id)
    res.render('special')
})

// 将路由挂载至应用
app.use('/', router);
```

### 错误处理中间件

错误处理中间件，可以在程序出错时，做兜底处理。常用于 `4xx`, `5xx` 等状态码的提示。

``` javascript  
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

### 内置中间件

也叫 中间件 函数

``` javascript
express.static()
express.json()
express.urlencoded()
```

### 第三方中间件
``` javascript
const cookieParser = require('cookie-parser');

app.use(cookieParser());
```

### 中间件的开发模板
``` javascript
module.exports = function(options) {
  return function(req, res, next) {
    // Implement the middleware function based on the options object
    next()
  }
}
```

### 参考链接

[Express 官方文档](http://www.expressjs.com.cn/4x/api.html)

[Koa 框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html)

[Express中间件的原理及实现](https://www.jianshu.com/p/797a4e38fe77)

[Express中间件，看这篇文章就够了(#^.^#)](https://www.cnblogs.com/okaychen/p/8057204.html)