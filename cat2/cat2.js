window.onload = init;
var cats = '';
var allcats = [];
var CATS = [{
    name: 'Snjeza',
    img: 'cat1'

  },
  {
    name: 'Ivanka',
    img: 'cat3'
  }
];


function init() {
  'use strict';

  for (var i = 0; i < CATS.length; i++) {
    //stvaram aktivnu macku obj
    var cat = new Cat(CATS[i]);
    allcats.push(cat);
    cats += generateHtml(allcats[i]);
    main.innerHTML = cats;
  }
  var img = document.getElementsByTagName('img');
  for (var i = 0; i < img.length; i++) {
    var image = img[i];
    image.addEventListener('click', function (e) {
      oneMore(e.target);
    })
  }
}
//ne radi u principu kroz konstruktor radim samo kroz dom
//nisam znao kako da ovo napravim
function Cat(obj) {
  this.name = obj.name;
  this.add = function () {
    this.total++;
  };
  this.img = obj.img;
  this.total = 0;

}

function generateHtml(obj) {
  var strVar = "";
  strVar += "<div class='container'>";
  strVar += "      <div class='name'>" + obj.name + "<\/div>";
  strVar += "      <img id=" + obj.img + ' ' + "src='..\/img\/" + obj.img + ".jpg' name='cat1'>";
  strVar += "      <div class='info'>" + obj.total + "<\/div>";
  strVar += "    <\/div>";
  strVar += "  <\/div>";
  return strVar;
}

function oneMore(target) {
  var papa = target.parentElement;
  var info = papa.querySelector('.info');
  var num = parseInt(info.innerHTML);
  num++;
  info.innerHTML = num;
}



// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background = "white";

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  var el = document.createElement('div');
  var num = numbers[i];
  el.innerHTML = num;
  el.addEventListener('click', (function (numCopy) {
    return function () {
      alert(numCopy);
    }
  }(num)));


  document.body.appendChild(el);
}
