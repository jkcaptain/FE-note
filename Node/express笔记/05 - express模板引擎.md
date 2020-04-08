# express 模板引擎

### 为什么需要模板引擎

当项目需要首屏直出时，就需要后端 response 直接返回 html 模板了。

### 用法以及注意事项

#### 使用生成器

我们使用 `express生成器` 来自动生成工程目录，并使用 `ejs` 作为模板引擎。

``` shell
npm install express-generator -g

express --view=ejs class05
```

生成项目工程之后，cmd窗口会提示我们之后几步的操作。告诉我们怎么`npm start` 并开启 debug 模式。

#### 自定义

如果不使用生成器，自己规划工程目录的话，需要在 `app.js`，设置模板引擎的一些选项。

``` javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```
然后在 views 目录下，建一个 index.ejs 
``` html
// index.ejs

<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```
在 app.js 处，定义路由，注意 res.render 的参数，需要和文件名一致。
``` javascript
// app.js

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
})
```

如果需要使用公用部件，可以使用 `include`
``` html
<%- include('header') -%>
<main></main>
<%- include('footer') -%>
```

### 优秀的模板引擎工具

[ejs](https://github.com/mde/ejs)



