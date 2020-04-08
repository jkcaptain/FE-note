# node.js环境及npm深入

### repl（Read Eval Print Loop） 交互式解释器

直接在命令行输入 `node`，即可开启 `repl` 模式。

常用的一些命令：

``` javascript
ctrl + c - 退出当前终端。

ctrl + c 按下两次 - 退出 Node REPL。

ctrl + d - 退出 Node REPL.

向上/向下 键 - 查看输入的历史命令

tab 键 - 列出当前命令

.help - 列出使用命令

.break - 退出多行表达式

.clear - 退出多行表达式

.save filename - 保存当前的 Node REPL 会话到指定文件

.load filename - 载入当前 Node REPL 会话的文件内容。
```

### 包管理器 npm 详解

``` javascript
npm install      // 安装包

npm search       // 查找包

npm help         // 帮助文档

npm <command> -h // 某个命令的详细用法

// 详细用法参考官方文档
```

### 参考链接

[Node.js REPL(交互式解释器)](https://www.runoob.com/nodejs/nodejs-repl.html)

[npm 官方文档](https://www.npmjs.com.cn/cli/install/)