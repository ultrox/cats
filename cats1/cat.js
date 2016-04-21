window.onload = init;
var count = 0;

function init() {
  'use strict';
  var img = document.getElementById('cat1'),
    info = document.querySelector('.info');

  img.addEventListener('click', function (e) {
    count++;
    info.textContent = count;
  });
}
