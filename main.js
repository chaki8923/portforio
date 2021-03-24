$(function(){

  var window_h = $(window).height();

  //スクロールイベント
  $(window).on("scroll", function() {
    
  
    var scroll_top = $(window).scrollTop();
  
    $(".profile").add($(".skills")).add($('.portoforio')).add($('form')).each(function() {
      //各box要素のtopの位置を取得する
      var elem_pos = $(this).offset().top;
      
      //どのタイミングでフェードインさせるか
      if (scroll_top >= elem_pos - window_h + 300) {
        $(this).addClass("fadein");
      } else {
        $(this).removeClass("fadein"); //そうでない場合はクラスを削除
      }
    });
  });

//   $('a[href^=#]').click(function() {
//     // スクロールの速度
//     var speed = 400; // ミリ秒
//     // アンカーの値取得
//     var href= $(this).attr("href");
//     // 移動先を取得
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     // 移動先を数値で取得
//     var position = target.offset().top;
//     // スムーススクロール
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//  });

//  $('#top').hide();
//  $(window).scroll(function(){
//    if($(this).scrollTop() > 300){
//      $('#top').fadeIn();
//    }else{$(this).fadeOut();}
//  });

//  $('#top').on('click',function(){

//   $('body,html').animate({
//     scrollTop: 0
//   },700);
//   return false;
//  });

});