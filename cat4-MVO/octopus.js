(function () {

  window.CatApp.octopus = {
    init: function () {
      //set the first cat as default
      window.CatApp.model.curentCat = window.CatApp.model.cats[0];
      window.CatApp.view.init();
      window.CatApp.adminView.init();
    },

    plusone: function () {
      ++window.CatApp.octopus.getCurentCat().click;
      window.CatApp.view.renderCat();
    },

    updateCurentCat: function (newcat) {
      window.CatApp.model.curentCat = newcat;
    },

    getCurentCat: function () {
      return window.CatApp.model.curentCat;
    },

    getAllCats: function () {
      return window.CatApp.model.cats;
    },

    openAdminView: function (catId) {
      //object of cat from model actually
      var cat = window.CatApp.octopus.getCurentCat();

      this.control = window.CatApp.adminView.adminControl;
      this.elements = this.control[0].elements;

      this.elements.catName.value = cat.name;
      this.elements.catImage.value = 'cat_picture' + catId;
      this.elements.catClicks.value = cat.click;

      this.display = this.control[0].style.display;
      if (this.display === 'none') {
        this.control.show();
      } else {
        this.control.hide();
      }
    },

    closeAdminView: function () {
      //ne treba referenca na cat jer admin mora biti otvoren
      this.control[0].reset();
      this.control.hide();
    },

    updateAdminCat: function () {
      var elements = window.CatApp.adminView.adminControl[0].elements;
      var cat = window.CatApp.octopus.getCurentCat();

      cat.click = elements.catClicks.value;
      cat.name = elements.catName.value;
      cat.img = elements.catImage.value;

      window.CatApp.view.renderCat();
    }
  };

}());
