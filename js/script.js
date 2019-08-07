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
  
    
    // alert(industryBanner);

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
  });
  

  
});


  // function sticky_relocate() {
  //   var window_top = $(window).scrollTop();
  //   var IndustryTabsTop = $('#IndustryTabs').offset().top;
  //   if (window_top > IndustryTabsTop) {
  //     $("#headerNavbar").hide();
  //     $('#IndustryTabs').addClass('sticky-top');

  //   } else {
  //     $("#headerNavbar").show();
  //     $('#IndustryTabs').removeClass('sticky-top');

  //   }
  // }

  // $(function() {
  //   $(window).scroll(sticky_relocate);
  //   sticky_relocate();
  // });

