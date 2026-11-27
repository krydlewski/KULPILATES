const sourceLanguage = new URLSearchParams(location.search).get('from');
const home = document.querySelector('[data-home]');
if (sourceLanguage === 'en') home.href = 'en.html';
if (sourceLanguage === 'uk') home.href = 'uk.html';
