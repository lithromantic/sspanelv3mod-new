## Shadowsocksr配合Super Socks5cap加速windows游戏教程
### <font color=#C71585>【运行原理】</font>
---
* __Shadowsocks__运行原理:  
与其他代理工具基本相同，使用特定的中转服务器完成数据传输。在服务器端部署完成后，用户需要按照指定的密码、加密方式和端口使用客户端软件与其连接。在成功连接到服务器后，客户端会在用户的电脑上构建一个本地Socks5代理。浏览网络时，网络流量会被分到本地socks5代理，客户端将其加密之后发送到服务器，服务器以同样的加密方式将流量回传给客户端，以此实现代理上网。
* __Super Socks5Cap__运行原理:  
Super Socks5Cap是Windows系统下的SOCKS代理软件. 可以使任何Windows应用程序通过SOCKS代理来连接网络, 从而起到网络代理及网络加速的作用,socks5cap算是结合了前辈Proxifier与socks5cap的优点，既能解决外服网游加速时的UDP转发问题又能全自动识别游戏进程。    

![加速原理图](assets/003/Untitled Diagram.png)  

### <font color=#C71585>【配置教程】</font>
---
###### 1.打开`Shadowsocksr`软件并根据不同服务器分配不同端口。
###### 2.右键任务栏shadowsocksr图标——服务器——端口设置  
![端口映射](assets/003/portrelay.png)   

###### 3.解压Super Socks5cap 并以管理员身份运行程序。  
![](assets/003/socks5cap.png)  
###### 4.设置socks5cap 按照下面示例填写，注意端口对应。  
![](assets/003/game.png)  
![](assets/003/game1.png)  
###### 5.点击确定回到软件首页，点击 代理全部新进程（64位系统）  
![](assets/003/game2.png)  

###### 6.最后，打开游戏即可进行加速，加速成功可检测到游戏连接  
![](assets/003/game3.png)  
![](assets/003/game4.png)


###### 7.附一张加速前后对比，其他游戏加速过程类似  
![](assets/003/lol1.png)  

---
### 付费用户请进官方群<font color=#C71585>600073296</font>获取Super Socks5cap安装包
祝大家游戏愉快，有问题官方Q群进行反馈。
