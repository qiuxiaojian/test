$(function () {
  // 轮播css动画效果
  $('.carousel').on('slid.bs.carousel', function () {
    $(".carousel_box>h2").addClass("animated slideInDown")
    $(".carousel_box_bottom").addClass("animated jello")
    $(".carousel_box>img").addClass("animated slideInUp")
  })
  $('[data-toggle="tooltip"]').tooltip();
  $('.carousel').carousel({
    interval: 2000
  })

  $(".portfolio_info").fancybox({
    helpers: {
        title : {
            type : 'float'
        }
    }
});
// 回顶部效果
$(window).scroll(function(){
  if($(window).scrollTop()>200){
    $(".back_top>i").css('display','block') 
  }else{
    $(".back_top>i").css('display','none') 
  }
})
$(".back_top>i").click(function(){
  $('html,body').animate({scrollTop:0},300)
})


 
})