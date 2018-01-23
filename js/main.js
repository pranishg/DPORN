$(document).ready(function(){
  var minuteTO = 0,
      hourTO = 23,
      monthTO = 11,
      dayTO = 20,
      yearTO = 0;
    var clock;
    var currentDate = new Date();
    var futureDate  = new Date(currentDate.getFullYear() + yearTO, monthTO-1, dayTO, hourTO, minuteTO);
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
$( document ).ready(function() {
    if ($(window).width > 767) {
    scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });
    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){
    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;
    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');
        $(this).width(windowWidth);
        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
            $(this).width(videoWidth).height(videoHeight);
        }
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
}
};
});

$(document).ready(function(){
    $.getJSON("../progress.json", function(data){
        var items = [];
        $.each( data, function( key, val ) {
        items.push( val );
      });
        if (items[1] != 0) {
        $(".main-now").append(items[1]);
        var percent = Math.ceil((items[1] / items[0])*100);
        $('.main-probar progress').attr('value', percent);
    } else {
        $(".main-progress").hide();
    }
    });
});
/* Плавная навигация */
$(document).ready(function(){
  $(".slicy").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top - 50;
    $('body,html').animate({scrollTop: top}, 800);
  });
  $(window).scroll(function() {

  });
var menu_selector = ".top-menu"; 
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a.slicy").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top + 50 && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
    $(document).on("scroll", onScroll); 
});
// Запись в localStorage
$('.dropdown li > a').click(function(){
    var userLang = $(this).attr('href');
    switch(userLang) {
        case '/ru/':
            userLang = 'ru';
            break;
        case '/cn/':
            userLang = 'cn';
            break;
        case '/jp/':
            userLang = 'jp';
            break;
        default:
            userLang = 'en';
    };
    localStorage.setItem('userLang', userLang);
});