# 初识php

1. 安装 XAMPP 集成开发环境

2. 了解 php 语言

> PHP（外文名:PHP: Hypertext Preprocessor，中文名：“超文本预处理器”）是一种通用开源脚本语言。语法吸收了C语言、Java和Perl的特点，利于学习，使用广泛，主要适用于Web开发领域。

3. 安装完 XAMPP 开发环境后， 启动 Control Panel 面板，点击 Explorer 按钮，就会打开XAMPP的安装目录。可以将代码资源放在安装目录的 `htdocs` 文件夹下。

# php 基本规则

变量以 $ 符号开头，弱类型，变量定义时代码末尾必须有分号。

php 拥有块级作用域

变量有三种作用域：global（全局）， local（局部），static（静态）

函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。

函数内部声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。

``` php
$a = '我是外部的'

if (true) {
    echo $a;   // 不会报错    
}

function test() {
    echo $a;    // 会报错
}

function test2() {
    global $a;
    echo $a;    // 不会报错    
}
```

如何判断变量是否被声明？ 使用 `isset`
``` php
if (isset($a)) {
    echo '$a 已声明'
}
```

