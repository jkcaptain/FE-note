### 前端工程化linux预备知识

#### 简介：进程，线程，协程

内核态：进程，线程

用户态：协程。不经过操作系统管理，操作系统上没有协程这个概念。

#### 进程与线程

##### 操作系统的设计，可以归结为三点：

1. 以多进程方式，允许多个任务同时允许。

2. 以多线程形式，允许单个任务分成不同的部分运行。

3. 提供协调机制，一方面防止进程之间和线程之间产生冲突，另一方面允许进程之间和线程之间共享资源。

#### 进程与线程的资源共享

##### 单线程进程

代码，数据，文件，寄存器，栈

fork 一个子进程时，会将上述内容，全部复制一份。

文件句柄也称文件描述符

##### 多线程进程

共享资源：代码，数据，文件

非共享资源：寄存器，栈

所以线程与进程更轻量。

#### linux 免密远程登录

##### 为什么使用非对称加密

因为对称加密的话，万一密钥被人截取了呢

##### 免密登陆的原理

##### 配置免密登录的步骤

1. 生成密钥对

`ssh-keygen -t rsa -C "你自己的名字" -f "你自己的名字_rsa"`

2. 上传配置公钥

`上传公钥到服务器对应账号的 home 路径下的 .ssh/ 中 （ssh-copy-id -i "公钥文件名" 用户名@服务器ip）`

`配置公钥文件访问权限为 600`

3. 配置本地私钥

`把第一步生成的私钥复制到你的 home 目录下的 .ssh/ 路径下`

`配置你的私钥文件访问为 600`

`chmod 600 你的私钥文件名`

4. 免密登陆功能的本地配置文件

`编辑自己 home 目录的 .ssh/ 路径下的 config 文件`

`配置 config 文件的访问权限为 644`

##### config 配置文件详解

``` shell
# 多主机配置
Host  # 别名
HostName # IP或域名 
Port # 端口

Host 
User
# ... 

# 单主机配置
Host  # 别名
User root # 用户名
HostName # IP或域名 
IdentifyFile # 端口
Protocol 
Compression
ServerAliveInterval
ServerAliveCountMax
LogLevel
```




