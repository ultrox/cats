window.onload = init;
var CATS = [];
var toliko = 5;
var CATS_INFO = [
  {
    name: 'Snjeza',
    img: 'cat1'
  },
  {
    name: 'Ivanka',
    img: 'cat2'
  },
  {
    name: 'Nata',
    img: 'cat3'
  },
  {
    name: 'Jovana',
    img: 'cat4'
  },
  {
    name: 'Natalija',
    img: 'cat5'
  }
];

function init() {
  var main = document.getElementById('main');
  main.addEventListener('click', function (e) {
    var id = e.target.id;
    var cat = CATS[id];
    cat.click();
    updateDOM(cat);
  });

  makeCats();
  listCats();
}

//
function Cat(obj) {
  this.name = obj.name;
  this.img = obj.img;
  this.total = 0;

  this.click = function () {
    this.total++;
    return this.total;
  }
}

//Make all cats add them to array
function makeCats() {
  for (var i = 0; i < toliko; i++) {
    var cat = new Cat(CATS_INFO[i]);
    CATS.push(cat);
  }
}

function listCats() {
  var sbar = document.querySelector('#sidebar');
  var ul = document.createElement('ul');
  ul.addEventListener('click', handleList);
  var li = '';

  if (CATS.length) {
    for (var i = 0; i < CATS.length; i++) {
      var catname = CATS[i].name;
      li += "<li id=" + i + "><a href='#'>" + catname + "</a></li>";
    }

    ul.innerHTML = li;
    sbar.appendChild(ul);

  } else {
    alert("there is no cats dude")
  }

}

//event handlers
function handleList(e) {
  if (e.target.parentElement.id) {
    var id = e.target.parentElement.id;
    var cat = CATS[id];
    main.innerHTML = generateHtml(cat, id);
  };
}

function generateHtml(obj, id) {
  var strVar = "";
  strVar += "<div class='container'>";
  strVar += "      <div class='name'>" + obj.name + "<\/div>";
  strVar += "      <img id=" + id + ' ' + "src='..\/img\/" + obj.img + ".jpg' name='cat1'>";
  strVar += "      <div class='info'>" + obj.total + "<\/div>";
  strVar += "    <\/div>";
  strVar += "  <\/div>";
  return strVar;
}

function updateDOM(cat) {
  var info = document.querySelector('.info');
  info.innerHTML = cat.total;
}
