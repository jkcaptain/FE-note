# php面向对象之基础知识

### 类与对象

对象是一种概念、抽象或具有状态、行为和标识的事物。

对象通常可由对象名、属性和操作三部分组成。

通俗的讲，在开发代码时，类就是 class, 对象就是 new 出来的实例。

### 如何抽象一个类

类包含成员属性，成员方法。

简单格式：
``` php
[修饰符] class 类名 {

    [成员属性]  // 也叫成员变量

    [成员方法]  // 也叫成员函数

}
```

完整格式：
``` php
[修饰符] class 类名 [extends 父类] [implements 接口1[, 接口2...]] {

    [成员属性]  // 也叫成员变量

    [成员方法]  // 也叫成员函数

}
```
### 通过类实例化对象

特殊对象的引用 $this
``` php
class Person {
    public $age;
    
    public function say($word) {
        echo "she say $word";
    }

    public function info() {
        $this->say('hi');
        return $this->age;
    }
}

$jk = new Person();
$jk->age = 22;

$age = $jk->info();
echo "<br/>";
echo $age;
```




