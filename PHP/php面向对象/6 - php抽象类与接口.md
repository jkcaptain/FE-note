# php抽象类与接口

### 抽象方法和抽象类

#### 抽象方法

特性：

没有方法体，直接分号结束，必须使用 `abstract` 关键字定义

包含抽象方法的类，必须是抽象类。类的前面也需要使用 `abstract` 定义。

``` php
public abstract function fun();
```

#### 抽象类

特性：

使用 `abstract` 关键字定义

不能实例化，也就是不能 new 成对象

若想使用抽象类，就必须定义一个类去继承这个抽象类，并实现抽象方法。

小demo
``` php
abstract class Person
{
    public abstract function eat();
}

class Man extends Person
{
    public function eat() {
        echo '男人吃米饭';
    }
}

class Woman extends Person
{
    public function eat() {
        echo '女人吃水果';
    }
}

$man = new Man;
$woman = new Woman;
$man->eat();
$woman->eat();
```

#### 一句话总结：抽象类可以没有抽象方法，但含有抽象方法的类必须是抽象类。

### 接口技术

#### 为什么需要接口

因为 php 和大多数编程语言一样，不支持多重继承，也就是说，每个类只能继承一个父类。

为了解决这个问题，php引入了接口。

#### 接口的使用规则

接口的思想是，指定了一个实现该接口的类，必须实现的一系列函数。

使用接口，可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。

要实现一个接口，使用 implements 操作符。类中必须实现接口中定义的`所有方法`，否则会报一个致命错误。

接口中定义的所有方法都必须是公有，这是接口的特性。

定义格式：
``` php
interface 接口名称 {
    // 常量成员 （使用 const 关键字定义）
    // 抽象方法 （不需要使用 abstract 关键字）
}
```

使用格式：
``` php
class 类名 implements 接口名1[, 接口名2, ...]
```

小demo
``` php
interface Person
{
    const TYPE = "person";
    public function run();
    public function eat();
}

interface Study 
{
    public function read();
}

class Student implements Person, Study
{
    public function run() {        
        echo "student run";
        echo "<br/>";
    }

    public function eat() {        
        echo "student eat";
        echo "<br/>";
    }

    public function read() {        
        echo "student read";
        echo "<br/>";
    }
}

$jk = new Student;
$jk->run();

echo $jk::TYPE;
```

### 抽象类和接口的区别

#### 概念上的区别
1. 接口是抽象类的变体，接口中所有的方法`默认都是抽象方法`。而抽象类是声明方法的存在而不去实现它的类。

2. 多继承：接口可以，抽象类不可以

3. 方法的实现：接口可以定义方法，不能实现。而抽象类可以实现部分方法。

4. 基本数据类型：接口中为 static，而抽象类不是的。

5. 静态代码块以及静态方法：接口中不能含有，抽象类可以含有。

#### 使用上的区别

1. 当你关注一个`事物的本质`的时候，用`抽象类`。当你关注一个`操作`的时候，用`接口`。

2. 接口 是对`动作`的抽象，表示这个对象能做什么，对类的局部行为进行抽象。
   
   抽象类 是对`根源`的抽象，表示这个类是什么，对类的整体进行抽象，对一类事物的抽象描述。

   例如：把 男人，女人 当成两个类，那他们的抽象类是 `人`，说明他们都是人。
   人可以吃东西，动物也可以吃东西，吃东西是一种行为，可以把 `吃东西`定义为一个接口，然后让这些类
   去实现接口。

   所以，高级语言，都是一个子类只能继承一个父类（你不可能同时是生物和非生物），但可以实现多个接口，也就是允许有多种行为（吃饭，睡觉，打豆豆）；
