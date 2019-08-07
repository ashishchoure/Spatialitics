var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});





$(document).ready(function () {
  // $('.carousel').carousel({
  //     interval: 1122000
  // });
  // $("#test").click(function(){
  //     $("#headerNavbar").hide();
  //   });
  $(window).scroll(function () {
    var scrollHeight = $(window).scrollTop();
    var industryBanner = $("#industryBanner").height();
    var headerNavbar = $("#headerNavbar").height();


    var cHeight = industryBanner + headerNavbar;

    if ($('#IndustryTabs').is(':visible')) {

      if (scrollHeight > cHeight) {

        //alert(scrollHeight);
        //$("#headerNavbar").fadeOut(1000);

        $("#IndustryTabs").addClass("sticky-top");
        $("#headerNavbar").hide();
        $("#geoCoder").addClass("c-set-margin");
      }
      else {

        $("#IndustryTabs").removeClass("sticky-top");
        $("#headerNavbar").show();
        $("#geoCoder").removeClass("c-set-margin");

      }
    }

    // alert(industryBanner);

  });




























