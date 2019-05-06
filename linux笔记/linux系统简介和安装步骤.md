# linux系统简介和安装步骤

前言：

> 虚拟机（Virtual Machine）指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。

> Linux操作系统诞生于1991 年10 月5 日（这是第一次正式向外公布时间）。Linux存在着许多不同的Linux版本，但它们都使用了Linux内核。Linux可安装在各种计算机硬件设备中，比如手机、平板电脑、路由器、视频游戏控制台、台式计算机、大型机和超级计算机。

1. linux 系统简介

基本概念可以直接百度百科。
linux系统在业界经常用来做服务器，所以还是需要掌握的。
常见的linux系统有 redhat， centOs(可以理解为 redhat 的开源版)，ubuntu

2. 安装步骤

第一步：先下载 [vmWare虚拟机](https://www.vmware.com/go/downloadworkstation-cn) 和 [ubuntu iso文件](https://www.ubuntu.com/download/desktop)。下载 vmWare 时，需要先登录。

第二步：傻瓜式安装 vmWare，安装完之后启动，在网上找个密钥激活即可。

第三步：vmWare 中新建虚拟机，安装 ubuntu 操作系统
注意：这里选择第一步下载的 ubuntu.iso 文件
![Markdown](https://raw.githubusercontent.com/jkcaptain/FE-note/master/images/linux%E7%AC%94%E8%AE%B0/1.png)
之后便一路下一步即可
为了性能考虑，这里选择将虚拟磁盘存储为单个文件
![Markdown](https://raw.githubusercontent.com/jkcaptain/FE-note/master/images/linux%E7%AC%94%E8%AE%B0/2.png)
然后自定义硬件，分别设置内存为2GB，处理器的内核数量为2
![Markdown](https://raw.githubusercontent.com/jkcaptain/FE-note/master/images/linux%E7%AC%94%E8%AE%B0/3.png)
最后，点击完成，启动虚拟机，它会自动帮我们安装 ubuntu 系统。
安装需要点时间，估计半小时左右。

