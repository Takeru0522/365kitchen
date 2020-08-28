console.log('HEllo World')

$('.multiple-items').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  infinite: true,
});

if($(window).width() > 780) {var setImg = '#photo';
var fadeSpeed = 1600;
var switchDelay = 4000;

$(setImg).children('img').css({opacity:'0'});
$(setImg + ' img:first').stop().animate({opacity:'1'},fadeSpeed);

setInterval(function(){
  $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
},switchDelay);}




$(function(){
  $('html,body').append("<div class='modal'></div><div class='modal'></div>");
  $(".mask").click(function(){
    $(this).hide();
    $(".modal").hide();
  });
  $(".modalOpen").click(function(){
    $(".mask").show();
    $(".modal").show();
    return false;
  })
})


// $(function(){
//   $('html,body').append("<div class='modal'></div>");
//   $(".mask").click(function(){
//     $(this).hide();
//     $(".modal").hide();
//   });
//   $(".modalOpen").click(function(){
//     $(".mask").show();
//     $(".modal").show()
//     .html("<img src="+$(this).attr("href")+">")
//     return false;
//   })
// })

$('.to-menu').on('click',function(){
  $('html,body').animate({
    scrollTop: $("#menu").offset().top},300);
})

$('.to-access').on('click',function(){
  $('html,body').animate({
    scrollTop: $("#access").offset().top},300);
})

$('.icon').on('click',function(){
  $('html,body').animate({
    scrollTop: 0},700,'swing')
})

$('.h-logo').on('click',function(){
  $('html,body').animate({
    scrollTop: 0},700,'swing')
})


$('.to-tel').on('click',function(){
  $('html,body').animate({
    scrollTop: $("#tel").offset().top},300);
})

