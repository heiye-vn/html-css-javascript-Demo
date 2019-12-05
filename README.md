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

​	Demo：[Canvas-Drawing-board](http://canvas.zsp.design)；

​	实现思路：这是一个包含画笔、橡皮擦、一键清除、图像保存，画笔颜色等功能的canvas画板，通过js操作dom元素并结合canvas绘图实现效果。



### Demo-06

​	简述：纯css实现流星雨效果

​	Demo：[CSS流星雨](https://heiye-vn.github.io/html-css-javascript-Demo/Demo-05/meteor-shower.html)；

​	实现思路：结合CSS3的animation属性和transform属性实现。



### Demo-07

​	简述：纯css实现字母跳动效果

​	Demo：[跳动的字母](html-css-javascript-Demo/tree/master/Demo-06)；

​	实现思路：外部字体引用结合css3的动画属性实现。



### Demo-08

​	简述：CSS实现阴阳图效果

​	Demo：[阴阳图](https://heiye-vn.github.io/html-css-javascript-Demo/Demo-08/before&after.html)；

​	实现思路：使用css中的伪类结合定位属性实现。



### Demo-09

​	简述：canvas动态时钟

​	Demo：[动态时钟](https://heiye-vn.github.io/html-css-javascript-Demo/Demo-09/动态时钟.html);

​	实现思路：利用canvas实现钟表静态页面，再结合js中的date事件对画布实时重绘达到动态效果



### Demo-10

​	简述：js倒计时

​	Demo：[倒计时](https://heiye-vn.github.io/html-css-javascript-Demo/Demo-10/倒计时.html);

​	实现思路：利用 JS 中的时间对象（Date）先给定指定时间，再获取现在事件，根据二者的差值（ms）再具体计算出相应天数或者时、分、秒（注：需要对时间进行补0），后面再结合定时器让时间 "跑起来"。



### Music-Player

​	简述：原生js简易版音乐播放器

​	Demo：[原生JS-简易版音乐播放器](https://heiye-vn.github.io/html-css-javascript-Demo/Music-Player/play.html);

​	实现思路：html结构和css样式不赘述，主要说一下js，通过获取相应标签元素利用事件监听器配合对应的功能函数实现最终效果，时间和进度条是搭配定时器完成的（功能不是很完全，哈哈！！！）。