# php面向对象之封装性

### 设置私有成员和私有方法访问

封装性是面向对象编程中的三大特性之一，封装就是把对象中的成员属性和成员方法加上访问修饰符，使其尽可能隐藏对象的内部细节，以达到对成员的访问控制（切记不是拒绝访问，有魔术方法呢）。

php5 支持如下 3 种访问修饰符
``` php
// 公有的，默认
// 特性：对象内外部都可访问
public     

// 私有的 
// 特性：对象外部不能访问，只能在对象内部通过 $this 访问
private    

// 受保护的
// 特性：对象外部不能访问，只能在对象内部通过 $this 访问
protected  

private 与 protected 在继承的时候，会有区别。
```
一个小demo
``` php
/** 
 * 定义一个类，学习 public private protected
*/
class Person 
{
    public $name;       // 公有的
    private $age;       // 私有的
    protected $money;   // 受保护的

    // 构造方法
    public function __construct($name, $age, $money) {
        $this->name = $name;
        $this->age = $age;
        $this->money = $money;
    }

    // 公有的成员方法
    public function getUserCard() {
        echo $this->name ."--". $this->getAge() ."--". $this->getMoney();
    }

    // 私有的成员方法，不能在类的外部被直接访问
    private function getAge() {
        return $this->age;
    }

    // 受保护的成员方法，不能在类的外部被直接访问
    protected function getMoney() {
        return $this->money;
    }    
}

$xiaojie = new Person('jk', 26, 10000000);
echo $xiaojie->getUserCard();
echo $xiaojie->getAge();  // 无法访问
echo $xiaojie->getMoney();  // 无法访问
```

### 魔术方法

#### 简介：

> PHP 将所有以 __（两个下划线）开头的类方法保留为魔术方法。

我突然觉得，有的魔术方法，是为了让使用者获取到 private 或者 protected 成员而诞生的。

#### 常见的魔术方法：

注：以下代码皆以上面的例子为基础

__set

> 在给不可访问属性赋值时，__set() 会被调用。

```php
public function __get($key) {
    if ($key == "age" || $key == "money") {            
        return "this is sectet";
    }
}

echo $xiaojie->age;
// this is sectet
```

__get

> 读取不可访问属性值时，__get() 会被调用

``` php
public function __set($key, $value) {
    if ($key == "money") {
        $this->money = $value;
    }
}

$xiaojie->money = 1000000000;
echo $xiaojie->getUserCard();
// jk--26--1000000000
```

__isset

>当对不可访问属性调用 isset() 或 empty() 时，__isset() 会被调用。

``` php
public function __isset($key) {
    if ($key == "money") {
        return isset($this->money);
    }
}

var_dump( isset($xiaojie->money) );
// bool(true)
```

__unset

>当对不可访问属性调用 unset() 时，__unset() 会被调用。

``` php
public function __unset($key) {
    if ($key == 'age') {
        unset($this->age);
    }
}

unset($xiaojie->age);
echo $xiaojie->getUserCard();
// jk--this is sectet--1000000000
```

### 总结

1. 为了考虑封装性，php提供了 public private protected 三种访问修饰符

2. 魔术方法真的好像拦截器