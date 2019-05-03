# php PDO

### 基础回顾

> PDO 是 Php Data Object 的简称，顾名思义，也就是 php 数据对象

> PDO 提供了一个数据访问抽象层，对操作数据库的方法api实现统一。不管使用哪种数据库，都可以用
相同的函数（方法）来查询或获取数据

### 实践

1. 初始化 PDO
``` php
new PDO('数据库类型:host=服务器;dbname=数据库名称', '数据库用户名', '数据库密码');

// 后续例子都以 $dbh 为 PDO 实例
$dbh = new PDO($dsn, $user, $pass);
```

2. PDO 解决中文乱码
``` php
$dbh->query('set names utf8;');   
```

3. 基础 api
``` php
$dbh->query();  // 执行sql，返回结果集
$dbh->exec();   // 执行sql, 返回受影响的行数
```

3. demo实践，使用 phpMyAdmin 的数据库作为例子
``` php
header("Content-Type: text/html;charset=utf-8");

$dbms = 'mysql';
$host = 'localhost';
$dbName = 'phplesson';
$dsn = "$dbms:host=$host;dbname=$dbName";

$user = 'root';
$pass = '';

try {
    $dbh = new PDO($dsn, $user, $pass);
    echo '连接成功<br/>';  
    $dbh->query('set names utf8;');   

    $selectSQL = "select * from news";
    $insertSQL = "INSERT INTO news (news_title, news_img, news_content, add_time) VALUES ('测试pdo', 'png', '456', '2019-05-03')";

    $selectRes = $dbh->query($selectSQL);  // 执行sql，返回结果集
    foreach($selectRes as $row) {
        print $row['news_title'] . "<br/>";
        print $row['news_img'] . "<br/>";
        print $row['news_content'] . "<br/>";
        print $row['add_time'] . "<br/>";
    }
    echo "<br/>";

    $insertRow = $dbh->exec($insertSQL);   // 执行sql，返回影响的行数
    echo "插入数据成功, 已插入" . $insertRow . "条";
    
} catch (PDOException $e) {
    die('error: ' . $e->getMessage());
}
```