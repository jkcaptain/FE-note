# php和MySql实践

### 基础回顾：
1. php 中的 array 是一个特殊的数据结构，和 js 中的 array 不一样。在php中， 它可以是数组，也可以是对象。

插入数据时，如果没有使用 `key` 值，则默认的 `key` 是索引，对前端而言，此时是一个数组。否则，就是一个对象。
``` php

// 这个时候，是一个对象
array('errcode' => 0, 'message' => 'xxx'); 

// 这个时候，是一个数组
$arr = array();
array_push($arr, array('name' => 'jk'));
```
2. 接收 json 格式的数据，使用 `json_decode` 和 `file_get_contents`
``` php
$data = json_decode(file_get_contents('php://input'));
$news_title = $data->news_title;
$news_img = $data->news_img;
```

### 实践

> 实现一个小 demo，可以往 phpMyAdmin 的数据库中插入数据，也可以搜索出数据并显示在前端

前端页面代码:

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>新闻管理系统</title>
    <style>
        label{ display: inline-block; min-width: 6em; }
    </style>
    <script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
</head>

<body>
    <form id="form">
        <div><label for="">新闻标题</label><input type="text" name="news_title"></div>
        <div><label for="">新闻图片链接</label><input type="text" name="news_img"></div>
        <div><label for="">新闻内容</label><textarea name="news_content" id="" cols="30" rows="10"></textarea></div>
        <div><label for="">添加时间</label><input type="date" name="add_time"></div>
        <div><input type="submit" id="submit" value="提交"><input type="reset" value="重置"></div>
    </form>
    <hr>
    <div class="result-wrapper">
        <button id="search">搜索</button>
        <table id="list" border="1"></table>
    </div>

    <script>
        // 提交
        $('#submit').on('click', function (e) {
            e.preventDefault();

            const formData = $('#form').serializeArray();
            let data = {};
            formData.forEach(item => data[item.name] = item.value);

            $.ajax({
                url: './insert.php',
                type: 'post',
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success(res) {
                    if (res.errcode === 0) {
                        alert(res.message);
                    }
                }
            });
        });

        // 查询数据
        $('#search').on('click', function (e) {
            $.ajax({
                url: './select.php',
                type: 'get',
                dataType: 'json',
                success(res) {
                    if (res.errcode === 0) {
                        let data = res.data;
                        let html = '';
                        data.forEach(item => {
                            html += `<tr>
                                <td>${item.news_title}</td>
                                <td>${item.news_img}</td>
                                <td>${item.news_content}</td>
                                <td>${item.add_time}</td>
                            </tr>`;
                        });

                        $('#list').html(html);
                    }
                }
            })
        });
    </script>
</body>

</html>
```

insert.php 
实现插入数据功能
``` php
header("Content-Type: application/json;charset=utf-8");

$link = mysqli_connect('localhost', 'root', '');

if (!$link) {
    die('can not connect db ' . mysqli_error($link));
}

mysqli_select_db($link, 'phplesson');
mysqli_query($link, 'SET NAMES utf8');

// 使用表单提交
// $news_title = $_REQUEST['news_title'];
// $news_img = $_REQUEST['news_img'];
// $news_content = $_REQUEST['news_content'];
// $add_time = $_REQUEST['add_time'];

// 使用 json 格式提交
$data = json_decode(file_get_contents('php://input'));
$news_title = $data->news_title;
$news_img = $data->news_img;
$news_content = $data->news_content;
$add_time = $data->add_time;

$sql = "INSERT INTO news (news_title, news_img, news_content, add_time) VALUES ('$news_title', '$news_img', '$news_content', '$add_time')";
$result = mysqli_query($link, $sql);

if ($result) {
    echo json_encode(array('errcode' => 0, 'message' => '添加数据成功'));
} else {
    echo json_encode(array('errcode' => 6001, 'message' => '添加数据失败'));
}

mysqli_close($link);
```
select.php 
实现查询数据功能
``` php

// 连接 sql 的代码，和 insert.php 是一样，这里省略

$sql = "SELECT * FROM news";
$result = mysqli_query($link, $sql);

$data = array();
while($row = mysqli_fetch_array($result)) {
    array_push($data, 
        array(  
            'news_title' => $row['news_title'],
            'news_img' => $row['news_img'],
            'news_content' => $row['news_content'],
            'add_time' => $row['add_time']
        )
    );
}

$res = array('errcode' => 0, 'data' => $data, 'message' => '获取成功');
echo json_encode($res);

// 关闭数据库连接
```

至此，一个简单的小demo，算是完成了，实现了数据的插入和查询。