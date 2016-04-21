$(function () {
  var model = {
    cat_images: 'cat_picture',
    cats: [{
        name: 'Snjeza',
        click: 0,
        id: 1
    },
      {
        name: 'Ivana',
        click: 0,
        id: 2
      },
      {
        name: 'Jovana',
        click: 0,
        id: 3
      },
      {
        name: 'Silva',
        click: 0,
        id: 4
      }, {
        name: 'Sofija',
        click: 0,
        id: 5
      }
          ]
  };
  var octopus = {

    init: function () {
      view.init();
    },
    plusone: function (catid) {
      ++model.cats[catid - 1].click;
      view.renderCat(catid);
    },
    getClicks: function (catid) {
      return model.cats[catid - 1].click;
    },
    totalCats: function () {
      return model.cats.length;
    }
  };

  var view = {
    init: function () {
      this.cat_template = $('#tem').html();
      this.cat_list = $('#catlist');
      this.main = $('#main');
      this.cat_temp_buttons = "<button id='button1' data-id='{id}'>{{catName}}</button> ";

      for (var i = 0; i < octopus.totalCats(); i++) {
        this.cat_list.append(this.cat_temp_buttons.replace(/({{catName}})|({id})/g,
          function (str, m1, m2) {
            if (m1) return model.cats[i].name;
            if (m2) return model.cats[i].id;
          }));
      };
      //adding listners for buttons to render cats in main
      this.cat_list.on('click', 'button', function (e) {
        view.renderCat(e.target.dataset.id);
      });

      //adding listners to increse number of cliks on the cat
      this.main.on('click', '#cat1', function (e) {
        var catId = e.currentTarget.dataset.id;
        octopus.plusone(catId);
      });
      //show first cat as default
      view.renderCat(1);
    },
    renderCat: function (id) {
      this.main.html('');
      this.main.append(view.cat_template.replace(/({{image}})|({{cliks}})|({id})/g,
        function (str, m1, m2, m3) {
          if (m1) return 'img/cat_picture' + id + '.jpeg';
          if (m2) return octopus.getClicks(id);
          if (m3) return id;
        }));
    }
  };
  octopus.init();
}());
