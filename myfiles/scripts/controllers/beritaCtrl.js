(function() {
    'use strict';
    angular
      .module('app')
      .controller('beritaCtrl', beritaCtrlFn)
    //   .controller('ecommCtrl', ecommCtrlFn)
    //   .controller('loginCtrl', loginCtrlFn)
    
    beritaCtrlFn = ['$scope'];
    function beritaCtrlFn($scope) {
        const vm = this;
        vm.text = "halaman berita"
        vm.headerUrl = "/views/blocks/header.html";
        // vm.footerUrl = "/views/blocks/footer.html";
    }
    // ecommCtrlFn.$inject = ['$scope', 'ebookFc'];
    // function ecommCtrlFn($scope, ebookFc) {
    //     const vm = this;
    //     vm.list = [];
    //     ebookFc.getEbook()
    //     .then(function (data) {
    //     vm.list = data;
    //     console.log(data);
    //     }, function (err) {
    //         console.log(err);
    //     })
    // }
    // loginCtrlFn.$inject = ['$scope'];
    // function loginCtrlFn($scope) {
    // const vm = this;
    // }
    }
)();