1.请写出如下代码输出值，并解释为什么。
``` javascript
console.log(a);
console.log(typeof yideng(a));
var flag = true;
if (!flag) {
	var a = 1;
}
if (flag) {
    function yideng(a) {
        yideng = a;
        console.log("yideng1");
    }
} else {
    function yideng(a) {
        yideng = a;
        console.log("yideng2");
    }
}
```
答案：

2.请写出如下输出值，并完成附加题的作答
``` javascript
function fn(){
	console.log(this.length);
}
var yideng = {
    length:5,
    method:function(){
        "use strict";
        fn();
        arguments[0]()
    }
}
const result = yideng.method.bind(null);
result(fn,1);
```
答案：

附加题：
``` javascript
function yideng(a,b,c){
    console.log(this.length); 
    console.log(this.callee.length); 
}
function fn(d){
	arguments[0](10,20,30,40,50);
}
fn(yideng,10,20,30);
```
答案：

3.请问变量a会被GC回收么，为什么呢？
``` javascript
function test(){
    var a = "yideng";
    return function(){
        eval("");
    }
}
test()();
```
答案：

4.清写出以下代码输出值，并解释原因。
``` javascript
Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};
var yideng = new Person();
console.log(Person.a);
console.log(yideng.a);
console.log(1..a);
console.log(1.a);
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);
```
Object.prototype 和 Function.prototype 打印的内容差距很大原因是什么呢？

答案：

5.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
Cruze买给了小王价格是14万。很多库里会使用Object.create(null)是什么原因么？

答案：

6.请写出你了解的ES6元编程。

答案：

7.请按照下方要求作答，并解释原理？请解释下babel编译后的async原理
``` javascript
let a = 0;
let yideng = async () => {
    a = a + await 10;
    console.log(a)
}
yideng();
console.log(++a);
```

8.请问点击 `<buttion id=“test”></button>` 会有反应么？为什么？能解决么？
``` javascript
$('#test').click(function(argument) {
    console.log(1);
});
setTimeout(function() {
    console.log(2);
}, 0);
while (true) {
    console.log(Math.random());
}
```
答案：

9.请用ES5实现ES6 Promise A+规范的代码，同时你能解释下如何使用Promise完成事务的操作么？

答案：

10.请写出如下输出值，并解释为什么。
``` javascript
var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
    var pusher = {
            value: "item"+i
        },
        tmp;
    if (i !== 2) {
        tmp = []
        pusher.children = tmp
    }
    arr.push(pusher);
    arr = tmp;
}
console.log(s[0]);
```

答案：

【附加题】.请描述你理解的函数式编程，并书写如下代码结果。那么你能使用 `Zone`+`RX` 写出一段FRP的代码么？

``` javascript
var Container = function(x) {
    this.__value = x;
}
Container.of = x => new Container(x);
Container.prototype.map = function(f){
    return Container.of(f(this.__value))
}
Container.of(3)
    .map(x => x + 1) 
    .map(x => 'Result is ' + x);
```
