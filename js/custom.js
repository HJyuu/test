$(".lightgallery").lightGallery({
  thembnail:true,
  autoplay:true,
  pause:3000,
  progressBar:true
});


//윈도우 팝업
$('.window').click(function(e){
  e.preventDefault();
  //window.open("파일명", "팝업이름", "옵션설정");
  //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});



//레이어 팝업
$('.layer').click(function(e){
  e.preventDefault();
  //$('#layer').css('display','block')
  //$('#layer').show();
  //$('#layer').fadeIn();
  $('#layer').slideDown();
})
$('#layer .close').click(function(e){
  e.preventDefault();
  //$('#layer').css('display','block')
  //$('#layer').show();
  //$('#layer').fadeOut();
  $('#layer').slideUp();
})
//탭메뉴
var $tab_list = $('.tab_menu');

$tab_list.find('ul ul').hide();
$tab_list.find('li.tab_active>ul').show();

function tabMenu(e){
  e.preventDefault();
  var $this = $(this);
  $this.next('ul').show().parent('li').addClass('tab_active').siblings('li').removeClass('tab_active').find('>ul').hide();
}
$tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);

//갤러리
$('.gallery_img').slick({
  fade: true,
  pauseOnHover: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1
});

$('.play').click(function(){
  $('.gallery_img').slick('slickPlay')
});

$('.pause').click(function(){
  $('.gallery_img').slick('slickPause')
});

$('.prev').click(function(){
  $('.gallery_img').slick('slickPrev')
});

$('.next').click(function(){
  $('.gallery_img').slick('slickNext')
});

//배너
//html 마크업 셋팅 -- > css 연동 --> 제이쿼리 연동 --> 제이쿼리 호출
$('.ban').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay:true,
  autoplaySpeed:3000,
  dots:true
});
//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
  e.preventDefault();
  //$("#con_nav").css("display","block");
  //$("#con_nav").show();
  //$('#con_nav').fadeIn();
  //$('#con_nav').slideDown();
  //$('#con_nav').toggle();
  //$('#con_nav').fadeToggle();
  $("#con_nav").slideToggle(100);
  //$(".tit .btn").addClass("on");
  $(this).toggleClass('on');
})
