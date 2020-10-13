const { readFileSync, writeFileSync } = require('fs')

const old = readFileSync('_site/locations/st-edwards/index.html', 'utf-8');
const _new = old
  .split('="/').join('="https://austincodingacademy.com/')
  .split('url(/').join('url(https://austincodingacademy.com/');
writeFileSync('_site/locations/st-edwards/index.html', _new);