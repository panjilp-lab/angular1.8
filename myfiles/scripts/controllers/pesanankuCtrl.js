(function() {
    'use strict';
    angular
      .module('app')
      .controller('pesanankuCtrl', pesanankuCtrlFn)
    
    pesanankuCtrlFn.$inject = ['$scope'];
    function pesanankuCtrlFn($scope) {
        const vm = this;
        vm.text = "ini pesanan saya"
        vm.headerUrl = "/views/blocks/header.html";
        vm.footerUrl = "/views/blocks/footer.html";
    }
    }
)();