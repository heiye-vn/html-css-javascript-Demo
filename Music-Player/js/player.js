/*
    完整功能实现思路：
        一、播放/暂停：第一次点击实现播放，第二次点击实现暂停（类似一个开关功能）
            解决方法：定义一个标杆（flag），当 flag 为 true 时播放，为 false 时暂停

        二、上一曲/下一曲：点击下一曲按钮，切换到下一曲歌曲并播放，点击上一曲会切换到上一曲歌曲并播放，过程一直进行循环
            解决方法：定义一个歌曲路径数组，点击一次通过索引值进行切换一次，并自增/自减，当到达两个临界点时重新归零或者最大值

        三、停止按钮：点击停止按钮时，暂停播放当前的歌曲并且播放时间重置为0

        四、切换音频列表：点击上一曲/下一曲时，音频列表动态改变
            解决方法：动态的给音频列表li标签添加active属性，并删除其他li的active属性

        五、进度条：当播放音乐时，进度条会跟随事件一起移动，知道整首歌结束
            解决方法：进度条当前盒子的宽度 / 整个进度条的宽度 = 当前播放时间 / 整个时间，利用对应成比例来设置定时器让其在某个时间后持续增加
            注：进度条是伴随着播放按钮的（只有歌曲播放时才会调用进度条函数）

        六、处理时间：时间和进度条类似，，都是只有在播放歌曲时才会调用该函数
*/




// 使用window.onload让js代码在所有资源加载完成后执行
window.onload = function () {

    /*
        获取元素
    */
    let audio = document.querySelector('audio'); // 获取音频对象
    let play = document.querySelector('#play'); // 获取播放/暂停按钮
    let prev = document.querySelector('.prev'); // 获取上一首按钮
    let next = document.querySelector('.next'); // 获取下一首按钮
    let stop = document.querySelector('.stop'); // 获取停止按钮
    let audioList = document.querySelectorAll('#playerList li'); // 获取音频列表
    let progrees = document.querySelector('#progrees'); // 获取总进度条盒子
    let curProgrees = document.querySelector('#curProgrees'); // 获取当前进度条盒子
    let presentTime = document.querySelector('#presentTime'); // 获取当前时间盒子
    let totalTime = document.querySelector('#totalTime'); // 获取歌曲总时间盒子


    /*
        添加事件
    */
    play.addEventListener('click', nowPlay); // 播放/暂停
    prev.addEventListener('click', nowPrev); // 上一首
    next.addEventListener('click', nowNext); // 下一首
    stop.addEventListener('click', nowStop); // 停止播放


    /*
        定义变量
    */
    let flag = true // 将初识标杆定义为true，点击之后实现播放功能
    let index = 0;
    let audioPath = ['./video/Faded-Alan Walker.mp3', './video/Alone-Alan  Walker.mp3', './video/Sing Me to Sleep-Alan Walk.mp3', './video/你的答案-阿冗.mp3', './video/世间美好与你环环相扣-柏松.mp3'];
    // 注：音频的路径是在html页面中的，故它是相对html页面的路径



    /*
        封装功能函数
    */
    // 播放/暂停函数
    function nowPlay() {
        if (flag) {
            play.className = 'play2';
            play.title = '暂停'
            audio.play(); // audio 对象中的方法，表示开始播放音频
            nowProgress() // 为播放状态时才调用进度条函数
            setTime() // 为播放状态时才调用时间处理函数

        } else {
            play.className = 'play1';
            play.title = '播放';
            audio.pause(); // audio 对象中的方法，表示暂停当前播放的音频 
        }
        // 对 flag 的值取反，表示下一次进行相反操作
        flag = !flag;


    };

    // 上一首
    function nowPrev() {
        index--;
        if (index < 0) {
            index = audioPath.length - 1;
        }
        // console.log(index);

        // 将值赋值给audio的src属性
        audio.src = audioPath[index];

        // 并播放歌曲，每次播放歌曲都要重置 flag 为 true
        flag = true
        nowPlay()

        // 调用切换音频列表函数
        nowChangeList()
    };

    // 下一首
    function nowNext() {
        index++;
        if (index >= audioPath.length) {
            index = 0;
        }
        // console.log(index);

        // 将值赋值给audio的src属性
        audio.src = audioPath[index];

        // 并播放歌曲，每次播放歌曲都要重置 flag 为 true
        flag = true
        nowPlay()

        // 调用切换音频列表函数
        nowChangeList()
    };

    // 停止播放
    function nowStop() {
        // 暂停播放
        flag = false
        nowPlay()
        // 将时间重置为0
        audio.currentTime = 0; // audio.currentTime：设置或返回音频中的当前播放位置（以秒计）
    };

    // 动态切换音频列表
    function nowChangeList() {

        // 遍历音频列表并清除所有 active 属性
        for (let i = 0, len = audioList.length; i < len; i++) {
            audioList[i].className = ''
        }

        //再重新给当前 index 索引的音频添加上 active 属性
        audioList[index].className = 'active';
    };

    // 进度条
    function nowProgress() {
        // 定义一个定时器
        let time1 = null;

        // 为播放状态时开启定时器,并且每隔固定时间增加当前进度条盒子的宽度
        if (flag) {
            time1 = setInterval(function () {

                // 设置或返回音频中的当前播放位置（以秒计）
                let curTime = audio.currentTime;

                // 返回音频的长度（以秒计）
                let allTime = audio.duration;

                // 判断：如果当前时间超过总时间，则清除定时器，并调用播放下一首歌曲函数
                if (curTime >= allTime) {
                    clearInterval(time1);
                    nowNext()
                } else {
                    curProgrees.style.width = (curTime / allTime) * progrees.offsetWidth + 'px';
                }
            }, 30)
        } else {
            clearInterval(time1)
        }
    };

    // 时间
    function setTime() {
        setInterval(function () {

            // 设置或返回音频中的当前播放位置（以秒计）
            let curTime = audio.currentTime
            setTimeStyle(curTime, presentTime)

            // 返回音频的长度（以秒计）
            let allTime = audio.duration
            setTimeStyle(allTime, totalTime)

        }, 50)
    };

    // 处理时间格式
    function setTimeStyle(timer, obj) {
        //时间判断
        if (isNaN(timer)) { //判断时间是否是NaN
            timer = 0;
        }
        //设置分钟
        let minute = Math.floor(timer / 60)
        minute = minute < 10 ? `0${minute}` : minute
        //设置秒数
        let second = Math.floor(timer % 60);
        second = second < 10 ? `0${second}` : second
        //将时间渲染到页面中
        obj.innerHTML = `${ minute } : ${ second }`

    }
}