# linux基本命令入门

安装好 vmWare 和 ubuntu 之后，可以直接在 Terminal 工具下练习命令行操作。

切换路径
```
cd 命令

cd xxx
cd ..
```

查看文件/目录
```
ls 命令

ls  显示当前目录下的内容

ls -l  显示当前目录下的内容，并包含文件的权限，大小等相关信息

ls -a  显示当前目录下的内容（包含隐藏文件），带有 . 符号的表示隐藏文件， 一个 . 表示当前目录， 两个 . 表示上级目录，以此类推。

dir
```

创建目录
```
mkdir xxx  创建文件夹
```

复制文件/目录
```
cp 命令

复制文件

cp examples aaa/examples  

cp examples bbb/examples-copy  复制并改名

复制目录，多了个 -R 
 
cp -R aaa ddd
```

删除文件/目录
```
rm 命令，使用时要小心，防止删除重要文件

删除文件

rm examples

删除目录

rm -r bbb

```

查看当前工作目录
```
pwd
```