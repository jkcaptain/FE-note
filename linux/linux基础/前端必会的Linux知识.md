# 前端必会的Linux知识

### 概念

linux 一般指 linux 内核

我们经常说的 Ubuntu ， centOS 等都是 linux 的发行版

### 准备

1. CentOS 安装 `Minimal ISO` 版。

    内存：给 1G 足够

    网络适配器：桥接模式，不能用 nat
    
    处理器：1 个 处理器 2 核 足够

    镜像文件加载之后，出现安装界面-----------------------------------

    安装位置，如果有感叹号，点进去浏览下确认即可

    kdump 关闭

    点击网络和主机名，联网

    点击开始安装---------------------------------------------

    设置 root 密码

    创建用户，（生产环境下 root 用户 一定要注意操作）

    进入 CentOS 系统-------------------------------------------

    root 登入

    ip addr 查看 ip 地址 


2. cmder，下载 full 版。

    正确安装后，ssh 连接 到 CentOS。


3. 如果需要删除系统，可以右键CentOS -> 管理 -> 从磁盘中删除

### 重点

#### ssh 命令

cmder 连接到虚拟机操作系统
``` shell
ssh root@centOS的ip
```

#### scp 命令

使用 cmder 上传文件到服务器
``` shell
scp windows文件目录 root@centOS的ip:/root/xxx
```

#### mount 命令
挂载文件
``` shell

```

#### 重启网卡
``` shell
cd /etc/sysconfig/network-scripts

ifdown ens33
ifup ens33
```

#### vi 命令

``` shell

vi xxx

i       // 进入编辑模式

u       // 撤销

:/xxx   // 查找

:wq    

:q
```
如果嫌弃 `vim` 不好用，可以安装 `nano`

#### yum 命令安装软件
安装 nano 软件

``` javascript
yum install nano
```

建议还是用 `vim`，功能强大。

#### 安装 node.js

``` shell
// 添加官方的 yum 源
curl -sL https://rpm.nodesource.com/setup_11.x | bash - 

yum install -y nodejs
```

#### 什么是服务

服务，就是后台一直在跑的程序，并给用户提供一些功能上的服务。

服务相关命令
``` shell
systemctl status nginx     // 查看服务

systemctl stop nginx       // 停止服务

systemctl start nginx      // 启动服务

systemctl restart nginx    // 重启服务
```

#### 什么是终端



#### 注意事项

/boot 目录最好不要碰

### linux 下 安装 xampp

#### 有两种下载方式

1. 可使用 `wget` 工具

2. 先在 windows 下载好，上传到虚拟机

我使用的是第二种，将安装文件上传到 CentOS 的 opt 目录下。
``` shell
scp d:\xampp-linux-x64-7.3.5-0-installer.run root@192.168.1.103:/opt
```
#### 安装 lampp

登录 CentOS，准备安装
``` shell
ssh root@192.168.1.103

cd /opt
chmod 755 xampp-linux-*-installer.run
sudo ./xampp-linux-*-installer.run
```
之后就是一直 yes yes，直到安装完成，就可以在 `/opt` 目录下，看到已安装好的 `lammpp` 了。

#### 操作 lampp

``` shell
sudo /opt/lampp/lampp start   // 第一次启动，可能 netstat 命令报错，其实已经运行了
sudo /opt/lampp/lampp stop    // 停止 lampp 服务
```
如果启动的时候，提示说`找不到 netstat命令`，可以先安装`net-tools`来解决
``` shell
yum install net-tools
```
然后在 windows 宿主机就可以直接访问了，我的虚拟机 ip 是 `192.168.1.103`

``` shell
http://192.168.1.103:80
```

### 总结

### 参考链接

[Linux Frequently Asked Questions](https://www.apachefriends.org/faq_linux.html)

