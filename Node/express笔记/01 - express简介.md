# express 简介

注：express 已经一年多没有发新版本了，建议使用 `koa`。这里本人是想了解 `express` 的基础用法。

### 核心特性

1. 可以设置中间件来响应 HTTP 请求。

2. 定义了路由表用于执行不同的 HTTP 请求动作。

3. 可以通过向模板传递参数来动态渲染 HTML 页面。

### 常用的工具模块与中间件

``` javascript
body-parser    // node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
cookie-parser  // 一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象
multer         // node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
supervisor     // 监听 node.js 进程，当 node 代码修改时，不需要重新启动服务器，直接刷新就能看到效果。
```

### 注册路由以及静态文件

路由有 get 和 post 等，可参考 restful api。

一个正规的项目，路由应该是单独一个目录定义的，方便管理。


#### 添加 get 请求
``` javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

// 项目入口
app.get('/', (req, res) => {
    console.dir(req.query);
    res.send('Hello World!')
});

// 使用模板
app.get('/tpl', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// 动态路由
app.get('/user/:name', (req, res) => {
    console.log(req.query);
    console.log(req.params.name); 
});

// 返回一个 json
app.get('/json', (req, res) => {
    res.json({
        name: 'jk',
        age: 26
    });
});
```

#### 添加 post 请求

简单的 post
``` javascript
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// 定义一个 post 请求
app.post('/search', (req, res) => {
    let { search } = req.body;
    // 重定向到百度搜索
    res.redirect('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+ search +'&rsv_pq=946740b200025cd9&rsv_t=1743eVOPB4n6RtORMgAy8xVJsgEZcF63pK%2FN%2Bw7gCQ7fh9SKsC0CQDcPj%2F8&rqlang=cn&rsv_enter=0&inputT=1946&rsv_sug4=2331')
});
```

上传文件
``` html
<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="image" size="50">
    <input type="submit" value="上传文件" />
</form>
```
``` javascript
app.post('/upload', (req, res) => {
    const [file] = req.files;
    const rootPath = '/static';
    const fileParentPath = `${__dirname}/${rootPath}`;
    const desFile = `${fileParentPath}/${file.originalname}`;

    // 写入文件
    const appendFile = () => {
        fs.readFile(file.path, (err, data) => {
            fs.writeFile(desFile, data, err => {
                let result = {};
                if (err) {
                    console.error(err);
                } else {
                    result = {
                        message: 'File uploaded successfully',
                        filename: file.originalname
                    }
                }
                console.log(result);
                res.json(result);
            });
        });
    };

    // 如果目录不存在，就创建目录
    fs.access(fileParentPath, err => {
        if (err) {
            console.log('目录不存在');
            console.log(err);
            fs.mkdir(fileParentPath, err => {
                appendFile();
            });
        } else {
            console.log('目录存在');
            appendFile();
        }
    });
});
```

#### 设置静态文件
``` javascript  
// 使用静态文件中间件
app.use(express.static('public'));

// 固定目录名称
app.use('/static', express.static('public'));
```

### Application

``` javascript
app.use()        // 使用某个中间件
```

### request

request 对象上有很多请求数据的信息

``` javascript
req.query        // url 中的查询参数
req.params       // url 路由规则匹配到的参数
```

### response

response 对象上有很多响应数据的信息

``` javascript
res.send()             // 发送 http 响应数据
res.sendFile()         // 以某个模板作为响应
res.json()             // 返回一个 json 对象
res.render()           // 返回一个已渲染的视图
res.redirect()         // 后端重定向
res.download()         // 触发下载
```

### 流程小结

1. 安装 express，引入并执行 `app=express()`

2. app listen 端口，启动一个后台服务

3. app.get 设置基础路由，然后 res.send, res.sendFile 返回响应数据

4. 如果不想每次改代码都重启服务，可以使用 supervisor。如果处理 post 请求，使用 `body-parser`，如果需要上传文件，使用 `multer`，如果需要处理 cookie，使用`cookie-parser`

### 参考链接

[Express 官方文档](http://www.expressjs.com.cn/4x/api.html)

[Express 中文文档](http://expressjs.com/zh-cn/)

[Node.js Express 框架 - 菜鸟教程](https://www.runoob.com/nodejs/nodejs-express-framework.html)


