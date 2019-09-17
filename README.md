# （html,css,js）Demo



### Zoom-demo

​	简述：这是一个类似淘宝的图片放大效果，当点击某张图片，且随着鼠标在图片内移动来放大该区域

​	预览地址：[图片放大镜效果](https://heiye-vn.github.io/html-css-javascript-Demo/Zoom-demo/index.html)；

​	实现思路：由原生js实现，基本布局是由两个大的div盒子分别用于呈现图片以及区域放大效果，下面使用列表标签存放多个图片，js部分通过鼠标事件监听盒子移动区域，然后将盒子区域的内容按比例放大。	



### Demo-01

​	简述：js实现一个简单的老虎机效果

​	预览地址：[Simple slot machines](https://heiye-vn.github.io/html-css-javascript-Demo/Demo-01/Simple%20slot%20machines.html)；

​	实现思路：前面布局就不用细说，js部分：先将图片存放在数组中，然后利用`Math.random()`来获取随机图片的url地址，再进行匹配验证显示的图片是否为同一张，如果是则输出 win，不是则输出 lose 。



### Demo-03

​	简述：CSS3实现爱心跳动效果

​	Demo：[Beating heart](https://heiye-vn.github.io/html-css-javascript-Demo/Demo-03/love.html)；

​	实现思路：利用CSS3的新特性 border-radius 以及 transform 属性实现。



### Demo-04

​	简述：js实现黑白块

​	Demo：[黑白块](https://heiye-vn.github.io/html-css-javascript-Demo/Demo-04/js实现别踩白块.html)；

​	实现思路：通过定时器在指定区域内随机生成黑方块，并给黑白区域分别添加不同的点击事件，后面通过判断分值来增加黑块生成的速度来实现难度增大。最终实现效果。



### Demo-05

​	简述：原生js + canvas 实现涂鸦画板

​	Demo：[Canvas-Drawing-board](http://canvas.zsp.design)

​	实现思路：这是一个包含画笔、橡皮擦、一键清除、图像保存，画笔颜色等功能的canvas画板，通过js操作dom元素并结合canvas绘图实现效果。