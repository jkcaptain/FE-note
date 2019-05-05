# php面向对象之继承与多态

### 继承

#### 类继承的应用
1. php 只支持单继承，不允许多重继承（接口在这里忍不住笑出声）。一个子类只能有一个父类，不允许一个类继承多个类，但一个类可以被多个类继承。

2. 虽然 php 不允许继承多个类，但它允许多层继承，即 B 继承 A，C又继承B，那么 C 也间接继承了 A。

#### 访问类型控制
|  | public(默认的) | private | protected |
| :------: | :------: | :------: | :------: |
| 在同一类中 | 可以 | 可以 | 可以 |
| 在子类中 | 可以 | 不可以 | 可以 |
| 在类的外部 | 可以 | 不可以 | 不可以 |

``` php
class Person {
    public $name;
    private $age;
    protected $money;

    public function __construct($name, $age, $money) {
        $this->name = $name;
        $this->age = $age;
        $this->money = $money;
    }

    public function getUserCard() {
        echo "parent--" . $this->name . "--" . $this->age . "--" . $this->money;
    }
}

class YellowPerson extends Person {
    public function __construct($name, $age, $money) {
        parent::__construct($name, $age, $money);
    }

    public function getUserCard() {
        echo "child--" . $this->name . "--" . $this->age . "--" . $this->money; 
    }

    public function getUserAge() {
        echo "this->age " . $this->age;
    }

    public function getUserMoney() {
        echo "this->money " . $this->money;
    }
}

$person = new YellowPerson('jk', 26, '100m');
$person->getUserCard();  // child--jk----100m
echo "<br/>";

// $person->getUserAge();  // Undefined property: YellowPerson::$age， 因为 private 属性不能被继承

$person->getUserMoney(); // this->money 100m
echo "<br/>";
```
一句话总结：私有的不可继承，受保护的可以继承。
### 多态
多态的表现包括重写和重载

#### 重写
重写，也叫覆盖。在子类中允许重写（覆盖）父类中的方法。

1. 当一个父类和子类有一个方法，参数和名字完全一致，那么也叫做子类方法重写了父类的方法

2. 在实行方法重写的时候，访问修饰符可以是不一样的，但是子类的访问范围必须大于等于父类的访问范围

#### 重载
PHP中的重载与其它绝大多数面向对象语言不同。传统的重载是用于提供多个同名的类方法，但各方法的参数类型和个数不同。

php 所提供的重载（overloading）是指动态地创建类属性和方法。我们是通过魔术方法（magic methods）来实现的。

php 所有的重载方法都必须被声明为 `public`。

在子类中，可以使用 parent 访问父类中被覆盖的属性和方法，如下：
``` php
parent::__construct();
parent::fun();
```

>可以使用 __get()，__set()，__isset() 和 __unset() 进行属性重载

原理是利用魔术方法拦截器的特性，在 __get() 中加一层判断。

>可以使用 __call() 和 __callStatic() 对方法重载
``` php
class MethodTest 
{
    public function __call($name, $arguments) 
    {
        // 注意: $name 的值区分大小写
        echo "Calling object method '$name' "
             . implode(', ', $arguments). "\n";
    }

    /**  PHP 5.3.0之后版本  */
    public static function __callStatic($name, $arguments) 
    {
        // 注意: $name 的值区分大小写
        echo "Calling static method '$name' "
             . implode(', ', $arguments). "\n";
    }
}

$obj = new MethodTest;
$obj->runTest('in object context');
```

