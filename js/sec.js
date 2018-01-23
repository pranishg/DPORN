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