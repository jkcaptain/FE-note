# php基本操作

$GLOBALS 支持访问所有的全局变量

```
PHP 同时在名为 $GLOBALS[index] 的数组中存储了所有的全局变量。下标存有变量名。
```

include 和 require 的区别

```
include 和 require 语句是相同的，除了错误处理方面：

require 报错了就不执行后续代码了。
include 不管有没有报错，代码都会继续执行
```

数组
php 的数组可以生成一个类 json 对象的格式，只需要下标位置传入具体的 key 值。
这个和 JS 有点区别， JS 数组不可以转为 json 对象， JS 中 Array 和 Object键值对 还是有区别的。

``` php
$arrayTest = array('name' => 'jkcaptain', 'age' => 21);
echo json_encode($arrayTest);   // {"name":"jkcaptain","age":21}
echo $arrayTest['name'];    // jkcaptain
```

`session`, `$_SESSION` 可以存取 session 变量

`session_start` 只需要在程序的入口处运行一次即可。
``` php
session_start();

$_SESSION['views'] = 1;
echo $_SESSION['views'];
```


`$_GET`, `$_POST`, `$_REQUEST` 的使用

模拟一个简易的登录功能:

login.php
``` html
<div class="login">
    <div class="item">
        <label for="username">用户</label>
        <input type="text" id="username" autocomplete="off">
    </div>
    <div class="item">
        <label for="password">密码</label>
        <input type="text" id="password">
    </div>
    <button id="btn">登录</button>
</div>
<script>
    $('#btn').on('click', function(e) {
        let data = {
            username: $('#username').val() || '',
            password: $('#password').val() || ''
        }
        console.log(data);
        $.ajax({
            url: 'result.php',
            type: 'post',
            dataType: 'json',
            data,
            success(res) {
                console.log(res);
                alert(res.message);
            },
            error() {

            }
        })
    })
</script>
```

result.php
``` php
header("Content-Type: application/json;charset=utf-8");

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

if ($username == 'jk') {
    echo json_encode(array('errorCode' => 0, 'message' => '登录成功'));
} else {
    echo json_encode(array('errorCode' => -1, 'message' => '登录失败'));
}
```
