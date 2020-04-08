# php 和 MySql

基础 api
``` php
$link = mysqli_connect('localhost', 'user', 'pwd'); // 连接数据库

mysqli_select_db($link, $db_name); // 选择数据库

mysqli_query($link, $sql); // 执行sql

mysqli_close($link); // 关闭数据库连接
```

解决插入数据的乱码问题
``` php
mysqli_query($link, 'SET NAMES utf8');
```

理论实践
1. 创建与数据库的连接，并往表中添加一条数据。

phpMyAdmin 数据库的默认账户是`root`，默认密码是空字符串。

可以在 `xampp` 安装目录下找到 `phpMyAdmin/config.inc.php` 进行修改。

php7 不支持 `mysql_connect`，改为 `mysqli_connect`。其他 api 也是类似。
``` php
$link = mysqli_connect('localhost', 'root', '');

if (!$link) {
    die('can not connect' . mysqli_error());
} else {
    echo 'mysql connect ok';
    echo '<br>';
}

mysqli_select_db($link, 'phplesson');
mysqli_query($link, 'SET NAMES utf8');

$sql = "INSERT INTO `news` (`news_title`, `news_img`, `news_content`, `add_time`) VALUES ('测试sql插入', '', 'https://www.baidu.com/img/bd_logo1.png', '')";
$result = mysqli_query($link, $sql);

if (!$result) {
    die('mysqli_query error: ' . mysqli_error($link));
} else {
    echo 'sql query ok';
}

mysqli_close($link);
```

2. 删除数据
``` php
$sql = "DELETE FROM news WHERE news_content='https://www.baidu.com/img/bd_logo1.png'";
$result = mysqli_query($link, $sql);
```

3. 修改数据
``` php
$sql = "UPDATE news SET news_img='http://www.a.com/test.jpg' WHERE news_content='https://www.baidu.com/img/bd_logo1.png'";
$result = mysqli_query($link, $sql);
```

4. 查询数据
``` php
$sql = "SELECT * FROM news WHERE news_content='https://www.baidu.com/img/bd_logo1.png'";
$result = mysqli_query($link, $sql);

echo '<table border="1">';
while($row = mysqli_fetch_array($result)) {
    echo '<tr>';
    echo '<td>' . $row['news_id'] . '</td>';
    echo '<td>' . $row['news_title'] . '</td>';
    echo '<td>' . $row['news_img'] . '</td>';
    echo '<td>' . $row['news_content'] . '</td>';
    echo '<td>' . $row['add_time'] . '</td>';
    echo '</tr>';
}
echo '</table>';
```




