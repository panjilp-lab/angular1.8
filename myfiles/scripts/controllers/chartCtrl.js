(function() {
    'use strict';
    angular
      .module('app')
      .controller('keranjangCtrl', keranjangCtrlFn)
      .controller('belanjaCtrl', belanjaCtrlFn)
    
    keranjangCtrlFn.$inject = ['$scope'];
    function keranjangCtrlFn($scope) {
        const vm = this;
        vm.text = "ini keranjang"
        vm.headerUrl = "/views/blocks/header.html";
        vm.footerUrl = "/views/blocks/footer.html";
    }
    belanjaCtrlFn.$inject = ['$scope'];
    function belanjaCtrlFn($scope) {
        const vm = this;
        vm.text = "ini dari belanja"
    }
    
    }
)();