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

### 总结

