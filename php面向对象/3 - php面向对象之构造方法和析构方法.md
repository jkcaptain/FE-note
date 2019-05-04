# php面向对象之构造方法和析构方法

### 基础回顾

构造方法：
``` php
// __construct ，当 new 这个类的时候，自动执行
public function __construct($name, $age) {
    $this->name = $name;
    $this->age = $age;
}
```
析构方法：
``` php
// __destruct , 可用于进行资源的释放，例如数据库关闭，读取文件
// 当对象被销毁的时候，自动执行
public function __destruct() {
    echo "bye bye $this->name";
}
```

### 实践
``` php
class Person1 {
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
        echo "hello $this->name";    
        echo "<br/>";    
    }

    public function __destruct() {        
        echo "bye bye $this->name";   
        echo "<br/>";        
    }
}

// 第一种调用方式
$xiaoming = new Person1('xiaoming', 21);
$xiaohei = new Person1('xiaohei', 23);

// 第二种调用方式，不使用变量赋值
// new Person1('xiaoming', 21);
// new Person1('xiaohei', 23);

echo "<hr>";

// 第一种调用方式 - 输出
// hello xiaoming
// hello xiaohei
// bye bye xiaohei
// bye bye xiaoming

// 第二种调用方式 - 输出
// hello xiaoming
// bye bye xiaoming
// hello xiaohei
// bye bye xiaohei
```

### 注意事项

如果第一种调用方式，
php析构函数，是按照栈结构的顺序执行，也就是先入后出，后入先出。越早实例化的对象，越靠后执行析构函数。

如果是第二种调用方式，
php析构函数，会每次new 时，依次触发 __destruct。推测因为没有赋值，所以 new 完就被回收了。

为什么会这样，以下是我的个人推测：

如果按照先后顺序释放内存的话，假如第二个对象依赖第一个，或者后面的对象依赖前面的对象，那会不会导致垃圾回收时系统直接报错。

new 出来的实例，肯定是存储在堆内存中的，$xiaoming，$xiaohei 等变量是存储在栈内存中，他们的值为实例的指针地址的引用。其实并不是析构函数一定要倒序执行，而是php环境释放栈内存时，就是倒序遍历调用栈，一个个释放？

### 参考链接

[PHP中的析构函数执行顺序为什么是栈表现](https://segmentfault.com/q/1010000015973947/a-1020000015988115)
