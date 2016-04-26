$(function () {
<<<<<<< HEAD
  window.CatApp.octopus.init();
=======
  model = {
    curentCat: null,
    renderAdmin: false,
    cat_images: 'cat_picture',
    cats: [{
        name: 'Snjeza',
        click: 0,
        id: 1,
        img: 'cat_picture1'
    },
      {
        name: 'Ivana',
        click: 0,
        id: 2,
        img: 'cat_picture2'
      },
      {
        name: 'Jovana',
        click: 0,
        id: 3,
        img: 'cat_picture3'
      },
      {
        name: 'Silva',
        click: 0,
        id: 4,
        img: 'cat_picture4'
      }, {
        name: 'Sofija',
        click: 0,
        id: 5,
        img: 'cat_picture5'
      }
          ]
  };
  var octopus = {

    init: function () {
      //set the first cat as default
      model.curentCat = model.cats[0];
      view.init();
      adminView.init();
    },
    plusone: function () {
      ++octopus.getCurentCat().click;
      view.renderCat();
    },
    updateCurentCat: function (newcat) {
      model.curentCat = newcat;
    },
    getCurentCat: function () {
      return model.curentCat;
    },
    getAllCats: function () {
      return model.cats;
    },
    openAdminView: function () {
      //object of cat from model actually
      var cat = octopus.getCurentCat();

      this.control = adminView.adminControl;
      this.elements = this.control[0].elements;

      this.elements.catName.value = cat.name;
      this.elements.catImage.value = cat.img;
      this.elements.catClicks.value = cat.click;

      this.control.show();

      model.renderAdmin = true;
    },
    closeAdminView: function () {
      //ne treba referenca na cat jer admin mora biti otvoren
      this.control[0].reset();
      this.control.hide();
      model.renderAdmin = false;
    },
    updateAdminCat: function () {
      var elements = adminView.adminControl[0].elements;
      var cat = octopus.getCurentCat();

      cat.click = elements.catClicks.value;
      cat.name = elements.catName.value;
      cat.img = elements.catImage.value;

      view.renderCat();
    },
    showAdmin: function () {
      if (model.renderAdmin) {
        octopus.openAdminView();
        console.log('im ready');
      }
    }
  };
  var adminView = {
    init: function () {
      this.adminControl = $('#adminControls');
      this.adminControl.hide();

      view.main.on('click', '#admin', function (e) {
        var id = e.target.parentElement.dataset.id;
        octopus.openAdminView(id);

      });
      //event handler for cancel button
      this.adminControl.on('click', '#cancel', function (e) {
        octopus.closeAdminView();
      });
      this.adminControl.on('click', '#save', function (e) {
        e.preventDefault();
        var info = $('#cat1').data('id');
        octopus.updateAdminCat(info);
      });
    },
    render: function () {

    }
  }
  var view = {
    init: function () {
      this.cats = octopus.getAllCats();
      this.cat_template = $('#tem').html();
      this.admin_btn = $('#admin');
      this.cat_list = $('#catlist');
      this.main = $('#main');
      this.cat_temp_buttons = "<button id='button1' data-id='{id}'>{{catName}}</button> ";

      for (var i = 0; i < octopus.getAllCats().length; i++) {
        this.cat_list.append(this.cat_temp_buttons.replace(/({{catName}})|({id})/g,
          function (str, m1, m2) {
            if (m1) return view.cats[i].name;
            if (m2) return view.cats[i].id;
          }));
      };
      //adding listners for buttons to render cats in main
      this.cat_list.on('click', 'button', function (e) {
        e.stopPropagation();
        var id = e.target.dataset.id;
        var cat = octopus.getAllCats()[id - 1];
        octopus.updateCurentCat(cat);
        view.renderCat();
      });

      //adding listners to increse number of cliks on the cat
      this.main.on('click', '#clicker', function (e) {
        var catId = e.currentTarget.parentElement.dataset.id;
        octopus.plusone(catId);
        e.stopPropagation();
      });
      this.renderCat();
    },
    renderCat: function () {
        var dbox = 'https://dl.dropboxusercontent.com/u/34136099/'
        this.main.html('');
        //this piece of code renders new cats every time event triggers
        var curentCat = octopus.getCurentCat();
        this.main.append(view.cat_template.replace(/({{image}})|({{cliks}})|({id})|({catname})/g,
          function (str, m1, m2, m3, m4) {
            if (m1) return dbox + curentCat.img + '.jpeg?raw=1';
            if (m2) return curentCat.click;
            if (m3) return curentCat.id;
            if (m4) return curentCat.name;
          }));
        octopus.showAdmin();
      } //render end
  };
  octopus.init();
>>>>>>> master
}());
