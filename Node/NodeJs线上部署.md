## NodeJs 线上部署

### pm2

1. 动态监测文件，0 秒热启动

2. 能够负载均衡 cpu

3. 内存使用过高时，或者 CPU 调度太频繁，帮助我们重启服务。

### 修改 ecosystem.config.js 之后，需要先 `pm2 kill` 新配置才会生效。

### pm2.io 性能面板可视化

### shell.js 配置命令行脚本

### 常用指令

```shell
ps -ef | grep

ps aux | grep node

lsof -i tcp:8081

kill -9 pid

ssh root@xxx.xxx

scp -r
```
