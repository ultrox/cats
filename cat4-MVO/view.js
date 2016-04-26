(function () {

  window.CatApp.view = { 
    init: function () {
      this.cats = window.CatApp.octopus.getAllCats();
      this.cat_template = $('#tem').html();
      this.admin_btn = $('#admin');
      this.cat_list = $('#catlist');
      this.main = $('#main');
      this.cat_temp_buttons = "<button id='button1' data-id='{id}'>{{catName}}</button> ";

      for (var i = 0; i < window.CatApp.octopus.getAllCats().length; i++) {
        this.cat_list.append(this.cat_temp_buttons.replace(/({{catName}})|({id})/g,
          function (str, m1, m2) {
            if (m1) return window.CatApp.view.cats[i].name;
            if (m2) return window.CatApp.view.cats[i].id;
          }));
      };
      //adding listners for buttons to render cats in main
      this.cat_list.on('click', 'button', function (e) {
        e.stopPropagation();
        var id = e.target.dataset.id;
        var cat = window.CatApp.octopus.getAllCats()[id - 1];
        window.CatApp.octopus.updateCurentCat(cat);
        window.CatApp.view.renderCat();
      });

      //adding listners to increse number of cliks on the cat
      this.main.on('click', '#clicker', function (e) {
        var catId = e.currentTarget.parentElement.dataset.id;
        window.CatApp.octopus.plusone(catId);
        e.stopPropagation();
      });
      this.renderCat();
    },
    renderCat: function () {

      this.main.html('');
      //this piece of code renders new cats every time event triggers
      var curentCat = window.CatApp.octopus.getCurentCat();
      this.main.append(window.CatApp.view.cat_template.replace(/({{image}})|({{cliks}})|({id})|({catname})/g,
        function (str, m1, m2, m3, m4) {
          if (m1) return 'img/' + curentCat.img + '.jpeg';
          if (m2) return curentCat.click;
          if (m3) return curentCat.id;
          if (m4) return curentCat.name;
        }));
    }
  };

}());
