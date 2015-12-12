$(function(){
  $(".thumbnail").on("click",function(){
    $(this).toggleClass("active");
    $('.cover').toggle();
    $(this).siblings('.blurb').toggle();
  });
  $('.cover').on('click', function(){
    $('.active').siblings('.blurb').toggle();
    $('.active').removeClass("active");
    $('.cover').toggle();
  });
});
