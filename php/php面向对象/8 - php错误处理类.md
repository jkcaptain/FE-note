# php错误处理类

### 系统自带的异常处理

`Exception`

### 自定义异常处理

`extends Exception`

### 捕捉多个异常

多个 catch， 注意异常处理的先后顺序，系统的异常要放在最后。

### php 7 错误处理

php7 改变了大多数错误的报告方式。不同于传统（PHP 5）的错误报告机制，现在大多数错误被作为 Error 异常抛出。具体查看文档。

### 小demo
``` php
class MyException extends Exception
{
    public function getInfo() {
        return $this->getMessage();
    }
}

try {
    $type = $_GET["type"];

    if ($type == "system") {
        throw new Exception("system");
    } elseif ($type == "user") {
        throw new MyException("user");
    } else {
        throw new Exception('error');
    }
} catch (MyException $e) {
    echo '111';
    echo $e->getInfo();    
} catch (Exception $e) {
    echo '222';
    echo $e->getMessage();
}
```