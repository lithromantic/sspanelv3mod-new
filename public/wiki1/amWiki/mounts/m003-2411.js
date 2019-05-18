if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m003']=[{"name":"001-Windows端加速外服教程.md","path":"003-游戏加速教程/001-Windows端加速外服教程.md","content":"## Shadowsocksr配合Super Socks5cap加速windows游戏教程\r\n### <font color=#C71585>【运行原理】</font>\r\n---\r\n* __Shadowsocks__运行原理:  \r\n与其他代理工具基本相同，使用特定的中转服务器完成数据传输。在服务器端部署完成后，用户需要按照指定的密码、加密方式和端口使用客户端软件与其连接。在成功连接到服务器后，客户端会在用户的电脑上构建一个本地Socks5代理。浏览网络时，网络流量会被分到本地socks5代理，客户端将其加密之后发送到服务器，服务器以同样的加密方式将流量回传给客户端，以此实现代理上网。\r\n* __Super Socks5Cap__运行原理:  \r\nSuper Socks5Cap是Windows系统下的SOCKS代理软件. 可以使任何Windows应用程序通过SOCKS代理来连接网络, 从而起到网络代理及网络加速的作用,socks5cap算是结合了前辈Proxifier与socks5cap的优点，既能解决外服网游加速时的UDP转发问题又能全自动识别游戏进程。    \r\n\r\n![加速原理图](assets/003/Untitled Diagram.png)  \r\n\r\n### <font color=#C71585>【配置教程】</font>\r\n---\r\n###### 1.打开`Shadowsocksr`软件并根据不同服务器分配不同端口。\r\n###### 2.右键任务栏shadowsocksr图标——服务器——端口设置  \r\n![端口映射](assets/003/portrelay.png)   \r\n\r\n###### 3.解压Super Socks5cap 并以管理员身份运行程序。  \r\n![](assets/003/socks5cap.png)  \r\n###### 4.设置socks5cap 按照下面示例填写，注意端口对应。  \r\n![](assets/003/game.png)  \r\n![](assets/003/game1.png)  \r\n###### 5.点击确定回到软件首页，点击 代理全部新进程（64位系统）  \r\n![](assets/003/game2.png)  \r\n\r\n###### 6.最后，打开游戏即可进行加速，加速成功可检测到游戏连接  \r\n![](assets/003/game3.png)  \r\n![](assets/003/game4.png)\r\n\r\n\r\n###### 7.附一张加速前后对比，其他游戏加速过程类似  \r\n![](assets/003/lol1.png)  \r\n\r\n---\r\n### 付费用户请进官方群<font color=#C71585>600073296</font>获取Super Socks5cap安装包\r\n祝大家游戏愉快，有问题官方Q群进行反馈。\r\n","timestamp":1511055430534},{"name":"002-Windows端加速外服教程二（推荐）.md","path":"003-游戏加速教程/002-Windows端加速外服教程二（推荐）.md","content":"## Shadowsocksr配合SStap加速windows游戏教程\r\n### <font color=#C71585>【运行原理】</font>  \r\n---\r\n\r\n* __SStap__运行原理:\r\n与之前介绍的游戏加速工具Super Socks5cap一样均可以加速游戏，但是socks5cap通过lsp注入或者hook进行程序代理，而sstap则直接新建一个虚拟网卡接管所有流量，所有不存在之前有可能出现的游戏作弊检测撞枪，设置也更为简单傻瓜化。\r\n---\r\n### <font color=#C71585>【配置教程】</font>  \r\n---\r\n\r\n##### 1.安装SStap并赋予其所有权限，建议先关闭国产安全软件，SSStap安装包请付费用户加入售后群600073296下载。  \r\n##### 2.登录91ss，在【节点列表】界面复制你想用到的某节点的SSR链接。\r\n![获取节点链接](assets/004/links.png)   \r\n\r\n或者从windows客户端中导入链接。  \r\n\r\n![获取节点链接](assets/004/links2.png)     \r\n##### 3.打开SStap，点击添加节点按钮，粘贴刚才复制的ssr链接。\r\n![添加节点链接](assets/004/add.png)  \r\n##### 4.点击测试按钮，测试udp转发，若通过，即代表可加速。\r\n![测试UDP](assets/004/test.png)  \r\n##### 5.点击【连接】开启加速，打开游戏体验一下吧。\r\n---\r\n### 付费用户请进官方群<font color=#C71585>600073296</font>获取SStap安装包\r\n祝大家游戏愉快，有问题官方Q群进行反馈。\r\n","timestamp":1511055430534}]