$(function () {
    var timer = null;
    var timer1 = null;
    var index = 0;
    var farmVeg = $(".greenProduct .farmVegetables .container .banner img")
    var charBanImg = $(".characteristic .content .center img");
    var nivoControlNav = $(".characteristic .content .nivo-controlNav")
    var nivoControlNavB = $(".characteristic .content .nivo-controlNav b")

    // characteristic banner

    timer1=setInterval(function(){changeImage(farmVeg)},1500);
    timer = setInterval(function() {changeImage(charBanImg)},1500);

    mouseEvent(farmVeg, timer1);
    mouseEvent(charBanImg, timer);

    function mouseEvent(el, Timer) {
        el.mouseover(function () {
            clearInterval(Timer);
            // console.log(farmVeg)

        })
        el.mouseout(function () {
            Timer = setInterval(function () {
                changeImage(el)
            }, 1500);
        })
    }
    function changeImage(el) {
        if (el.length-1 == index) {
            index = 0;
        }
        el.eq(index).fadeIn().siblings().fadeOut();
        index++;
        // Nav.eq(index - 1).addClass("nivo-control2").siblings().removeClass("nivo-control2")
       
    }
    // charBanImg.each(function () {
    //     $("<b></b>").addClass("nivo-control").appendTo(nivoControlNav);
    // })
   
})