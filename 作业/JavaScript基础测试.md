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
2. 构造函数的值，优先级要比原型链的高。

扩展知识点：
当对象内的函数使用 es6 的简写 或者 箭头函数时，是不能被 new 的
``` javascript
let o = {
    test() {}
}
new (o.test)();   // 报错 TypeError : o.test is not a constructor
```
new 对 bind 无效，因为 new 操作会创建一个空的新对象，作为
``` javascript
var a = 10;
function test() {
    console.log(this.a);
}
var obj = { a: 20 };
var result = test.bind(obj);
new result(); 
// 输出 undefined
```

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

函数定义在非严格模式下，在严格模式下调用该函数，this指向的是全局

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

``` javascript
list_li[i].onclick = (function(n) {
    console.log(n);
})(i);

list_li[i].onclick = () => {
    console.log(i);
}
```

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

定义函数时，函数的参数，就相当于是定义在函数内部的局部变量。
调用函数时，传入的参数，如果是引用类型，传入的是参数变量的地址。如果是基本类型，传入的是参数的具体值。
JavaScript都是值传递，只不过这个值可能是具体值，也可能是指针/地址。

上题中，调用 test 时，传入的是函数外部 m 对象的地址，而 test 内部也定义了一个 m 的局部变量，此时函数内 m 的值就是函数外部 m 的地址。
然后函数内部修改 m 局部变量，是不会影响到函数外部变量 m 的。

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

``` javascript
TypeError yideng is not a function
```

原因：

因为 es5 没有块级作用域， 在 if 中的函数声明，会被提升到当前作用域的顶部。

代码执行效果如下：
``` javascript
(function() {
    var yideng;
    if (false) {
        yideng = function() {
            console.log(2);
        }
    }
    yideng();
})();
```

6.请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等
生以此类推。不允许使用if switch等。

答案：

``` javascript
Math.ceil( (100 - x) / 10 );
```

7.请用一句话遍历变量a。(禁止用for 已知var a = “abc”)

答案：

原因：



8.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
Cruze卖给了小王价格是14万。

答案：
``` javascript
function Car(color, price) {
    this.color = color;
    this.price = price;
}
Car.prototype.saleMethod = function() {};

function Cruze(color, price) {
    Car.call(this, color, price);
}
Cruze.prototype.saleMethod = function() {
    console.log(`将${this.color}的Cruze卖给了小王，价格是${this.price}`);
}

// es6
class Car {
    constructor(color, price) {
        this.color = color;
        this.price = price;
    }
    saleMethod() {}
}

class Cruze extends Car {
    // constructor(color, price) {
    //     super(color, price);
    // }
    
    saleMethod() {
        console.log(`将${this.color}的Cruze卖给了小王，价格是${this.price}`);
    }
}

class BMW extends Car {
    // 默认什么都不写，相当于执行如下代码，默认执行父类构造函数
    // constructor(...args) {
    //     super(...args);
    // }
}
```

原因：

当类使用继承，并实例化时， 

es5 的继承是先创建子类的this，然后将父类的方法添加到子类的this上去； 

es6 的继承是创建父类的this对象，然后再对this对象添加方法/属性。 

如果子类没有定义constructor方法，constructor方法会被默认创建，并默认调用super函数。

注意: 在派生类中, 必须先调用 super() 才能使用 "this"。

9.请你写出如何利用EcmaScript6/7（小Demo）优化多步异步嵌套的代码？

答案：
``` javascript
function demo() {
    Promise.resolve()
        .then(res => demo1(res))
        .then(res => demo2(res));
}

async function demo() {
    await demo1();
    await demo2();
}
```

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

``` javascript
10, 10
```