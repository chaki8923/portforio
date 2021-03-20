$(function(){

  var window_h = $(window).height();

  //スクロールイベント
  $(window).on("scroll", function() {
    
  
    var scroll_top = $(window).scrollTop();
  
    $(".profile").add($(".works")).each(function() {
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
});