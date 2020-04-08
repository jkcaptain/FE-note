# 认识phpMyAdmin

提供一些`sql`语句 快捷操作界面，自动生成 `sql` 语句，方面用户使用。

联想：由此我联想到目前好多表单页，也可以采用这种配置型的方式，避免重复劳动，可以给小白用户使用。

## sql 的简单语法

`sql`语句分为 `DML`(数据操作语言) 和 `DDL`(数据定义语言)

### DML 包含对数据的增删改查操作
```
INSERT INTO 表名称 (列1, 列2,...) VALUES (值1, 值2,....) 

DELETE FROM 表名称 WHERE 列名称=某值

UPDATE 表名称 SET 列名称=新值 WHERE 列名称=某值

SELECT 列名称 FROM 表名称 WHERE 列名称 运算符 值
```

排序 和 AND & OR 运算符
```
SELECT * FROM 表名称 ORDER BY 列名称
SELECT * FROM 表名称 ORDER BY 列名称 DESC

SELECT * FROM 表名称 WHERE 列名称=某值 AND 列名称=某值
SELECT * FROM 表名称 WHERE 列名称=某值 OR 列名称=某值
```


### DDL 包含对数据库或表的操作
``` 
CREATE DATABASE - 创建新数据库
ALTER DATABASE - 修改数据库
CREATE TABLE - 创建新表
ALTER TABLE - 变更（改变）数据库表
DROP TABLE - 删除表
CREATE INDEX - 创建索引（搜索键）
DROP INDEX - 删除索引
```

### 经验教训
第一次安装时，打开 phpMyAdmin 提示找不到 mysqli 扩展，通过在网上搜索解决方法，修改相关配置文件，皆无果。
后来索性卸载重装，竟正常了。。

看来重启和重装确实是百试百灵的好办法。。。。。
