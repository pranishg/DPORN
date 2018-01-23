var userLang = '';
if (localStorage.getItem('userLang') == undefined) {
var lng = navigator.language || navigator.userLanguage;
lng = lng.substr(0,2);
	switch(lng) {
	    case 'ru' || 'be' || 'uk' || 'ky' || 'ab' || 'mo' || 'et' || 'lv' || 'kk' || 'kk':
		    userLang = 'ru';
		    break;
	    case 'zh':
		    userLang = 'cn';
		    break;
	    case 'ja':
		    userLang = 'jp';
		    break;
	    default:
		    userLang = 'en';
	};
	localStorage.setItem('userLang', userLang);
	userLang != 'en' ? window.location.replace('/' + userLang + '/') : window.location.replace('/');
} else {
	if (localStorage.getItem('userLang') != 'en') {
		userLang = localStorage.getItem('userLang');
		window.location.replace('/' + userLang + '');
	}
};