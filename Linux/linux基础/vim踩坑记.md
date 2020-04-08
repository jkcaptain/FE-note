#### 在vmware虚拟机中安装ubuntu下使用vi编辑文件，发现上下左右方向键不能在文本中移动，出现ABCD字符，backspace也不能删除字符

解决方法：
在当前工作区执行
```
$cp /etc/vim/vimrc ~/.vimrc
```
[参考链接](https://www.jb51.net/article/114998.htm)