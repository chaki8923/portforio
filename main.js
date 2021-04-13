$(function(){

  var window_h = $(window).height();

  //スクロールイベント
  $(window).on("scroll", function() {
    
  
    var scroll_top = $(window).scrollTop();
  
    $(".profile").add($(".skills")).add($('.portoforio')).add($('form')).each(function() {
      //各box要素のtopの位置を取得する
      var elem_pos = $(this).offset().top;
      
      //どのタイミングでフェードインさせるか
      if (scroll_top >= elem_pos - window_h + 250) {
        $(this).addClass("fadein");
      } else {
        $(this).removeClass("fadein"); //そうでない場合はクラスを削除
      }
    });
  });

  var top = $('#top');

  top.hide();
  $(window).on("scroll",function(){
    if($(this).scrollTop() > 200){
      top.fadeIn();
    }else{
      top.fadeOut();
    }
  });
  top.on("click",function(){
    $('body,html').animate({scrollTop: 0},500);
    return false
  });

  var text = $(".text-area");
  

  $("#comment").on('keyup',function(){
    count = $(this).val().replace(/\n/g, '').length;

    text.text(count);
  });

  $("#email").add($("#tell")).add($("#comment")).focus(function(){
    $(this).css('border','2px skyblue solid');
  }).blur(function(){
    $(this).css('border','1px black solid');
  });

//  メインタイトル

$('.tree').on('click',function(){

  $('.tree').addClass("root");
  $(".saku").fadeIn('slow');
  setTimeout(function(){
    $('.tree').removeClass('root')
  },1000);

  
  $(document).ready(function(){
    $(document).snowfall({
      flakeCount: 30,
      flakeColor: "#F5C9C6",
      minSize: 10,
      maxSize: 20,
      round: true,
      minSpeed: 0.5,
      maxSpeed: 2,
      image: 'img/sakura.gif',
    });
  });
});
// $('.tree').delay(1000).queue(function(){
//   $(this).removeClass('root');
// });



});