(function () {
  'use strict'
  angular
    .module("app.upload")
    .controller('UploadController', UploadController)

  UploadController.$inject = ['$http', '$state', 'foodTrackerService']


  function UploadController($http, $state, uploadService) {
    const vm = this;
    vm.selectedImage = selectedImage;

    vm.$onInit = $onInit;
    vm.uploadImage = uploadImage;

    function $onInit () {

    }

    function uploadImage(group) {

      let img = $('input[type=file]').prop('files')[0]
      let formData = new FormData();
      formData.append("image", img);

      return $http
        .post('/')


      $.ajax({
        url: '/image',
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: data => {
          displayImages()
        },
        fail: error => {
          console.log(error)
        }
      });
    }
  }
})();

  vm.selectedImage
  // let img = $('input[type=file]').prop('files')[0]
  let formData = new FormData();
  formData.append("image", img);
  $.ajax({
    url: '/image',
    data: formData,
    processData: false,
    contentType: false,
    type: 'POST',
    success: data => {
      displayImages()
    },
    fail: error => {
      console.log(error)
    }
  });
