$(function () {
    var contentBox = $(".content-frame"),
     them = $(".content-theme li"),
     oUl = $(".content-ul"),
     oLi = $(".yue-banner-item"),
     oWidth=oLi.width(),
     length = oLi.length,
     indexOdd = 0,
     indexNew,
     DURATION = 2000,
     ANIMATION=600,
     timer = null;
     oLi.eq(0).addClass('active');
    them.eq(0).addClass("bg-black");
    timer = setInterval(playNext, DURATION);

    contentBox.hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(playNext, DURATION);
    })

// 点击事件
    them.click(function () {
      if($(this).hasClass('bg-black')){
          return
      }
      indexNew=$(this).index()
      move()
    })

    $(".btn-pre").click(function () {
        clearInterval(timer)
        indexNew=indexOdd-1
        move()
        timer = setInterval(playNext, DURATION);
    })

    $(".btn-next").click(function () {
        playNext()
        
    })
    function playNext(){
        indexNew=indexOdd+1   
        move()
    }

    function move() {
        var left=oWidth
        if(indexNew>indexOdd){
            if (indexNew >length-1) {
                indexNew = 0;
            }
        }else if (indexNew<indexOdd){
            if(indexNew<0){
                indexNew=length-1
            }
            left=-oWidth
        }
        oLi.eq(indexNew).addClass("active").css('left', left).stop(true).animate({left:0},ANIMATION)
        .end().eq(indexOdd).finish().animate({
            left:-left
        },ANIMATION,function(){
            $(this).removeClass("active")
        })
        them.eq(indexNew).addClass("bg-black").siblings().removeClass("bg-black");
        indexOdd=indexNew
    }
})  