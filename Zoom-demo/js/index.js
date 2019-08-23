
/*
    放大镜实现原理:
        1.鼠标切换图片列表时，.pic盒子中的图片相对应切换
        2.在.pic中生成一个.zoom的盒子，移动该盒子时对类似剪切.pic盒子中的图片
            2.1 动态获取.zoom盒子相对.pic盒子的background-positin属性值
            2.2 对.zoom盒子的移动范围进行限制（只在.pic盒子中移动）
        3.将剪切的图片按比例放大显示到.details的盒子中
*/

var list = document.querySelector(' .list '),
    img = document.querySelector(' .pic img '),
    li_list = list.querySelectorAll(' li '),
    pic = document.querySelector(' #wrap .pic '),
    zoom = document.querySelector(' .zoom '),
    details = document.querySelector(' .details ')

list.addEventListener('click', function (e) {
    e = e || window.event
    // console.log(e.target)
    if (e.target.tagName == 'IMG') {
        img.src = e.target.src;
        details.style.backgroundImage = 'url(' + e.target.src + ')';
        // console.log(e.target.parentNode)
        li_list.forEach(function (item) {
            console.log(item)
            item.className = '';            // 每次遍历六个li元素并清除类名
        })
        e.target.parentNode.className = 'current';   // 通过e.target找到其父元素并添加上类名
        // console.log(li_list)
    }
}, false)

pic.addEventListener('mousemove', function (e) {
    e = e || window.event
    var x = e.clientX,
        y = e.clientY;
        cx = pic.getBoundingClientRect().left;      //  getBoundingClientRect()获取某个元素相对于视窗的位置集合
        cy = pic.getBoundingClientRect().top;
        tx = x - cx - 75;
        ty =  y - cy - 75 
        // console.log(e)
        // console.log(x,y)
        // console.log(cx,cy)

        // 对.zoom盒子移动范围进行限制
        if(tx < 0){             
            tx = 0;
        }
        if(tx > 250){
            tx = 250
        }
        if(ty < 0){
            ty = 0;
        }
        if(ty > 250){
             ty = 250
        }
        
        details.style.backgroundPosition = (tx / 250 * 100  + '%') + (ty / 250 * 100 + '%')
        
        zoom.style.left = tx + 'px'
        zoom.style.top = ty + 'px';
})

