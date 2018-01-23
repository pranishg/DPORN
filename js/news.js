$(document).ready(function(){
	var lng = localStorage.getItem('userLang');
	lng=lng.substr(0,2);
	switch(lng){
		case'cn':
			$(".top-menu.news-ZH").css('display','flex');
			$('.news-ZH').show();
			break;
		case'ru':
			$(".top-menu.news-RU").css('display','flex');
			$('.news-RU').show();
			break;
		case'jp':
			$(".top-menu.news-JA").css('display','flex');
			$('.news-JA').show();
			break;
		default:
			$(".top-menu.news-EN").css('display','flex');
			$('.news-EN').show();
	}
})
$(".navbar-nav a").click(function(){
	var path = $(this).attr('href');
if (localStorage.getItem('userLang') != 'en') {
	userLang = localStorage.getItem('userLang');
	window.location.replace('/' + userLang + '/' + path);
	return false;
};
})