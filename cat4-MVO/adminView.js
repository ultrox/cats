(function () {

  window.CatApp.adminView = {
    init: function () {
      this.adminControl = $('#adminControls');
      this.adminControl.hide();

      window.CatApp.view.main.on('click', '#admin', function (e) {
        var id = e.target.parentElement.dataset.id;
        window.CatApp.octopus.openAdminView(id);

      });
      //event handler for cancel button
      this.adminControl.on('click', '#cancel', function (e) {
        window.CatApp.octopus.closeAdminView();
      });
      this.adminControl.on('click', '#save', function (e) {
        e.preventDefault();
        var info = $('#cat1').data('id');
        window.CatApp.octopus.updateAdminCat(info);
      });
    },
    
    render: function () {

    }
  };

}());