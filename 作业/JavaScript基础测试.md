# javascript 基础测试

1.请写出弹出值，并解释为什么。

``` javascript
alert(a)
a();
var a = 3;
function a(){
	alert(10);
} 
alert(a)
a = 6;
a();
```
答案:
``` javascript
1. 弹出 a 函数体
2. 10
3. 3
4 TypeError a is not a function
```
原因：

涉及到两个概念，函数声明提升和变量声明提升。
1. 在同一作用域下，函数会首先被提升，然后才是变量  —— 《你不知道的JavaScript(上卷)第40页》。
2. `var a`，当解释器发现 `a` 已经被声明过，就会直接忽略。
所以上面的代码，实际执行效果如下
``` javascript
function a(){
	alert(10);
} 
var a;  // a 已存在，直接忽略
alert(a)
a();
a = 3;
// ...
```

2.请写出如下输出值，并写出把注释掉的代码取消注释后的值，并解释为什么

``` javascript
this.a = 20;
var test = {
    a: 40,
    init: ()=> {
        console.log(this.a);
        function go() {
            // this.a = 60;
            console.log(this.a);
        }
        go.prototype.a = 50;
        return go; 
    }
};
//var p = test.init();
//p();
new (test.init())();
```
答案：

``` javascript
20, 50
```
去掉代码注释后的答案：
``` javascript
20, 60, 60, 60
```
为什么：

首先要明白涉及的知识点: 箭头函数，new 关键字，原型
1. 箭头函数，会绑定函数声明时的作用域。
2. new 出来的实例，构造函数中的 this 指向实例对象本身，如果没有就往原型上去找，

答完了？？继续
``` javascript
var num = 1;
function yideng() {
    "use strict";
    console.log(this.num++);
}
function yideng2() {
    console.log(++this.num);
}
(function() {
    "use strict";
    yideng2();
})();
yideng();
```
答案：
``` javascript
2
TypeError cannot read property num of undefined
```
为什么：
涉及的知识点：严格模式

2-1 拓展题(请写出以下代码执行结果)：

``` javascript
function C1(name) {
    if (name) this.name = name;
}
function C2(name) {
    this.name = name;
}
function C3(name) {
    this.name = name || 'fe';
}
C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";
console.log((new C1().name) + (new C2().name) + (new C3().name));
```
答案：

``` javascript
yideng undefined fe
```
为什么：
涉及的知识点：实例对象与原型的关系


3.请写出如下点击li的输出值，并用三种办法正确输出li里的数字。

``` html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>

<script type="text/javascript">
var list_li = document.getElementsByTagName("li");
for (var i = 0; i < list_li.length; i++) {
    list_li[i].onclick = function() {
        console.log(i);
    }
}
</script>
```
答案：

4.写出输出值，并解释为什么。

``` javascript
function test(m) {
    m = {v:5}
}
var m = {k: 30};
test(m);
alert(m.v);
```
答案：
``` javascript
undefined
```

原因：


5.请写出代码执行结果，并解释为什么？

``` javascript
function yideng() {
    console.log(1);
}
(function () {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }
    yideng();
})();
```

答案：

6.请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等
生以此类推。不允许使用if switch等。

答案：

7.请用一句话遍历变量a。(禁止用for 已知var a = “abc”)

答案：

8.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
Cruze买给了小王价格是14万。

答案：

9.请你写出如何利用EcmaScript6/7（小Demo）优化多步异步嵌套的代码？

答案：

10.【仔细思考】写出如下代码执行结果，并解释为什么。
``` javascript
var length = 10;
function fn() {
    console.log(this.length);
}
var yideng = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};
yideng.method(fn, 1);
```

答案：