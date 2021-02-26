(function() {
    'use strict';
    angular
      .module('app')
      .controller('produkCtrl', produkCtrlFn)
      .controller('ebookCtrl', ebookCtrlFn)
      .controller('detailCtrl', detailCtrlFn)
      // .controller('laptopCtrl', laptopCtrlFn)
      // .controller('asusCtrl', asusCtrlFn)     
    
    produkCtrlFn.$inject = ['$scope'];
    function produkCtrlFn($scope) {
        const vm = this;
        vm.text = "produk"
        vm.headerUrl = "/views/blocks/header.html";
        vm.footerUrl = "/views/blocks/footer.html";
    }
    
    ebookCtrlFn.$inject  = ['$scope', 'ebookFc'];
      function ebookCtrlFn($scope, ebookFc) {
      const vm = this;
      vm.list = [];
      ebookFc.getEbook()
      .then(function (data) {
        vm.list = data;
        console.log(data);
      }, function (err) {
        console.log(err);
      })
    }
    // ebookCtrlFn.$inject  = ['$scope', 'ebookFc'];
    //   function ebookCtrlFn($scope, ebookFc) {
    //     const vm = this;
    //     vm.listEbook = ebookFc.getListEbook();
    //     console.log(vm.listEbook)
    //   }

    detailCtrlFn.$inject = ['$scope'];
    function detailCtrlFn($scope) {
        const vm = this;
        vm.text = "ini dari home"
    }

    // laptopCtrlFn.$inject = ['$scope', 'laptopFc'];
    // function laptopCtrlFn($scope, laptopFc) {
    //     const vm = this;
    //     vm.list = [];
    //     laptopFc.getLaptop()
    //     .then(function (data) {
    //         vm.list = data;
    //         console.log(data);
    //     }, function (err) {
    //         console.log(err);
    //     })
        
    // }

    // asusCtrlFn.$inject = ['$scope', 'asusFc'];
    // function asusCtrlFn($scope, asusFc) {
    //     const vm = this;
    //     vm.list = [];
    //     asusFc.getAsus()
    //     .then(function (data) {
    //         vm.list = data;
    //         console.log(data);
    //     }, function (err) {
    //         console.log(err);
    //     })
        
    // }
}
)();