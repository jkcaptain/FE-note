# node.js文件系统

以前，人们说JavaScript不能写后端的原因，就是因为没有文件系统，没有与计算机底层交互的接口，也就是无法操作服务器。如今 node.js 实现了这一切。

### 常用api

尽量采用异步操作

``` javascript
const fs = require('fs');

// 读取文件 
fs.readFile('data1.txt', (err, data) => {
    console.log(data.toString());
});

// 写入文件
fs.writeFile('test.txt', '我是通过 fs.writeFile 写入文件的内容', (err) => {
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('test.txt', (err, data) => {
        console.log(data.toString());
    });
});

// 打开文件
console.log("准备打开文件！");
fs.open('data.txt', 'r+', (err, fd) => {
    console.log("文件打开成功！");
}); 

// 获取文件信息
fs.stat('data.txt', (err, stats) => {
    console.dir(stats);
});

// 读取文件 - 可以设置读取的内容长度，更灵活
fs.read();

// 写入文件 - 可以设置写入的内容长度，更灵活
fs.write();

// 关闭文件
fs.close();

// 删除文件
fs.unlink();

// 截取文件
fs.ftruncate();

// 创建目录
fs.mkdir();

// 读取目录
fs.readdir();

// 删除目录
fs.rmdir();
```

api比较多，只列出常用的部分，具体用法在使用时，再去查看文档。

参考链接

[Node.js v10.15.3 文档](http://nodejs.cn/api/fs.html)

[Node.js 文件系统 - 菜鸟教程](https://www.runoob.com/nodejs/nodejs-fs.html)