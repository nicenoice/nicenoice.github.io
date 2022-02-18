function newEl (a, b) {
  const el = document.createElement(a);
  b.appendChild(el);
}

newEl('head', document.querySelector('html'));
const metaEl = document.createElement('meta');
metaEl.charset = 'utf-8';
document.title = 'Nice Noice Studio';
document.querySelector('head').appendChild(metaEl);
newEl('body', document.querySelector('html'));

import './select.js';
